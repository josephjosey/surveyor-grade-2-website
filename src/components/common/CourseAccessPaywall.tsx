import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Lock,
  Crown,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FileCheck,
  CheckSquare,
  HelpCircle,
  ShieldCheck,
  Home,
  Flame,
  Zap,
  Award
} from 'lucide-react';

export const CourseAccessPaywall: React.FC = () => {
  const { setActiveTab, openEnrollmentModal } = useApp();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl w-full space-y-8">
        {/* Main Paywall Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-center">
          
          {/* Top Hero Gradient Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-navy-950 text-white p-8 sm:p-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              {/* Lock Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Course Purchase Required</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Unlock Complete Access to{' '}
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-brand-300 bg-clip-text text-transparent">
                  Kerala PSC Survey Academy
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Free preview mode only provides access to the platform overview on the Home page. Purchase the complete course or mock series to immediately unlock all 10 syllabus modules, 1,430+ PYQs, and 21 Kerala PSC pattern mock tests.
              </p>

              {/* Malayalam Note */}
              <p className="text-brand-300 text-xs font-semibold bg-brand-900/60 p-2.5 rounded-xl border border-brand-700/60 ml-text">
                ഈ വിഭാഗം കാണുന്നതിനായി കോഴ്സ് പർച്ചേസ് ചെയ്യുക. എല്ലാ ഹാൻഡ് റിട്ടൺ നോട്സുകളും മോക്ക് ടെസ്റ്റുകളും ഉടൻ അൺലോക്ക് ചെയ്യപ്പെടും.
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">All 10 Syllabus Modules & Formulas</h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    Concise handwritten PDF notes, chapter takeaways, and high-yield formula sheets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">1,430+ Solved PYQ & MCQ Bank</h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    Year-wise papers (2024–2018) with official Kerala PSC revised final answer keys & explanations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">21 Mock Tests (-0.33 Marking)</h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    Full-length exam simulation, instant rank prediction, percentile & negative mark control.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">1-on-1 Faculty Doubt Clearing</h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    Direct personal doubt support from Joseph Josey (Course Director & Head Mentor).
                  </p>
                </div>
              </div>
            </div>

            {/* Price Callout Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-emerald-500/10 rounded-2xl p-6 border-2 border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3 text-red-600" /> Limited Time 60% OFF
                  </span>
                  <span className="text-xs font-bold text-slate-600">Full Lifetime Access</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Complete Master Course — ₹1,999
                </h3>
                <p className="text-xs text-slate-600">
                  <span className="line-through text-slate-400 font-bold mr-1.5">₹4,999</span>
                  Includes all notes, 1,430+ MCQs, 21 mock tests, and mentor guidance until your exam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => openEnrollmentModal('plan-master')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-brand-600/30 transition transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Purchase Master Course (₹1,999)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Alternative Options & Back to Home */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
              <button
                onClick={() => openEnrollmentModal('plan-mock')}
                className="text-slate-600 hover:text-brand-600 font-bold underline decoration-slate-300 hover:decoration-brand-500 transition"
              >
                Need Mock Tests Only? Enroll in Mock Series for ₹499
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold hover:bg-slate-100 px-3 py-1.5 rounded-lg transition"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return to Home Page</span>
              </button>
            </div>

          </div>
        </div>

        {/* Security & Guarantee Footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Instant Unlocking Upon Purchase</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-600" />
            <span>100% Kerala PSC Syllabus Alignment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>UPI, GPay, PhonePe, Cards Accepted</span>
          </div>
        </div>
      </div>
    </div>
  );
};
