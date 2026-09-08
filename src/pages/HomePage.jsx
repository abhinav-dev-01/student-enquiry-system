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
        {/* ------------------------------------------------------------------------- */}
        {/* SECTION 2: ACADEMIC PATHWAYS (Modern & Minimal Program Cards) */}
        {/* ------------------------------------------------------------------------- */}
        <section id="programs" className="py-16 md:py-24 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/80 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="max-w-2xl text-left mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25ABE2]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#25ABE2] uppercase">
                  02 / ACADEMIC PATHWAYS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Two Dedicated Programs. One High Standard.
              </h2>
              <p className="text-slate-600 text-base mt-2 font-normal leading-relaxed">
                Focused, small-cohort academic coaching built on first principles and daily faculty mentorship.
              </p>
            </div>

            {/* 2-Column Program Cards with Modern Minimalist Theme & Light Hover Effects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 items-stretch">
              
              {/* Card 1: Civil Service Academy */}
              <div className="group relative bg-gradient-to-b from-white via-white to-red-50/20 rounded-3xl border border-slate-200/80 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-200/90 shadow-[0_4px_20px_rgba(13,30,50,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(255,56,61,0.12)] text-left overflow-hidden">
                {/* Minimal Top Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF383D] via-red-400 to-[#FF383D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Light Corner Ambient Tint */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-100/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF383D] bg-red-50/80 border border-red-100/60">
                      UPSC & STATE PSC PREP
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      ANNUAL COHORT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#FF383D] transition-colors">
                    Civil Service Academy
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    Multi-stage foundation designed to build conceptual depth, analytical answer writing, and administrative poise for future civil servants.
                  </p>

                  {/* Minimal Curriculum Points */}
                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-red-50 text-[#FF383D] flex items-center justify-center shrink-0 mt-0.5 border border-red-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">First-Principles General Studies</span>
                        <p className="text-xs text-slate-500 mt-0.5">Polity, Modern History, Governance, Economy & Geography.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-red-50 text-[#FF383D] flex items-center justify-center shrink-0 mt-0.5 border border-red-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Daily Answer Writing Drills</span>
                        <p className="text-xs text-slate-500 mt-0.5">Line-by-line faculty red-ink corrections returned within 24 hours.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-red-50 text-[#FF383D] flex items-center justify-center shrink-0 mt-0.5 border border-red-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Senior Bureaucrat Masterclasses</span>
                        <p className="text-xs text-slate-500 mt-0.5">Regular sessions on public policy, governance ethics & interview poise.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="font-bold text-[#0D1E32]">Batches:</span> Morning & Evening Options
                  </div>

                  <Link
                    to="/enquiry?program=Civil%20Service"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF383D] hover:bg-[#E0262B] text-white px-5 py-2.5 rounded-xl font-heading font-bold text-xs transition-all shadow-xs hover:shadow-[0_4px_12px_rgba(255,56,61,0.25)]"
                  >
                    <span>Enquire for Civil Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: School Foundation Tuition */}
              <div className="group relative bg-gradient-to-b from-white via-white to-sky-50/20 rounded-3xl border border-slate-200/80 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-200/90 shadow-[0_4px_20px_rgba(13,30,50,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(37,171,226,0.12)] text-left overflow-hidden">
                {/* Minimal Top Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#25ABE2] via-sky-400 to-[#25ABE2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Light Corner Ambient Tint */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#25ABE2] bg-sky-50/80 border border-sky-100/60">
                      CLASS 8, 9 & 10 TUITION
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      MAX 15 STUDENTS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#25ABE2] transition-colors">
                    School Foundation Tuition
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    First-principles academic coaching designed to eliminate exam anxiety, master core science & mathematics, and build unshakeable conceptual clarity.
                  </p>

                  {/* Minimal Curriculum Points */}
                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-sky-50 text-[#25ABE2] flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Conceptual Science & Mathematics</span>
                        <p className="text-xs text-slate-500 mt-0.5">Physics, Chemistry, Biology & Maths taught from first principles—zero rote memorization.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-sky-50 text-[#25ABE2] flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Intimate 15-Student Cohort</span>
                        <p className="text-xs text-slate-500 mt-0.5">Strictly capped small batches ensure teachers track every student's individual pace.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-sky-50 text-[#25ABE2] flex items-center justify-center shrink-0 mt-0.5 border border-sky-100/50">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="text-sm font-heading font-bold text-[#0D1E32]">Daily Worksheets & Doubt Desks</span>
                        <p className="text-xs text-slate-500 mt-0.5">Systematic practice worksheets with line-by-line feedback and daily evening doubt clinics.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="font-bold text-[#0D1E32]">Schedule:</span> Evening & Weekend Cohorts
                  </div>

                  <Link
                    to="/enquiry?program=Tuition"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25ABE2] hover:bg-[#1694C7] text-white px-5 py-2.5 rounded-xl font-heading font-bold text-xs transition-all shadow-xs hover:shadow-[0_4px_12px_rgba(37,171,226,0.25)]"
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
        {/* SECTION 3: THE HUMAN CRAFT (3 Main Point Cards with Modern Theme & Hover Effects) */}
        {/* ------------------------------------------------------------------------- */}
        <section id="why-us" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80 scroll-mt-24">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="max-w-2xl text-left mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-xs mb-3 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF383D] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase">
                  03 / THE HUMAN CRAFT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Why Students Excel at Origami
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
                Three foundational academic commitments that set our classrooms apart from mass coaching factories.
              </p>
            </div>

            {/* 3 Main Point Cards with Modern Glass/Gradient Theme & Dynamic Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
              
              {/* Card 1: Handwritten Feedback (Red Theme) */}
              <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-[0_4px_20px_rgba(13,30,50,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(255,56,61,0.22)] hover:border-[#FF383D]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                {/* Modern Gradient Accent Line on Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF383D] via-orange-400 to-[#FF383D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Ambient Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-red-100/80 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 text-[#FF383D] flex items-center justify-center group-hover:bg-[#FF383D] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(255,56,61,0.3)]">
                      <PenTool className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#FF383D] bg-red-50/80 px-3 py-1 rounded-full border border-red-100/80">
                      01
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#FF383D] transition-colors leading-snug">
                    Handwritten Faculty Feedback
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans">
                    Students write answers on real paper every day. Faculty provide line-by-line red-ink critiques returned within 24 hours to build structural articulation.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 rounded-full bg-emerald-100 text-[#16A34A] items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-xs font-heading font-bold text-slate-700 tracking-tight">Returned within 24 hours</span>
                </div>
              </div>

              {/* Card 2: Zero-Overnight Doubt (Blue Theme) */}
              <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-[0_4px_20px_rgba(13,30,50,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(37,171,226,0.24)] hover:border-[#25ABE2]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                {/* Modern Gradient Accent Line on Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#25ABE2] via-cyan-400 to-[#25ABE2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Ambient Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-100/80 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-50 text-[#25ABE2] flex items-center justify-center group-hover:bg-[#25ABE2] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(37,171,226,0.3)]">
                      <Clock className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#25ABE2] bg-sky-50/80 px-3 py-1 rounded-full border border-sky-100/80">
                      02
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#25ABE2] transition-colors leading-snug">
                    Zero-Overnight Doubt Rule
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans">
                    Dedicated teacher tables remain open every evening after lectures so no student carries today’s conceptual confusion into tomorrow’s class.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 rounded-full bg-emerald-100 text-[#16A34A] items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-xs font-heading font-bold text-slate-700 tracking-tight">Daily 4:00 – 7:30 PM Clinic</span>
                </div>
              </div>

              {/* Card 3: Dedicated 1-on-1 Mentorship (Green Theme) */}
              <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-[0_4px_20px_rgba(13,30,50,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(22,163,74,0.22)] hover:border-[#16A34A]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                {/* Modern Gradient Accent Line on Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#16A34A] via-teal-400 to-[#16A34A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Ambient Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-100/80 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-[#16A34A] flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(22,163,74,0.3)]">
                      <Compass className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#16A34A] bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-100/80">
                      03
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0D1E32] mb-3 group-hover:text-[#16A34A] transition-colors leading-snug">
                    Dedicated 1-on-1 Mentorship
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans">
                    Each student is paired with an academic mentor for weekly one-on-one reviews, timetable optimization, and continuous exam composure tracking.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 rounded-full bg-emerald-100 text-[#16A34A] items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-xs font-heading font-bold text-slate-700 tracking-tight">Weekly 20-min 1-on-1 session</span>
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
