import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faSliders,
  faClock,
  faArrowRight,
  faWandMagicSparkles,
  faLightbulb,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

export default function QuizPreviewSection() {
  const [techSlider, setTechSlider] = useState(8);
  const [creativeRating, setCreativeRating] = useState(4);
  const [analyticalRating, setAnalyticalRating] = useState(5);

  // Compute live matched career stream
  const calculateLiveMatch = () => {
    if (techSlider >= 7 && analyticalRating >= 4) {
      return {
        stream: 'AI & Data Engineering',
        matchPercent: 96,
        recommendedRole: 'Machine Learning Architect',
        growthRate: '+38%',
        badge: 'High Technological Aptitude',
      };
    } else if (creativeRating >= 4 && techSlider >= 5) {
      return {
        stream: 'Digital Product & UX Design',
        matchPercent: 92,
        recommendedRole: 'Principal UX Systems Designer',
        growthRate: '+24%',
        badge: 'Creative & Technical Synergy',
      };
    } else if (analyticalRating >= 4) {
      return {
        stream: 'Quantitative Analytics & Strategy',
        matchPercent: 89,
        recommendedRole: 'Financial Quant Strategist',
        growthRate: '+22%',
        badge: 'Strategic & Logic Orientation',
      };
    } else {
      return {
        stream: 'Multidisciplinary Leadership',
        matchPercent: 85,
        recommendedRole: 'Technology Project Director',
        growthRate: '+19%',
        badge: 'Adaptive Problem Solving',
      };
    }
  };

  const match = calculateLiveMatch();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-[#1C1C22]">
      {/* Center Spotlight */}
      <div className="ambient-orange-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3">
            <FontAwesomeIcon icon={faBrain} className="text-xs" />
            <span>Interactive Assessment Preview</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Try the AI-Powered <span className="gradient-text-fire">Interest Quiz</span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg">
            Test how our multi-dimensional scoring engine maps your logic, passions, and creative problem-solving skills to real-world career trajectories.
          </p>
        </div>

        {/* Interactive Mini-Assessment Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0D0D10] border border-[#222226] shadow-[0_15px_40px_rgba(0,0,0,0.9)] space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faSliders} className="text-[#E8602E]" />
                  <span>Question 1: Coding & Algorithmic Automation</span>
                </span>
                <span className="text-xs font-mono font-bold text-[#E8602E]">{techSlider}/10</span>
              </div>
              <p className="text-xs text-[#D4D4D8] mb-3">
                How excited are you to architect scalable code, solve logic puzzles, or build automated systems?
              </p>
              <input
                type="range"
                min="1"
                max="10"
                value={techSlider}
                onChange={(e) => setTechSlider(Number(e.target.value))}
                className="w-full h-2 bg-[#1A1A22] rounded-lg appearance-none cursor-pointer accent-[#E8602E]"
              />
              <div className="flex justify-between text-[10px] text-[#71717A] mt-1">
                <span>1 (Non-Technical)</span>
                <span>5 (Moderate)</span>
                <span>10 (Passionate Coder)</span>
              </div>
            </div>

            {/* Question 2: Likert Scale Rating for Creative Aesthetics */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-2">
                Question 2: Visual Styling, Aesthetics & User Empathy
              </span>
              <p className="text-xs text-[#D4D4D8] mb-3">
                I enjoy refining design systems, visual balance, and intuitive product interactions.
              </p>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setCreativeRating(val)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      creativeRating === val
                        ? 'bg-[#E8602E] text-white border-[#E8602E] shadow-glow-orange-sm'
                        : 'bg-[#141418] text-[#A1A1AA] border-[#262630] hover:text-white'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-[#71717A] mt-1 px-1">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>
            </div>

            {/* Question 3: Analytical Problem Solving */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-2">
                Question 3: Quantitative & Statistical Analysis
              </span>
              <p className="text-xs text-[#D4D4D8] mb-3">
                I feel energized when interpreting data trends, statistical probabilities, and financial metrics.
              </p>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAnalyticalRating(val)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      analyticalRating === val
                        ? 'bg-[#E8602E] text-white border-[#E8602E] shadow-glow-orange-sm'
                        : 'bg-[#141418] text-[#A1A1AA] border-[#262630] hover:text-white'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Dynamic Prediction Card */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#121216] border border-[#E8602E]/40 shadow-[0_20px_50px_rgba(232,96,46,0.15)] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-1 rounded-md border border-[#E8602E]/20">
                  Live Match Engine
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[#E8602E] text-xs" />
                  <span>{match.matchPercent}% Match</span>
                </span>
              </div>

              <h3 className="text-2xl font-extrabold font-display text-white mb-1">
                {match.stream}
              </h3>
              <p className="text-xs text-[#A1A1AA] mb-5">
                Top matched career track for your inputs:
              </p>

              <div className="p-4 rounded-2xl bg-[#0A0A0C] border border-[#232328] mb-5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#71717A] block mb-1">
                  Recommended Primary Role
                </span>
                <span className="text-base font-extrabold text-[#FFE8DE] block">
                  {match.recommendedRole}
                </span>
                <div className="flex items-center gap-3 mt-2 text-xs text-[#D4D4D8]">
                  <span>Industry Growth: <strong className="text-[#E8602E]">{match.growthRate}</strong></span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] mb-6">
                <FontAwesomeIcon icon={faLightbulb} className="text-[#E8602E]" />
                <span>Cognitive Profile: <strong className="text-white">{match.badge}</strong></span>
              </div>
            </div>

            <Link
              to="/quiz"
              className="btn-primary-orange w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Take Full 7-Step Timed Quiz</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
