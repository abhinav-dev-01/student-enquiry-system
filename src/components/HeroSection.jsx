import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    function updateHeroScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 1200) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', updateHeroScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateHeroScroll);
  }, []);

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle scroll zoom-in (from 1.0x up to max 1.08x for a refined depth effect)
  const videoScale = 1 + Math.min(scrollY * 0.00025, 0.08);

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-start pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-16 bg-white overflow-hidden">
      {/* Background Video with Mobile-Responsive Framing & Smooth Scroll-Linked Zoom-in */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          style={{
            transform: `scale(${videoScale})`,
            willChange: 'transform',
          }}
          className="w-full h-full object-cover object-[78%_center] sm:object-center transform-gpu transition-transform duration-75 ease-out opacity-65"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/rempove_text_and_stars_make_it%20-%20Copy.mp4" type="video/mp4" />
        </video>

        {/* Darkness & Contrast Overlay */}
        <div className="absolute inset-0 bg-slate-950/30 backdrop-brightness-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20"></div>

        {/* Smooth Bottom Area Blend Gradient into White */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-heading font-bold text-[#0D1E32] mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF383D]"></span>
            <span className="text-[#FF383D] uppercase tracking-wider font-extrabold">Admissions Open</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#475569] font-medium">Session 2026–2027</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-[26px] leading-[1.18] sm:text-4xl lg:text-5xl text-[#0D1E32] tracking-tight mb-5 sm:mb-6 drop-shadow-xs max-w-xl sm:max-w-none">
            Structured Guidance for{' '}
            <span className="text-[#FF383D]">Civil Services</span> &{' '}
            <span className="text-[#25ABE2]">Academic Mastery</span>.
          </h1>

          {/* Increased Size Action Buttons Row - Perfectly Placed & Visible on Mobile */}
          <div className="flex flex-row items-center justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-heading font-bold text-sm shadow-[0_4px_16px_rgba(255,56,61,0.28)] hover:shadow-[0_6px_22px_rgba(255,56,61,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all group shrink-0 min-h-[44px]"
            >
              <span>Submit Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={scrollToPrograms}
              className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-[#0D1E32] px-4 py-3 sm:px-6 sm:py-3.5 rounded-full font-heading font-bold text-sm border border-slate-200/90 shadow-xs backdrop-blur-sm transition-all cursor-pointer shrink-0 min-h-[44px]"
            >
              <BookOpen className="w-4 h-4 text-[#25ABE2]" />
              <span>Explore Programs</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
