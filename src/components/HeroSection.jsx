import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2, Landmark, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function HeroSection() {
  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authoritative Academic Message */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-xs font-heading font-bold text-[#0D1E32] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF383D]"></span>
              <span className="text-[#FF383D] uppercase tracking-wider">Admissions Open</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#475569] font-medium">Session 2026–2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0D1E32] tracking-tight leading-[1.12] mb-6">
              Structured Guidance for{' '}
              <span className="text-[#FF383D]">Civil Services</span> &{' '}
              <span className="text-[#25ABE2]">Academic Mastery</span>.
            </h1>

            {/* Clear, Grounded Description */}
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-2xl mb-8">
              Origami Learning combines conceptual clarity with disciplined preparation. Whether preparing for competitive civil services or excelling in school and degree curriculum, our structured methodology guides students every step of the way.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-3 bg-[#FF383D] hover:bg-[#E0262B] text-white px-7 py-3.5 rounded-[12px] font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] hover:shadow-[0_6px_20px_rgba(255,56,61,0.35)] transition-all group"
              >
                <span>Submit Student Enquiry</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <button
                onClick={scrollToPrograms}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#0D1E32] px-6 py-3.5 rounded-[12px] font-heading font-semibold text-sm border border-[#E2E8F0] hover:border-[#25ABE2] shadow-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#25ABE2]" />
                <span>Explore Programs</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#E2E8F0] w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#0D1E32]">100%</span>
                <span className="text-xs text-[#64748B] font-medium mt-0.5">Concept-First Pedagogy</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF383D]">1-on-1</span>
                <span className="text-xs text-[#64748B] font-medium mt-0.5">Dedicated Faculty Support</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#25ABE2]">Structured</span>
                <span className="text-xs text-[#64748B] font-medium mt-0.5">Step-by-Step Curriculum</span>
              </div>
            </div>

          </div>

          {/* Right Column: Neat Institutional Academic Showcase Card (No AI bubbles/orbs) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[24px] border border-[#E2E8F0] p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,30,50,0.06)] flex flex-col space-y-6">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <Logo className="w-11 h-11" showText={false} />
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0D1E32]">Origami Learning</h3>
                    <p className="text-xs text-[#64748B]">Academic Institute & Mentorship</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16A34A] bg-[#16A34A]/10 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Portal
                </span>
              </div>

              {/* Pathway 1: Civil Service Foundation (Coral) */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#FF383D]/40 transition-colors group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FF383D]/10 text-[#FF383D] flex items-center justify-center shrink-0 mt-0.5">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-sm text-[#0D1E32]">Civil Service Foundation</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF383D] bg-[#FF383D]/8 px-2 py-0.5 rounded">
                        Flagship
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Syllabus conceptual clarity, editorial analysis, and disciplined answer-writing practice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pathway 2: Academic Tuition (Sky Blue) */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#25ABE2]/40 transition-colors group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#25ABE2]/10 text-[#25ABE2] flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-sm text-[#0D1E32]">Tuition Programs</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#25ABE2] bg-[#25ABE2]/10 px-2 py-0.5 rounded">
                        Class 8–12 & Degree
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Small batch sizes, deep subject fundamentals, and regular chapter-wise assessments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Perks */}
              <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Experienced Faculty
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25ABE2]" />
                  Dedicated Doubt Hours
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF383D]" />
                  Personal Mentoring
                </span>
              </div>

              {/* Card Action Link */}
              <Link
                to="/enquiry"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0D1E32] hover:bg-[#1A3350] text-white py-3 rounded-xl font-heading font-bold text-xs tracking-wide transition-colors"
              >
                <span>Request Program Prospectus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
