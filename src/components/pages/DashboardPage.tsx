import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  CheckSquare,
  FileCheck,
  HelpCircle,
  Award,
  Flame,
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  Bookmark,
  Sparkles,
  ExternalLink,
  Target,
  FileText,
  Eye,
  Trophy,
  Crown,
  Medal,
  Camera
} from 'lucide-react';
import { uploadUserFile } from '../../services/storageService';
import * as SupabaseDb from '../../services/supabaseService';

export const DashboardPage: React.FC = () => {
  const {
    currentUser,
    studyNotes,
    mockTests,
    testAttempts,
    pyqPapers,
    doubts,
    setActiveTab,
    setSelectedNoteId,
    setSelectedMockTestId,
    toggleCompleteNote,
    setIsEnrollmentModalOpen,
    getUserRankInfo,
    setCurrentUser,
    showToast
  } = useApp();

  const primaryRankedTest = mockTests.find((t) => t.isRankedExam || t.id === 'mock-state-rank-1') || mockTests[0];
  const userRankInfo = primaryRankedTest
    ? getUserRankInfo(primaryRankedTest.id)
    : { rank: 0, percentile: 0, totalCandidates: 0, attempt: null, totalUserAttempts: 0, allAttempts: [] };

  // Dynamically calculate completed notes that actually exist in the current active studyNotes array
  const validCompletedNotes = studyNotes.filter((n) => currentUser.completedClassIds?.includes(n.id));
  const completedCount = validCompletedNotes.length;
  const totalNotes = studyNotes.length;
  const progressPercent = totalNotes > 0 ? Math.min(100, Math.round((completedCount / totalNotes) * 100)) : 0;

  // Next unread study note to continue
  const nextNote = studyNotes.find((n) => !currentUser.completedClassIds?.includes(n.id)) || studyNotes[0];

  // User's attempts
  const userAttempts = testAttempts.filter((a) => a.userId === currentUser.id);

  // User's doubts
  const userDoubts = doubts.filter((d) => d.userId === currentUser.id);

  // Bookmarked notes
  const bookmarkedNotes = studyNotes.filter((n) => currentUser.bookmarkedClassIds.includes(n.id));

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentUser?.id) {
      showToast('Uploading profile photo to Supabase Storage...', 'info');
      const res = await uploadUserFile(file, 'avatars', currentUser.id);
      if (res) {
        setCurrentUser((prev) => ({ ...prev, avatar: res.signedUrl }));
        SupabaseDb.updateUserProfile(currentUser.id, { avatar: res.signedUrl });
        showToast('Profile photo updated in Supabase Storage!', 'success');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-navy-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <label className="relative group cursor-pointer block" title="Change Profile Avatar">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-brand-500/50 shadow-lg group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                Namaskaram, {currentUser.name}! 👋
              </h1>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                currentUser.subscriptionPlan === 'master'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : currentUser.subscriptionPlan === 'mock_only'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}>
                {currentUser.subscriptionPlan === 'master'
                  ? 'Master Course Enrolled'
                  : currentUser.subscriptionPlan === 'mock_only'
                  ? 'Mock Series Member'
                  : 'Free Student Plan'}
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm">
              Target: <span className="text-amber-300 font-semibold">{currentUser.targetExam || 'Kerala PSC Surveyor Gr. II & Land Records'}</span>
              {currentUser.district && ` • ${currentUser.district} District`}
            </p>
          </div>
        </div>

        {/* Streak & Rank Target Badge */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-1.5 text-amber-300 font-extrabold text-sm">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
            <span>{currentUser.streakDays} Day Study Streak</span>
          </div>
          <span className="text-white/30">•</span>
          <div className="text-xs text-slate-200">
            Goal: <span className="font-bold text-emerald-300">Top 10 Rank</span>
          </div>
        </div>
      </div>

      {/* Free Plan Upgrade Card */}
      {currentUser.subscriptionPlan === 'free' && (
        <div className="bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-emerald-500/10 border-2 border-amber-300 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm animate-fadeIn">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 text-amber-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-base">
                  Unlock Full Kerala PSC Syllabus & Official Mock Test Series
                </h3>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                  Special Offer
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                You are currently on the Free Tier with access to free preview documents. Upgrade anytime to unlock all 8 syllabus modules, handwritten formula books, and statewide rank tracking.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEnrollmentModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-black text-xs sm:text-sm rounded-2xl shadow transition flex-shrink-0"
          >
            <span>Upgrade / Purchase Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 4 Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Study Notes Read
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {completedCount} / {totalNotes}
            </div>
            <div className="text-xs text-brand-600 font-semibold mt-0.5">
              {progressPercent}% Syllabus Completed
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Mock Tests Taken
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {userAttempts.length}
            </div>
            <div className="text-xs text-amber-600 font-semibold mt-0.5">
              PSC Marking (-0.33) applied
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <CheckSquare className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Solved PYQs
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {pyqPapers.length} Papers
            </div>
            <div className="text-xs text-blue-600 font-semibold mt-0.5">
              Survey & KWA Solved
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              My Doubts Asked
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {userDoubts.length}
            </div>
            <div className="text-xs text-purple-600 font-semibold mt-0.5">
              {userDoubts.filter((d) => d.isResolved).length} Answered by Faculty
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Continue Studying Banner + Progress Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Next Study Module */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
              <h3 className="font-bold text-slate-900 text-base">Continue Reading Notes</h3>
            </div>
            <button
              onClick={() => setActiveTab('notes')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              All Notes ({totalNotes}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {nextNote ? (
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-full sm:w-24 h-24 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0 border border-brand-200">
                <FileText className="w-10 h-10" />
              </div>

              <div className="space-y-1.5 flex-1">
                <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider">
                  Next Up in Revision Schedule
                </span>
                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {nextNote.title}
                </h4>
                {nextNote.titleMalayalam && (
                  <p className="text-xs text-slate-600 ml-text font-medium">
                    {nextNote.titleMalayalam}
                  </p>
                )}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedNoteId(nextNote.id);
                      setActiveTab('notes');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Open Study Notes
                  </button>
                  <button
                    onClick={() => toggleCompleteNote(nextNote.id)}
                    className="px-3 py-2 border border-slate-300 text-slate-700 hover:bg-white text-xs font-medium rounded-lg transition"
                  >
                    Mark Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-brand-50 rounded-2xl border border-brand-200 text-brand-900 space-y-2">
              <CheckCircle className="w-10 h-10 text-brand-600 mx-auto" />
              <div className="font-bold text-base">Congratulations! All module notes completed!</div>
              <p className="text-xs text-brand-700">Take a mock test to evaluate your score.</p>
            </div>
          )}

          {/* Syllabus Progress Bar */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-600">Overall Syllabus Completion</span>
              <span className="text-brand-700 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: State Ranking & Mock Exam launch */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Kerala State Rank & Mock Exam</span>
              </h3>
              <button
                onClick={() => setActiveTab('mocktests')}
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
              >
                Leaderboard ({mockTests.length}) <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {userRankInfo.rank > 0 && userRankInfo.attempt ? (
              <div className="space-y-2.5">
                <div className="text-xs text-slate-500 font-medium">Your Official State Ranking:</div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-4 rounded-xl border-2 border-amber-400/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Crown className="w-4 h-4 text-amber-600" />
                      Statewide Grand Mock Exam
                    </span>
                    <span className="text-xs font-extrabold text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded">
                      Rank #{userRankInfo.rank} of {userRankInfo.totalCandidates}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] pt-1 text-slate-700">
                    <div>Score: <span className="font-bold text-amber-700">{userRankInfo.attempt.score.toFixed(2)}</span></div>
                    <div>Accuracy: <span className="font-bold text-emerald-600">{userRankInfo.attempt.accuracy}%</span></div>
                    <div>Percentile: <span className="font-bold text-brand-700">{userRankInfo.percentile}%</span></div>
                  </div>
                </div>
              </div>
            ) : userAttempts.length > 0 ? (
              <div className="space-y-2.5">
                <div className="text-xs text-slate-500 font-medium">Latest Practice Result:</div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 p-4 rounded-xl border border-amber-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">
                      PSC Survey Model Exam
                    </span>
                    <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      Score: {userAttempts[0].score.toFixed(2)} / 10
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] pt-1 text-slate-600">
                    <div>Correct: <span className="font-bold text-emerald-600">+{userAttempts[0].correctCount}</span></div>
                    <div>Wrong: <span className="font-bold text-red-600">-{userAttempts[0].wrongCount}</span></div>
                    <div>Accuracy: <span className="font-bold text-brand-700">{userAttempts[0].accuracy}%</span></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-xl text-center text-xs text-slate-500">
                You haven't attempted the State Ranked Exam yet. Compete for your Kerala PSC Rank!
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setSelectedMockTestId('mock-state-rank-1');
                setActiveTab('mocktests');
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
            >
              <Trophy className="w-4 h-4 text-slate-950" />
              <span>{userRankInfo.rank > 0 ? 'View Statewide Rank List & Answer Key' : 'Start 1-Attempt State Ranked Exam'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bookmarked Notes & Saved PYQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Bookmarks */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-brand-600" />
              <span>Saved Notes & Formula Sheets ({bookmarkedNotes.length})</span>
            </h3>
            <button
              onClick={() => setActiveTab('notes')}
              className="text-xs text-brand-600 font-semibold"
            >
              Browse Notes
            </button>
          </div>

          {bookmarkedNotes.length > 0 ? (
            <div className="space-y-2">
              {bookmarkedNotes.map((bn) => (
                <div
                  key={bn.id}
                  onClick={() => {
                    setSelectedNoteId(bn.id);
                    setActiveTab('notes');
                  }}
                  className="p-3 bg-slate-50 hover:bg-brand-50/50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer transition text-xs"
                >
                  <div className="space-y-0.5 flex-1 pr-3 truncate">
                    <div className="font-bold text-slate-800 truncate">{bn.title}</div>
                    <div className="text-slate-500">{bn.readTime} • Online Document</div>
                  </div>
                  <Eye className="w-4 h-4 text-brand-600 flex-shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 py-3 text-center">
              No bookmarked notes yet. Click the bookmark icon on any note to save it here for quick revision!
            </p>
          )}
        </div>

        {/* Solved PYQ Quick Access */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span>Previous Year Solved Papers</span>
            </h3>
            <button
              onClick={() => setActiveTab('pyq')}
              className="text-xs text-blue-600 font-semibold"
            >
              Open PYQ Bank
            </button>
          </div>

          <div className="space-y-2">
            {pyqPapers.slice(0, 2).map((paper) => (
              <div
                key={paper.id}
                onClick={() => setActiveTab('pyq')}
                className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer transition text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-800">{paper.title}</div>
                  <div className="text-slate-500">{paper.examCode} • {paper.department}</div>
                </div>
                <span className="text-[11px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                  Practice
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
