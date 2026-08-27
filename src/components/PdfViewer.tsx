import React, { useState, useCallback } from 'react';
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
  FileText,
  Lock
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
  const [scale, setScale] = useState<number>(1.2);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setIsLoading(false);
    setLoadError(null);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF load error:', error);
    setLoadError(error.message || 'Failed to load PDF');
    setIsLoading(false);
  }, []);

  const goToPrevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNextPage = () => setCurrentPage((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.2));

  return (
    <div
      className={`flex flex-col bg-slate-100 rounded-2xl border border-slate-300 overflow-hidden shadow-lg ${
        fullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
      // Disable right-click to discourage downloading
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Toolbar */}
      <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span className="font-bold text-slate-200 truncate max-w-[200px] sm:max-w-md">
            {title}
          </span>
          <span className="text-slate-500 hidden sm:inline">• View Only</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg">
            <button
              onClick={zoomOut}
              className="p-1.5 hover:bg-slate-700 rounded transition"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono font-bold px-1.5 min-w-[40px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1.5 hover:bg-slate-700 rounded transition"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Page Navigation */}
          {numPages > 0 && (
            <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg">
              <button
                onClick={goToPrevPage}
                disabled={currentPage <= 1}
                className="p-1.5 hover:bg-slate-700 rounded disabled:opacity-30 transition"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono font-bold px-1.5 min-w-[70px] text-center">
                {currentPage} / {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage >= numPages}
                className="p-1.5 hover:bg-slate-700 rounded disabled:opacity-30 transition"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-2 hover:bg-slate-700 rounded-lg transition"
              title={fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {fullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* PDF Render Area */}
      <div
        className={`flex-1 overflow-auto flex justify-center bg-slate-200 ${
          fullscreen ? '' : 'max-h-[700px]'
        }`}
        style={{
          // Disable text selection to prevent copy
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {/* Loading state */}
        {isLoading && !loadError && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
            <span className="text-sm font-semibold">Loading PDF document...</span>
          </div>
        )}

        {/* Error state */}
        {loadError && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-slate-500 max-w-md mx-auto text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">
                PDF Could Not Be Loaded
              </h3>
              <p className="text-xs text-slate-500">
                This may happen if the PDF file has not been uploaded yet. The
                instructor can upload a real PDF from the Admin Portal.
              </p>
              <p className="text-[11px] text-red-500 font-mono bg-red-50 p-2 rounded-lg border border-red-200">
                {loadError}
              </p>
            </div>
          </div>
        )}

        {/* PDF Document */}
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          error={null}
          className={isLoading || loadError ? 'hidden' : ''}
        >
          <div className="py-4 px-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mx-auto" style={{ width: 'fit-content' }}>
              <Page
                pageNumber={currentPage}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex items-center justify-center py-20 px-40">
                    <Loader2 className="w-6 h-6 animate-spin text-brand-600" />
                  </div>
                }
              />
            </div>
          </div>
        </Document>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 text-slate-400 px-4 py-2 flex items-center justify-between text-[11px] flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-amber-500" />
          <span>Protected View — SurveyRank Kerala PSC Academy</span>
        </div>
        <span className="font-mono">
          {numPages > 0 ? `Page ${currentPage} of ${numPages}` : 'Loading...'}
        </span>
      </div>
    </div>
  );
};
