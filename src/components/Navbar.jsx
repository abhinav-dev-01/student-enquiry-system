import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Home, BookOpen, GraduationCap, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle header elevation shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll spy for Home page sections in order: Home -> About -> Programs -> Why Us
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for fixed navbar

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
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
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
    if (location.pathname !== '/') return false;
    return activeSection === key;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(13,30,50,0.07)] border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-4'
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
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#FF383D] focus:ring-offset-2 rounded-xl transition-transform"
            aria-label="Origami Learning Home"
          >
            <Logo className="w-10 h-10 transition-transform group-hover:scale-105 duration-200" />
          </Link>

          {/* Desktop Navigation Links: Home, About, Programs, Why Us */}
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
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-2 text-xs font-heading font-semibold text-[#0D1E32] bg-slate-50 hover:bg-[#F0F9FF] border border-slate-200 hover:border-[#25ABE2]/40 px-3.5 py-2 rounded-full transition-all group"
              title="Admissions Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#25ABE2] group-hover:scale-110 transition-transform" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-2 rounded-full font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_20px_rgba(255,56,61,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/enquiry"
              className="bg-[#FF383D] hover:bg-[#E0262B] text-white px-3.5 py-1.5 rounded-full font-heading font-bold text-xs shadow-xs"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0D1E32] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FF383D] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0D1E32]" /> : <Menu className="w-6 h-6 text-[#0D1E32]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5 mb-5">
            {navItems.map((item) => {
              const active = isItemActive(item.key);
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${
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
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full text-xs font-heading font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 py-2.5 rounded-xl hover:bg-[#25ABE2]/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#25ABE2]" />
              <span>Admissions Helpline: +91 98765 43210</span>
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
  );
}
