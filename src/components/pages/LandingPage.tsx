import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileCheck,
  CheckSquare,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  TrendingUp,
  Download,
  Users,
  Compass,
  FileText,
  Zap,
  Eye
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const {
    setActiveTab,
    setIsEnrollmentModalOpen,
    setSelectedNoteId,
    modules,
    studyNotes,
    mockTests,
    pyqPapers
  } = useApp();

  const handleOpenNote = (noteId: string) => {
    setSelectedNoteId(noteId);
    setActiveTab('notes');
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-slate-900 to-navy-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Official Credentials */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  <Award className="w-4 h-4 text-amber-300" />
                  Kerala PSC Survey & Land Records
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  <Award className="w-4 h-4 text-emerald-300" />
                  Kerala Water Authority (KWA)
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Master Kerala PSC Survey Exams with{' '}
                <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                  Expert Notes & Mock Tests
                </span>
              </h1>

              {/* Sub-headline with Malayalam touch */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Comprehensive handwritten study notes, high-yield formula sheets, solved PYQs, and Kerala PSC pattern mock tests curated exclusively for <span className="text-white font-semibold">Surveyor Grade II</span> & <span className="text-white font-semibold">KWA Overseer / Tracer</span>.
              </p>
              
              <p className="text-brand-300/90 text-sm font-medium ml-text bg-brand-950/60 p-3 rounded-xl border border-brand-800/60">
                ചെയിൻ സർവേ, തിയോഡലൈറ്റ്, ടോട്ടൽ സ്റ്റേഷൻ, ജി.പി.എസ്, കേരള സർവേ നിയമം (1961) എന്നിവയുടെ ഹാൻഡ് റിട്ടൺ നോട്സുകളും മോക്ക് ടെസ്റ്റുകളും.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setIsEnrollmentModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>Enroll in Master Course</span>
                </button>

                <button
                  onClick={() => handleOpenNote('note-1')}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition"
                >
                  <BookOpen className="w-4 h-4 text-brand-400" />
                  <span>Read Free Sample Notes</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>8 Syllabus Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>PSC Pattern -0.33 Mocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1-on-1 Doubt Solver</span>
                </div>
              </div>
            </div>

            {/* Right Hero: Featured Study Notes & Formula Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-700 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Featured Study Material
                    </span>
                  </div>
                  <span className="text-xs font-semibold bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded">
                    Free PDF Download
                  </span>
                </div>

                {/* Study Document Box */}
                <div
                  onClick={() => handleOpenNote('note-1')}
                  className="relative group rounded-xl p-5 cursor-pointer bg-gradient-to-br from-slate-900 to-brand-950 border border-slate-700 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center border border-brand-500/30">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-emerald-300 font-bold flex items-center gap-1 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/40">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" /> Online View Only
                    </span>
                  </div>

                  <div className="space-y-1 text-left">
                    <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Module 1: Chain Surveying</div>
                    <div className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                      Complete Formula Sheet & Error Correction Notes
                    </div>
                    <div className="text-xs text-slate-400 pt-1">
                      Includes Metric Chain tallies, Sag & Pull corrections, Inverted staff tricks, and repeated PSC questions.
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-slate-900/70 rounded-xl p-3.5 border border-slate-700/60 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300 font-medium">
                    <span>Includes Handwritten Formulae:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Proven Shortcut Tricks
                    </span>
                  </div>
                  <div className="text-slate-400">
                    Covers 100% repeated Kerala PSC questions without confusing textbook derivations.
                  </div>
                </div>

                <button
                  onClick={() => handleOpenNote('note-1')}
                  className="w-full py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Study Notes & Formulas Online</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">10 Modules</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              100 Marks Official Syllabus
            </div>
          </div>
          <div className="space-y-1 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-600">Handwritten</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Online Notes & Formulas
            </div>
          </div>
          <div className="space-y-1 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">-0.33 Marking</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Kerala PSC Pattern Mocks
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Expert Faculty</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Direct Mentor Guidance
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Everything You Need To Secure Selection
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            All-In-One Kerala PSC Survey Learning Platform
          </h2>
          <p className="text-slate-600 text-sm">
            Carefully engineered based on actual exam trends, repeated questions, and proven shortcut methods for Kerala PSC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div
            onClick={() => setActiveTab('notes')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-pointer group text-left space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                Handwritten Study Notes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concise topic-wise notes, chapter summaries, and downloadable PDF formula sheets designed for quick revision.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-brand-600 flex items-center gap-1">
              Explore Study Notes ({studyNotes.length}) <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div
            onClick={() => setActiveTab('pyq')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-pointer group text-left space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                Solved PYQ Question Bank
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Year-wise papers from 2024 to 2018 with official Kerala PSC revised final answer keys and interactive practice mode.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-blue-600 flex items-center gap-1">
              Practice PYQs ({pyqPapers.length} Papers) <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div
            onClick={() => setActiveTab('mocktests')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-pointer group text-left space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                Kerala PSC Mock Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-length timed test environment with real PSC marking (+1 / -0.33), instant scorecard, rank prediction, and ranker tips.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-amber-600 flex items-center gap-1">
              Take Mock Test ({mockTests.length} Tests) <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 4 */}
          <div
            onClick={() => setActiveTab('doubts')}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all cursor-pointer group text-left space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                1-on-1 Doubt Clearance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post your doubts and tricky numerical questions to get verified step-by-step solutions directly from your faculty.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-purple-600 flex items-center gap-1">
              Join Doubt Forum <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Modules Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Exam Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Detailed Kerala PSC Survey Syllabus Coverage
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Every module is broken down into concise revision summaries and high-yield numerical formulas.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('pyq')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl transition self-start md:self-auto"
            >
              View All 10 Syllabus Portions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.id}
                onClick={() => setActiveTab('pyq')}
                className="bg-slate-800/80 hover:bg-slate-800 p-5 rounded-2xl border border-slate-700/80 hover:border-brand-500 transition cursor-pointer space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Module {mod.order < 10 ? `0${mod.order}` : mod.order}
                    </span>
                    <span className="text-[11px] font-extrabold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                      {mod.badge || `${mod.marks} Marks`}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm group-hover:text-brand-400 transition-colors">
                      {mod.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-brand-400 font-semibold">
                  <span>Practice Questions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Credibility Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-50 via-emerald-50/50 to-white rounded-3xl p-8 sm:p-12 border border-brand-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left space-y-4">
            <div className="relative inline-block">
              <img
                src="/instructor_joseph_josey.png"
                alt="Joseph Josey - Course Director & Faculty"
                className="w-36 h-36 rounded-2xl object-cover object-[center_20%] ring-4 ring-brand-500 mx-auto lg:mx-0 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> Course Director
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Joseph Josey</h3>
              <p className="text-xs font-semibold text-brand-700">Course Director & Head Mentor • Idukki</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex flex-wrap gap-2">
              <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                Kerala PSC Survey & Land Records
              </span>
              <span className="bg-navy-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-300" />
                Kerala Water Authority (KWA)
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              "Learn the exact exam strategies to secure top selection without confusion."
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              When preparing for technical exams like Surveyor Grade II or KWA Overseer, students often waste months memorizing huge textbooks. My curriculum focuses exclusively on what Kerala PSC actually tests: high-yield numerical formulas, inverted staff tricks, Total Station EDM carrier principles, and Kerala Survey & Boundaries Act sections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-brand-200/80 shadow-sm text-xs">
                <div className="font-bold text-brand-900">Zero Fluff Notes</div>
                <div className="text-slate-500">Concise handwritten revision summaries</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-brand-200/80 shadow-sm text-xs">
                <div className="font-bold text-brand-900">Negative Mark Control</div>
                <div className="text-slate-500">Master 3-round elimination method</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-brand-200/80 shadow-sm text-xs">
                <div className="font-bold text-brand-900">Daily Doubt Support</div>
                <div className="text-slate-500">Direct response from the course mentor</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final Enrollment Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-6 border border-brand-800/80">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/20 text-brand-400 border border-brand-400/30 flex items-center justify-center mx-auto">
            <Compass className="w-8 h-8 text-brand-300" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start Your Kerala PSC Survey Journey Today
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Enroll now to get instant access to all handwritten notes, formula sheets, previous year solved papers, mock test series, and personalized doubt clearance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsEnrollmentModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Enroll Now / Demo Login</span>
            </button>
            <button
              onClick={() => setActiveTab('mocktests')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition"
            >
              <CheckSquare className="w-4 h-4 text-amber-400" />
              <span>Try a Free Mock Test</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
