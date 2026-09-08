import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  BookOpen,
  Scale,
  Users,
  FileText
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const COVENANTS = [
    {
      num: '01',
      title: 'Zero Rote Memorization',
      lead: 'Reason Before Recitation',
      description: 'Every theorem, constitutional article, or mathematical derivation must be grasped from first principles before practice. We do not test memory tricks; we build conceptual instinct.'
    },
    {
      num: '02',
      title: 'Every Answer Evaluated by Hand',
      lead: 'Returned Within 24 Hours',
      description: 'Students write designated answers on real paper every single day. Experienced faculty review each script line-by-line with written red-ink remarks on structure, content, and conceptual depth.'
    },
    {
      num: '03',
      title: 'Strict Batch Ceilings (Max 15)',
      lead: 'Every Student Known by Name',
      description: 'We do not run mass-factory auditoriums. A strict 15-student cap ensures teachers immediately notice when someone falls behind and can adapt teaching speed accordingly.'
    },
    {
      num: '04',
      title: 'Open Teacher Consultation Desks',
      lead: 'The Zero-Overnight Doubt Rule',
      description: 'Our faculty desks remain accessible after every lecture. Students are actively encouraged to sit down with teachers and clear every doubt before leaving for the day.'
    },
    {
      num: '05',
      title: 'Transparent Parent Collaboration',
      lead: 'Honest Academic Checkpoints',
      description: 'Parents receive clear, diagnostic evaluation sheets every month detailing tangible chapter mastery, attendance discipline, and recommended home revision targets.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFC] text-[#0D1E32]">
      
      {/* ------------------------------------------------------------------------- */}
      {/* 1. EDITORIAL HEADER & INSTITUTIONAL CHARTER */}
      {/* ------------------------------------------------------------------------- */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            
            {/* Minimalist Editorial Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase">
                01 / INSTITUTIONAL CHARTER
              </span>
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-xs text-slate-500 font-serif italic">
                Origami Learning • Est. 2024
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0D1E32] tracking-tight leading-[1.1] mb-8">
              The art of <span className="text-[#FF383D]">intentional</span>{' '}
              <span className="text-[#25ABE2]">education</span>.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
              <div className="md:col-span-7">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Origami Learning was founded on a simple conviction: genuine intellectual mastery cannot be mass-produced in crowded lecture factories. Like the Japanese art of paper folding, real scholarship requires patience, deliberate precision, and focused guidance.
                </p>
              </div>

              <div className="md:col-span-5 md:pl-6 md:border-l border-slate-200">
                <blockquote className="font-editorial italic text-base sm:text-lg text-[#0D1E32]/90 leading-snug">
                  “When you give a student first-principles understanding and a teacher who genuinely reads their work, fear disappears and disciplined achievement takes its place.”
                </blockquote>
                <span className="block mt-2 text-[11px] font-heading font-bold uppercase tracking-wider text-slate-400">
                  — Academic Director's Note
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2.5 bg-[#FF383D] hover:bg-[#E0262B] text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.22)] transition-all group"
              >
                <span>Schedule a Counseling Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href="tel:+917012743030"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#0D1E32] px-5 py-3.5 rounded-xl font-heading font-semibold text-sm border border-slate-200 hover:border-slate-300 bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25ABE2]" />
                <span>Admissions: +91 70127 43030</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 2. LEADERSHIP & COLLABORATIVE MENTORSHIP ARCHIVE */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-left">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#25ABE2] uppercase block mb-2">
              02 / DISTINGUISHED COLLOQUIUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
              Mentorship Rooted in Real Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Real Institutional Photograph Frame */}
            <div className="lg:col-span-6">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(13,30,50,0.06)]">
                <div className="rounded-xl overflow-hidden border border-slate-200/80 relative">
                  <img
                    src="/about-showcase.png"
                    alt="Dr. D Sajith Babu IAS with Origami Learning Mentors"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-4 px-2 pb-1 text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1E32]">
                      ARCHIVAL RECORD • GOVERNANCE SEMINAR
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    <strong className="text-[#0D1E32]">Dr. D Sajith Babu IAS</strong> (Chief Electoral Officer, Keralam) conducting an interactive colloquium with the Origami Learning academic board and civil services aspirants.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Competitive examinations demand more than memorizing textbooks.
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                They assess intellectual stamina, ethical decision-making, and structural articulation under severe pressure. At Origami, we bridge the gap between classroom theory and real administrative practice.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Our institution routinely brings serving officers and university scholars into our classrooms. They conduct in-depth answer critiques, share insights on public governance, and demystify the personality interview stage for our candidates.
              </p>

              {/* Minimalist 4-Pillar Grid with Hairlines */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#FF383D]">01</span>
                    <BookOpen className="w-4 h-4 text-[#FF383D]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0D1E32] mb-0.5">Real Case Studies</h4>
                  <p className="text-xs text-slate-500">Public policy & governance challenges analyzed in real time.</p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#25ABE2]">02</span>
                    <Scale className="w-4 h-4 text-[#25ABE2]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0D1E32] mb-0.5">Administrative Ethics</h4>
                  <p className="text-xs text-slate-500">GS-IV integrity workshops and ethical dilemma resolution.</p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#16A34A]">03</span>
                    <Users className="w-4 h-4 text-[#16A34A]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0D1E32] mb-0.5">Interview Simulations</h4>
                  <p className="text-xs text-slate-500">1-on-1 personality mock boards with senior civil officers.</p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#0D1E32]">04</span>
                    <FileText className="w-4 h-4 text-[#0D1E32]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0D1E32] mb-0.5">Daily Editorial Strategy</h4>
                  <p className="text-xs text-slate-500">Extracting constitutional angles from morning national headlines.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 3. THE 3 FOLDS: THE ORIGAMI PEDAGOGY */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl text-left mb-14">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase block mb-2">
              03 / THE ORIGAMI METAPHOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight mb-3">
              Why the Name “Origami”?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              In traditional Japanese paper craft, intricate form is achieved without cutting or gluing. Every fold is deliberate, building upon the previous crease. That is our exact pedagogical method.
            </p>
          </div>

          {/* Clean 3-Column Sequential Spread */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="border-t-2 border-[#FF383D] pt-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF383D] uppercase tracking-wider block mb-2">
                  FOLD 01 • THE PLAIN SHEET
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#0D1E32] mb-3">
                  Diagnostic Baseline
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every student arrives with unshaped potential. We conduct a thorough diagnostic evaluation to identify misconceptions, unlearn rote memorization habits, and build an honest baseline before syllabus training starts.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono font-bold text-slate-400">
                Phase I: First Principles
              </div>
            </div>

            <div className="border-t-2 border-[#25ABE2] pt-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#25ABE2] uppercase tracking-wider block mb-2">
                  FOLD 02 • THE DELIBERATE CREASE
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#0D1E32] mb-3">
                  Daily Handwriting & Review
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily answer drills, line-by-line red-ink teacher annotations, and focused 1-on-1 doubt clearing. Step by step, the student develops intellectual discipline, argument structure, and analytical stamina.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono font-bold text-slate-400">
                Phase II: Habit Formation
              </div>
            </div>

            <div className="border-t-2 border-[#16A34A] pt-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider block mb-2">
                  FOLD 03 • THE STANDING STRUCTURE
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#0D1E32] mb-3">
                  Exam Poise & Articulation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The final result is not a student panicked by unexpected questions, but a poised candidate capable of deconstructing complex problems and articulating clear, well-reasoned answers under strict time constraints.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono font-bold text-slate-400">
                Phase III: Mastery & Composure
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 4. THE FACULTY COVENANT: 5 RULES OUR TEACHERS LIVE BY */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase block">
                04 / ETHICAL STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Our Five Faculty Covenants
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The non-negotiable promises we make to every student and parent who enters our classrooms.
              </p>
            </div>

            {/* Right Docket List */}
            <div className="lg:col-span-8 divide-y divide-slate-200">
              {COVENANTS.map((cov, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0 flex items-start gap-6">
                  <span className="text-2xl font-mono font-extrabold text-slate-300 shrink-0">
                    {cov.num}
                  </span>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF383D]">
                      {cov.lead}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#0D1E32]">
                      {cov.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                      {cov.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 5. CAMPUS SANCTUARY: MINIMALIST ATMOSPHERE */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 md:py-20 bg-[#0D1E32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#25ABE2] uppercase block">
              05 / PHYSICAL ENVIRONMENT
            </span>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              A Quiet Sanctuary for Deep Study
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Academic excellence requires uninterrupted concentration. Our physical campus is designed around silent individual study carrels, dedicated teacher consultation tables, and distraction-free seminar rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF383D] block mb-1">FACILITY 01</span>
              <h4 className="font-heading font-bold text-base text-white mb-1">Silent Study Carrels</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Personal study cubicles reserved for high-focus reading and test practice.</p>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#25ABE2] block mb-1">FACILITY 02</span>
              <h4 className="font-heading font-bold text-base text-white mb-1">Open Faculty Desks</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Accessible teacher tables where students resolve doubts every single afternoon.</p>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#16A34A] block mb-1">FACILITY 03</span>
              <h4 className="font-heading font-bold text-base text-white mb-1">Simulated Mock Hall</h4>
              <p className="text-xs text-slate-400 leading-relaxed">A formal test environment designed to eliminate exam-day adrenaline and fear.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 6. DIRECT ACTION */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF383D] uppercase block mb-3">
            ADMISSIONS OPEN • BATCHES CAPPED AT 15
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D1E32] tracking-tight mb-4">
            Begin Your Academic Journey with Intentional Mentorship
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
            Speak directly with our academic mentors to understand cohort availability, syllabus pacing, and the right program track for your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF383D] hover:bg-[#E0262B] text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm shadow-[0_4px_14px_rgba(255,56,61,0.22)] transition-all"
            >
              <span>Submit Student Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-[#0D1E32] px-7 py-3.5 rounded-xl font-heading font-semibold text-sm border border-slate-200 transition-colors"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
