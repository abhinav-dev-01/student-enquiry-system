import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Home, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  ChevronRight,
  Send
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Unified scroll listener for header elevation & scroll-spy
  useEffect(() => {
    function onWindowScroll() {
      // 1. Elevation shadow
      setScrolled(window.scrollY > 15);

      // 2. Scroll spy if on home page
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 200;
        const whyUsEl = document.getElementById('why-us');
        const programsEl = document.getElementById('programs');
        const aboutEl = document.getElementById('about');

        const getTop = (el) => (el ? el.getBoundingClientRect().top + window.scrollY : Infinity);

        if (whyUsEl && scrollPosition >= getTop(whyUsEl)) {
          setActiveSection('why-us');
        } else if (programsEl && scrollPosition >= getTop(programsEl)) {
          setActiveSection('programs');
        } else if (aboutEl && scrollPosition >= getTop(aboutEl)) {
          setActiveSection('about');
        } else {
          setActiveSection('home');
        }
      } else {
        setActiveSection('');
      }
    }

    onWindowScroll();
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [location.pathname]);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (sectionKey) => {
    setMobileMenuOpen(false);

    if (sectionKey === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        if (window.location.hash) {
          history.pushState(null, '', '/');
        }
      } else {
        navigate('/');
      }
      return;
    }

    if (sectionKey === 'about') {
      navigate('/about');
      return;
    }

    if (sectionKey === 'enquiry') {
      navigate('/enquiry');
      return;
    }

    // For programs, why-us
    if (location.pathname !== '/') {
      navigate(`/#${sectionKey}`);
    } else {
      const el = document.getElementById(sectionKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionKey);
        history.pushState(null, '', `#${sectionKey}`);
      }
    }
  };

  const navItems = [
    { key: 'home', label: 'Home', icon: Home, subtitle: 'Welcome & Overview' },
    { key: 'about', label: 'About', icon: BookOpen, subtitle: 'Institute & Philosophy' },
    { key: 'programs', label: 'Programs', icon: GraduationCap, subtitle: 'Civil Service & Tuition' },
    { key: 'why-us', label: 'Why Us', icon: ShieldCheck, subtitle: 'The Origami Advantage' },
  ];

  const isItemActive = (key) => {
    if (key === 'about' && location.pathname === '/about') return true;
    if (key === 'enquiry' && location.pathname === '/enquiry') return true;
    if (location.pathname !== '/') return false;
    return activeSection === key;
  };

  return (
    <>
      {/* ----------------------------------------------------------------------- */}
      {/* 1. TOP GLOBAL NAVIGATION (Desktop + Mobile Header) */}
      {/* ----------------------------------------------------------------------- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(13,30,50,0.06)] border-b border-slate-200/80 py-2.5 sm:py-3' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleNavClick('home');
                }
              }}
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#FF383D] focus:ring-offset-2 rounded-xl transition-transform py-1"
              aria-label="Origami Learning Home"
            >
              <Logo className="h-8 sm:h-9 md:h-10 transition-transform group-hover:scale-105 duration-200" />
            </Link>

            {/* Desktop Navigation Pill Bar */}
            <nav 
              className="hidden md:flex items-center p-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-sm shadow-xs space-x-1"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.key);
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      active
                        ? 'bg-white text-[#0D1E32] shadow-[0_2px_8px_rgba(13,30,50,0.08)]'
                        : 'text-slate-600 hover:text-[#0D1E32] hover:bg-white/60'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {active && (
                      <span 
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          item.key === 'about' || item.key === 'why-us' 
                            ? 'bg-[#25ABE2]' 
                            : 'bg-[#FF383D]'
                        }`} 
                      />
                    )}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions (Helpline + Enquire CTA) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+917012743030"
                className="hidden lg:flex items-center gap-2 text-xs font-heading font-semibold text-[#0D1E32] bg-slate-50 hover:bg-[#F0F9FF] border border-slate-200 hover:border-[#25ABE2]/40 px-3.5 py-2 rounded-full transition-all group"
                title="Admissions Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-[#25ABE2] group-hover:scale-110 transition-transform" />
                <span>+91 70127 43030</span>
              </a>

              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-2 rounded-full font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_20px_rgba(255,56,61,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Top Actions (Call Button + Hamburger Menu) */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:+917012743030"
                className="p-2 rounded-full bg-slate-100 text-[#0D1E32] hover:bg-[#F0F9FF] border border-slate-200 text-xs font-bold flex items-center justify-center"
                aria-label="Call Admissions Helpline"
              >
                <Phone className="w-4 h-4 text-[#25ABE2]" />
              </a>

              <Link
                to="/enquiry"
                className="bg-[#FF383D] hover:bg-[#E0262B] text-white px-3.5 py-1.5 rounded-full font-heading font-bold text-xs shadow-xs"
              >
                Enquire
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#0D1E32] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FF383D] transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#0D1E32]" /> : <Menu className="w-5 h-5 text-[#0D1E32]" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="space-y-1.5 mb-5">
              {navItems.map((item) => {
                const active = isItemActive(item.key);
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left cursor-pointer ${
                      active
                        ? 'bg-slate-100 text-[#0D1E32] font-bold border border-slate-200/80 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0D1E32]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        active ? 'bg-[#FF383D]/10 text-[#FF383D]' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-semibold">{item.label}</div>
                        <div className="text-xs text-slate-500 font-normal">{item.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-[#FF383D]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+917012743030"
                className="flex items-center justify-center gap-2 w-full text-xs font-heading font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 py-2.5 rounded-xl hover:bg-[#25ABE2]/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25ABE2]" />
                <span>Admissions Helpline: +91 70127 43030</span>
              </a>

              <Link
                to="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#FF383D] hover:bg-[#E0262B] text-white px-4 py-3 rounded-xl font-heading font-bold text-sm shadow-md transition-colors"
              >
                <span>Submit Student Enquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. MOBILE BOTTOM FLOATING MENU BAR (Sticky Bottom Dock for Mobile) */}
      {/* ----------------------------------------------------------------------- */}
      <nav 
        className="md:hidden fixed bottom-3 inset-x-3 z-40 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(13,30,50,0.12)] rounded-2xl p-1.5 flex items-center justify-around safe-area-bottom"
        aria-label="Mobile Bottom Navigation"
      >
        <button
          onClick={() => handleNavClick('home')}
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer ${
            isItemActive('home') ? 'text-[#FF383D] font-bold bg-red-50/60' : 'text-slate-500 hover:text-[#0D1E32]'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-heading leading-none">Home</span>
        </button>

        <button
          onClick={() => handleNavClick('about')}
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer ${
            isItemActive('about') ? 'text-[#25ABE2] font-bold bg-blue-50/60' : 'text-slate-500 hover:text-[#0D1E32]'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-heading leading-none">About</span>
        </button>

        <button
          onClick={() => handleNavClick('programs')}
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer ${
            isItemActive('programs') ? 'text-[#25ABE2] font-bold bg-blue-50/60' : 'text-slate-500 hover:text-[#0D1E32]'
          }`}
        >
          <GraduationCap className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-heading leading-none">Programs</span>
        </button>

        <button
          onClick={() => handleNavClick('why-us')}
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer ${
            isItemActive('why-us') ? 'text-[#FF383D] font-bold bg-red-50/60' : 'text-slate-500 hover:text-[#0D1E32]'
          }`}
        >
          <ShieldCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-heading leading-none">Why Us</span>
        </button>

        <Link
          to="/enquiry"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#FF383D] text-white shadow-xs active:scale-95 transition-all"
        >
          <Send className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[10px] font-heading font-bold leading-none text-white">Enquire</span>
        </Link>
      </nav>
    </>
  );
}
