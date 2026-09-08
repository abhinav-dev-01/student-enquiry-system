import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  // Robust background video autoplay across all browsers (including iOS Safari & Chrome)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      if (video) {
        video.muted = true;
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay policy prevented immediate playback; wait for first user gesture
            const playOnGesture = () => {
              if (video) {
                video.muted = true;
                video.play().catch(() => {});
              }
              window.removeEventListener('touchstart', playOnGesture);
              window.removeEventListener('scroll', playOnGesture);
              window.removeEventListener('click', playOnGesture);
              window.removeEventListener('mousemove', playOnGesture);
            };

            window.addEventListener('touchstart', playOnGesture, { passive: true, once: true });
            window.addEventListener('scroll', playOnGesture, { passive: true, once: true });
            window.addEventListener('click', playOnGesture, { passive: true, once: true });
            window.addEventListener('mousemove', playOnGesture, { passive: true, once: true });
          });
        }
      }
    };

    attemptPlay();

    // Re-attempt on ready events
    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('loadeddata', attemptPlay);

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('loadeddata', attemptPlay);
    };
  }, []);

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
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/hero-bg.png"
          disablePictureInPicture
          style={{
            transform: `scale(${videoScale})`,
            willChange: 'transform',
          }}
          className="w-full h-full object-cover object-[78%_center] sm:object-center transform-gpu transition-transform duration-75 ease-out opacity-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Smooth Bottom Area Blend Gradient into White */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 md:h-48 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-[26px] leading-[1.18] sm:text-4xl lg:text-5xl text-[#0D1E32] tracking-tight mb-3.5 sm:mb-4 drop-shadow-xs max-w-xl sm:max-w-none">
            Structured Guidance for{' '}
            <span className="text-[#FF383D]">Civil Services</span> &{' '}
            <span className="text-[#25ABE2]">Academic Mastery</span>.
          </h1>

          {/* 2-3 Line Description */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6 sm:mb-7 max-w-xl">
            Comprehensive Civil Service coaching and school foundation tuition built on small cohorts, daily handwritten answer evaluations, and dedicated 1-on-1 mentorship.
          </p>

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
