import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { 
  ArrowRight, 
  ChevronDown, 
  PenTool, 
  Clock, 
  Calendar, 
  Users, 
  Check, 
  Compass,
  ArrowUpRight
} from 'lucide-react';

export default function HomePage() {
  const location = useLocation();

  // Interactive FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const FAQS = [
    {
      q: 'What is the maximum batch size at Origami Learning?',
      a: 'We strictly cap tuition batches at 15 students and civil service cohorts at small seminar sizes. Our teachers know every student by name, monitor their individual answer sheets, and ensure no one is lost in a crowded auditorium.'
    },
    {
      q: 'How does the 1-on-1 daily answer evaluation work?',
      a: 'Students write designated answers by hand every single day. Experienced faculty review each script line-by-line with written red-ink remarks on structure, content, and conceptual depth—returned within 24 hours.'
    },
    {
      q: 'Can a student join mid-academic term?',
      a: 'Yes. For mid-term admissions, our faculty conducts a personal diagnostic session to map any missing foundational concepts and creates a 2-week catch-up schedule before integrating into the active batch.'
    },
    {
      q: 'What role do civil servants like Dr. D Sajith Babu IAS play in mentorship?',
      a: 'Distinguished administrative officers conduct periodic masterclasses and interactive colloquiums. They teach students how to approach real governance case studies, ethical decision making, and high-pressure interview preparation.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      
      {/* 1. Hero Section (Sticky underneath - UNTOUCHED as requested) */}
      <div id="home" className="sticky top-0 z-0">
        <HeroSection />
      </div>

      {/* 2. Content Overlay Sheet (Slides smoothly up over the Hero Section on scroll) */}
      <div className="relative z-10 bg-[#FAFBFD] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-[0_-24px_60px_rgba(13,30,50,0.12)] border-t border-slate-200/90">
        
        {/* Tactile Sheet Grab Indicator */}
        <div className="pt-4 pb-2 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-300" />
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 1: THE ORIGAMI PHILOSOPHY & LEADERSHIP SPREAD (Editorial Style) */}
        {/* ------------------------------------------------------------------------- */}
        <section id="about" className="py-14 md:py-24 border-b border-slate-200/80 scroll-mt-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Eyebrow */}
            <div className="flex items-center gap-3 mb-6 text-left">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase">
                01 / INSTITUTIONAL PHILOSOPHY
              </span>
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-xs text-slate-500 font-serif italic">
                The Art of Intentional Teaching
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Academic Letter & Ethos */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0D1E32] tracking-tight leading-[1.12]">
                  We do not pour facts into students. <br />
                  <span className="text-[#FF383D]">We fold potential</span> into{' '}
                  <span className="text-[#25ABE2]">unshakable clarity</span>.
                </h2>

                {/* Handcrafted Quote Box */}
                <div className="pl-5 border-l-2 border-[#FF383D] py-1 my-4">
                  <p className="font-editorial italic text-lg sm:text-xl text-[#0D1E32]/90 leading-relaxed">
                    “A flat sheet of paper holds endless possibility. Only through patient, disciplined folds does it rise into purposeful form. That is how real scholarship is born.”
                  </p>
                  <span className="block mt-2 text-[11px] font-heading font-bold uppercase tracking-wider text-slate-400">
                    — Academic Director’s Note
                  </span>
                </div>

                <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                  <p>
                    Modern coaching often treats education as an industrial conveyor belt: massive halls with hundreds of students, rushed syllabus coverage, and endless formula memorization. At Origami Learning, we believe in the opposite.
                  </p>
                  <p>
                    Whether preparing for the prestigious Civil Services or building foundational mastery in school classes 8, 9, and 10, every student learns in an environment where questions are welcomed, answers are scrutinized by real faculty, and understanding precedes examination.
                  </p>
                </div>

              </div>

              {/* Right Column: Archival Photo Feature of Dr. D Sajith Babu IAS */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#FAFBFD] rounded-2xl p-3.5 border border-slate-200 shadow-[0_10px_30px_rgba(13,30,50,0.06)]">
                  {/* Photo Frame */}
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 relative">
                    <img
                      src="/about-showcase.png"
                      alt="Dr. D Sajith Babu IAS with Origami Learning Mentors"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Museum / Editorial Caption */}
                  <div className="pt-4 px-2 pb-1 text-left">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1E32]">
                        DISTINGUISHED COLLOQUIUM
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Dr. D Sajith Babu IAS sharing insights with Origami faculty and aspirants on public administration, ethics, and disciplined exam preparation.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 2: THE TWO ACADEMIC PATHWAYS (Minimal, Premium & Logo Color Hover) */}
        {/* ------------------------------------------------------------------------- */}
        <section id="programs" className="py-16 md:py-24 bg-[#FAFBFD] border-b border-slate-200/80 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-2xl text-left mb-12">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#25ABE2] uppercase block mb-2">
                02 / ACADEMIC PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Two Dedicated Programs. One High Standard.
              </h2>
              <p className="text-slate-600 text-base mt-2">
                Focused, small-cohort academic coaching built on first principles and daily faculty mentorship.
              </p>
            </div>

            {/* Asymmetrical 2-Column Program Cards with Logo-Color Hover Effects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: Civil Service Academy (Red Logo Accent Hover) */}
              <div className="group bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#FF383D] hover:shadow-[0_16px_36px_rgba(255,56,61,0.12)] text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF383D] group-hover:tracking-widest transition-all">
                      UPSC & STATE PSC PREP
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      ANNUAL COHORT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#FF383D] transition-colors">
                    Civil Service Academy
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Multi-stage foundation designed to build conceptual depth, analytical answer writing, and administrative poise for future civil servants.
                  </p>

                  {/* Clean Minimal Curriculum Points */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF383D] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">First-Principles General Studies</span>
                        <p className="text-xs text-slate-500">Polity, Modern History, Governance, Economy & Geography.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF383D] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Daily Answer Writing Drills</span>
                        <p className="text-xs text-slate-500">Line-by-line faculty red-ink corrections returned within 24 hours.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF383D] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Senior Bureaucrat Masterclasses</span>
                        <p className="text-xs text-slate-500">Regular sessions on public policy, governance ethics & interview poise.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-bold text-[#0D1E32]">Batches:</span> Morning & Evening Options
                  </div>

                  <Link
                    to="/enquiry?program=Civil%20Service"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D1E32] group-hover:bg-[#FF383D] text-white px-6 py-3 rounded-xl font-heading font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>Enquire for Civil Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: School Foundation Tuition (Blue Logo Accent Hover) */}
              <div className="group bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#25ABE2] hover:shadow-[0_16px_36px_rgba(37,171,226,0.14)] text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#25ABE2] group-hover:tracking-widest transition-all">
                      CLASS 8, 9 & 10 TUITION
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      MAX 15 STUDENTS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#25ABE2] transition-colors">
                    School Foundation Tuition
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    First-principles academic coaching designed to eliminate exam anxiety, master core science & mathematics, and build unshakeable conceptual clarity.
                  </p>

                  {/* Clean Minimal Premium Feature Points */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25ABE2] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Conceptual Science & Mathematics</span>
                        <p className="text-xs text-slate-500">Physics, Chemistry, Biology & Maths taught from first principles—zero rote memorization.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25ABE2] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Intimate 15-Student Cohort</span>
                        <p className="text-xs text-slate-500">Strictly capped small batches ensure teachers track every student's individual pace.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25ABE2] mt-2 shrink-0" />
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Daily Worksheets & Doubt Desks</span>
                        <p className="text-xs text-slate-500">Systematic practice worksheets with line-by-line feedback and daily evening doubt clinics.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-bold text-[#0D1E32]">Schedule:</span> Evening & Weekend Cohorts
                  </div>

                  <Link
                    to="/enquiry?program=Tuition"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25ABE2] hover:bg-[#1694C7] text-white px-6 py-3 rounded-xl font-heading font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>Enquire for Tuition</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 3: THE HUMAN CRAFT (3 Main Point Cards with Hover Effects) */}
        {/* ------------------------------------------------------------------------- */}
        <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="max-w-2xl text-left mb-12">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase block mb-2">
                03 / THE HUMAN CRAFT
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Why Students Excel at Origami
              </h2>
              <p className="text-slate-600 text-base mt-2">
                Three core academic commitments that set our classrooms apart from mass coaching centres.
              </p>
            </div>

            {/* 3 Main Point Cards with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Card 1: Handwritten Feedback (Red Hover) */}
              <div className="group bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#FF383D] hover:shadow-[0_16px_36px_rgba(255,56,61,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#FF383D] bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                      01
                    </span>
                    <PenTool className="w-4 h-4 text-slate-400 group-hover:text-[#FF383D] transition-colors" />
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#FF383D] transition-colors">
                    Handwritten Faculty Feedback
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Students write answers on real paper every day. Faculty provide line-by-line red-ink critiques returned within 24 hours to build structural articulation.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Returned within 24 hours</span>
                </div>
              </div>

              {/* Card 2: Zero-Overnight Doubt (Blue Hover) */}
              <div className="group bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#25ABE2] hover:shadow-[0_16px_36px_rgba(37,171,226,0.14)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#25ABE2] bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                      02
                    </span>
                    <Clock className="w-4 h-4 text-slate-400 group-hover:text-[#25ABE2] transition-colors" />
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#25ABE2] transition-colors">
                    Zero-Overnight Doubt Rule
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Dedicated teacher tables remain open every evening after lectures so no student carries today’s conceptual confusion into tomorrow’s class.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Daily 4:00 – 7:30 PM Clinic</span>
                </div>
              </div>

              {/* Card 3: Dedicated 1-on-1 Mentorship (Green Hover) */}
              <div className="group bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A] hover:shadow-[0_16px_36px_rgba(22,163,74,0.12)]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#16A34A] bg-white px-2.5 py-1 rounded-md border border-slate-200/80">
                      03
                    </span>
                    <Compass className="w-4 h-4 text-slate-400 group-hover:text-[#16A34A] transition-colors" />
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#16A34A] transition-colors">
                    Dedicated 1-on-1 Mentorship
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Each student is paired with an academic mentor for weekly one-on-one reviews, timetable optimization, and continuous exam composure tracking.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Weekly 20-min 1-on-1 session</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 4: SINCERE FAQS (Minimal Line-Divided Accordion) */}
        {/* ------------------------------------------------------------------------- */}
        <section className="py-16 md:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            <div className="mb-10">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#0D1E32] uppercase block mb-2">
                04 / ADMISSIONS FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Clear Answers to Common Questions
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between py-2 text-left transition-colors group"
                    >
                      <span className="font-heading font-bold text-base text-[#0D1E32] group-hover:text-[#FF383D] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF383D]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pt-2 pb-3 text-sm text-slate-600 leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 7: ADMISSIONS COUNSELING CTA (Exact Colors & Glassmorphism Kept!) */}
        {/* ------------------------------------------------------------------------- */}
        <CTASection />

      </div>

    </div>
  );
}
