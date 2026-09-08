import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
  const [hasInteracted, setHasInteracted] = useState(false);

  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // Setup IntersectionObserver for Section Entrance and Autoplay Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          // Play the active reel when section enters viewport
          const activeVid = videoRefs.current[activeReelIndex];
          if (activeVid) {
            activeVid.play().catch(() => {});
            setPlayingStates(prev => ({ ...prev, [activeReelIndex]: true }));
          }
        } else {
          // Pause all when scrolled out
          videoRefs.current.forEach(v => {
            if (v && !v.paused) {
              v.pause();
            }
          });
          setPlayingStates({ 0: false, 1: false, 2: false });
        }
      },
      { threshold: 0.25 }
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
    setHasInteracted(true);
    videoRefs.current.forEach(v => {
      if (v) v.muted = nextMuted;
    });

    // Make sure active reel is unmuted and playing
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

    setHasInteracted(true);

    if (vid.paused) {
      // Pause others
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

  const scrollToIndex = (idx) => {
    if (idx < 0 || idx >= REELS_DATA.length) return;
    setActiveReelIndex(idx);
    const targetVid = videoRefs.current[idx];
    if (targetVid) {
      videoRefs.current.forEach((otherVid, i) => {
        if (otherVid && i !== idx && !otherVid.paused) {
          otherVid.pause();
          setPlayingStates(prev => ({ ...prev, [i]: false }));
        }
      });
      targetVid.muted = isMuted;
      targetVid.play().catch(() => {});
      setPlayingStates(prev => ({ ...prev, [idx]: true }));
    }
  };

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#091524] text-white relative overflow-hidden border-b border-slate-800 scroll-mt-20"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF383D]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#25ABE2]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title & Interactive Unmute / Sound Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xs mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF383D]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase">
                STUDENT VOICES & PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              Real Stories. Authentic Aspirations.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2.5 leading-relaxed max-w-xl">
              Watch firsthand guidance, early civil service motivation, and student reflections directly from the Origami Learning community.
            </p>
          </div>

          {/* Interactive Sound Controller Pill with Pulse Animation */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-heading font-bold transition-all duration-300 cursor-pointer shadow-lg ${
                isMuted
                  ? 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                  : 'bg-[#FF383D] hover:bg-[#E0262B] text-white shadow-[0_4px_20px_rgba(255,56,61,0.4)]'
              }`}
              title={isMuted ? "Click to Unmute Audio" : "Click to Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-slate-300" />
                  <span>Tap to Unmute Audio</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF383D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF383D]"></span>
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-white" />
                  <span>Audio Enabled</span>
                  <span className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-white animate-pulse" />
                    <span className="w-0.5 h-3 bg-white animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-white animate-pulse delay-150" />
                  </span>
                </>
              )}
            </button>

            {/* Carousel Navigation Arrows for Small/Medium Screens */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scrollToIndex(activeReelIndex - 1)}
                disabled={activeReelIndex === 0}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Previous Reel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToIndex(activeReelIndex + 1)}
                disabled={activeReelIndex === REELS_DATA.length - 1}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Next Reel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Premium Reel Phone Cards Grid / Slider */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {REELS_DATA.map((reel, idx) => {
            const isPlaying = !!playingStates[idx];
            const progress = progresses[idx] || 0;
            const isActive = activeReelIndex === idx;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlayPause(idx)}
                className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0F2137] border transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${
                  isActive
                    ? 'border-white/40 ring-2 ring-white/15 scale-[1.01] -translate-y-1'
                    : 'border-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
                style={{
                  aspectRatio: '9 / 16',
                  maxHeight: '620px',
                }}
              >
                {/* Background Video */}
                <video
                  ref={el => (videoRefs.current[idx] = el)}
                  src={reel.src}
                  loop
                  playsInline
                  muted={isMuted}
                  webkit-playsinline="true"
                  preload="metadata"
                  onTimeUpdate={() => handleTimeUpdate(idx)}
                  className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient Cinematic Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
                
                {/* Subtle Brand Border Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[32px]"
                  style={{
                    boxShadow: `inset 0 0 24px ${reel.tagColor}40`
                  }}
                />

                {/* TOP BAR: Tag & Sound Indicator */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between w-full">
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border backdrop-blur-md shadow-xs"
                    style={{
                      backgroundColor: `${reel.tagColor}25`,
                      color: '#FFFFFF',
                      borderColor: `${reel.tagColor}60`
                    }}
                  >
                    {reel.tag}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSound();
                    }}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-transform active:scale-90 cursor-pointer"
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
                    className={`w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl transition-all duration-300 ${
                      isPlaying
                        ? 'opacity-0 scale-75 group-hover:opacity-60 group-hover:scale-100'
                        : 'opacity-90 scale-100'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    )}
                  </div>
                </div>

                {/* BOTTOM: Malayalam Title, Subtitle, Progress Bar & Enquiry Link */}
                <div className="relative z-10 p-5 sm:p-6 text-left space-y-2.5">
                  <span className="text-[11px] font-mono font-medium text-slate-300 block">
                    {reel.speaker}
                  </span>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-snug line-clamp-2 drop-shadow-sm">
                    {reel.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-normal font-sans drop-shadow-xs">
                    {reel.subtitle}
                  </p>

                  {/* Playback Progress Line */}
                  <div className="pt-2">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FF383D] to-[#25ABE2] transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row: Enquiry Action */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="text-xs text-slate-400">
            <span>Want personalized counseling on civil service or foundation tuition?</span>
          </div>

          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-6 py-3 rounded-full font-heading font-bold text-xs shadow-[0_4px_16px_rgba(255,56,61,0.3)] hover:shadow-[0_6px_22px_rgba(255,56,61,0.45)] transition-all group"
          >
            <span>Talk to Academic Mentor</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
