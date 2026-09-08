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
    <section className="relative min-h-[100dvh] h-[100dvh] sm:min-h-[75vh] sm:h-auto md:min-h-[85vh] flex flex-col justify-between pt-20 pb-20 sm:pt-28 sm:pb-10 md:pt-36 md:pb-12 bg-white overflow-hidden">
      {/* Background Video with Mobile-Responsive Framing & Smooth Scroll-Linked Zoom-in */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          className="w-full h-full object-cover object-[72%_center] sm:object-center transform-gpu transition-transform duration-75 ease-out"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/rempove_text_and_stars_make_it%20-%20Copy.mp4" type="video/mp4" />
        </video>

        {/* Smooth Bottom Area Blend Gradient into White */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between items-start flex-grow">
        
        {/* Top Area: Badge & Main Headline */}
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left pt-1 sm:pt-0">
          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-[11px] sm:text-xs font-heading font-bold text-[#0D1E32] mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF383D]"></span>
            <span className="text-[#FF383D] uppercase tracking-wider font-extrabold">Admissions Open</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#475569] font-medium">Session 2026–2027</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0D1E32] tracking-tight leading-[1.18] sm:leading-[1.15] drop-shadow-xs max-w-xl sm:max-w-none">
            Structured Guidance for{' '}
            <span className="text-[#FF383D]">Civil Services</span> &{' '}
            <span className="text-[#25ABE2]">Academic Mastery</span>.
          </h1>
        </div>

        {/* Bottom Area: Compact Action Buttons on the Same Line (Sitting cleanly above mobile bottom bar) */}
        <div className="mt-auto pt-4 pb-1 sm:pb-0 w-full flex flex-row items-center justify-start gap-2.5 sm:gap-3 flex-wrap sm:flex-nowrap">
          <Link
            to="/enquiry"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_18px_rgba(255,56,61,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all group shrink-0 min-h-[38px] sm:min-h-[42px]"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={scrollToPrograms}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/90 hover:bg-white text-[#0D1E32] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm border border-slate-200/90 shadow-xs backdrop-blur-sm transition-all cursor-pointer shrink-0 min-h-[38px] sm:min-h-[42px]"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#25ABE2]" />
            <span>Explore Programs</span>
          </button>
        </div>

      </div>
    </section>
  );
}
