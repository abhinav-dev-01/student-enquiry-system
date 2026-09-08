import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CheckCircle2, Phone, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import Logo from '../components/Logo';

export default function EnquiryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAFBFD] text-[#0D1E32]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-[#FF383D] uppercase tracking-wider transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Admissions Desk Active</span>
          </div>
        </div>

        {/* Editorial Heading Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-6 shadow-[0_4px_20px_rgba(13,30,50,0.03)] text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase block mb-1.5">
                01 / ENROLMENT & COUNSELING
              </span>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Register for Academic Guidance
              </h1>
              <p className="text-slate-600 text-sm mt-1.5 max-w-xl leading-relaxed">
                Provide your details below. Our academic counseling team will reach out with program syllabus details, batch availability, and fee structures.
              </p>
            </div>

            <div className="sm:border-l sm:border-slate-200 sm:pl-6 shrink-0 flex flex-col justify-center">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                DIRECT HELPDESK
              </span>
              <a
                href="tel:+917012743030"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0D1E32] bg-[#F0F9FF] border border-[#25ABE2]/25 px-3.5 py-2.5 rounded-xl hover:bg-[#25ABE2]/10 transition-colors font-sans"
              >
                <Phone className="w-3.5 h-3.5 text-[#25ABE2]" />
                <span>+91 70127 43030</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_6px_25px_rgba(13,30,50,0.04)] overflow-hidden">
          
          <div className="p-6 sm:p-9 bg-white">
            <EnquiryForm />
          </div>

          {/* Footer Institutional Reassurance */}
          <div className="bg-[#FAFBFD] border-t border-slate-200/80 px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 font-sans">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#FF383D]" />
              Personalized 1-on-1 Counseling
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#25ABE2]" />
              Response Within 24 Hours
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              Strict Student Privacy
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
