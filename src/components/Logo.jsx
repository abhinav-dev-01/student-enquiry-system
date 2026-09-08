import React from 'react';

export default function Logo({ className = "h-8 sm:h-9 md:h-10", showText = true, textDark = true }) {
  return (
    <div className="flex items-center select-none">
      <img
        src="/origami-logo.png"
        alt="Origami Learning"
        className={`${className} w-auto object-contain transition-transform duration-200`}
      />
    </div>
  );
}
