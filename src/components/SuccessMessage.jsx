import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, PlusCircle, User, Phone, BookOpen, GraduationCap, Building2, Clock, ShieldCheck, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function SuccessMessage({ enquiryData }) {
  const studentName = enquiryData?.Student_Name || enquiryData?.name || '';
  const program = enquiryData?.Interested_Program || enquiryData?.course || '';
  const classGrade = enquiryData?.Class_Grade || enquiryData?.class || '';
  const mobile = enquiryData?.Mobile_Number || enquiryData?.mobile || '';
  const school = enquiryData?.School_College || enquiryData?.school || '';
  const place = enquiryData?.Place || enquiryData?.place || '';
  const refId = enquiryData?.Submission_ID || '';

  return (
    <div className="bg-white rounded-[24px] p-7 sm:p-12 border border-[#E2E8F0] shadow-[0_12px_36px_rgba(13,30,50,0.06)] text-center max-w-2xl mx-auto">
      
      {/* Official Brand Logo */}
      <div className="flex justify-center mb-5">
        <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs">
          <Logo className="w-12 h-12" showText={false} />
        </div>
      </div>

      {/* Verified Status Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-bold uppercase tracking-wider mb-3">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Enquiry Registered to Google Sheets</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] tracking-tight mb-2">
        Enquiry Submitted Successfully
      </h1>

      {/* Description */}
      <p className="text-[#475569] text-sm sm:text-base max-w-md mx-auto mb-7 leading-relaxed">
        Thank you for choosing Origami Learning. Your details have been securely recorded. Our academic counseling desk will contact you shortly.
      </p>

      {/* Formal Submission Summary Card */}
      {enquiryData && (
        <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 text-left border border-[#E2E8F0] mb-7">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D1E32]">
              Official Student Record
            </span>
            {refId && (
              <span className="text-xs font-mono font-bold bg-[#FF383D]/10 text-[#FF383D] px-2.5 py-0.5 rounded border border-[#FF383D]/20">
                Ref: {refId}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2.5 text-[#0D1E32]">
              <User className="w-4 h-4 text-[#64748B] shrink-0" />
              <span className="font-semibold">{studentName}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#0D1E32]">
              <BookOpen className="w-4 h-4 text-[#25ABE2] shrink-0" />
              <span className="font-semibold text-[#FF383D]">{program}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#475569]">
              <GraduationCap className="w-4 h-4 text-[#64748B] shrink-0" />
              <span>{classGrade}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#475569]">
              <Phone className="w-4 h-4 text-[#64748B] shrink-0" />
              <span>+91 {mobile}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#475569] sm:col-span-2">
              <Building2 className="w-4 h-4 text-[#64748B] shrink-0" />
              <span className="truncate">{school}</span>
              {place && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-[#64748B] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                    {place}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Next Steps Process */}
      <div className="text-left bg-white p-5 rounded-2xl border border-[#E2E8F0] mb-7 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1E32] mb-3 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#25ABE2]" />
          Admissions Next Steps
        </h4>
        <div className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#FF383D] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
            <span>Academic counselor evaluates your academic background and syllabus focus.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#25ABE2] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
            <span>You will receive a counseling call within 24 hours with batch timing, fee details, and orientation schedules.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-6 py-3 rounded-xl font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.25)] transition-all"
        >
          <Home className="w-4 h-4 text-white" />
          <span>Return to Home</span>
        </Link>

        <Link
          to="/enquiry"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0D1E32] border border-[#E2E8F0] hover:border-[#25ABE2] px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all"
        >
          <PlusCircle className="w-4 h-4 text-[#25ABE2]" />
          <span>Submit Another Enquiry</span>
        </Link>
      </div>

    </div>
  );
}
