import React, { useState } from 'react';
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
  Search
} from 'lucide-react';
import { PYQPaper, PYQQuestion } from '../../types';

export const PYQPage: React.FC = () => {
  const { pyqPapers, currentUser, toggleSavePYQ, showToast } = useApp();

  const [selectedPaperId, setSelectedPaperId] = useState<string>(pyqPapers[0]?.id || 'pyq-1');
  const [practiceMode, setPracticeMode] = useState<boolean>(true);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanationFor, setShowExplanationFor] = useState<Record<string, boolean>>({});

  const activePaper = pyqPapers.find((p) => p.id === selectedPaperId) || pyqPapers[0];

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
    // Reveal explanation once answered
    setShowExplanationFor((prev) => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleResetPractice = () => {
    setUserSelectedAnswers({});
    setShowExplanationFor({});
    showToast('Practice session reset. You can solve again!', 'info');
  };

  const handleDownloadPDF = (type: 'paper' | 'key') => {
    if (type === 'paper') {
      showToast(`Downloading: ${activePaper.title} Original Question Paper PDF`, 'success');
    } else {
      showToast(`Downloading: ${activePaper.title} Final Answer Key PDF`, 'success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-700">
              <FileCheck className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Kerala PSC Previous Year Questions (PYQ Bank)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Solve official questions from past Kerala PSC Survey, Land Records & KWA examinations.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setPracticeMode(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              practiceMode
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Interactive Practice Mode
          </button>
          <button
            onClick={() => setPracticeMode(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              !practiceMode
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PDF Download Mode
          </button>
        </div>
      </div>

      {/* Select Question Paper Pill Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {pyqPapers.map((paper) => {
          const isSelected = paper.id === activePaper.id;
          return (
            <button
              key={paper.id}
              onClick={() => {
                setSelectedPaperId(paper.id);
                setUserSelectedAnswers({});
                setShowExplanationFor({});
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

      {/* Main Content Area */}
      {activePaper && (
        <div className="space-y-6">
          {/* Active Paper Details Header */}
          <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-navy-900 p-6 rounded-2xl text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500/20 text-blue-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-400/30">
                  {activePaper.examCode}
                </span>
                <span className="text-slate-300 text-xs">{activePaper.department}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {activePaper.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDownloadPDF('paper')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition"
              >
                <Download className="w-3.5 h-3.5 text-blue-300" />
                <span>Question Paper PDF</span>
              </button>
              <button
                onClick={() => handleDownloadPDF('key')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Final Answer Key</span>
              </button>
              {practiceMode && (
                <button
                  onClick={handleResetPractice}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700"
                  title="Reset practice answers"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Question Practice List */}
          {practiceMode ? (
            activePaper.questions && activePaper.questions.length > 0 ? (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                  <span>Select an option to immediately test your understanding & view ranker explanation:</span>
                  <span>Solved Questions: {Object.keys(userSelectedAnswers).length} / {activePaper.questions.length}</span>
                </div>

                {activePaper.questions.map((q, qIndex) => {
                  const selectedOpt = userSelectedAnswers[q.id];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctOptionIndex;

                  return (
                    <div
                      key={q.id}
                      className={`bg-white rounded-2xl p-6 border transition shadow-sm space-y-4 ${
                        isAnswered
                          ? isCorrect
                            ? 'border-emerald-300 bg-emerald-50/20'
                            : 'border-red-300 bg-red-50/20'
                          : 'border-slate-200'
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center">
                              Q{q.questionNumber || qIndex + 1}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                              Topic: {q.topic}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-bold text-slate-900 pt-1 leading-snug">
                            {q.question}
                          </h3>

                          {q.questionMalayalam && (
                            <p className="text-xs sm:text-sm font-semibold text-brand-800 ml-text pt-0.5">
                              {q.questionMalayalam}
                            </p>
                          )}
                        </div>

                        {/* Status indicator */}
                        {isAnswered && (
                          <div className="flex-shrink-0">
                            {isCorrect ? (
                              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Correct (+1)
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                <XCircle className="w-3.5 h-3.5 text-red-600" />
                                Incorrect (-0.33)
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* 4 Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {q.options.map((optionText, optIndex) => {
                          const isOptionSelected = selectedOpt === optIndex;
                          const isOptionCorrect = q.correctOptionIndex === optIndex;

                          let optionStyle = 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-slate-700 bg-slate-50/50';

                          if (isAnswered) {
                            if (isOptionCorrect) {
                              optionStyle = 'border-emerald-500 bg-emerald-100/60 text-emerald-950 font-bold ring-2 ring-emerald-500';
                            } else if (isOptionSelected && !isCorrect) {
                              optionStyle = 'border-red-500 bg-red-100/60 text-red-950 font-bold ring-2 ring-red-500';
                            } else {
                              optionStyle = 'border-slate-200 text-slate-400 bg-white opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIndex}
                              disabled={isAnswered}
                              onClick={() => handleSelectOption(q.id, optIndex)}
                              className={`p-3.5 rounded-xl border text-left text-xs transition flex items-center justify-between gap-3 ${optionStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                                  isAnswered && isOptionCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isAnswered && isOptionSelected && !isCorrect
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white border border-slate-300 text-slate-700'
                                }`}>
                                  {String.fromCharCode(65 + optIndex)}
                                </span>
                                <span className="font-medium">{optionText}</span>
                              </div>

                              {isAnswered && isOptionCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                              )}
                              {isAnswered && isOptionSelected && !isCorrect && (
                                <XCircle className="w-4 h-4 text-red-700 flex-shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Ranker Explanation Reveal */}
                      {isAnswered && (
                        <div className="bg-slate-900 text-white p-4 rounded-xl space-y-2 animate-fadeIn border border-slate-800">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-amber-400 font-bold flex items-center gap-1.5">
                              <Award className="w-4 h-4" />
                              <span>Expert Solution & Explanation:</span>
                            </span>
                            <span className="text-slate-400">
                              Correct Option: <strong className="text-white">{String.fromCharCode(65 + q.correctOptionIndex)}</strong>
                            </span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-sans">
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* PDF Download View */
              <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-slate-900">
                    Download Kerala PSC Official Question Paper & Answer Key
                  </h3>
                  <p className="text-xs text-slate-500">
                    Includes complete 100 questions with official question booklet alpha code and final revised answers.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => handleDownloadPDF('paper')}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                  >
                    <Download className="w-4 h-4" /> Download Question Booklet (.PDF)
                  </button>
                  <button
                    onClick={() => handleDownloadPDF('key')}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Download Official Answer Key (.PDF)
                  </button>
                </div>
              </div>
            )
          ) : (
            /* PDF Download View */
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Download className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-slate-900">
                  Download Kerala PSC Official Question Paper & Answer Key
                </h3>
                <p className="text-xs text-slate-500">
                  Includes complete 100 questions with official question booklet alpha code and final revised answers.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => handleDownloadPDF('paper')}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                >
                  <Download className="w-4 h-4" /> Download Question Booklet (.PDF)
                </button>
                <button
                  onClick={() => handleDownloadPDF('key')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                >
                  <CheckCircle2 className="w-4 h-4" /> Download Official Answer Key (.PDF)
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
