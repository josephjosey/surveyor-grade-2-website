import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Bookmark,
  CheckCircle,
  HelpCircle,
  Clock,
  Eye,
  Check,
  Search,
  Layers,
  Award,
  Zap,
  Upload,
  BookOpen,
  Shield,
  Lock,
  Sparkles,
} from 'lucide-react';
import { AskDoubtModal } from '../modals/AskDoubtModal';
import { PdfViewer } from '../PdfViewer';
import { uploadUserFile } from '../../services/storageService';

export const ClassesPage: React.FC = () => {
  const {
    modules,
    studyNotes,
    selectedNoteId,
    setSelectedNoteId,
    currentUser,
    toggleCompleteNote,
    toggleBookmarkNote,
    doubts,
    showToast,
    setIsEnrollmentModalOpen
  } = useApp();

  const isMasterEnrolled =
    currentUser.role === 'instructor' ||
    currentUser.subscriptionPlan === 'master' ||
    currentUser.subscriptionPlan === 'crash';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<'free' | 'all'>('free');
  const [activeTab, setActiveTab] = useState<'document' | 'formulas' | 'doubts'>('document');
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filtered notes - in free view, only free preview documents & notes are shown
  const filteredNotes = studyNotes.filter((n) => {
    const matchesFree = isMasterEnrolled || filterMode === 'all' || n.isFreePreview;
    const matchesModule = selectedModuleFilter === 'all' || n.moduleId === selectedModuleFilter;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.titleMalayalam && n.titleMalayalam.toLowerCase().includes(searchQuery.toLowerCase())) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFree && matchesModule && matchesSearch;
  });

  // Active note
  const activeNote =
    filteredNotes.find((n) => n.id === selectedNoteId) ||
    studyNotes.find((n) => n.id === selectedNoteId) ||
    filteredNotes[0] ||
    studyNotes[0];
  const isCompleted = activeNote ? currentUser.completedClassIds.includes(activeNote.id) : false;
  const isBookmarked = activeNote ? currentUser.bookmarkedClassIds.includes(activeNote.id) : false;

  const relatedDoubts = doubts.filter((d) => d.relatedClassId === activeNote?.id);
  const handleInPagePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeNote) {
      showToast(`Uploading PDF to Supabase Storage: ${file.name}...`, 'info');
      uploadUserFile(file, 'study-notes', activeNote.id)
        .then((result) => {
          if (result) {
            activeNote.pdfNotesUrl = result.signedUrl;
            activeNote.pdfNotesTitle = file.name;
            activeNote.pdfSize = result.sizeFormatted;
            showToast(`PDF saved to Supabase Storage: ${file.name}`, 'success');
          } else {
            throw new Error('Upload returned null');
          }
        })
        .catch((err) => {
          console.warn('Fallback to local DataURL:', err);
          const reader = new FileReader();
          reader.onload = (event) => {
            const base64Url = event.target?.result as string;
            if (base64Url && activeNote) {
              activeNote.pdfNotesUrl = base64Url;
              activeNote.pdfNotesTitle = file.name;
              activeNote.pdfSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB PDF`;
              showToast(`Attached & Loaded PDF: ${file.name}`, 'success');
            }
          };
          reader.readAsDataURL(file);
        });
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn ${
      isFullscreen ? 'fixed inset-0 z-50 bg-slate-900 overflow-y-auto p-4 sm:p-8 max-w-none' : ''
    }`}>
      {/* Hidden file input for fast PDF loading */}
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf,.pdf"
        onChange={handleInPagePdfUpload}
        className="hidden"
      />

      {/* Free Tier Student Alert Banner & Upgrade Action */}
      {!isFullscreen && !isMasterEnrolled && (
        <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-brand-500/10 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-fadeIn">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 text-amber-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm">
                  Free Student Plan Active
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Showing Free Documents & PDFs
                </span>
              </div>
              <p className="text-slate-600 text-xs mt-0.5">
                You have free access to introductory chapters and PDF formula sheets. Purchase a course plan to unlock all 10 complete syllabus modules & full solved PYQ bank.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={() => setIsEnrollmentModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold text-xs rounded-xl shadow transition"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Purchase Course Plan</span>
            </button>
          </div>
        </div>
      )}

      {/* Header with Title & Filter */}
      {!isFullscreen && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-brand-50 text-brand-700">
                <BookOpen className="w-5 h-5" />
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Kerala PSC Survey Notes & Formula Vault
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Protected in-browser study documents, chapter summaries, and handwritten formulas curated by expert faculty.
            </p>
          </div>

          {/* Search, Filter Mode & Module filter bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {!isMasterEnrolled && (
              <div className="inline-flex rounded-xl bg-slate-100 p-1 text-xs font-bold border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFilterMode('free')}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    filterMode === 'free'
                      ? 'bg-white text-emerald-700 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎁 Free Documents ({studyNotes.filter((n) => n.isFreePreview).length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                    filterMode === 'all'
                      ? 'bg-white text-brand-700 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>All ({studyNotes.length})</span>
                  <Lock className="w-3 h-3 text-amber-500" />
                </button>
              </div>
            )}

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes or formulas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-brand-500 w-44 sm:w-56 bg-slate-50"
              />
            </div>

            <select
              value={selectedModuleFilter}
              onChange={(e) => setSelectedModuleFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm bg-slate-50 outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Modules ({modules.length})</option>
              {modules.map((m) => (
                <option key={m.id} value={m.id}>
                  Mod {m.order}: {m.title.slice(0, 24)}...
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Main Grid: Left Study Notes Content (68%) + Right Module Navigator (32%) */}
      <div className={`grid grid-cols-1 ${isFullscreen ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-6 items-start`}>
        
        {/* Left Study Notes Area */}
        <div className={`${isFullscreen ? 'w-full' : 'lg:col-span-8'} space-y-5`}>
          {activeNote ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-5 p-5 sm:p-6">
              
              {/* Note Header & Action Buttons */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-100 text-brand-800 px-2.5 py-0.5 rounded-full">
                      {modules.find((m) => m.id === activeNote.moduleId)?.title || 'Survey Module'}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> {activeNote.readTime}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    Protected View Mode
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                      {activeNote.title}
                    </h2>
                    {activeNote.titleMalayalam && (
                      <p className="text-sm font-semibold text-brand-700 ml-text pt-0.5">
                        {activeNote.titleMalayalam}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCompleteNote(activeNote.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <span>{isCompleted ? 'Completed ✓' : 'Mark as Read'}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmarkNote(activeNote.id)}
                      className={`p-2 rounded-xl border text-xs transition ${
                        isBookmarked
                          ? 'bg-amber-50 text-amber-600 border-amber-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-300'
                      }`}
                      title={isBookmarked ? 'Saved to bookmarks' : 'Bookmark this note'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>

                    <button
                      onClick={() => setIsDoubtModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 rounded-xl text-xs font-semibold transition"
                    >
                      <HelpCircle className="w-4 h-4 text-purple-600" />
                      <span>Ask Doubt</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-tabs: Document Reader / Formulas / Doubts */}
              <div className="flex items-center gap-5 border-b border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('document')}
                  className={`pb-2.5 transition relative flex items-center gap-1.5 ${
                    activeTab === 'document'
                      ? 'text-brand-700 border-b-2 border-brand-600 font-extrabold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4 text-brand-600" />
                  <span>Interactive Study Document Book</span>
                </button>
                <button
                  onClick={() => setActiveTab('formulas')}
                  className={`pb-2.5 transition relative flex items-center gap-1.5 ${
                    activeTab === 'formulas'
                      ? 'text-brand-700 border-b-2 border-brand-600 font-extrabold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Formula Vault ({activeNote.takeaways.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('doubts')}
                  className={`pb-2.5 transition relative flex items-center gap-1.5 ${
                    activeTab === 'doubts'
                      ? 'text-brand-700 border-b-2 border-brand-600 font-extrabold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Discussion & Doubts ({relatedDoubts.length})</span>
                </button>
              </div>

              {/* TAB 1: PDF DOCUMENT VIEWER OR LOCKED MASTER PREVIEW */}
              {activeTab === 'document' && (
                <div className="animate-fadeIn">
                  {activeNote.isFreePreview || isMasterEnrolled ? (
                    <PdfViewer
                      fileUrl={activeNote.pdfNotesUrl}
                      title={activeNote.pdfNotesTitle || `${activeNote.title.replace(/\s+/g, '_')}.pdf`}
                      fullscreen={isFullscreen}
                      onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-brand-500/30 shadow-2xl my-2">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner">
                        <Lock className="w-8 h-8 text-amber-400" />
                      </div>

                      <div className="space-y-2 max-w-lg mx-auto">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          <Sparkles className="w-3.5 h-3.5" />
                          Complete Master Course Plan Required
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {activeNote.title}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          This complete study document and handwritten PDF formula book is reserved for enrolled members. Free accounts can view free preview chapters and free formula sheets.
                        </p>
                      </div>

                      {/* Summary points preview */}
                      <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-xl p-4 text-left space-y-2 text-xs">
                        <div className="font-bold text-amber-300 text-[11px] uppercase tracking-wider">
                          Topics covered in this chapter:
                        </div>
                        <ul className="space-y-1.5 text-slate-300">
                          {activeNote.chapterOverview.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={() => setIsEnrollmentModalOpen(true)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          <Zap className="w-4 h-4 text-slate-950" />
                          <span>Purchase Course Plan (Unlock All 8 Modules)</span>
                        </button>
                        <button
                          onClick={() => {
                            const freeNote = studyNotes.find((n) => n.isFreePreview);
                            if (freeNote) setSelectedNoteId(freeNote.id);
                          }}
                          className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition"
                        >
                          View Free Document (Chain Surveying)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: FORMULA VAULT */}
              {activeTab === 'formulas' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-xs font-semibold text-slate-600">
                    High-Yield Formulas & Exam Rules from Joseph Josey's Master Notebook:
                  </div>
                  <div className="space-y-2.5">
                    {activeNote.takeaways.map((point, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-r from-amber-50/70 to-orange-50/40 rounded-xl border border-amber-200/80 flex items-start gap-3 text-xs text-slate-900 font-medium"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed font-semibold">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: DOUBTS */}
              {activeTab === 'doubts' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">
                      Doubts discussed for this module ({relatedDoubts.length})
                    </span>
                    <button
                      onClick={() => setIsDoubtModalOpen(true)}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700"
                    >
                      + Ask Doubt
                    </button>
                  </div>

                  {relatedDoubts.length > 0 ? (
                    <div className="space-y-3">
                      {relatedDoubts.map((d) => (
                        <div key={d.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-xs">
                          <div className="font-bold text-slate-900 text-sm">{d.title}</div>
                          <div className="text-slate-600">{d.content}</div>
                          {d.answers.length > 0 && (
                            <div className="bg-brand-50 p-3 rounded-lg border border-brand-200 space-y-1">
                              <div className="flex items-center gap-1.5 text-brand-900 font-bold text-[11px]">
                                <Award className="w-3.5 h-3.5 text-amber-500" />
                                <span>{d.answers[0].authorName}</span>
                              </div>
                              <p className="text-slate-800 text-xs">{d.answers[0].content}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                      No doubts posted for this topic yet. Click "Ask Doubt" to ask Joseph Josey!
                    </div>
                  )}
                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500">
              Select a module from the list to view study notes.
            </div>
          )}
        </div>

        {/* Right Module Notes Directory */}
        {!isFullscreen && (
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-brand-600" />
                <span>Syllabus Modules ({filteredNotes.length})</span>
              </h3>
              <span className="text-[11px] text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded">
                {studyNotes.filter((n) => currentUser.completedClassIds?.includes(n.id)).length} / {studyNotes.length} Read
              </span>
            </div>

            {/* List */}
            <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredNotes.map((note, idx) => {
                const isSelected = note.id === activeNote?.id;
                const isNoteCompleted = currentUser.completedClassIds.includes(note.id);
                return (
                  <div
                    key={note.id}
                    onClick={() => {
                      setSelectedNoteId(note.id);
                      setActiveTab('document');
                    }}
                    className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 text-xs ${
                      isSelected
                        ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-500/50 shadow-sm'
                        : 'bg-slate-50/70 hover:bg-slate-100/90 border-slate-200'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isNoteCompleted ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center font-bold text-[10px] ${
                          isSelected ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-500 border-slate-300'
                        }`}>
                          {idx + 1}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-slate-900 truncate">
                          {note.title}
                        </span>
                        {note.isFreePreview ? (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded shrink-0">
                            Free PDF
                          </span>
                        ) : !isMasterEnrolled ? (
                          <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.2 rounded shrink-0 flex items-center gap-0.5">
                            <Lock className="w-2.5 h-2.5" /> Plan
                          </span>
                        ) : null}
                      </div>
                      {note.titleMalayalam && (
                        <div className="text-[11px] text-slate-500 truncate ml-text">
                          {note.titleMalayalam}
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3" /> {note.readTime}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedNoteId(note.id);
                            setActiveTab('document');
                            showToast(`Opened: ${note.title}`, 'info');
                          }}
                          className={`px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 transition shadow-xs ${
                            isSelected
                              ? 'bg-brand-600 text-white hover:bg-brand-700'
                              : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
                          }`}
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isSelected ? 'Reading Now' : 'View Online'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      <AskDoubtModal
        isOpen={isDoubtModalOpen}
        onClose={() => setIsDoubtModalOpen(false)}
        defaultClassId={activeNote?.id}
      />
    </div>
  );
};
