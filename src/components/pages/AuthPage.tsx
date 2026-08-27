import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { supabase } from '../../supabaseClient';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User as UserIcon,
  Phone,
  MapPin,
  Target,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  CheckCircle2,
  Compass,
  GraduationCap,
  KeyRound,
  BookOpen,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const {
    loginWithCredentials,
    loginWithGoogle,
    registerWithCredentials,
    loginInstructor,
    showToast,
    setActiveTab
  } = useApp();

  const [mode, setMode] = useState<'login' | 'signup' | 'instructor'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Form Fields
  const [email, setEmail] = useState('aswathi.surveyor@gmail.com');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('Aswathi Nair');
  const [phone, setPhone] = useState('+91 98471 23456');
  const [district, setDistrict] = useState('Palakkad');
  const [targetExam, setTargetExam] = useState('Kerala PSC Surveyor Gr. II');
  const [instructorPin, setInstructorPin] = useState('');

  const keralaDistricts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
    'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur',
    'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad',
    'Kannur', 'Kasaragod'
  ];

  // 1) Sign In using Supabase Auth
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!email.trim() || !password.trim()) {
      setAuthError('Please enter your email and password');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Successful login -> Redirect user to Home page ("/")
      loginWithCredentials(data.user?.email || email, password);
      setActiveTab('home');
      window.history.pushState({}, '', '/');
      showToast('Login successful! Welcome back.', 'success');
    } catch (err: any) {
      setAuthError(err.message || 'An error occurred while logging in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // 2) Sign Up using Supabase Auth
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!email.trim() || !password.trim()) {
      setAuthError('Please enter your email and password');
      return;
    }

    if (password.length < 6) {
      setAuthError('Password should be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim()
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      // Successful signup -> Redirect user to Home page ("/")
      registerWithCredentials(name, data.user?.email || email, phone, district, targetExam);
      setActiveTab('home');
      window.history.pushState({}, '', '/');
      showToast('Account created successfully! Welcome to the academy.', 'success');
    } catch (err: any) {
      setAuthError(err.message || 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstructorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginInstructor(instructorPin);
  };

  const handleForgotPassword = () => {
    showToast('Password reset link sent to your registered email.', 'info');
  };

  return (
    <div className="min-h-screen bg-[#fbfdfc] flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-sans">
      
      {/* Decorative Pastel Background Blobs / Floating Circles (matching reference mockup) */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-12 w-64 h-64 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Floating small pastel dots (exact match to screenshot) */}
      <div className="hidden lg:block absolute top-16 left-20 w-4 h-4 rounded-full bg-emerald-300/60" />
      <div className="hidden lg:block absolute bottom-24 left-1/3 w-5 h-5 rounded-full bg-emerald-400/50" />
      <div className="hidden lg:block absolute top-1/2 left-16 w-3 h-3 rounded-full bg-amber-300/60" />
      <div className="hidden lg:block absolute top-20 right-1/2 w-4 h-4 rounded-full bg-teal-400/50" />
      <div className="hidden lg:block absolute bottom-1/3 right-12 w-3.5 h-3.5 rounded-full bg-amber-300/50" />
      <div className="hidden lg:block absolute bottom-12 right-1/4 w-4 h-4 rounded-full bg-emerald-300/60" />

      {/* Main Split-Screen Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10 min-h-[640px]">
        
        {/* ================================================================= */}
        {/* LEFT COLUMN: AUTHENTICATION FORM                                 */}
        {/* ================================================================= */}
        <div className="lg:col-span-6 xl:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Top Brand Pill */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <Compass className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '10s' }} />
                <span>SurveyRank eLearning Kerala PSC</span>
              </div>

              {/* Mode Switch Pills */}
              <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => { setMode('login'); setAuthError(null); }}
                  className={`px-3 py-1 rounded-lg transition ${
                    mode === 'login' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setAuthError(null); }}
                  className={`px-3 py-1 rounded-lg transition ${
                    mode === 'signup' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 mb-6">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {mode === 'login' && 'Login'}
                {mode === 'signup' && 'Create Account'}
                {mode === 'instructor' && 'Instructor Portal'}
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm">
                {mode === 'login' && 'Please enter your username and password to login'}
                {mode === 'signup' && 'Create your student account to access free study documents'}
                {mode === 'instructor' && 'Enter instructor security PIN to access administrative controls'}
              </p>
            </div>

            {/* GOOGLE SIGN IN BUTTON (Prominent option) */}
            {mode !== 'instructor' && (
              <div className="mb-5">
                <button
                  type="button"
                  onClick={loginWithGoogle}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-700 text-xs sm:text-sm transition flex items-center justify-center gap-3 shadow-xs active:scale-[0.99]"
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
                  <span>Continue with Google</span>
                </button>

                <div className="flex items-center my-4">
                  <div className="flex-1 border-t border-slate-200" />
                  <span className="px-3 text-[11px] uppercase font-bold text-slate-400">
                    or with username & password
                  </span>
                  <div className="flex-1 border-t border-slate-200" />
                </div>
              </div>
            )}

            {/* FORM 1: LOGIN MODE */}
            {mode === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email / Username
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. imanaidil5@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Kata Sandi / Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                    />
                    <span>Ingat saya / Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Lupa Kata Sandi ?
                  </button>
                </div>

                {/* Error message under login form */}
                {authError && mode === 'login' && (
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{authError}</span>
                  </div>
                )}

                {/* Submit Button (Vibrant Emerald matching mockup) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#059669] hover:bg-[#047857] disabled:opacity-75 active:scale-[0.99] text-white font-bold rounded-xl shadow-md shadow-emerald-700/20 text-sm transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Logging in...</span>
                    </>
                  ) : (
                    <>
                      <span>Login</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* FORM 2: SIGN UP / REGISTER MODE */}
            {mode === 'signup' && (
              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Varma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98470 12345"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      District (Kerala)
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    >
                      {keralaDistricts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target PSC Exam
                    </label>
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    >
                      <option value="Kerala PSC Surveyor Gr. II">Surveyor Gr. II</option>
                      <option value="KWA Tracer / Overseer Gr. III">KWA Tracer / Overseer</option>
                      <option value="Draftsman Gr. II / Town Planning">Draftsman Gr. II</option>
                      <option value="Combined Survey Technical Exams">Combined Survey Exams</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Create Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Error message under signup form */}
                {authError && mode === 'signup' && (
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{authError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#059669] hover:bg-[#047857] disabled:opacity-75 active:scale-[0.99] text-white font-bold rounded-xl shadow-md shadow-emerald-700/20 text-sm transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Register & Start Free Learning</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* FORM 3: INSTRUCTOR PIN MODE */}
            {mode === 'instructor' && (
              <form onSubmit={handleInstructorSubmit} className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 flex items-center gap-3.5">
                  <img
                    src="/instructor_joseph_josey.png"
                    alt="Joseph Josey"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400 flex-shrink-0 shadow"
                  />
                  <div>
                    <div className="font-extrabold text-purple-950 text-sm">
                      Joseph Josey
                    </div>
                    <div className="text-[11px] text-purple-700">
                      Course Director & Faculty • Kerala PSC Surveyor
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Instructor Security PIN
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={instructorPin}
                      onChange={(e) => setInstructorPin(e.target.value)}
                      placeholder="Enter 4-digit PIN (default: 1234)"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 text-slate-900 text-sm outline-none transition bg-white"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Default PIN: 1234</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-800 hover:bg-purple-900 active:scale-[0.99] text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>Unlock Instructor Admin Controls</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    ← Back to Student Login
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Bottom Switcher & Instructor Link */}
          <div className="pt-6 border-t border-slate-100 space-y-2.5 text-center">
            {mode === 'login' ? (
              <p className="text-xs text-slate-600">
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setAuthError(null); }}
                  className="font-bold text-emerald-600 hover:text-emerald-700 underline"
                >
                  Register disini / Sign Up
                </button>
              </p>
            ) : mode === 'signup' ? (
              <p className="text-xs text-slate-600">
                Sudah punya akun?{' '}
                <button
                  type="button"
                  onClick={() => { setMode('login'); setAuthError(null); }}
                  className="font-bold text-emerald-600 hover:text-emerald-700 underline"
                >
                  Login disini / Sign In
                </button>
              </p>
            ) : null}

            {mode !== 'instructor' && (
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <button
                  type="button"
                  onClick={() => setMode('instructor')}
                  className="hover:text-purple-700 font-semibold flex items-center gap-1 transition"
                >
                  <span>🛡️ Instructor Access</span>
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => loginWithCredentials('guest.student@gmail.com')}
                  className="hover:text-emerald-700 font-semibold transition"
                >
                  ⚡ Quick Free Guest Demo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: HERO & ILLUSTRATION PANEL (eLearning eRKAM style)   */}
        {/* ================================================================= */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 bg-[#f0fdf4] m-4 rounded-2xl border border-emerald-100 p-8 flex-col justify-between relative overflow-hidden">
          
          {/* Top Logo / Badge */}
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-right leading-tight">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">eLearning</div>
                <div className="text-sm font-extrabold text-emerald-900 tracking-tight">SurveyRank PSC</div>
              </div>
            </div>
          </div>

          {/* Central Education & Surveying Vector Illustration */}
          <div className="py-6 flex flex-col items-center justify-center">
            <svg
              className="w-full max-w-[340px] h-auto drop-shadow-md"
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ground & Book Platform */}
              <rect x="50" y="270" width="300" height="12" rx="6" fill="#10B981" fillOpacity="0.8" />
              <rect x="70" y="258" width="260" height="14" rx="4" fill="#065F46" />
              <rect x="85" y="246" width="230" height="14" rx="3" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />

              {/* Computer Screen / Virtual Classroom */}
              <rect x="100" y="90" width="200" height="135" rx="16" fill="#064E3B" />
              <rect x="110" y="100" width="180" height="115" rx="10" fill="#ECFDF5" />
              <rect x="185" y="225" width="30" height="24" fill="#064E3B" />
              <rect x="165" y="245" width="70" height="6" rx="3" fill="#047857" />

              {/* Target Board / Rank Target */}
              <circle cx="90" cy="95" r="28" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
              <circle cx="90" cy="95" r="18" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2.5" />
              <circle cx="90" cy="95" r="8" fill="#EF4444" />
              {/* Arrow */}
              <path d="M72 110L86 98" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
              <polygon points="86,98 83,105 88,103" fill="#1E293B" />

              {/* Instructor on Screen (Joseph Josey) */}
              <rect x="165" y="125" width="70" height="90" rx="35" fill="#10B981" />
              {/* Face */}
              <circle cx="200" cy="130" r="18" fill="#FBBF24" />
              {/* Hair/Beard */}
              <path d="M186 128C186 120 214 120 214 128" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
              {/* Body / Coat */}
              <path d="M178 145C178 145 186 160 200 160C214 160 222 145 222 145L226 215H174L178 145Z" fill="#047857" />
              {/* White Shirt collar */}
              <polygon points="200,160 193,145 207,145" fill="#FFFFFF" />

              {/* Pointer / Teaching Gesture */}
              <line x1="205" y1="140" x2="225" y2="115" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />

              {/* Student on Left Studying */}
              <circle cx="80" cy="195" r="12" fill="#FBBF24" />
              <path d="M70 246C70 215 90 215 90 246" fill="#059669" />
              <rect x="74" y="222" width="22" height="14" rx="2" fill="#3B82F6" />

              {/* Student on Right Reading Book */}
              <circle cx="320" cy="195" r="12" fill="#FBBF24" />
              <path d="M310 246C310 215 330 215 330 246" fill="#F97316" />
              {/* Open Book */}
              <polygon points="308,220 318,225 328,220 328,232 318,237 308,232" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />

              {/* Floating Formulas / Symbols */}
              <rect x="140" y="60" width="120" height="20" rx="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
              <text x="155" y="74" fill="#047857" fontSize="10" fontWeight="bold">D = 100·s + c</text>

              {/* Certified Medal / Badge */}
              <circle cx="315" cy="115" r="16" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
              <polygon points="315,108 318,114 324,115 319,119 321,125 315,121 309,125 311,119 306,115 312,114" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Bottom Heading & Description (matching mockup) */}
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              Master Kerala PSC Surveyor Grade II & Overseer
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Comprehensive Kerala PSC preparation guided by Course Director Joseph Josey. Access free introductory formula notes, 87 MCQ Master Series, and complete PSC syllabus breakdown.
            </p>

            {/* Benefit Bullets */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-emerald-800">
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Free Notes & PDFs
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                -0.33 Timed Mock Tests
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Solved PYQ Bank
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
