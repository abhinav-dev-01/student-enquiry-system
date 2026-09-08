import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';

// Route-level code splitting for optimal initial payload
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EnquiryPage = lazy(() => import('./pages/EnquiryPage'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lightweight, sleek loader fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-3">
        <div className="w-9 h-9 rounded-full border-2 border-slate-200 border-t-[#FF383D] animate-spin" />
        <span className="text-[11px] font-mono font-medium tracking-widest text-slate-400 uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}

// Scroll to top on route changes (except when anchor hash is specified)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0D1E32] font-sans antialiased selection:bg-[#FF383D]/15 selection:text-[#FF383D]">
        
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route View with Suspense code-splitting */}
        <main className="flex-grow pb-16 md:pb-0">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/enquiry" element={<EnquiryPage />} />
              <Route path="/enquiry-success" element={<SuccessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Floating Quick Contact Widget (WhatsApp & Call) */}
        <FloatingContactButtons />

        {/* Global Academic Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
