import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { supabase } from './supabaseClient';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './components/pages/LandingPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { ClassesPage } from './components/pages/ClassesPage';
import { PYQPage } from './components/pages/PYQPage';
import { MockTestsPage } from './components/pages/MockTestsPage';
import { DoubtsForumPage } from './components/pages/DoubtsForumPage';
import { AdminPortalPage } from './components/pages/AdminPortalPage';
import { EnrollmentModal } from './components/modals/EnrollmentModal';
import { AuthModal } from './components/modals/AuthModal';
import { AuthPage } from './components/pages/AuthPage';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const {
    activeTab,
    notifications,
    removeToast,
    isAuthModalOpen,
    setIsAuthModalOpen,
    authDefaultRole,
    isAuthenticated,
    setIsAuthenticated
  } = useApp();

  // Protect private pages with supabase.auth.getSession() — if no session, redirect to /login
  useEffect(() => {
    const protectPrivatePages = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          setIsAuthenticated(false);
          if (window.location.pathname !== '/login') {
            window.history.pushState({}, '', '/login');
          }
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setIsAuthenticated(false);
        if (window.location.pathname !== '/login') {
          window.history.pushState({}, '', '/login');
        }
      }
    };

    protectPrivatePages();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setIsAuthenticated(false);
        if (window.location.pathname !== '/login') {
          window.history.pushState({}, '', '/login');
        }
      } else {
        setIsAuthenticated(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setIsAuthenticated]);

  // Toast Container Component
  const toastContainer = (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {notifications.map((toast) => {
        let bgClass = 'bg-slate-900 text-white border-slate-700';
        let icon = <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />;

        if (toast.type === 'success') {
          bgClass = 'bg-emerald-950 text-emerald-100 border-emerald-700 shadow-emerald-950/40';
          icon = <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
        } else if (toast.type === 'warning') {
          bgClass = 'bg-amber-950 text-amber-100 border-amber-700 shadow-amber-950/40';
          icon = <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />;
        } else if (toast.type === 'error') {
          bgClass = 'bg-red-950 text-red-100 border-red-700 shadow-red-950/40';
          icon = <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-3.5 rounded-xl border shadow-xl flex items-center justify-between gap-3 text-xs font-semibold animate-fadeIn ${bgClass}`}
          >
            <div className="flex items-center gap-2.5">
              {icon}
              <span className="leading-snug">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );

  // If user is not authenticated, show the dedicated eLearning Login / Sign-up Gateway
  if (!isAuthenticated) {
    return (
      <>
        <AuthPage />
        {toastContainer}
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {activeTab === 'home' && <LandingPage />}
        {activeTab === 'dashboard' && <DashboardPage />}
        {(activeTab === 'notes' || (activeTab as any) === 'classes') && <ClassesPage />}
        {activeTab === 'pyq' && <PYQPage />}
        {activeTab === 'mocktests' && <MockTestsPage />}
        {activeTab === 'doubts' && <DoubtsForumPage />}
        {activeTab === 'admin' && <AdminPortalPage />}
      </main>

      <Footer />

      {/* Global Plan Purchase Modal */}
      <EnrollmentModal />

      {/* Global Portal Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultRole={authDefaultRole}
      />

      {/* Floating Toast Notification Container */}
      {toastContainer}
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
