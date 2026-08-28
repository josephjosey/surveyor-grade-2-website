import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckSquare,
  Clock,
  Award,
  AlertCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Zap,
  Target,
  Trophy,
  Medal,
  Crown,
  Search,
  Filter,
  Users,
  ShieldCheck,
  Lock,
  ChevronRight,
  BookOpen,
  MapPin,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MockTest, MockQuestion, MockTestAttempt } from '../../types';

export const MockTestsPage: React.FC = () => {
  const {
    mockTests,
    currentUser,
    submitMockTestAttempt,
    testAttempts,
    selectedMockTestId,
    setSelectedMockTestId,
    getRankedLeaderboard,
    hasUserAttemptedTest,
    getUserRankInfo,
    showToast
  } = useApp();

  // Navigation tab inside Mock Test Page
  const [examTab, setExamTab] = useState<'ranked' | 'practice'>('ranked');

  // Test execution states
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isResultView, setIsResultView] = useState<boolean>(false);
  const [currentAttempt, setCurrentAttempt] = useState<MockTestAttempt | null>(null);

  // In-exam state
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<string[]>([]);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);

  // Leaderboard filters
  const [selectedDistrictFilter, setSelectedDistrictFilter] = useState<string>('all');
  const [leaderboardSearch, setLeaderboardSearch] = useState<string>('');

  // Ranked Exams list
  const rankedExams = mockTests.filter((t) => t.isRankedExam || t.id === 'mock-state-rank-1');
  const [selectedRankedExamId, setSelectedRankedExamId] = useState<string>('');

  // Active selected Ranked Exam
  const activeRankedExam =
    rankedExams.find((t) => t.id === selectedRankedExamId) ||
    rankedExams[0] ||
    mockTests[0];

  const isRankedAttempted = activeRankedExam ? hasUserAttemptedTest(activeRankedExam.id) : false;
  const userRankData = activeRankedExam ? getUserRankInfo(activeRankedExam.id) : null;
  const fullLeaderboard = activeRankedExam ? getRankedLeaderboard(activeRankedExam.id) : [];

  // Practice tests (excluding the ranked exams)
  const practiceTests = mockTests.filter((t) => !t.isRankedExam && t.id !== 'mock-state-rank-1');

  // Auto-select if selectedMockTestId is passed
  useEffect(() => {
    if (selectedMockTestId) {
      const found = mockTests.find((t) => t.id === selectedMockTestId);
      if (found && !isExamRunning) {
        if (found.isRankedExam || found.id === 'mock-state-rank-1') {
          setExamTab('ranked');
          setSelectedRankedExamId(found.id);
        } else {
          setExamTab('practice');
        }
        setActiveTest(found);
      }
    }
  }, [selectedMockTestId, mockTests]);

  // Exam Countdown Timer
  useEffect(() => {
    let interval: any = null;
    if (isExamRunning && timeLeftSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamRunning, timeLeftSeconds]);

  const handleStartExam = (test: MockTest) => {
    const isAlreadyAttempted = hasUserAttemptedTest(test.id);

    if (test.isRankedExam && !isAlreadyAttempted) {
      const confirmStart = window.confirm(
        '🏆 OFFICIAL STATE RANKED ATTEMPT (Attempt #1):\n\nThis is your FIRST attempt. Your marks from this attempt will be permanently used to determine your Official Kerala PSC State Rank & Leaderboard position.\n\n(You can also re-attempt for practice anytime, but only this 1st attempt counts for official ranking).\n\nDo you want to start now?'
      );
      if (!confirmStart) return;
    } else if (test.isRankedExam && isAlreadyAttempted) {
      showToast('Starting Practice Re-attempt. Your official State Rank remains based on your 1st Attempt.', 'info');
    }

    setActiveTest(test);
    setCurrentQIndex(0);
    setAnswers({});
    setMarkedForReview([]);
    setTimeLeftSeconds(test.durationMinutes * 60);
    setIsExamRunning(true);
    setIsResultView(false);
    setCurrentAttempt(null);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleClearOption = (questionId: string) => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleToggleReview = (questionId: string) => {
    setMarkedForReview((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]
    );
  };

  const handleAutoSubmit = () => {
    showToast('Time is up! Exam auto-submitted.', 'warning');
    handleSubmitExam();
  };

  const handleSubmitExam = () => {
    if (!activeTest) return;

    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    activeTest.questions.forEach((q) => {
      const chosen = answers[q.id];
      if (chosen === undefined) {
        unattemptedCount += 1;
      } else if (chosen === q.correctOptionIndex) {
        correctCount += 1;
      } else {
        wrongCount += 1;
      }
    });

    const marksPerCorrect = activeTest.marksPerCorrect || 1;
    const negMarks = activeTest.negativeMarksPerWrong || 0.33;
    const rawScore = correctCount * marksPerCorrect - wrongCount * negMarks;
    const finalScore = Math.max(0, Number(rawScore.toFixed(2)));
    const attemptedCount = correctCount + wrongCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const timeSpent = activeTest.durationMinutes * 60 - timeLeftSeconds;

    const attempt = submitMockTestAttempt({
      testId: activeTest.id,
      userId: currentUser.id,
      userName: currentUser.name,
      district: currentUser.district || 'Idukki',
      userAvatar: currentUser.avatar,
      startedAt: new Date(Date.now() - timeSpent * 1000).toISOString(),
      answers,
      markedForReview,
      score: finalScore,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy,
      timeSpentSeconds: timeSpent
    });

    setCurrentAttempt(attempt);
    setIsExamRunning(false);
    setIsResultView(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Filtered Leaderboard
  const filteredLeaderboard = fullLeaderboard.filter((entry) => {
    const matchesDistrict = selectedDistrictFilter === 'all' || entry.district?.toLowerCase() === selectedDistrictFilter.toLowerCase();
    const matchesSearch =
      entry.userName.toLowerCase().includes(leaderboardSearch.toLowerCase()) ||
      (entry.district && entry.district.toLowerCase().includes(leaderboardSearch.toLowerCase()));
    return matchesDistrict && matchesSearch;
  });

  const districtsList = [
    'All Kerala (Statewide)',
    'Thiruvananthapuram',
    'Kollam',
    'Pathanamthitta',
    'Alappuzha',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod'
  ];

  // -------------------------------------------------------------
  // 1. LIVE EXAM RUNNING VIEW (FULL SCREEN / EXAM MODE)
  // -------------------------------------------------------------
  if (isExamRunning && activeTest) {
    const currentQ = activeTest.questions[currentQIndex];
    const isAnswered = answers[currentQ.id] !== undefined;
    const isMarked = markedForReview.includes(currentQ.id);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fadeIn">
        {/* Exam Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border border-slate-800 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                activeTest.isRankedExam ? 'bg-amber-400 text-slate-950' : 'bg-brand-500 text-white'
              }`}>
                {activeTest.isRankedExam ? '🏆 Official State Ranked Exam (1 Attempt)' : 'Practice Mock Test'}
              </span>
              <span className="text-xs text-slate-400">
                Candidate: <strong className="text-white">{currentUser.name}</strong> ({currentUser.district || 'Kerala'})
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {activeTest.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Countdown Clock */}
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border ${
              timeLeftSeconds < 300
                ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                : 'bg-slate-800 text-amber-300 border-slate-700'
            }`}>
              <Clock className="w-4 h-4" />
              <span>Time Left: {formatTime(timeLeftSeconds)}</span>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to finish and submit your exam?')) {
                  handleSubmitExam();
                }
              }}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Exam Main Area: Question & Options (70%) + Palette (30%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Box */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                  Q{currentQIndex + 1}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  of {activeTest.questions.length} Questions
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  +1.00 Correct
                </span>
                <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  -0.33 Negative
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>
              {currentQ.questionMalayalam && (
                <p className="text-sm font-semibold text-brand-800 ml-text pt-1">
                  {currentQ.questionMalayalam}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, optIndex) => {
                const isSelected = answers[currentQ.id] === optIndex;
                return (
                  <button
                    key={optIndex}
                    onClick={() => handleSelectOption(currentQ.id, optIndex)}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm font-medium flex items-center gap-3 transition ${
                      isSelected
                        ? 'bg-brand-50 border-brand-500 text-brand-950 font-bold ring-2 ring-brand-500'
                        : 'bg-slate-50/50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {String.fromCharCode(65 + optIndex)}
                    </span>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Question Actions Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleReview(currentQ.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                    isMarked
                      ? 'bg-purple-100 text-purple-800 border-purple-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${isMarked ? 'fill-purple-600' : ''}`} />
                  <span>{isMarked ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>

                {isAnswered && (
                  <button
                    onClick={() => handleClearOption(currentQ.id)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous
                </button>
                <button
                  onClick={() => {
                    if (currentQIndex < activeTest.questions.length - 1) {
                      setCurrentQIndex((prev) => prev + 1);
                    } else {
                      if (window.confirm('You have reached the last question. Finish & submit exam?')) {
                        handleSubmitExam();
                      }
                    }
                  }}
                  className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1 shadow"
                >
                  <span>{currentQIndex === activeTest.questions.length - 1 ? 'Save & Submit' : 'Save & Next'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Palette */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Question Palette ({activeTest.questions.length})
            </h4>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span>Answered ({Object.keys(answers).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-purple-500" />
                <span>Marked ({markedForReview.length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-200" />
                <span>Unattempted ({activeTest.questions.length - Object.keys(answers).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded border border-brand-500 bg-brand-50" />
                <span>Current (Q{currentQIndex + 1})</span>
              </div>
            </div>

            {/* Palette Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
              {activeTest.questions.map((q, idx) => {
                const ans = answers[q.id] !== undefined;
                const rev = markedForReview.includes(q.id);
                const isCurr = idx === currentQIndex;

                let btnBg = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
                if (rev) {
                  btnBg = 'bg-purple-600 text-white border-purple-600';
                } else if (ans) {
                  btnBg = 'bg-emerald-600 text-white border-emerald-600';
                }

                if (isCurr) {
                  btnBg += ' ring-2 ring-brand-500 ring-offset-1 font-extrabold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-9 rounded-lg border text-xs font-bold flex items-center justify-center transition ${btnBg}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. EXAM RESULT & RANK CARD REVIEW MODE
  // -------------------------------------------------------------
  if (isResultView && currentAttempt && activeTest) {
    const userRank = activeTest.isRankedExam ? getUserRankInfo(activeTest.id) : null;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
        {/* Scorecard Hero Card */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                {activeTest.isRankedExam ? 'Official Kerala PSC State Rank Card' : 'Practice Test Evaluation'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeTest.title}
              </h1>
              <p className="text-xs text-slate-300">
                Candidate: <strong className="text-white">{currentUser.name}</strong> • District: <strong className="text-white">{currentUser.district || 'Kerala'}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleStartExam(activeTest)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Practice Again</span>
              </button>

              <button
                onClick={() => {
                  setIsResultView(false);
                  setIsExamRunning(false);
                  if (activeTest.isRankedExam) setExamTab('ranked');
                }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl shadow transition"
              >
                <span>View Statewide Leaderboard</span>
              </button>
            </div>
          </div>

          {/* State Rank Standout Badge (for Ranked Exams) */}
          {userRank && userRank.rank > 0 && userRank.attempt && (
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent p-5 rounded-2xl border-2 border-amber-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg">
                  #{userRank.rank}
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {currentAttempt.id === userRank.attempt.id
                      ? 'Official Statewide 1st Attempt Ranking'
                      : 'Practice Attempt (Official Rank Locked to 1st Attempt)'}
                  </div>
                  <div className="text-lg font-black text-white">
                    State Rank #{userRank.rank} of {userRank.totalCandidates} Candidates
                  </div>
                  <div className="text-xs text-slate-300">
                    {currentAttempt.id === userRank.attempt.id ? (
                      <span>Official 1st Attempt Score: <strong className="text-amber-300">{userRank.attempt.score.toFixed(2)} marks</strong> • Higher than <strong className="text-amber-300">{userRank.percentile}%</strong> of all test takers.</span>
                    ) : (
                      <span>Official 1st Attempt Score: <strong className="text-amber-300">{userRank.attempt.score.toFixed(2)} marks</strong> (Ranked) • Current Practice Score: <strong className="text-white">{currentAttempt.score.toFixed(2)} marks</strong>.</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 1st Attempt Ranked • Practice Mode Active
                </span>
              </div>
            </div>
          )}

          {/* Metric Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Total Score</div>
              <div className="text-3xl font-black text-amber-300">
                {currentAttempt.score.toFixed(2)}
              </div>
              <div className="text-[11px] text-slate-400">out of {activeTest.totalMarks} Marks</div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Correct Answers</div>
              <div className="text-3xl font-black text-emerald-400">
                +{currentAttempt.correctCount}
              </div>
              <div className="text-[11px] text-emerald-300 font-medium">+{currentAttempt.correctCount * 1} Marks</div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Wrong Answers</div>
              <div className="text-3xl font-black text-red-400">
                -{currentAttempt.wrongCount}
              </div>
              <div className="text-[11px] text-red-300 font-medium">
                -{(currentAttempt.wrongCount * 0.33).toFixed(2)} Negative Marks
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center space-y-1">
              <div className="text-xs text-slate-400 font-semibold">Accuracy</div>
              <div className="text-3xl font-black text-brand-400">
                {currentAttempt.accuracy}%
              </div>
              <div className="text-[11px] text-slate-400">
                Time: {Math.round(currentAttempt.timeSpentSeconds / 60)} mins
              </div>
            </div>
          </div>

          {/* Faculty Assessment */}
          <div className="bg-brand-950/80 p-4 rounded-2xl border border-brand-800 flex items-center gap-3 text-xs text-brand-200">
            <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <span className="font-bold text-white">Faculty Assessment (Joseph Josey): </span>
              {currentAttempt.score >= 8 ? (
                <span>Outstanding performance! Your score puts you in direct contention for Top 10 ranks in Kerala PSC Survey & Land Records.</span>
              ) : currentAttempt.score >= 5 ? (
                <span>Good baseline. Review the negative marking traps below to elevate your accuracy above 90% for a guaranteed rank list slot.</span>
              ) : (
                <span>Focus on revising the high-frequency formula sheets in Study Notes to eliminate negative deductions.</span>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Question-by-Question Solution & Explanations
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              Total {activeTest.questions.length} Questions
            </span>
          </div>

          <div className="space-y-4">
            {activeTest.questions.map((q, idx) => {
              const selectedOpt = currentAttempt.answers[q.id];
              const isAttempted = selectedOpt !== undefined;
              const isCorrect = isAttempted && selectedOpt === q.correctOptionIndex;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl p-6 border transition shadow-sm space-y-4 ${
                    isAttempted
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-red-300 bg-red-50/20'
                      : 'border-slate-200 bg-slate-50/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                          Q{idx + 1}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Topic: {q.topic}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                        {q.question}
                      </h4>

                      {q.questionMalayalam && (
                        <p className="text-xs sm:text-sm font-semibold text-brand-800 ml-text">
                          {q.questionMalayalam}
                        </p>
                      )}
                    </div>

                    <div className="flex-shrink-0">
                      {isAttempted ? (
                        isCorrect ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Correct (+1.00)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full">
                            <XCircle className="w-3.5 h-3.5 text-red-600" />
                            Wrong (-0.33)
                          </span>
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                          Unattempted (0.00)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      const isThisCorrect = optIdx === q.correctOptionIndex;

                      let optClasses = 'border-slate-200 text-slate-800 bg-white';
                      if (isThisCorrect) {
                        optClasses = 'bg-emerald-100/90 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
                      } else if (isThisSelected && !isCorrect) {
                        optClasses = 'bg-red-100/90 border-red-500 text-red-950 font-bold ring-1 ring-red-500';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-3 ${optClasses}`}
                        >
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            isThisCorrect
                              ? 'bg-emerald-600 text-white'
                              : isThisSelected && !isCorrect
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="bg-slate-900 text-white p-4 rounded-xl space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                      <Award className="w-4 h-4 text-amber-300" />
                      <span>Expert Solution & Key:</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {q.explanation}
                    </p>
                    {q.rankerTip && (
                      <div className="pt-2 border-t border-slate-800 text-brand-300 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Exam Tip: {q.rankerTip}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. MAIN DASHBOARD: RANKED EXAM + STATEWIDE LEADERBOARD VIEW
  // -------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Trophy className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Kerala PSC Mock Exam & State Ranking Center
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Test yourself with official -0.33 negative marking and compete for your Kerala Statewide Rank.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setExamTab('ranked')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              examTab === 'ranked'
                ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>All-Kerala Ranked Exams ({rankedExams.length})</span>
          </button>

          <button
            onClick={() => setExamTab('practice')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              examTab === 'practice'
                ? 'bg-brand-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Chapter Practice Tests ({practiceTests.length})</span>
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* TAB 1: ALL-KERALA STATE-LEVEL RANKED EXAM & LEADERBOARD          */}
      {/* ---------------------------------------------------------------- */}
      {examTab === 'ranked' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Multi-Exam Switcher Bar (when multiple ranked tests exist) */}
          {rankedExams.length > 1 && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-amber-50 rounded-lg text-amber-600">
                    <Trophy className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    Select State Ranked Exam ({rankedExams.length} Active)
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                  Click any exam to view its specifications, attempt, or view leaderboard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {rankedExams.map((test) => {
                  const isSelected = test.id === activeRankedExam.id;
                  const rankInfo = getUserRankInfo(test.id);
                  const isAttempted = rankInfo.rank > 0;

                  return (
                    <button
                      key={test.id}
                      onClick={() => setSelectedRankedExamId(test.id)}
                      className={`p-4 rounded-xl border text-left transition flex flex-col justify-between space-y-3 relative ${
                        isSelected
                          ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-500 shadow-sm'
                          : 'bg-slate-50/70 hover:bg-slate-100/90 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
                            {test.examCode || 'STATE-RANKED'}
                          </span>
                          <h4 className="font-bold text-sm text-slate-900 line-clamp-1">
                            {test.title}
                          </h4>
                        </div>

                        {isAttempted ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex-shrink-0">
                            Rank #{rankInfo.rank}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-semibold flex-shrink-0">
                            Ready
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                        <span>{test.totalQuestions} Questions • {test.durationMinutes} mins</span>
                        <span className={`font-bold ${isSelected ? 'text-amber-700 font-black' : 'text-brand-600'}`}>
                          {isSelected ? '● Viewing Now' : 'Select Exam →'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Ranked Exam Action Card */}
          <div className="bg-gradient-to-br from-slate-950 via-brand-950 to-navy-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-500/40 shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
                    <Crown className="w-3.5 h-3.5" /> Official State Assessment
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-slate-200 text-xs font-semibold rounded-full border border-white/20">
                    {activeRankedExam.examCode || 'KPSC-SLR-STATE-2026'}
                  </span>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-400/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Rank Based on 1st Attempt Only • Unlimited Practice Re-Attempts
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeRankedExam.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeRankedExam.description}
                </p>

                {/* Exam specifications grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Questions</div>
                    <div className="text-base font-bold text-white">{activeRankedExam.totalQuestions} MCQs</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Duration</div>
                    <div className="text-base font-bold text-white">{activeRankedExam.durationMinutes} Minutes</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Marking</div>
                    <div className="text-base font-bold text-emerald-400">+1.00 / -0.33</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Rank Policy</div>
                    <div className="text-xs font-bold text-amber-300">1st Attempt Ranked</div>
                  </div>
                </div>
              </div>

              {/* Action Button / Attempt Status */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/15 w-full lg:w-80 flex flex-col items-center justify-center text-center space-y-4 flex-shrink-0">
                {isRankedAttempted && userRankData?.attempt ? (
                  <div className="space-y-3 w-full">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-400 uppercase">Official 1st Attempt Completed</div>
                      <div className="text-2xl font-black text-amber-300 mt-1">
                        State Rank #{userRankData.rank}
                      </div>
                      <div className="text-xs text-slate-300">
                        Official Score: <strong>{userRankData.attempt.score.toFixed(2)} / {activeRankedExam.totalMarks} marks</strong>
                      </div>
                      {userRankData.totalUserAttempts > 1 && (
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Total Attempts Taken: {userRankData.totalUserAttempts}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 pt-1">
                      <button
                        onClick={() => handleStartExam(activeRankedExam)}
                        className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
                      >
                        <RotateCcw className="w-4 h-4" /> Practice Re-Attempt (Unlimited)
                      </button>
                      <button
                        onClick={() => {
                          setActiveTest(activeRankedExam);
                          setCurrentAttempt(userRankData.attempt);
                          setIsResultView(true);
                        }}
                        className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" /> View Official 1st Attempt Rank Card
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 w-full">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto border border-amber-400/30">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-300">Ready to Compete?</div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Test your preparation against students from all 14 districts.
                      </div>
                    </div>
                    <button
                      onClick={() => handleStartExam(activeRankedExam)}
                      className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-slate-950" />
                      <span>Start 1-Attempt State Exam</span>
                    </button>
                    <div className="text-[10px] text-slate-400">
                      Once started, the timer will begin automatically.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* STATEWIDE LEADERBOARD / RANK LIST SECTION                   */}
          {/* ----------------------------------------------------------- */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
                    <Crown className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Live Statewide Rank List: <span className="text-brand-700">{activeRankedExam.title}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Official standings evaluated using Kerala PSC negative marking (-0.33) & tie-breakers.
                </p>
              </div>

              {/* Total Candidates Pill */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 border border-slate-200">
                  <Users className="w-4 h-4 text-brand-600" />
                  <span>{fullLeaderboard.length} Enrolled Candidates Ranked</span>
                </span>
              </div>
            </div>

            {/* Top State Rankers Podium Showcase */}
            {fullLeaderboard.length >= 1 && (
              <div className={`grid gap-4 pt-2 ${
                fullLeaderboard.length === 1 
                  ? 'grid-cols-1 max-w-sm mx-auto' 
                  : fullLeaderboard.length === 2 
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' 
                  : 'grid-cols-1 md:grid-cols-3'
              }`}>
                {/* Rank 1 - Gold Champion */}
                <div className={`${fullLeaderboard.length >= 3 ? 'order-1 md:order-2 -mt-2' : 'order-1'} bg-gradient-to-b from-amber-50 to-amber-100/70 p-6 rounded-3xl border-2 border-amber-400 text-center relative shadow-md space-y-3`}>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow">
                    👑 State Rank 1
                  </span>
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center mx-auto shadow-md">
                    🥇 1
                  </div>
                  <img
                    src={fullLeaderboard[0].userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'}
                    alt={fullLeaderboard[0].userName}
                    className="w-20 h-20 rounded-2xl object-cover mx-auto ring-4 ring-amber-400 shadow-lg"
                  />
                  <div>
                    <div className="font-extrabold text-slate-950 text-base">
                      {fullLeaderboard[0].userName}
                    </div>
                    <div className="text-xs text-amber-800 font-bold flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-600" /> {fullLeaderboard[0].district} District
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-amber-300 shadow-sm">
                    <div className="text-xs text-slate-500 font-semibold">Highest Score</div>
                    <div className="text-2xl font-black text-amber-600">{fullLeaderboard[0].score.toFixed(2)} / {activeRankedExam.totalMarks || 87}</div>
                    <div className="text-[11px] text-emerald-600 font-bold">{fullLeaderboard[0].accuracy}% Accuracy • {fullLeaderboard[0].percentile}%ile</div>
                  </div>
                </div>

                {/* Rank 2 - Silver */}
                {fullLeaderboard.length >= 2 && (
                  <div className={`${fullLeaderboard.length >= 3 ? 'order-2 md:order-1' : 'order-2'} bg-gradient-to-b from-slate-50 to-slate-100 p-5 rounded-2xl border-2 border-slate-300 text-center relative shadow-sm space-y-3`}>
                    <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-800 font-black text-xs flex items-center justify-center mx-auto shadow">
                      🥈 2
                    </div>
                    <img
                      src={fullLeaderboard[1].userAvatar || 'https://lh3.googleusercontent.com/a/ACg8ocIaBMAwuWUqnDUrEGQPCwFlLpQ8gGRd7SPCQvnJWg0-LuEwH_qu=s96-c'}
                      alt={fullLeaderboard[1].userName}
                      className="w-16 h-16 rounded-2xl object-cover mx-auto ring-4 ring-slate-300 shadow"
                    />
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">
                        {fullLeaderboard[1].userName}
                      </div>
                      <div className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" /> {fullLeaderboard[1].district}
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-slate-200">
                      <div className="text-xs text-slate-500 font-semibold">Score</div>
                      <div className="text-lg font-black text-slate-800">{fullLeaderboard[1].score.toFixed(2)} / {activeRankedExam.totalMarks || 87}</div>
                      <div className="text-[10px] text-emerald-600 font-bold">{fullLeaderboard[1].accuracy}% Accuracy • {fullLeaderboard[1].percentile}%ile</div>
                    </div>
                  </div>
                )}

                {/* Rank 3 - Bronze */}
                {fullLeaderboard.length >= 3 && (
                  <div className="order-3 bg-gradient-to-b from-orange-50/60 to-amber-50/40 p-5 rounded-2xl border-2 border-amber-300/80 text-center relative shadow-sm space-y-3">
                    <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center mx-auto shadow">
                      🥉 3
                    </div>
                    <img
                      src={fullLeaderboard[2].userAvatar || 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80'}
                      alt={fullLeaderboard[2].userName}
                      className="w-16 h-16 rounded-2xl object-cover mx-auto ring-4 ring-amber-500/40 shadow"
                    />
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">
                        {fullLeaderboard[2].userName}
                      </div>
                      <div className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" /> {fullLeaderboard[2].district}
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-amber-200">
                      <div className="text-xs text-slate-500 font-semibold">Score</div>
                      <div className="text-lg font-black text-slate-800">{fullLeaderboard[2].score.toFixed(2)} / {activeRankedExam.totalMarks || 87}</div>
                      <div className="text-[10px] text-emerald-600 font-bold">{fullLeaderboard[2].accuracy}% Accuracy • {fullLeaderboard[2].percentile}%ile</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select
                  value={selectedDistrictFilter}
                  onChange={(e) => setSelectedDistrictFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white text-slate-800 font-semibold outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-auto"
                >
                  <option value="all">Kerala Statewide (All 14 Districts)</option>
                  {districtsList.slice(1).map((d) => (
                    <option key={d} value={d}>
                      {d} District
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={leaderboardSearch}
                  onChange={(e) => setLeaderboardSearch(e.target.value)}
                  placeholder="Search candidate name..."
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            {/* Full Statewide Leaderboard Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3.5 font-bold">State Rank</th>
                    <th className="px-4 py-3.5 font-bold">Candidate</th>
                    <th className="px-4 py-3.5 font-bold">District</th>
                    <th className="px-4 py-3.5 font-bold">Marks (-0.33)</th>
                    <th className="px-4 py-3.5 font-bold">Correct / Wrong</th>
                    <th className="px-4 py-3.5 font-bold">Accuracy</th>
                    <th className="px-4 py-3.5 font-bold">Time Taken</th>
                    <th className="px-4 py-3.5 font-bold">Percentile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredLeaderboard.map((entry) => {
                    const isCurrentUser =
                      entry.userId === currentUser.id || entry.userName === currentUser.name;

                    let rankBadge = (
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs">
                        {entry.rank}
                      </span>
                    );

                    if (entry.rank === 1) {
                      rankBadge = (
                        <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow">
                          🥇 1
                        </span>
                      );
                    } else if (entry.rank === 2) {
                      rankBadge = (
                        <span className="w-7 h-7 rounded-full bg-slate-300 text-slate-900 font-black flex items-center justify-center text-xs shadow">
                          🥈 2
                        </span>
                      );
                    } else if (entry.rank === 3) {
                      rankBadge = (
                        <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-xs shadow">
                          🥉 3
                        </span>
                      );
                    }

                    return (
                      <tr
                        key={entry.id}
                        className={`transition ${
                          isCurrentUser
                            ? 'bg-amber-50/90 font-bold border-2 border-amber-400'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="px-4 py-3.5">{rankBadge}</td>

                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={entry.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'}
                              alt={entry.userName}
                              className="w-8 h-8 rounded-full object-cover border border-slate-200"
                            />
                            <div>
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                <span>{entry.userName}</span>
                                {isCurrentUser && (
                                  <span className="px-1.5 py-0.2 bg-amber-400 text-slate-950 text-[10px] font-black rounded">
                                    YOU
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3.5 text-slate-600 font-medium">
                          {entry.district || 'Kerala'}
                        </td>

                        <td className="px-4 py-3.5 font-mono font-black text-amber-700 text-sm">
                          {entry.score.toFixed(2)}
                        </td>

                        <td className="px-4 py-3.5 text-slate-600">
                          <span className="text-emerald-600 font-bold">+{entry.correctCount}</span> /{' '}
                          <span className="text-red-600 font-bold">-{entry.wrongCount}</span>
                        </td>

                        <td className="px-4 py-3.5">
                          <span className={`font-bold ${entry.accuracy >= 85 ? 'text-emerald-600' : 'text-slate-700'}`}>
                            {entry.accuracy}%
                          </span>
                        </td>

                        <td className="px-4 py-3.5 font-mono text-slate-500">
                          {Math.floor(entry.timeSpentSeconds / 60)}m {entry.timeSpentSeconds % 60}s
                        </td>

                        <td className="px-4 py-3.5 font-bold text-brand-700">
                          {entry.percentile}%ile
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* TAB 2: CHAPTER PRACTICE TESTS (UNLIMITED ATTEMPTS)                */}
      {/* ---------------------------------------------------------------- */}
      {examTab === 'practice' && (
        <div className="space-y-6 animate-fadeIn">
          {practiceTests.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center max-w-lg mx-auto space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">All Tests are in State-Ranked Mode</h3>
                <p className="text-xs text-slate-500">
                  There are {rankedExams.length} active State-Level Ranked Exams available with full Statewide Leaderboards.
                </p>
              </div>
              <button
                onClick={() => setExamTab('ranked')}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition inline-flex items-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                <span>Switch to Ranked State Exams ({rankedExams.length})</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceTests.map((test) => {
              const attemptsForThis = testAttempts.filter((a) => a.testId === test.id);
              const bestScore = attemptsForThis.length > 0
                ? Math.max(...attemptsForThis.map((a) => a.score))
                : null;

              return (
                <div
                  key={test.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand-500 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200 uppercase tracking-wider">
                        {test.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {test.difficulty}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {test.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      {test.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-slate-100">
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <div className="text-[10px] text-slate-400">Questions</div>
                        <div className="font-bold text-slate-800">{test.totalQuestions} MCQs</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <div className="text-[10px] text-slate-400">Time</div>
                        <div className="font-bold text-slate-800">{test.durationMinutes} mins</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <div className="text-[10px] text-slate-400">Marking</div>
                        <div className="font-bold text-emerald-600">+1 / -0.33</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    {bestScore !== null ? (
                      <div className="text-xs">
                        <span className="text-slate-400">Best Score: </span>
                        <strong className="text-emerald-700 font-bold">{bestScore.toFixed(2)} / {test.totalMarks}</strong>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">Not attempted yet</div>
                    )}

                    <button
                      onClick={() => handleStartExam(test)}
                      className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{bestScore !== null ? 'Retake Test' : 'Start Test'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        </div>
      )}
    </div>
  );
};
