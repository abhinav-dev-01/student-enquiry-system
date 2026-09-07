import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CheckCircle2, Phone, GraduationCap, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import Logo from '../components/Logo';

export default function EnquiryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#475569] hover:text-[#FF383D] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0]">
            <Logo className="w-5 h-5" showText={false} />
            <span>Admissions Desk</span>
          </div>
        </div>

        {/* Clean Institutional Header Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 mb-6 shadow-xs text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF383D]/8 text-[#FF383D] text-xs font-heading font-bold uppercase tracking-wider mb-2 border border-[#FF383D]/15">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Student Admissions Enquiry</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Register for Academic Guidance
              </h1>
              <p className="text-[#475569] text-sm mt-1 max-w-xl leading-relaxed">
                Provide your details below. Our academic counseling team will reach out with program syllabus details, fee structures, and batch availability.
              </p>
            </div>

            <div className="sm:border-l sm:border-[#E2E8F0] sm:pl-6 shrink-0 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Direct Helpdesk
              </span>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 px-3 py-2 rounded-lg hover:bg-[#25ABE2]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25ABE2]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_6px_25px_rgba(13,30,50,0.05)] overflow-hidden">
          
          <div className="p-6 sm:p-9 bg-white">
            <EnquiryForm />
          </div>

          {/* Footer Institutional Reassurance */}
          <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#FF383D]" />
              Personalized Counseling Call
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#25ABE2]" />
              Response Within 24 Hours
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              Confidential & Protected
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
