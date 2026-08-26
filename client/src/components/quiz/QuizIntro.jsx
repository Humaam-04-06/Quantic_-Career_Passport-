import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faGraduationCap,
  faUserTie,
  faBriefcase,
  faClock,
  faShieldHalved,
  faArrowRight,
  faSliders,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

export default function QuizIntro({ selectedPersona, onSelectPersona, onStart }) {
  const personas = [
    {
      id: 'Student',
      title: 'High School & College Student',
      desc: 'Discover academic streams, university majors, entry internships, and core foundational tech/science tracks.',
      icon: faGraduationCap,
    },
    {
      id: 'Graduate',
      title: 'Fresh Graduate & Entry-Level',
      desc: 'Identify in-demand industry domains, high-starting compensation tracks, and entry portfolio blueprints.',
      icon: faBriefcase,
    },
    {
      id: 'Professional',
      title: 'Working Professional / Career Pivot',
      desc: 'Assess transferable skillsets, executive leadership roles, and strategic high-growth career pivots.',
      icon: faUserTie,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-12">
      {/* Intro Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-6 shadow-sm">
          <FontAwesomeIcon icon={faBrain} className="text-xs" />
          <span>Multi-Dimensional Cognitive Assessment</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight mb-6">
          Discover Your Perfect <span className="gradient-text-fire">Career Stream</span>
        </h1>

        <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Powered by the proven <strong>Holland RIASEC framework</strong> and real-time AI modeling. Answer 7 intuitive questions to unlock your custom Career Passport and 90-day learning roadmap.
        </p>

        {/* Quick Specs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#D4D4D8]">
          <span className="flex items-center gap-2 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
            <span>Estimated Time: <strong>3 Minutes</strong></span>
          </span>
          <span className="flex items-center gap-2 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <FontAwesomeIcon icon={faChartPie} className="text-[#E8602E]" />
            <span>6-Axis RIASEC Analysis</span>
          </span>
          <span className="flex items-center gap-2 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[#E8602E]" />
            <span>Instant Digital Passport</span>
          </span>
        </div>
      </div>

      {/* Step 1 Selector: Target Career Persona */}
      <div className="space-y-4 text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#A1A1AA] block text-center">
          Step 1: Select Your Current Career Stage
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personas.map((p) => {
            const isSelected = selectedPersona === p.id;
            return (
              <div
                key={p.id}
                onClick={() => onSelectPersona(p.id)}
                className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'glass-panel-ultra border-[#E8602E] shadow-glow-orange-sm ring-1 ring-[#E8602E]'
                    : 'glass-card-interactive hover:border-white/20'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg mb-4 transition-transform ${
                      isSelected ? 'bg-[#E8602E] text-white shadow-glow-orange-sm' : 'bg-white/10 text-[#A1A1AA]'
                    }`}
                  >
                    <FontAwesomeIcon icon={p.icon} />
                  </div>
                  <h3 className="text-lg font-extrabold font-display text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-[#E8602E]' : 'text-[#71717A]'}>
                    {isSelected ? 'Active Pathway' : 'Select Stage'}
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-[#E8602E] bg-[#E8602E]' : 'border-white/30'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Start Button CTA */}
      <div>
        <button
          type="button"
          onClick={onStart}
          className="btn-primary-orange px-10 py-4 text-base font-bold flex items-center gap-3 mx-auto shadow-glow-orange cursor-pointer hover:scale-105 transition-transform"
        >
          <span>Begin 7-Step Assessment</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
        </button>
      </div>
    </div>
  );
}
