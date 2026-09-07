import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  Target: Target,
  Users: Users,
  TrendingUp: TrendingUp
};

export default function FeatureCard({
  title,
  description,
  iconName,
  stepNumber
}) {
  const IconComponent = iconMap[iconName] || Target;
  const isSecond = stepNumber === 2;
  const isThird = stepNumber === 3;

  const accentColor = isSecond ? '#25ABE2' : isThird ? '#0D1E32' : '#FF383D';
  const badgeBg = isSecond ? 'bg-[#25ABE2]/10 text-[#25ABE2]' : isThird ? 'bg-[#0D1E32]/10 text-[#0D1E32]' : 'bg-[#FF383D]/10 text-[#FF383D]';

  return (
    <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-[0_4px_16px_rgba(13,30,50,0.04)] hover:shadow-[0_8px_24px_rgba(13,30,50,0.08)] transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Step indicator and Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${badgeBg}`}>
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="font-heading font-extrabold text-sm text-[#94A3B8]">
            Pillar 0{stepNumber}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-heading font-bold text-[#0D1E32] mb-2.5">
          {title}
        </h3>

        <p className="text-[#475569] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Neat Footer Indicator */}
      <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
        <span className="text-[11px] font-bold text-[#64748B] tracking-wider uppercase">Academic Principle</span>
      </div>
    </div>
  );
}
