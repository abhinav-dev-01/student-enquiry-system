import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import Logo from '../components/Logo';
import { CheckCircle2, ShieldCheck, BookOpen, GraduationCap } from 'lucide-react';

const PROGRAMS_DATA = [
  {
    title: 'Civil Service',
    description: 'Build the knowledge, discipline, and conceptual depth required for state and national civil services examinations.',
    iconName: 'Landmark',
    badge: 'Flagship Foundation',
    popular: true,
    highlights: [
      'Comprehensive syllabus coverage & conceptual clarity',
      'Daily current affairs and newspaper editorial analysis',
      'Answer writing practice with personalized faculty feedback',
      'Civil servant guest masterclasses & guidance sessions'
    ]
  },
  {
    title: 'Tuition',
    description: 'Personalized academic coaching to strengthen concepts, resolve doubts, and elevate school and degree exam scores.',
    iconName: 'BookOpen',
    badge: 'Class 8–12 & Degree',
    popular: false,
    highlights: [
      'Subject mastery across Science, Math, Commerce & Humanities',
      'Small batch sizes for personalized teacher attention',
      'Chapter-wise tests, revisions & exam-oriented practice',
      'Dedicated doubt-clearing hours for difficult topics'
    ]
  }
];

const WHY_FEATURES = [
  {
    title: 'Concept-First Learning',
    description: 'Topics are broken into structured conceptual steps. We build understanding from first principles, eliminating rote memorization.',
    iconName: 'Target'
  },
  {
    title: 'Personal Faculty Mentoring',
    description: 'Individual guidance helps each student identify weak points, refine study schedules, and build consistent learning habits.',
    iconName: 'Users'
  },
  {
    title: 'Structured Milestones',
    description: 'Continuous chapter evaluations, mock test papers, and progress tracking keep students accountable and exam-ready.',
    iconName: 'TrendingUp'
  }
];

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (No background squares) */}
      <HeroSection />

      {/* 2. Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF383D]/8 text-[#FF383D] font-heading font-bold text-xs uppercase tracking-wider mb-3 border border-[#FF383D]/15">
              <GraduationCap className="w-3.5 h-3.5 text-[#FF383D]" />
              <span>Academic Programs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight mb-3">
              Explore Our Learning Pathways
            </h2>
            
            <p className="text-[#475569] text-base font-normal">
              Targeted academic preparation designed for school curriculum, degree excellence, and competitive civil services.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {PROGRAMS_DATA.map((prog, idx) => (
              <ProgramCard
                key={idx}
                title={prog.title}
                description={prog.description}
                iconName={prog.iconName}
                badge={prog.badge}
                popular={prog.popular}
                highlights={prog.highlights}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Origami Learning Section */}
      <section id="why-us" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25ABE2]/10 text-[#25ABE2] font-heading font-bold text-xs uppercase tracking-wider mb-3 border border-[#25ABE2]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25ABE2]" />
              <span>The Origami Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight mb-3">
              Why Students Choose Origami Learning
            </h2>

            <p className="text-[#475569] text-base">
              A balanced combination of subject depth, disciplined structure, and accessible teacher support.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_FEATURES.map((feature, idx) => (
              <FeatureCard
                key={idx}
                stepNumber={idx + 1}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. About Origami Learning Section */}
      <section id="about" className="py-16 md:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] p-7 sm:p-10 lg:p-14 border border-[#E2E8F0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF383D]/8 text-[#FF383D] font-heading font-bold text-xs uppercase tracking-wider border border-[#FF383D]/15">
                <BookOpen className="w-3.5 h-3.5 text-[#FF383D]" />
                <span>About Our Institute</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0D1E32] tracking-tight">
                Shaping Potential Into Disciplined Achievement
              </h3>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                At Origami Learning, our name signifies our educational philosophy: just as a flat sheet of paper folds into intricate, purposeful art through precise, deliberate folds, every student's potential unfolds into mastery through structured, step-by-step guidance.
              </p>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                Whether preparing for competitive civil services examinations or establishing foundational mastery in school and college curricula, our faculty members offer clarity, accountability, and continuous support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0D1E32]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF383D] shrink-0" />
                  <span>Subject Expert Mentors</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0D1E32]">
                  <CheckCircle2 className="w-4 h-4 text-[#25ABE2] shrink-0" />
                  <span>Structured Study Schedules</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0D1E32]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF383D] shrink-0" />
                  <span>Daily Doubt Resolution</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0D1E32]">
                  <CheckCircle2 className="w-4 h-4 text-[#25ABE2] shrink-0" />
                  <span>Continuous Academic Assessment</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0D1E32] rounded-2xl p-7 text-white relative overflow-hidden shadow-lg border border-[#1E3A5F]">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Logo className="w-10 h-10" textDark={false} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">Our Academic Pledge</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    "We do not encourage superficial cramming. We teach students how to think clearly, organize their study time effectively, and approach any examination with genuine confidence."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Academic Director</span>
                  <span className="font-bold text-[#25ABE2]">Origami Learning</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Simple Enquiry CTA Section */}
      <CTASection />

    </div>
  );
}
