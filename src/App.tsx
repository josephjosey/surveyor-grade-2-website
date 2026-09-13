import React, { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { supabase } from './supabaseClient';
import { setupDeepLinkListener } from './services/mobileAuth';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EnrollmentModal } from './components/modals/EnrollmentModal';
import { AuthModal } from './components/modals/AuthModal';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const LandingPage = React.lazy(() => import('./components/pages/LandingPage').then((m) => ({ default: m.LandingPage })));
const DashboardPage = React.lazy(() => import('./components/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const ClassesPage = React.lazy(() => import('./components/pages/ClassesPage').then((m) => ({ default: m.ClassesPage })));
const PYQPage = React.lazy(() => import('./components/pages/PYQPage').then((m) => ({ default: m.PYQPage })));
const MockTestsPage = React.lazy(() => import('./components/pages/MockTestsPage').then((m) => ({ default: m.MockTestsPage })));
const DoubtsForumPage = React.lazy(() => import('./components/pages/DoubtsForumPage').then((m) => ({ default: m.DoubtsForumPage })));
const AdminPortalPage = React.lazy(() => import('./components/pages/AdminPortalPage').then((m) => ({ default: m.AdminPortalPage })));
const AuthPage = React.lazy(() => import('./components/pages/AuthPage').then((m) => ({ default: m.AuthPage })));

const PageLoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh] py-16">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-emerald-600/30 border-t-emerald-600 rounded-full animate-spin" />
      <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">Loading section...</span>
    </div>
  </div>
);

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

  const [returnToAppUrl, setReturnToAppUrl] = useState<string | null>(null);

  // 1. Listen for deep link redirects inside native mobile app (Capacitor)
  useEffect(() => {
    const cleanup = setupDeepLinkListener(() => {
      setIsAuthenticated(true);
    });
    return cleanup;
  }, [setIsAuthenticated]);

  // 2. If opened in external mobile browser (Chrome) after OAuth redirect:
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    const isOAuthCallback = hash.includes('access_token') || search.includes('code=');
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isOAuthCallback && isMobile) {
      const appUrl = `com.surveyrank.academy://auth-callback${search}${hash}`;
      setReturnToAppUrl(appUrl);

      // Attempt automatic bounce to mobile app
      const timer = setTimeout(() => {
        window.location.href = appUrl;
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  // Protect private pages with supabase.auth.getSession() — if no session, redirect to /login
  useEffect(() => {
    const protectPrivatePages = async () => {
      // If we are currently processing an OAuth callback, don't prematurely redirect
      if (window.location.hash.includes('access_token') || window.location.search.includes('code=')) {
        return;
      }

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

  const returnBanner = returnToAppUrl && (
    <div className="bg-emerald-700 text-white px-4 py-3 text-center text-sm font-semibold sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2.5 shadow-md">
      <span>✅ Google Login Successful!</span>
      <a
        href={returnToAppUrl}
        className="inline-flex items-center gap-1.5 bg-white text-emerald-900 font-bold px-3.5 py-1.5 rounded-lg text-xs hover:bg-emerald-50 transition shadow-xs active:scale-95"
      >
        <span>Tap here to Open Mobile App</span>
        <span>📲</span>
      </a>
    </div>
  );

  // If user is not authenticated, show the dedicated eLearning Login / Sign-up Gateway
  if (!isAuthenticated) {
    return (
      <>
        {returnBanner}
        <React.Suspense fallback={<PageLoadingFallback />}>
          <AuthPage />
        </React.Suspense>
        {toastContainer}
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {returnBanner}
      <Navbar />

      <main className="flex-1">
        <React.Suspense fallback={<PageLoadingFallback />}>
          {activeTab === 'home' && <LandingPage />}
          {activeTab === 'dashboard' && <DashboardPage />}
          {(activeTab === 'notes' || (activeTab as any) === 'classes') && <ClassesPage />}
          {activeTab === 'pyq' && <PYQPage />}
          {activeTab === 'mocktests' && <MockTestsPage />}
          {activeTab === 'doubts' && <DoubtsForumPage />}
          {activeTab === 'admin' && <AdminPortalPage />}
        </React.Suspense>
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
