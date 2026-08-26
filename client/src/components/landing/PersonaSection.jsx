import React, { useState } from 'react';
import CareerPassportCard from '../cards/CareerPassportCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faBriefcase,
  faGraduationCap,
  faLayerGroup,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

const PERSONA_PASSES = [
  {
    id: 'student-pass',
    roleTitle: 'Student Passport',
    roleCategory: 'High School & Foundation',
    stageBadge: 'Entry Explorer',
    salaryOrBenefit: 'Scholarships & Streams',
    passportCode: 'PASS-STU01',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    keyHighlights: [
      'Interactive Stream & Major Matcher',
      'STEM & Global Scholarships Directory',
      'Foundation Career Quizzes & Roadmaps',
    ],
    ctaText: 'Start Student Track',
    ctaLink: '/quiz?role=student',
  },
  {
    id: 'graduate-pass',
    roleTitle: 'Graduate Passport',
    roleCategory: 'University & Early Career',
    stageBadge: 'Career Launch',
    salaryOrBenefit: '$75k - $120k / yr',
    passportCode: 'PASS-GRAD02',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    keyHighlights: [
      'Technical Skill Gap Diagnostics',
      'Resume ATS Optimization & Upload',
      'Full-Stack & Cloud Learning Paths',
    ],
    ctaText: 'Launch Graduate Track',
    ctaLink: '/careers?stage=graduate',
  },
  {
    id: 'pro-pass',
    roleTitle: 'Professional Passport',
    roleCategory: 'Executive & Career Pivot',
    stageBadge: 'Mastery & Leadership',
    salaryOrBenefit: '$130k - $240k+ / yr',
    passportCode: 'PASS-PRO03',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    keyHighlights: [
      'AI & Quant Finance Transition Blueprints',
      'Executive Salary Benchmarking',
      'Peer Masterclasses & Success Hub',
    ],
    ctaText: 'Explore Pro Pathways',
    ctaLink: '/careers?stage=professional',
  },
];

export default function PersonaSection() {
  const [filterMode, setFilterMode] = useState('all');

  const filteredPasses = filterMode === 'all'
    ? PERSONA_PASSES
    : PERSONA_PASSES.filter(p => p.id.includes(filterMode));

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Underlying Ambient Glow Orbs for Glass Refraction */}
      <div className="ambient-orange-spotlight top-1/4 left-1/4 opacity-40 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-10 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-xs" />
            <span>Role-Based Career Passports</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Tailored Experiences for <span className="gradient-text-fire">Every Career Stage</span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            PathSeeker segments your career exploration journey based on where you are right now. Choose your passport to unlock customized roadmaps, tools, and benchmarks.
          </p>

          {/* Frosted Glass Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 p-1.5 max-w-fit mx-auto rounded-full glass-pill">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Passports (3)
            </button>
            <button
              onClick={() => setFilterMode('student')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'student'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setFilterMode('graduate')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'graduate'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Graduates
            </button>
            <button
              onClick={() => setFilterMode('pro')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'pro'
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Working Professionals
            </button>
          </div>
        </div>

        {/* Ticket Booking / Career Passport Cards Grid */}
        <div className="flex justify-center items-stretch gap-6 sm:gap-8 flex-wrap">
          {filteredPasses.map((pass) => (
            <CareerPassportCard
              key={pass.id}
              id={pass.id}
              roleTitle={pass.roleTitle}
              roleCategory={pass.roleCategory}
              stageBadge={pass.stageBadge}
              salaryOrBenefit={pass.salaryOrBenefit}
              passportCode={pass.passportCode}
              imageUrl={pass.imageUrl}
              keyHighlights={pass.keyHighlights}
              ctaText={pass.ctaText}
              ctaLink={pass.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
