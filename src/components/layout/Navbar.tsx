import React, { useState } from 'react';
import { useApp, NavigationTab } from '../../context/AppContext';
import {
  Compass,
  BookOpen,
  FileCheck,
  CheckSquare,
  HelpCircle,
  ShieldAlert,
  Menu,
  X,
  Award,
  Sparkles,
  LayoutDashboard,
  GraduationCap,
  LogOut,
  KeyRound,
  CheckCircle
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    role,
    setRole,
    activeTab,
    setActiveTab,
    studyNotes,
    mockTests,
    doubts,
    setIsEnrollmentModalOpen,
    openAuthModal,
    logoutUser
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; icon: any; count?: number; highlight?: boolean }[] = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'notes', label: 'Study Notes & Formulas', icon: BookOpen, count: studyNotes.length },
    { id: 'pyq', label: 'PYQ Bank', icon: FileCheck },
    { id: 'mocktests', label: 'Mock Tests', icon: CheckSquare, count: mockTests.length, highlight: true },
    { id: 'doubts', label: 'Q&A Doubts', icon: HelpCircle, count: doubts.length },
  ];

  const mobileNavItems = role === 'instructor' 
    ? [...navItems, { id: 'admin' as NavigationTab, label: 'Instructor Portal', icon: ShieldAlert, highlight: true }]
    : navItems;

  const handleNavClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Banner with Rank Credentials & Dual Portal Access */}
      <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-navy-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-400/30 text-[11px]">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Kerala PSC Survey & Land Records
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="inline-flex items-center gap-1 bg-emerald-400/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 text-[11px]">
              <Award className="w-3.5 h-3.5 text-emerald-300" />
              Kerala Water Authority Coaching
            </span>
          </div>

          {/* Quick Dual Login Switcher Bar */}
          <div className="flex items-center gap-2">
            {role === 'instructor' ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-purple-300 font-bold flex items-center gap-1 bg-purple-900/60 px-2 py-0.5 rounded-full border border-purple-400/40">
                  <ShieldAlert className="w-3 h-3 text-purple-300" />
                  Logged in as Joseph Josey (Instructor)
                </span>
                <button
                  onClick={logoutUser}
                  className="text-[11px] text-slate-300 hover:text-white underline flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded"
                >
                  <LogOut className="w-3 h-3" />
                  <span>Student View</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => openAuthModal('student')}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-brand-300" />
                  <span>Student Login</span>
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => openAuthModal('instructor')}
                  className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 font-semibold"
                >
                  <KeyRound className="w-3.5 h-3.5 text-amber-300" />
                  <span>Instructor Login</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-navy-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-brand-600 transition-colors">
                  SurveyRank
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-800 px-1.5 py-0.5 rounded">
                  Kerala PSC
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium ml-text">
                കേരള പി.എസ്.സി സർവേയർ & KWA അക്കാദമി
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 shadow-xs border border-brand-200/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                  <span className="whitespace-nowrap">
                    {item.id === 'notes' ? (
                      <>
                        <span>Study Notes</span>
                        <span className="hidden xl:inline"> & Formulas</span>
                      </>
                    ) : (
                      item.label
                    )}
                  </span>
                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] min-w-[18px] h-[18px] px-1 rounded-full font-bold inline-flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                  {item.highlight && !item.count && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Profile / Enrollment */}
          <div className="hidden sm:flex items-center gap-2.5">
            {role === 'instructor' ? (
              <button
                onClick={() => handleNavClick('admin')}
                className="inline-flex items-center gap-2 bg-purple-900 hover:bg-purple-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                Instructor Portal
              </button>
            ) : currentUser.subscriptionPlan && currentUser.subscriptionPlan !== 'free' ? (
              <button
                onClick={() => setIsEnrollmentModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-xs transition"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>Enrolled Member</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEnrollmentModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-xs transition active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Purchase Plan</span>
                </button>
                <button
                  onClick={() => openAuthModal('student')}
                  className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-slate-200 transition"
                >
                  <span>Login / Switch</span>
                </button>
              </div>
            )}

            {/* User Avatar & Name */}
            <div
              onClick={() => handleNavClick(role === 'instructor' ? 'admin' : 'dashboard')}
              className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer group"
              title="Click to view Profile"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full ring-2 ring-brand-500 object-cover"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800 group-hover:text-brand-600 leading-tight">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-slate-500">
                  {role === 'instructor'
                    ? 'Course Instructor'
                    : currentUser.subscriptionPlan === 'master'
                    ? 'Master Enrolled'
                    : currentUser.subscriptionPlan === 'mock_only'
                    ? 'Mock Series Plan'
                    : currentUser.subscriptionPlan === 'crash'
                    ? 'Crash Course Plan'
                    : 'Free Tier (Free Docs)'}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-fadeIn">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full font-bold">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                openAuthModal('instructor');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 bg-purple-900 text-white text-xs font-semibold rounded-lg"
            >
              Instructor Portal Login
            </button>
            <button
              onClick={() => {
                setIsEnrollmentModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 bg-brand-600 text-white text-xs font-semibold rounded-lg shadow"
            >
              Enroll Now / Student Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
