import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2, GraduationCap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner: Red Background & White Text */}
        <div className="relative rounded-[24px] bg-[#E0262B] text-white p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(224,38,43,0.28)] overflow-hidden border border-[#FF383D]">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Description & Reassurances in White */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider mb-4 border border-white/30">
                <GraduationCap className="w-3.5 h-3.5 text-white" />
                <span>Admissions Counseling</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-white mb-3 leading-tight">
                Ready to Plan Your Learning Journey?
              </h2>

              <p className="text-white/90 text-sm sm:text-base max-w-2xl font-normal leading-relaxed mb-6">
                Submit an enquiry and our dedicated academic counseling team will discuss the best program schedule, batch availability, and study materials for your target goals.
              </p>

              {/* Verified Perks in White */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  Dedicated 1-on-1 Guidance
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  Curriculum & Batch Roadmap
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  Prompt Response within 24h
                </span>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              {/* Submit Student Enquiry: Red Glassmorphism Button with White Text */}
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2.5 bg-red-400/30 hover:bg-red-400/40 backdrop-blur-md text-white px-7 py-3.5 rounded-[12px] font-heading font-bold text-sm border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.14),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all text-center group"
              >
                <span>Submit Student Enquiry</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Admissions Helpline: Logo Blue Glassmorphism Button with White Text */}
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-[#25ABE2]/25 hover:bg-[#25ABE2]/35 backdrop-blur-md text-white border border-[#25ABE2]/60 hover:border-white/50 px-6 py-3.5 rounded-[12px] font-heading font-semibold text-xs tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(37,171,226,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all text-center group"
              >
                <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Helpline: +91 98765 43210</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
