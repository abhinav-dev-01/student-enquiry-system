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
    <section className="relative min-h-[88vh] sm:min-h-[86vh] md:min-h-[93vh] flex flex-col justify-center pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 bg-white overflow-hidden">
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
          className="w-full h-full object-cover object-center sm:object-center transform-gpu transition-transform duration-75 ease-out"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/rempove_text_and_stars_make_it%20-%20Copy.mp4" type="video/mp4" />
        </video>

        {/* Smooth Bottom Area Blend Gradient into White (Tailored for mobile & desktop) */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-40 md:h-56 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-heading font-bold text-[#0D1E32] mb-5 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF383D]"></span>
            <span className="text-[#FF383D] uppercase tracking-wider font-extrabold">Admissions Open</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#475569] font-medium">Session 2026–2027</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0D1E32] tracking-tight leading-[1.15] mb-5 md:mb-6 drop-shadow-xs">
            Structured Guidance for{' '}
            <span className="text-[#FF383D]">Civil Services</span> &{' '}
            <span className="text-[#25ABE2]">Academic Mastery</span>.
          </h1>

          {/* Clear, Grounded Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#334155] font-normal leading-relaxed max-w-xl lg:max-w-2xl mb-7 md:mb-10">
            Origami Learning combines conceptual clarity with disciplined preparation. Whether preparing for competitive civil services or excelling in foundational school curriculum, our structured methodology guides students every step of the way.
          </p>

          {/* Direct CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-3 bg-[#FF383D] hover:bg-[#E0262B] text-white px-7 py-3.5 rounded-full font-heading font-bold text-sm shadow-[0_4px_16px_rgba(255,56,61,0.3)] hover:shadow-[0_6px_22px_rgba(255,56,61,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
            >
              <span>Submit Student Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={scrollToPrograms}
              className="inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#0D1E32] px-6 py-3.5 rounded-full font-heading font-semibold text-sm border border-slate-200/90 shadow-xs backdrop-blur-sm transition-all cursor-pointer"
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
