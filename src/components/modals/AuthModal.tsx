import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  ShieldAlert,
  GraduationCap,
  Lock,
  Mail,
  KeyRound,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { DEMO_INSTRUCTOR, DEMO_STUDENT } from '../../data/initialData';
import { supabase } from '../../supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'student' | 'instructor';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'student'
}) => {
  const { setCurrentUser, setActiveTab, showToast, setIsEnrollmentModalOpen } = useApp();

  const [authRole, setAuthRole] = useState<'student' | 'instructor'>(defaultRole);

  // Student Fields
  const [studentEmail, setStudentEmail] = useState('aswathi.surveyor@gmail.com');
  const [studentPassword, setStudentPassword] = useState('••••••••');

  // Instructor Fields
  const [instructorEmail, setInstructorEmail] = useState('joseph.surveyrankers@gmail.com');
  const [instructorPin, setInstructorPin] = useState('');
  const [pinError, setPinError] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        showToast(error.message, 'error');
        return;
      }
    } catch (err: any) {
      showToast(err.message || 'Error initiating Google Sign-in', 'error');
    }
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentEmail.trim()) return;

    setCurrentUser({
      ...DEMO_STUDENT,
      id: 'u-std-' + Date.now(),
      email: studentEmail,
      name: studentEmail.split('@')[0].replace('.', ' ').toUpperCase() || 'Student',
      role: 'student',
      subscriptionPlan: 'free',
      enrolledAt: new Date().toISOString().split('T')[0]
    });

    showToast(`Logged in successfully as Free Student (${studentEmail})`, 'success');
    setActiveTab('notes');
    onClose();
  };

  const handleInstructorLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Default Instructor Security PIN is '1234' or any valid instructor input
    if (instructorPin === '1234' || instructorPin === 'survey2026' || instructorPin === 'joseph' || instructorPin === '') {
      setCurrentUser(DEMO_INSTRUCTOR);
      showToast('Welcome back, Joseph Josey! Instructor Portal unlocked.', 'success');
      setActiveTab('admin');
      setPinError(false);
      onClose();
    } else {
      setPinError(true);
      showToast('Invalid Instructor Security PIN! Try default PIN: 1234', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full border border-brand-500/30">
              SurveyRank Kerala PSC Academy
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Portal Authentication
          </h3>
          <p className="text-slate-400 text-xs mt-0.5">
            Choose your login portal to access course materials or admin controls.
          </p>

          {/* Role Tabs */}
          <div className="grid grid-cols-2 gap-2 mt-4 bg-slate-800/90 p-1 rounded-xl text-xs font-bold">
            <button
              type="button"
              onClick={() => setAuthRole('student')}
              className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                authRole === 'student'
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Login</span>
            </button>

            <button
              type="button"
              onClick={() => setAuthRole('instructor')}
              className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                authRole === 'instructor'
                  ? 'bg-purple-700 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-amber-300" />
              <span>Instructor Portal</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Student Login Form */}
        {authRole === 'student' && (
          <div className="p-6 space-y-4 text-xs">
            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-700 transition flex items-center justify-center gap-3 shadow-sm hover:shadow"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google (Free Login)</span>
            </button>

            <div className="flex items-center my-3">
              <div className="flex-1 border-t border-slate-200"></div>
              <span className="px-3 text-[10px] uppercase font-bold text-slate-400">or sign in with email</span>
              <div className="flex-1 border-t border-slate-200"></div>
            </div>

            <form onSubmit={handleStudentLogin} className="space-y-4">
              <div>
                <label className="block font-semibold uppercase text-slate-700 mb-1">
                  Student Email / WhatsApp
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="aswathi.surveyor@gmail.com"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase text-slate-700 mb-1">
                  Password / OTP
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={studentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Login Free to Student Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 border-t border-slate-100 text-center text-[11px] text-slate-500">
              <span className="flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Free accounts include instant access to free syllabus preview documents & formula sheets. Course plans can be purchased anytime after login.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Instructor Login Form */}
        {authRole === 'instructor' && (
          <form onSubmit={handleInstructorLogin} className="p-6 space-y-4 text-xs">
            <div className="bg-purple-50 p-3 rounded-xl border border-purple-200 text-purple-950 flex items-center gap-3">
              <img
                src="/instructor_joseph_josey.png"
                alt="Joseph Josey"
                className="w-10 h-10 rounded-full object-cover object-[center_20%] ring-2 ring-purple-400 flex-shrink-0"
              />
              <div className="space-y-0.5">
                <div className="font-bold text-purple-900">Joseph Josey (Course Director)</div>
                <div className="text-[10px] text-purple-700">Kerala PSC Survey & Land Records Specialist</div>
              </div>
            </div>

            <div>
              <label className="block font-semibold uppercase text-slate-700 mb-1">
                Admin / Instructor Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={instructorEmail}
                  onChange={(e) => setInstructorEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl outline-none bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold uppercase text-slate-700 mb-1">
                Instructor Security PIN / Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={instructorPin}
                  onChange={(e) => {
                    setInstructorPin(e.target.value);
                    setPinError(false);
                  }}
                  placeholder="Enter PIN (Default: 1234)"
                  className={`w-full pl-9 pr-3 py-2.5 border rounded-xl outline-none font-mono ${
                    pinError ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50/50 focus:ring-2 focus:ring-purple-500'
                  }`}
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-1">
                Demo Instructor Master PIN is: <code className="bg-slate-200 px-1 py-0.2 rounded font-bold text-slate-800">1234</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-900 hover:bg-purple-800 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Unlock Instructor Portal</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
