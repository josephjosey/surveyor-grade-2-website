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

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentEmail.trim()) return;

    setCurrentUser({
      ...DEMO_STUDENT,
      email: studentEmail,
      name: studentEmail.split('@')[0].replace('.', ' ').toUpperCase() || 'Aswathi Nair'
    });

    showToast(`Logged in successfully as Student (${studentEmail})`, 'success');
    setActiveTab('dashboard');
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
          <form onSubmit={handleStudentLogin} className="p-6 space-y-4 text-xs">
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
              <span>Login to Student Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>New student?</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsEnrollmentModalOpen(true);
                }}
                className="font-bold text-brand-600 hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Enroll in Course (₹1,999)</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Instructor Login Form */}
        {authRole === 'instructor' && (
          <form onSubmit={handleInstructorLogin} className="p-6 space-y-4 text-xs">
            <div className="bg-purple-50 p-3 rounded-xl border border-purple-200 text-purple-950 flex items-center gap-3">
              <img
                src="/instructor_joseph_josey.png"
                alt="Joseph Josey"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400 flex-shrink-0"
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
