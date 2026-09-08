import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, BookOpen, ArrowRight, CheckCircle2, Award, GraduationCap } from 'lucide-react';

const iconMap = {
  Landmark: Landmark,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap
};

export default function ProgramCard({
  title,
  description,
  iconName,
  badge,
  highlights = []
}) {
  const IconComponent = iconMap[iconName] || BookOpen;
  const isCivilService = title.toLowerCase().includes('civil');

  return (
    <div className={`relative rounded-[20px] transition-all duration-200 flex flex-col justify-between overflow-hidden bg-white border ${
      isCivilService
        ? 'border-[#FF383D]/30 shadow-[0_6px_24px_rgba(255,56,61,0.06)] hover:shadow-[0_12px_32px_rgba(255,56,61,0.12)]'
        : 'border-[#25ABE2]/30 shadow-[0_6px_24px_rgba(37,171,226,0.06)] hover:shadow-[0_12px_32px_rgba(37,171,226,0.12)]'
    }`}>
      
      {/* Top Brand Accent Strip */}
      <div className={`h-1.5 w-full ${isCivilService ? 'bg-[#FF383D]' : 'bg-[#25ABE2]'}`} />

      <div className="p-7 sm:p-9 flex flex-col flex-grow">
        
        {/* Header row with icon and badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-13 h-13 rounded-xl flex items-center justify-center transition-colors ${
            isCivilService 
              ? 'bg-[#FF383D]/10 text-[#FF383D]' 
              : 'bg-[#25ABE2]/10 text-[#25ABE2]'
          }`}>
            <IconComponent className="w-6 h-6" />
          </div>

          {badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isCivilService 
                ? 'bg-[#FF383D]/10 text-[#FF383D] border border-[#FF383D]/20' 
                : 'bg-[#25ABE2]/10 text-[#25ABE2] border border-[#25ABE2]/20'
            }`}>
              {isCivilService ? <Award className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
              {badge}
            </span>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-heading font-extrabold text-[#0D1E32] mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-[#475569] text-sm leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Highlights List */}
        {highlights && highlights.length > 0 && (
          <div className="mb-8 pt-5 border-t border-[#E2E8F0] flex-grow">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1E32] mb-3">
              Curriculum & Method Highlights:
            </h4>
            <ul className="space-y-2.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#0D1E32]">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isCivilService ? 'text-[#FF383D]' : 'text-[#25ABE2]'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Action */}
        <div className="pt-2">
          <Link
            to={`/enquiry?program=${encodeURIComponent(title)}`}
            className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-[12px] font-heading font-bold text-sm transition-all duration-200 group ${
              isCivilService
                ? 'bg-[#FF383D] hover:bg-[#E0262B] text-white shadow-[0_4px_14px_rgba(255,56,61,0.22)] hover:shadow-[0_6px_20px_rgba(255,56,61,0.32)]'
                : 'bg-[#25ABE2] hover:bg-[#1694C7] text-white shadow-[0_4px_14px_rgba(37,171,226,0.22)] hover:shadow-[0_6px_20px_rgba(37,171,226,0.32)]'
            }`}
          >
            <span>Enquire for {title}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
