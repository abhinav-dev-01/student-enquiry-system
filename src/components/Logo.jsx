import React from 'react';

export default function Logo({ className = "h-10 sm:h-12 md:h-14 lg:h-16", showText = true, textDark = true }) {
  return (
    <div className="flex items-center shrink-0 select-none bg-transparent">
      <img
        src="/Screenshot 2026-09-08 164124-Photoroom.png"
        alt="Origami Learning"
        className={`${className} w-auto object-contain transition-transform duration-200`}
      />
    </div>
  );
}
