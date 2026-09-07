import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (anchorId) => {
    if (location.pathname !== '/') {
      navigate(`/#${anchorId}`);
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const isCurrent = (path, hash) => {
    if (hash) return location.hash === `#${hash}`;
    return location.pathname === path && !location.hash;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white shadow-[0_4px_20px_rgba(13,30,50,0.06)] border-b border-[#E2E8F0]' 
          : 'bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#FF383D] focus:ring-offset-2 rounded-xl"
            aria-label="Origami Learning Home"
          >
            <Logo className="w-10 h-10 transition-transform group-hover:scale-102" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isCurrent('/', '')
                  ? 'text-[#FF383D] bg-[#FF383D]/8'
                  : 'text-[#475569] hover:text-[#0D1E32] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <button
              onClick={() => handleNavClick('programs')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                isCurrent('/', 'programs')
                  ? 'text-[#25ABE2] bg-[#25ABE2]/8'
                  : 'text-[#475569] hover:text-[#0D1E32] hover:bg-slate-50'
              }`}
            >
              Programs
            </button>

            <button
              onClick={() => handleNavClick('why-us')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                isCurrent('/', 'why-us')
                  ? 'text-[#FF383D] bg-[#FF383D]/8'
                  : 'text-[#475569] hover:text-[#0D1E32] hover:bg-slate-50'
              }`}
            >
              Why Us
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                isCurrent('/', 'about')
                  ? 'text-[#25ABE2] bg-[#25ABE2]/8'
                  : 'text-[#475569] hover:text-[#0D1E32] hover:bg-slate-50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Desktop Actions (Helpline + Enquire CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-xs font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 px-3 py-2 rounded-lg hover:bg-[#25ABE2]/10 transition-colors"
              title="Admissions Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#25ABE2]" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-2.5 rounded-[12px] font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_20px_rgba(255,56,61,0.35)] transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/enquiry"
              className="bg-[#FF383D] text-white px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0D1E32] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FF383D]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-5 space-y-1 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0D1E32] hover:bg-slate-50 hover:text-[#FF383D]"
          >
            Home
          </Link>
          <button
            onClick={() => handleNavClick('programs')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0D1E32] hover:bg-slate-50 hover:text-[#25ABE2]"
          >
            Programs (Civil Service & Tuition)
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0D1E32] hover:bg-slate-50 hover:text-[#FF383D]"
          >
            Why Origami Learning
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0D1E32] hover:bg-slate-50 hover:text-[#25ABE2]"
          >
            About Institute
          </button>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#25ABE2]" />
              <span>Admissions Helpline: +91 98765 43210</span>
            </a>

            <Link
              to="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#FF383D] hover:bg-[#E0262B] text-white px-4 py-3 rounded-xl font-heading font-bold text-sm shadow-md"
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
