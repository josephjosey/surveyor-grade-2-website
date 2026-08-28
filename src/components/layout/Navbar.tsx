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
  Sparkles,
  LayoutDashboard,
  LogOut,
  CheckCircle,
  Crown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    role,
    activeTab,
    setActiveTab,
    setIsEnrollmentModalOpen,
    logoutUser
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Student Navigation Tabs
  const studentNavItems: { id: NavigationTab; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'notes', label: 'Study Notes', icon: BookOpen },
    { id: 'pyq', label: 'PYQ Bank', icon: FileCheck },
    { id: 'mocktests', label: 'Mock Tests', icon: CheckSquare },
    { id: 'doubts', label: 'Doubts Forum', icon: HelpCircle },
  ];

  // Instructor Navigation Tabs
  const instructorNavItems: { id: NavigationTab; label: string; icon: any }[] = [
    { id: 'admin', label: 'Admin Portal', icon: ShieldAlert },
    { id: 'notes', label: 'Study Notes', icon: BookOpen },
    { id: 'pyq', label: 'PYQ Bank', icon: FileCheck },
    { id: 'mocktests', label: 'Mock Tests', icon: CheckSquare },
    { id: 'doubts', label: 'Doubts Forum', icon: HelpCircle },
    { id: 'home', label: 'Student View', icon: Compass },
  ];

  const currentNavItems = role === 'instructor' ? instructorNavItems : studentNavItems;

  const handleNavClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Academy Branding */}
          <div
            onClick={() => handleNavClick(role === 'instructor' ? 'admin' : 'home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-slate-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-900 text-base tracking-tight group-hover:text-brand-600 transition-colors">
                  SurveyRank
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-200 px-1.5 py-0.5 rounded">
                  Kerala PSC
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">
                {role === 'instructor' ? 'Faculty Portal' : 'Surveyor Gr. II & KWA'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {currentNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition whitespace-nowrap ${
                    isActive
                      ? role === 'instructor' && item.id === 'admin'
                        ? 'bg-purple-900 text-white shadow-sm'
                        : 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Profile & Action Section */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Upgrade Plan (Students on free plan only) */}
            {role !== 'instructor' && (
              currentUser.subscriptionPlan === 'free' ? (
                <button
                  onClick={() => setIsEnrollmentModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-black px-3.5 py-2 rounded-xl shadow-xs transition active:scale-95 shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Upgrade</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Enrolled</span>
                </span>
              )
            )}

            {/* Profile Info */}
            <div
              onClick={() => handleNavClick(role === 'instructor' ? 'admin' : 'dashboard')}
              className="flex items-center gap-2.5 pl-2 py-1 cursor-pointer group rounded-xl hover:bg-slate-50 transition border-l border-slate-200"
              title="View Profile"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full ring-2 ring-brand-500/50 object-cover shrink-0"
              />
              <div className="text-left hidden md:block leading-tight">
                <div className="text-xs font-bold text-slate-900 group-hover:text-brand-600 truncate max-w-[110px]">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {role === 'instructor' ? (
                    'Faculty Admin'
                  ) : currentUser.stateRank ? (
                    <span className="text-amber-700 font-extrabold inline-flex items-center gap-0.5">
                      <Crown className="w-2.5 h-2.5 text-amber-500" /> Rank #{currentUser.stateRank}
                    </span>
                  ) : currentUser.subscriptionPlan === 'master' ? (
                    'Master Plan'
                  ) : currentUser.subscriptionPlan === 'mock_only' ? (
                    'Mock Plan'
                  ) : (
                    'Free Tier'
                  )}
                </div>
              </div>
            </div>

            {/* Logout Action */}
            <button
              onClick={logoutUser}
              title="Sign Out"
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-fadeIn">
          {currentNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isActive ? 'bg-slate-900 text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">{currentUser.name}</div>
                <div className="text-[10px] text-slate-500">
                  {role === 'instructor' ? 'Course Instructor' : 'Enrolled Student'}
                </div>
              </div>
            </div>

            <button
              onClick={logoutUser}
              className="flex items-center gap-1 text-xs text-red-600 font-semibold px-3 py-1.5 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
