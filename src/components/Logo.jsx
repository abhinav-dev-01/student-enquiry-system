import React from 'react';

export default function Logo({ className = "w-10 h-10", showText = true, textDark = true }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Exact Vector Logo based on brand asset */}
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft circle boundary / highlight */}
        <circle cx="50" cy="50" r="48" fill="white" className="drop-shadow-xs" />

        {/* Top Coral Arch / Sun / O-ring */}
        <path
          d="M 50 10
             C 71.5 10, 89 27.5, 89 49
             C 89 54, 87 59.5, 83 61.5
             C 78 51, 65 44, 50 44
             C 35 44, 22 51, 17 61.5
             C 13 59.5, 11 54, 11 49
             C 11 27.5, 28.5 10, 50 10 Z"
          fill="#FF383D"
        />

        {/* Inner hole subtle cutout definition */}
        <path
          d="M 50 24
             C 63.8 24, 75 35.2, 75 49
             C 75 54, 73.5 58, 70 60
             C 65 52, 58 48, 50 48
             C 42 48, 35 52, 30 60
             C 26.5 58, 25 54, 25 49
             C 25 35.2, 36.2 24, 50 24 Z"
          fill="none"
        />

        {/* Bottom Sky-Blue Open Book */}
        <path
          d="M 50 74
             C 64 62, 80 61, 92 58
             L 92 75
             C 78 79, 64 80, 50 94
             C 36 80, 22 79, 8 75
             L 8 58
             C 20 61, 36 62, 50 74 Z"
          fill="#25ABE2"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-heading font-extrabold text-xl tracking-tight leading-none ${textDark ? 'text-[#0D1E32]' : 'text-white'}`}>
            Origami<span className="text-[#FF383D]">.</span>
          </span>
          <span className="text-[11px] font-bold text-[#25ABE2] tracking-wider uppercase mt-0.5">
            Learning Platform
          </span>
        </div>
      )}
    </div>
  );
}
