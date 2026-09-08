import React from 'react';
import { Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Target: Target,
  Users: Users,
  TrendingUp: TrendingUp
};

export default function FeatureCard({
  title,
  description,
  iconName,
  stepNumber,
  tag,
  stat,
  points = []
}) {
  const IconComponent = iconMap[iconName] || Target;
  const isFirst = stepNumber === 1;
  const isSecond = stepNumber === 2;

  // Thematic brand accents for each pillar
  const theme = isFirst
    ? {
        accent: '#FF383D',
        gradient: 'from-[#FF383D] to-[#E0262B]',
        glow: 'bg-[#FF383D]/10 group-hover:bg-[#FF383D]/15',
        shadow: 'shadow-[0_8px_24px_rgba(255,56,61,0.22)]',
        badge: 'bg-[#FF383D]/8 text-[#FF383D] border-[#FF383D]/20',
        hoverText: 'group-hover:text-[#FF383D]'
      }
    : isSecond
    ? {
        accent: '#25ABE2',
        gradient: 'from-[#25ABE2] to-[#1694C7]',
        glow: 'bg-[#25ABE2]/10 group-hover:bg-[#25ABE2]/15',
        shadow: 'shadow-[0_8px_24px_rgba(37,171,226,0.22)]',
        badge: 'bg-[#25ABE2]/10 text-[#25ABE2] border-[#25ABE2]/25',
        hoverText: 'group-hover:text-[#25ABE2]'
      }
    : {
        accent: '#0D1E32',
        gradient: 'from-[#0D1E32] to-[#1E3A5F]',
        glow: 'bg-[#0D1E32]/8 group-hover:bg-[#0D1E32]/12',
        shadow: 'shadow-[0_8px_24px_rgba(13,30,50,0.22)]',
        badge: 'bg-[#0D1E32]/8 text-[#0D1E32] border-[#0D1E32]/15',
        hoverText: 'group-hover:text-[#0D1E32]'
      };

  return (
    <div className="group relative bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/90 hover:border-slate-300 shadow-[0_4px_20px_rgba(13,30,50,0.04)] hover:shadow-[0_20px_45px_rgba(13,30,50,0.09)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Ambient Top-Right Radial Glow */}
      <div 
        className={`absolute -top-14 -right-14 w-36 h-36 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${theme.glow}`} 
      />

      {/* Watermark Pillar Number */}
      <span className="absolute top-4 right-6 font-heading font-black text-5xl text-slate-100 group-hover:text-slate-200/80 transition-colors select-none pointer-events-none">
        0{stepNumber}
      </span>

      <div className="relative z-10">
        
        {/* Icon & Category Tag Row */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${theme.gradient} text-white flex items-center justify-center ${theme.shadow} transition-transform duration-300 group-hover:scale-108 group-hover:rotate-2`}>
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {tag && (
              <span className={`text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badge}`}>
                {tag}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-heading font-extrabold text-[#0D1E32] tracking-tight mb-3 transition-colors ${theme.hoverText}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Key Feature Highlights Checklist */}
        {points && points.length > 0 && (
          <div className="space-y-2.5 mb-6 pt-2 border-t border-slate-100">
            {points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700">
                <CheckCircle2 
                  className="w-4 h-4 shrink-0 mt-0.5" 
                  style={{ color: theme.accent }} 
                />
                <span className="leading-snug">{pt}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Card Footer with Principle Status */}
      <div className="relative z-10 mt-2 pt-4 border-t border-slate-100 flex items-center gap-2">
        <span 
          className="w-2 h-2 rounded-full animate-pulse" 
          style={{ backgroundColor: theme.accent }}
        />
        <span className="text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wider">
          {stat || 'Origami Principle'}
        </span>
      </div>

    </div>
  );
}
