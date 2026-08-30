import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileCheck,
  Download,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  BookOpen,
  Filter,
  Bookmark,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Search,
  CheckSquare,
  Clock,
  Zap,
  Target,
  FileText,
  RotateCcw,
  Compass,
  Layers,
  BarChart2
} from 'lucide-react';
import { BankQuestion, PYQPaper } from '../../types';

export const PYQPage: React.FC = () => {
  const {
    modules,
    bankQuestions,
    pyqPapers,
    currentUser,
    showToast
  } = useApp();

  // Primary Mode: 'portions' (10 Syllabus Modules Question Bank) vs 'papers' (Original Question Paper PDFs)
  const [viewMode, setViewMode] = useState<'portions' | 'papers'>('portions');

  // Portions Mode State
  const [selectedModuleNumber, setSelectedModuleNumber] = useState<number>(1);
  const [questionTypeFilter, setQuestionTypeFilter] = useState<'all' | 'pyq' | 'mcq'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [interactiveAnswers, setInteractiveAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Module Practice Test State
  const [isTestMode, setIsTestMode] = useState<boolean>(false);
  const [testAnswers, setTestAnswers] = useState<Record<string, number>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [testStartTime, setTestStartTime] = useState<number>(0);
  const [testElapsedTime, setTestElapsedTime] = useState<number>(0);

  // Original Papers Mode State
  const [selectedPaperId, setSelectedPaperId] = useState<string>(pyqPapers[0]?.id || 'pyq-1');
  const [paperPracticeMode, setPaperPracticeMode] = useState<boolean>(true);
  const [paperAnswers, setPaperAnswers] = useState<Record<string, number>>({});
  const [showPaperExplanation, setShowPaperExplanation] = useState<Record<string, boolean>>({});

  const activeModule = modules.find((m) => m.order === selectedModuleNumber) || modules[0];

  // Filtered bank questions for current module
  const currentModuleQuestions = useMemo(() => {
    return bankQuestions.filter((q) => q.moduleNumber === selectedModuleNumber);
  }, [bankQuestions, selectedModuleNumber]);

  const filteredQuestions = useMemo(() => {
    return currentModuleQuestions.filter((q) => {
      if (questionTypeFilter !== 'all' && q.type !== questionTypeFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const textMatch = q.question.toLowerCase().includes(query);
        const topicMatch = q.topic?.toLowerCase().includes(query);
        const examMatch = q.examName?.toLowerCase().includes(query);
        return textMatch || topicMatch || examMatch;
      }
      return true;
    });
  }, [currentModuleQuestions, questionTypeFilter, searchQuery]);

  const pyqCountForModule = currentModuleQuestions.filter((q) => q.type === 'pyq').length;
  const mcqCountForModule = currentModuleQuestions.filter((q) => q.type === 'mcq').length;

  // Handler for interactive practice
  const handleSelectInteractiveOption = (qId: string, optIdx: number) => {
    setInteractiveAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));
  };

  // Handler to start timed module test
  const handleStartModuleTest = () => {
    if (currentModuleQuestions.length === 0) {
      showToast('No questions uploaded for this module yet.', 'warning');
      return;
    }
    setTestAnswers({});
    setTestSubmitted(false);
    setIsTestMode(true);
    setTestStartTime(Date.now());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to submit timed module test
  const handleSubmitModuleTest = () => {
    setTestSubmitted(true);
    setTestElapsedTime(Math.round((Date.now() - testStartTime) / 1000));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Test score computation (PSC Marking: +1.00 for correct, -0.33 for wrong)
  const testScoreStats = useMemo(() => {
    if (!isTestMode) return null;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    currentModuleQuestions.forEach((q) => {
      const ans = testAnswers[q.id];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.correctOptionIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const marksAttained = Math.max(0, Number((correct * 1.0 - wrong * 0.33).toFixed(2)));
    const totalMarks = currentModuleQuestions.length * 1.0;
    const accuracy = correct + wrong > 0 ? Number(((correct / (correct + wrong)) * 100).toFixed(1)) : 0;

    return {
      correct,
      wrong,
      unattempted,
      marksAttained,
      totalMarks,
      accuracy
    };
  }, [isTestMode, currentModuleQuestions, testAnswers]);

  const activePaper = pyqPapers.find((p) => p.id === selectedPaperId) || pyqPapers[0];

  const handleDownloadPDF = (type: 'paper' | 'key') => {
    if (type === 'paper') {
      showToast(`Downloading: ${activePaper.title} Original Question Paper PDF`, 'success');
    } else {
      showToast(`Downloading: ${activePaper.title} Final Answer Key PDF`, 'success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner & Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2.5 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 shadow-xs">
              <BookOpen className="w-6 h-6" />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Official Syllabus Question Pool (Cat. No: 411/2022, 692/2022)
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Kerala PSC Syllabus MCQ & PYQ Question Bank
              </h1>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
            Browse and practice authentic Previous Year Questions (PYQs) and syllabus MCQs organized into all 10 official syllabus portions. Focus solely on learning and marks attained without ranking pressure.
          </p>
        </div>

        {/* View Mode Toggle Button */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start lg:self-auto shrink-0">
          <button
            onClick={() => {
              setViewMode('portions');
              setIsTestMode(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              viewMode === 'portions'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>10 Syllabus Portions</span>
          </button>
          <button
            onClick={() => {
              setViewMode('papers');
              setIsTestMode(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              viewMode === 'papers'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Original PYQ Papers</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MODE 1: 10 SYLLABUS PORTIONS (MCQ & PYQ BANK)                       */}
      {/* ==================================================================== */}
      {viewMode === 'portions' && (
        <div className="space-y-6">
          {/* 10 PORTIONS SELECTOR STRIP */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-brand-600" />
                Select Syllabus Portion (10 Modules • 100 Marks Total)
              </span>
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                Click any module to view MCQs & PYQs
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {modules.map((mod) => {
                const isSelected = mod.order === selectedModuleNumber;
                const count = bankQuestions.filter((q) => q.moduleNumber === mod.order).length;
                return (
                  <button
                    key={mod.id}
                    onClick={() => {
                      setSelectedModuleNumber(mod.order);
                      setIsTestMode(false);
                      setInteractiveAnswers({});
                      setShowExplanation({});
                    }}
                    className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between space-y-1.5 relative ${
                      isSelected
                        ? 'bg-blue-50/90 border-blue-600 ring-2 ring-blue-500/50 shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        Mod {mod.order < 10 ? `0${mod.order}` : mod.order}
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded">
                        {mod.marks || 10}m
                      </span>
                    </div>
                    <div className="font-bold text-xs text-slate-900 line-clamp-1">
                      {mod.title}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/50">
                      <span>{count} Questions</span>
                      {isSelected && <span className="font-bold text-blue-700">● Active</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE MODULE HEADER & CONTROLS */}
          {!isTestMode ? (
            <div className="space-y-6">
              {/* Module Header Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-full uppercase tracking-wider">
                        Module {selectedModuleNumber < 10 ? `0${selectedModuleNumber}` : selectedModuleNumber}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold rounded-full">
                        Weightage: {activeModule.marks || 10} Marks
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      {activeModule.title}
                    </h2>
                    <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                      <strong>Prescribed Syllabus Topics:</strong> {activeModule.topics || activeModule.description}
                    </p>
                  </div>

                  <button
                    onClick={handleStartModuleTest}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black rounded-xl shadow-lg transition self-start md:self-auto shrink-0"
                  >
                    <Clock className="w-4 h-4 text-slate-950" />
                    <span>Start Module Practice Test</span>
                  </button>
                </div>

                {/* Sub-Filters and Search Strip */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  {/* Type Filter Buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-400 font-medium">Filter Questions:</span>
                    <button
                      onClick={() => setQuestionTypeFilter('all')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition ${
                        questionTypeFilter === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      All ({currentModuleQuestions.length})
                    </button>
                    <button
                      onClick={() => setQuestionTypeFilter('pyq')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition ${
                        questionTypeFilter === 'pyq'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      PYQs Only ({pyqCountForModule})
                    </button>
                    <button
                      onClick={() => setQuestionTypeFilter('mcq')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition ${
                        questionTypeFilter === 'mcq'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Standard MCQs ({mcqCountForModule})
                    </button>
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search questions in module..."
                      className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* QUESTIONS LIST */}
              <div className="space-y-4">
                {filteredQuestions.length === 0 ? (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
                    <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
                    <h3 className="font-extrabold text-slate-800 text-base">No questions found in this portion</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      There are no questions matching your filter for this module. You can add questions to this module from the Instructor Portal!
                    </p>
                  </div>
                ) : (
                  filteredQuestions.map((q, idx) => {
                    const selectedOpt = interactiveAnswers[q.id];
                    const isAnswered = selectedOpt !== undefined;
                    const isCorrect = selectedOpt === q.correctOptionIndex;

                    return (
                      <div
                        key={q.id}
                        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 text-left transition hover:border-slate-300"
                      >
                        {/* Question Badge and Meta */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            {q.type === 'pyq' ? (
                              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider border border-blue-200">
                                🌟 PYQ: {q.examName || 'Kerala PSC'} ({q.year || 'Past Paper'})
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Syllabus MCQ
                              </span>
                            )}
                          </div>
                          {q.topic && (
                            <span className="text-[11px] text-slate-500 font-semibold hidden sm:inline">
                              Topic: {q.topic}
                            </span>
                          )}
                        </div>

                        {/* Question Text */}
                        <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-relaxed">
                          {q.question}
                        </p>

                        {/* Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, optIdx) => {
                            const isThisSelected = selectedOpt === optIdx;
                            const isThisCorrect = optIdx === q.correctOptionIndex;

                            let optClasses = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';

                            if (isAnswered) {
                              if (isThisCorrect) {
                                optClasses = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/40';
                              } else if (isThisSelected) {
                                optClasses = 'border-red-500 bg-red-50 text-red-950 font-bold';
                              } else {
                                optClasses = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectInteractiveOption(q.id, optIdx)}
                                className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-start gap-3 ${optClasses}`}
                              >
                                <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                  isAnswered && isThisCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isAnswered && isThisSelected
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white border border-slate-300 text-slate-700'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span className="leading-snug">{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Box (Revealed on click) */}
                        {isAnswered && (
                          <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                            <div className="flex items-center gap-2">
                              {isCorrect ? (
                                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct Answer: Option {String.fromCharCode(65 + q.correctOptionIndex)}
                                </span>
                              ) : (
                                <span className="text-red-600 font-extrabold flex items-center gap-1">
                                  <XCircle className="w-4 h-4 text-red-500" /> Incorrect. Correct Answer: Option {String.fromCharCode(65 + q.correctOptionIndex)}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium">
                              <strong>Explanation:</strong> {q.explanation}
                            </p>
                            {q.rankerTip && (
                              <div className="pt-1 text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                                <strong>Exam Tip:</strong> {q.rankerTip}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            /* ================================================================ */
            /* MODULE PRACTICE TEST (TIMED MODE - NO RANKING SYSTEM, MARKS ONLY) */
            /* ================================================================ */
            <div className="space-y-6">
              {!testSubmitted ? (
                <div className="space-y-6">
                  {/* Test Status Bar */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        Module Practice Test • {activeModule.title}
                      </span>
                      <h2 className="text-lg font-black text-slate-900">
                        {currentModuleQuestions.length} Questions • Kerala PSC Marking (+1.00 / -0.33)
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-600">
                        Answered: {Object.keys(testAnswers).length} / {currentModuleQuestions.length}
                      </span>
                      <button
                        onClick={handleSubmitModuleTest}
                        className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition"
                      >
                        Submit Test & Check Marks
                      </button>
                    </div>
                  </div>

                  {/* Questions in Test */}
                  <div className="space-y-4">
                    {currentModuleQuestions.map((q, idx) => (
                      <div key={q.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 text-left">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {q.type === 'pyq' ? `PYQ: ${q.examName || 'Kerala PSC'}` : 'Syllabus MCQ'}
                          </span>
                        </div>
                        <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed">
                          {q.question}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = testAnswers[q.id] === optIdx;
                            return (
                              <button
                                key={optIdx}
                                onClick={() => setTestAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                                className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-start gap-3 ${
                                  isChosen
                                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/50 text-blue-950 font-bold'
                                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                                }`}
                              >
                                <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                  isChosen ? 'bg-blue-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Submit */}
                  <div className="text-center pt-4">
                    <button
                      onClick={handleSubmitModuleTest}
                      className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition"
                    >
                      Complete & View Attained Marks
                    </button>
                  </div>
                </div>
              ) : (
                /* SCORECARD - ONLY MARKS ATTAINED (NO RANKING MATRIX) */
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-lg text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Practice Session Completed
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                        Marks Attained in {activeModule.title}
                      </h2>
                      <p className="text-xs text-slate-500">
                        Evaluated with official Kerala PSC marking (+1.00 for correct, -0.33 for incorrect).
                      </p>
                    </div>

                    {/* Marks Attained Score Display */}
                    <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Total Marks Attained
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-brand-700">
                        {testScoreStats?.marksAttained.toFixed(2)} <span className="text-xl text-slate-400 font-semibold">/ {testScoreStats?.totalMarks}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-600 pt-1">
                        Accuracy: {testScoreStats?.accuracy}% • Time Spent: {Math.floor(testElapsedTime / 60)}m {testElapsedTime % 60}s
                      </div>
                    </div>

                    {/* Breakdown Counters */}
                    <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto text-xs">
                      <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200">
                        <div className="text-xl font-extrabold">{testScoreStats?.correct}</div>
                        <div className="font-semibold text-emerald-700">Correct (+1.0)</div>
                      </div>
                      <div className="bg-red-50 text-red-900 p-3 rounded-xl border border-red-200">
                        <div className="text-xl font-extrabold">{testScoreStats?.wrong}</div>
                        <div className="font-semibold text-red-700">Wrong (-0.33)</div>
                      </div>
                      <div className="bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200">
                        <div className="text-xl font-extrabold">{testScoreStats?.unattempted}</div>
                        <div className="font-semibold text-slate-600">Unattempted</div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleStartModuleTest}
                        className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Practice This Module Again</span>
                      </button>
                      <button
                        onClick={() => setIsTestMode(false)}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
                      >
                        Back to Question Bank
                      </button>
                    </div>
                  </div>

                  {/* Question Review */}
                  <div className="space-y-4 text-left">
                    <h3 className="font-extrabold text-slate-900 text-lg">Question Review & Solutions:</h3>
                    {currentModuleQuestions.map((q, idx) => {
                      const userAns = testAnswers[q.id];
                      const isCorrect = userAns === q.correctOptionIndex;
                      const isUnanswered = userAns === undefined;

                      return (
                        <div key={q.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-500">Question {idx + 1}</span>
                            {isUnanswered ? (
                              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-bold">Unattempted</span>
                            ) : isCorrect ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1.0)
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-bold flex items-center gap-1">
                                <XCircle className="w-3.5 h-3.5" /> Incorrect (-0.33)
                              </span>
                            )}
                          </div>
                          <p className="font-bold text-slate-900 text-sm">{q.question}</p>
                          <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-700">
                            <div><strong>Correct Answer:</strong> Option {String.fromCharCode(65 + q.correctOptionIndex)} - {q.options[q.correctOptionIndex]}</div>
                            {userAns !== undefined && !isCorrect && (
                              <div className="text-red-600"><strong>Your Answer:</strong> Option {String.fromCharCode(65 + userAns)} - {q.options[userAns]}</div>
                            )}
                            <div className="pt-1 text-slate-600"><strong>Explanation:</strong> {q.explanation}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODE 2: ORIGINAL PYQ PAPERS & PDF DOWNLOADS                          */}
      {/* ==================================================================== */}
      {viewMode === 'papers' && (
        <div className="space-y-6">
          {/* Select Question Paper Pill Tabs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Select Kerala PSC Question Paper
            </span>
            <div className="flex flex-wrap gap-2.5">
              {pyqPapers.map((paper) => {
                const isSelected = paper.id === activePaper.id;
                return (
                  <button
                    key={paper.id}
                    onClick={() => {
                      setSelectedPaperId(paper.id);
                      setPaperAnswers({});
                      setShowPaperExplanation({});
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition flex items-center gap-2 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>{paper.title}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {paper.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Paper Summary Card */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-blue-800/80 shadow-lg space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
                    Exam Code: {activePaper.examCode}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                    Year: {activePaper.year}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {activePaper.title}
                </h2>
                <p className="text-xs text-blue-200">
                  Department: {activePaper.department} • Total Questions: {activePaper.totalQuestions}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => handleDownloadPDF('paper')}
                  className="px-4 py-2.5 bg-white text-slate-900 hover:bg-blue-50 font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-blue-700" />
                  <span>Download Question Paper PDF</span>
                </button>
                <button
                  onClick={() => handleDownloadPDF('key')}
                  className="px-4 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>Download Final Key PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Questions in Paper */}
          <div className="space-y-4">
            {activePaper.questions.map((q, idx) => {
              const selectedOpt = paperAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctOptionIndex;

              return (
                <div key={q.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Topic: {q.topic}</span>
                  </div>
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-relaxed">
                    {q.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      const isThisCorrect = optIdx === q.correctOptionIndex;

                      let optClasses = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';
                      if (isAnswered) {
                        if (isThisCorrect) {
                          optClasses = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/40';
                        } else if (isThisSelected) {
                          optClasses = 'border-red-500 bg-red-50 text-red-950 font-bold';
                        } else {
                          optClasses = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            setPaperAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                            setShowPaperExplanation((prev) => ({ ...prev, [q.id]: true }));
                          }}
                          className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-start gap-3 ${optClasses}`}
                        >
                          <span className="w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs bg-white border border-slate-300 text-slate-700 shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {isAnswered && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className={isCorrect ? 'text-emerald-700 font-bold' : 'text-red-600 font-bold'}>
                        {isCorrect ? '✓ Correct Answer!' : `✗ Incorrect. Correct is Option ${String.fromCharCode(65 + q.correctOptionIndex)}`}
                      </div>
                      <p className="text-slate-700"><strong>Explanation:</strong> {q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
