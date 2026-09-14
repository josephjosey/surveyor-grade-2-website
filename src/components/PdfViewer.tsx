import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Loader2,
  AlertTriangle,
  Lock,
  RotateCcw,
  Sparkles
} from 'lucide-react';

// Configure the PDF.js worker — served locally from public/ for instant loading and offline capability
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfViewerProps {
  /** URL or base64 data URI of the PDF */
  fileUrl: string;
  /** Title to show in the toolbar */
  title?: string;
  /** If true, viewer takes full height */
  fullscreen?: boolean;
  /** Callback when fullscreen toggle is clicked */
  onToggleFullscreen?: () => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  fileUrl,
  title = 'Document',
  fullscreen = false,
  onToggleFullscreen,
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1.0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPageJumpOpen, setIsPageJumpOpen] = useState<boolean>(false);
  const [swipeNotice, setSwipeNotice] = useState<string | null>(null);

  // Dynamic container width measurement for responsive fit-to-width
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      if (el) {
        setContainerWidth(el.clientWidth);
      }
    };

    updateWidth();

    // ResizeObserver watches window resizes, phone orientation flips, and split screens
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        updateWidth();
      });
      observer.observe(el);
    } else {
      window.addEventListener('resize', updateWidth);
    }

    return () => {
      if (observer) observer.disconnect();
      else window.removeEventListener('resize', updateWidth);
    };
  }, [fullscreen]);

  // Document callbacks
  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setIsLoading(false);
    setLoadError(null);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF load error:', error);
    setLoadError(error.message || 'Failed to load PDF document');
    setIsLoading(false);
  }, []);

  // Page navigation
  const goToPrevPage = useCallback(() => {
    setCurrentPage((p) => {
      const prev = Math.max(1, p - 1);
      if (prev !== p) {
        setSwipeNotice(`Page ${prev} of ${numPages}`);
        setTimeout(() => setSwipeNotice(null), 1200);
      }
      return prev;
    });
  }, [numPages]);

  const goToNextPage = useCallback(() => {
    setCurrentPage((p) => {
      const next = Math.min(numPages, p + 1);
      if (next !== p) {
        setSwipeNotice(`Page ${next} of ${numPages}`);
        setTimeout(() => setSwipeNotice(null), 1200);
      }
      return next;
    });
  }, [numPages]);

  // Zoom controls
  const zoomIn = () => setZoom((z) => Math.min(2.5, Math.round((z + 0.2) * 10) / 10));
  const zoomOut = () => setZoom((z) => Math.max(0.6, Math.round((z - 0.2) * 10) / 10));
  const fitToWidth = () => setZoom(1.0);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      } else if (e.key === 'Escape' && fullscreen && onToggleFullscreen) {
        onToggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage, fullscreen, onToggleFullscreen]);

  // Touch gesture handling: horizontal swipe to turn page
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);
  const lastTapRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const elapsed = Date.now() - touchStartTime.current;

    // Fast horizontal swipe (< 500ms, > 50px delta, primarily horizontal movement)
    // Only turn page if not heavily zoomed in (so user can pan across page without accidental turns)
    if (elapsed < 500 && Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (zoom <= 1.15) {
        if (deltaX < 0) {
          goToNextPage();
        } else {
          goToPrevPage();
        }
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Double-tap to toggle between Fit-Width (1.0) and Zoomed (1.4)
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      setZoom((z) => (z > 1.05 ? 1.0 : 1.4));
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = now;
    }
  };

  // Calculate pixel width passed to <Page />
  // On mobile (< 640px), page takes container width minus 8px for edge breathing room
  // On desktop (>= 640px), page caps at 850px for ideal reading line length
  const isMobile = containerWidth > 0 ? containerWidth < 640 : (typeof window !== 'undefined' && window.innerWidth < 640);
  const padding = isMobile ? 8 : 28;
  const baseWidth = containerWidth > 0 
    ? Math.max(260, containerWidth - padding) 
    : (typeof window !== 'undefined' ? Math.min(window.innerWidth - 24, 760) : 600);
  const renderedWidth = Math.round(baseWidth * zoom);

  return (
    <div
      className={`flex flex-col bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl relative select-none ${
        fullscreen 
          ? 'fixed inset-0 z-50 rounded-none w-screen h-screen h-[100dvh]' 
          : 'rounded-2xl'
      }`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Top Header Toolbar */}
      <div className="bg-slate-900/95 border-b border-slate-800 text-white px-3 sm:px-4 py-2 flex items-center justify-between text-xs flex-shrink-0 z-10">
        <div className="flex items-center gap-2 min-w-0 pr-2">
          <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 flex-shrink-0">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <span 
            className="font-bold text-slate-200 text-xs truncate max-w-[160px] xs:max-w-[220px] sm:max-w-md"
            title={title}
          >
            {title}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
            <Sparkles className="w-3 h-3" /> Official Study Note
          </span>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Mobile Swipe Tip Pill (hidden on desktop) */}
          <span className="text-[10px] text-slate-400 hidden xs:inline sm:hidden">
            Swipe ◀ ▶
          </span>

          {/* Fit to Screen Width button */}
          <button
            onClick={fitToWidth}
            className={`p-1.5 rounded-lg border text-xs font-mono font-bold transition flex items-center gap-1 ${
              zoom === 1.0 
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' 
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            title="Reset to Screen Width (Fit)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Fit</span>
          </button>

          {/* Fullscreen Toggle Button */}
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-semibold transition flex items-center gap-1.5 ${
                fullscreen
                  ? 'bg-amber-500/20 border-amber-400/40 text-amber-300 hover:bg-amber-500/30'
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
              }`}
              title={fullscreen ? 'Exit Fullscreen' : 'Fullscreen Reading Mode'}
            >
              {fullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold">Exit</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] font-bold">Full Screen</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* PDF Document Render Area */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleDoubleTap}
        className={`flex-1 overflow-auto bg-slate-950 relative touch-pan-x touch-pan-y ${
          fullscreen ? 'h-[calc(100dvh-76px)] sm:h-[calc(100vh-80px)]' : 'min-h-[480px] max-h-[660px] sm:max-h-[760px]'
        }`}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Swipe Feedback Overlay */}
        {swipeNotice && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold shadow-xl animate-fadeIn">
            {swipeNotice}
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && !loadError && (
          <div className="flex flex-col items-center justify-center py-28 gap-3 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              Loading study document pages...
            </span>
            <span className="text-[11px] text-slate-500">Auto-formatting for your screen</span>
          </div>
        )}

        {/* Error Fallback */}
        {loadError && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-slate-400 max-w-md mx-auto text-center px-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-200 text-sm sm:text-base">
                Unable to Display Document
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The note file is being prepared or is temporarily unavailable. You can also view the chapter takeaways and formulas in the tabs above.
              </p>
              <p className="text-[11px] text-red-400 font-mono bg-red-950/40 p-2 rounded-lg border border-red-900/40">
                {loadError}
              </p>
            </div>
          </div>
        )}

        {/* PDF Document Component */}
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          error={null}
          className={isLoading || loadError ? 'hidden' : 'w-full'}
        >
          <div
            className="py-2.5 sm:py-4 px-1 flex flex-col items-center pb-20"
            style={{
              minWidth: renderedWidth ? `${renderedWidth + 8}px` : '100%',
              width: '100%'
            }}
          >
            <div
              className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-150"
              style={{
                width: renderedWidth ? `${renderedWidth}px` : 'auto',
                maxWidth: 'none',
                // Center when smaller than container; start at x=0 when wider so left side is never cut off
                margin: renderedWidth && containerWidth > 0 && renderedWidth > containerWidth ? '0 0 0 0' : '0 auto'
              }}
            >
              <Page
                pageNumber={currentPage}
                width={renderedWidth || undefined}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex flex-col items-center justify-center py-24 gap-3 bg-slate-900 text-slate-400">
                    <Loader2 className="w-7 h-7 animate-spin text-emerald-500" />
                    <span className="text-xs font-medium">Rendering page {currentPage}...</span>
                  </div>
                }
              />
            </div>
          </div>
        </Document>

        {/* Quick Page Jump Slider Modal */}
        {isPageJumpOpen && numPages > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white rounded-2xl p-4 shadow-2xl flex flex-col items-center gap-3 w-72 animate-fadeIn">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold text-slate-200">Go to Page</span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {currentPage} / {numPages}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={numPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex items-center justify-between w-full pt-1">
              <span className="text-[11px] text-slate-400">Page 1</span>
              <button
                onClick={() => setIsPageJumpOpen(false)}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white transition shadow-sm"
              >
                Close
              </button>
              <span className="text-[11px] text-slate-400">Page {numPages}</span>
            </div>
          </div>
        )}

        {/* Floating Mobile/Desktop Action Dock */}
        {!isLoading && !loadError && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 max-w-[96%] sm:max-w-none">
            <div className="flex items-center gap-1 sm:gap-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/90 px-2 sm:px-3 py-1.5 rounded-2xl shadow-2xl text-white">
              {/* Previous Page Button */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage <= 1}
                className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-slate-800 disabled:opacity-25 disabled:hover:bg-transparent transition flex items-center gap-1 text-xs font-bold text-slate-200 active:scale-95"
                title="Previous Page (or Swipe Right)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Number Pill (Click to Jump) */}
              <button
                onClick={() => setIsPageJumpOpen(!isPageJumpOpen)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-mono text-xs font-bold text-emerald-400 transition active:scale-95 flex items-center gap-1"
                title="Tap to jump to page"
              >
                <span>{numPages > 0 ? `${currentPage} / ${numPages}` : '...'}</span>
              </button>

              {/* Next Page Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage >= numPages}
                className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-slate-800 disabled:opacity-25 disabled:hover:bg-transparent transition flex items-center gap-1 text-xs font-bold text-slate-200 active:scale-95"
                title="Next Page (or Swipe Left)"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-slate-700 mx-0.5 sm:mx-1" />

              {/* Zoom Out Button */}
              <button
                onClick={zoomOut}
                disabled={zoom <= 0.6}
                className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-25 transition text-slate-300 active:scale-95"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {/* Zoom Percentage / Reset to Fit */}
              <button
                onClick={fitToWidth}
                className={`px-2 py-1 rounded-xl text-[11px] font-bold font-mono transition active:scale-95 ${
                  zoom === 1.0 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
                title="Fit to Screen Width (100%)"
              >
                {zoom === 1.0 ? 'Fit' : `${Math.round(zoom * 100)}%`}
              </button>

              {/* Zoom In Button */}
              <button
                onClick={zoomIn}
                disabled={zoom >= 2.5}
                className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-25 transition text-slate-300 active:scale-95"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Fullscreen Button in Dock */}
              {onToggleFullscreen && (
                <>
                  <div className="h-4 w-px bg-slate-700 mx-0.5 sm:mx-1" />
                  <button
                    onClick={onToggleFullscreen}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition active:scale-95"
                    title={fullscreen ? 'Exit Fullscreen' : 'Fullscreen Reading Mode'}
                  >
                    {fullscreen ? (
                      <Minimize2 className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Maximize2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Protected View Footer */}
      <div className="bg-slate-900 border-t border-slate-800 text-slate-400 px-3 sm:px-4 py-1.5 flex items-center justify-between text-[11px] flex-shrink-0 z-10">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Lock className="w-3 h-3 text-amber-400 flex-shrink-0" />
          <span className="truncate">SurveyRank Protected Reading • Kerala PSC</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
          <span className="hidden sm:inline text-slate-500">Double-tap to Zoom</span>
          <span className="font-bold text-slate-300">
            {numPages > 0 ? `Page ${currentPage} of ${numPages}` : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
};
