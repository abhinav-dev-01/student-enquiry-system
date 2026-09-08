import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const REELS_DATA = [
  {
    id: 1,
    title: 'IAS പരീക്ഷക്ക് ഇനി നേരത്തെ ഒരുങ്ങാം',
    subtitle: 'ഇന്ത്യയിലെ ഏറ്റവും പ്രായം കുറഞ്ഞ IPS ഓഫീസർ ഹസൻ സഫീന്റെ പ്രചോദനാത്മക സന്ദേശം',
    tag: 'Early Preparation',
    tagColor: '#FF383D',
    src: '/reels/reel-1.mp4',
    speaker: 'Safin Hasan IPS Inspiring Talk',
    durationText: 'Civil Service Aspirants'
  },
  {
    id: 2,
    title: 'ഇത് കുറച്ചുകൂടി നേരത്തെ തുടങ്ങാമായിരുന്നു...',
    subtitle: 'സിവിൽ സർവീസിന് പ്രിപ്പയർ ചെയ്യുന്ന ഓരോ ഉദ്യോഗാർത്ഥിയും അറിയേണ്ട യാഥാർത്ഥ്യം',
    tag: 'Foundation Strategy',
    tagColor: '#25ABE2',
    src: '/reels/reel-2.mp4',
    speaker: 'Origami Academic Mentorship',
    durationText: 'Exam Strategy'
  },
  {
    id: 3,
    title: 'കാസറഗോഡ് ജില്ലയിൽ നിന്നും സിവിൽ സർവീസ് രംഗത്തേക്ക്',
    subtitle: 'കൂടുതൽ പ്രതിഭകളെ സൃഷ്ടിക്കുക എന്ന ലക്ഷ്യത്തോടെ ഒറിഗാമി ലേണിംഗ് പ്ലാറ്റ്‌ഫോം',
    tag: 'Origami Mission',
    tagColor: '#16A34A',
    src: '/reels/reel-3.mp4',
    speaker: 'District Talent Empowerment',
    durationText: 'Cherkkala, Kasaragod'
  }
];

export default function ReelsSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [playingStates, setPlayingStates] = useState({ 0: true, 1: false, 2: false });
  const [progresses, setProgresses] = useState({ 0: 0, 1: 0, 2: 0 });
  const [sectionInView, setSectionInView] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);

  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // IntersectionObserver for Section Entrance and Autoplay Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          const activeVid = videoRefs.current[activeReelIndex];
          if (activeVid) {
            activeVid.play().catch(() => {});
            setPlayingStates(prev => ({ ...prev, [activeReelIndex]: true }));
          }
        } else {
          videoRefs.current.forEach(v => {
            if (v && !v.paused) {
              v.pause();
            }
          });
          setPlayingStates({ 0: false, 1: false, 2: false });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeReelIndex]);

  // Handle global unmute / mute toggle
  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRefs.current.forEach(v => {
      if (v) v.muted = nextMuted;
    });

    const activeVid = videoRefs.current[activeReelIndex];
    if (activeVid) {
      activeVid.muted = nextMuted;
      activeVid.play().catch(() => {});
      setPlayingStates(prev => ({ ...prev, [activeReelIndex]: true }));
    }
  };

  // Toggle Play / Pause on a specific card
  const togglePlayPause = (idx) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;

    if (vid.paused) {
      videoRefs.current.forEach((otherVid, i) => {
        if (otherVid && i !== idx && !otherVid.paused) {
          otherVid.pause();
          setPlayingStates(prev => ({ ...prev, [i]: false }));
        }
      });

      vid.muted = isMuted;
      vid.play().then(() => {
        setActiveReelIndex(idx);
        setPlayingStates(prev => ({ ...prev, [idx]: true }));
      }).catch(() => {});
    } else {
      vid.pause();
      setPlayingStates(prev => ({ ...prev, [idx]: false }));
    }
  };

  // Update progress bar as video plays
  const handleTimeUpdate = (idx) => {
    const vid = videoRefs.current[idx];
    if (vid && vid.duration) {
      const pct = (vid.currentTime / vid.duration) * 100;
      setProgresses(prev => ({ ...prev, [idx]: pct }));
    }
  };

  // Scroll to a specific reel smoothly (both desktop & mobile)
  const scrollToIndex = (idx) => {
    if (idx < 0 || idx >= REELS_DATA.length) return;
    setActiveReelIndex(idx);
    setHasSwiped(true);

    const cardEl = cardRefs.current[idx];
    const container = containerRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPos = cardLeft - (containerWidth - cardWidth) / 2;

      container.scrollTo({
        left: Math.max(0, scrollPos),
        behavior: 'smooth'
      });
    }

    // Auto-switch video playback
    videoRefs.current.forEach((otherVid, i) => {
      if (otherVid) {
        if (i === idx) {
          otherVid.muted = isMuted;
          otherVid.play().catch(() => {});
          setPlayingStates(prev => ({ ...prev, [i]: true }));
        } else {
          otherVid.pause();
          setPlayingStates(prev => ({ ...prev, [i]: false }));
        }
      }
    });
  };

  // Mobile horizontal swipe detection: smoothly auto-tracks centered reel
  const handleContainerScroll = () => {
    if (!containerRef.current) return;
    setHasSwiped(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const containerCenter = scrollLeft + container.offsetWidth / 2;

      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, idx) => {
        if (card) {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(cardCenter - containerCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      if (closestIdx !== activeReelIndex) {
        setActiveReelIndex(closestIdx);
        videoRefs.current.forEach((v, i) => {
          if (v) {
            if (i === closestIdx) {
              v.muted = isMuted;
              v.play().catch(() => {});
              setPlayingStates(prev => ({ ...prev, [i]: true }));
            } else {
              v.pause();
              setPlayingStates(prev => ({ ...prev, [i]: false }));
            }
          }
        });
      }
    }, 60);
  };

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-[#0D1E32] relative overflow-hidden border-b border-slate-200/80 scroll-mt-20"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-red-100/35 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-sky-100/35 rounded-full blur-[100px] pointer-events-none translate-y-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title & Interactive Unmute / Sound Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12 text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100/80 shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF383D]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase">
                STUDENT VOICES & PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight leading-[1.18]">
              Real Stories. Authentic Aspirations.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Watch firsthand guidance, early civil service motivation, and student reflections directly from the Origami Learning community.
            </p>
          </div>

          {/* Interactive Sound Controller Pill & Carousel Arrows */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                isMuted
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300'
                  : 'bg-[#FF383D] hover:bg-[#E0262B] text-white shadow-[0_4px_16px_rgba(255,56,61,0.35)]'
              }`}
              title={isMuted ? "Click to Unmute Audio" : "Click to Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tap to Unmute Audio</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF383D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF383D]"></span>
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white" />
                  <span>Audio Enabled</span>
                  <span className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-white animate-pulse" />
                    <span className="w-0.5 h-3 bg-white animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-white animate-pulse delay-150" />
                  </span>
                </>
              )}
            </button>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToIndex(activeReelIndex - 1)}
                disabled={activeReelIndex === 0}
                className="p-2 rounded-full bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 text-slate-700 transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous Reel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToIndex(activeReelIndex + 1)}
                disabled={activeReelIndex === REELS_DATA.length - 1}
                className="p-2 rounded-full bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 text-slate-700 transition-colors cursor-pointer shadow-xs active:scale-95"
                aria-label="Next Reel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Guidance Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-slate-500 mb-3 px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#FF383D] animate-pulse" />
            <span>Swipe left to view all reels</span>
          </span>
          <span className="font-mono font-bold text-[#FF383D]">
            {activeReelIndex + 1} / {REELS_DATA.length}
          </span>
        </div>

        {/* REELS CAROUSEL / SLIDER CONTAINER */}
        {/* On Mobile: Smooth Horizontal Slide with Snap Centering & 3D Depth Scale */}
        {/* On Desktop: Centered 3-Card Grid with Rich Themed Hover Effects */}
        <div
          ref={containerRef}
          onScroll={handleContainerScroll}
          className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-auto max-w-4xl scroll-smooth items-stretch justify-start sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {REELS_DATA.map((reel, idx) => {
            const isPlaying = !!playingStates[idx];
            const progress = progresses[idx] || 0;
            const isActive = activeReelIndex === idx;

            // Tailored glow styles on hover
            const shadowHoverMap = {
              1: 'hover:shadow-[0_20px_40px_-10px_rgba(255,56,61,0.3)] hover:border-[#FF383D]/60',
              2: 'hover:shadow-[0_20px_40px_-10px_rgba(37,171,226,0.3)] hover:border-[#25ABE2]/60',
              3: 'hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.3)] hover:border-[#16A34A]/60'
            };

            return (
              <div
                key={reel.id}
                ref={el => (cardRefs.current[idx] = el)}
                onClick={() => togglePlayPause(idx)}
                className={`group relative rounded-[24px] sm:rounded-[26px] overflow-hidden bg-slate-950 border border-slate-200/90 cursor-pointer flex flex-col justify-between shrink-0 sm:shrink w-[80vw] max-w-[270px] sm:max-w-none sm:w-full snap-center transform-gpu transition-all duration-500 ease-out hover:-translate-y-2 ${shadowHoverMap[reel.id]} ${
                  isActive
                    ? 'scale-100 opacity-100 shadow-[0_16px_36px_rgba(13,30,50,0.18)] ring-2 ring-[#FF383D]/50 sm:ring-0'
                    : 'scale-[0.93] sm:scale-100 opacity-75 sm:opacity-100 shadow-md sm:shadow-[0_10px_30px_rgba(13,30,50,0.08)]'
                }`}
                style={{
                  aspectRatio: '9 / 16',
                  maxHeight: '480px',
                }}
              >
                {/* Top Accent Gradient Line on Hover / Active */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 z-20 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: reel.tagColor
                  }}
                />

                {/* Background Video with Smooth Scale Hover */}
                <video
                  ref={el => (videoRefs.current[idx] = el)}
                  src={reel.src}
                  loop
                  playsInline
                  muted={isMuted}
                  webkit-playsinline="true"
                  preload="metadata"
                  onTimeUpdate={() => handleTimeUpdate(idx)}
                  className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient Cinematic Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                {/* TOP BAR: Tag & Sound Indicator */}
                <div className="relative z-10 p-4 flex items-center justify-between w-full">
                  <span
                    className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md shadow-xs transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${reel.tagColor}35`,
                      color: '#FFFFFF',
                      borderColor: `${reel.tagColor}80`
                    }}
                  >
                    {reel.tag}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSound();
                    }}
                    className="p-1.5 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all active:scale-90 cursor-pointer group-hover:border-white/40"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-[#25ABE2]" />
                    )}
                  </button>
                </div>

                {/* CENTER: Tap Play / Pause Overlay Icon */}
                <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
                  <div
                    className={`w-12 h-12 rounded-full bg-black/55 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl transition-all duration-300 ${
                      isPlaying
                        ? 'opacity-0 scale-75 group-hover:opacity-80 group-hover:scale-100'
                        : 'opacity-90 scale-100 group-hover:scale-110'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    )}
                  </div>
                </div>

                {/* BOTTOM: Malayalam Title, Subtitle, Progress Bar */}
                <div className="relative z-10 p-4 text-left space-y-1.5 transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <span className="text-[10px] font-mono font-medium text-slate-300 block">
                    {reel.speaker}
                  </span>

                  <h3 className="font-heading font-extrabold text-sm sm:text-[15px] text-white leading-snug line-clamp-2 drop-shadow-sm">
                    {reel.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 leading-tight line-clamp-2 font-normal font-sans drop-shadow-xs">
                    {reel.subtitle}
                  </p>

                  {/* Playback Progress Line */}
                  <div className="pt-1.5">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-150"
                        style={{ 
                          width: `${progress}%`,
                          backgroundColor: reel.tagColor
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
          {REELS_DATA.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeReelIndex === idx
                  ? 'w-7 bg-[#FF383D]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to reel ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA Row: Enquiry Action */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
            <span>Want personalized counseling on civil service or foundation tuition?</span>
          </div>

          <Link
            to="/enquiry"
            className="inline-flex items-center justify-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-2.5 rounded-full font-heading font-bold text-xs shadow-[0_4px_16px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_22px_rgba(255,56,61,0.35)] transition-all group w-full sm:w-auto"
          >
            <span>Talk to Academic Mentor</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
