import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faChartPie,
  faRoad,
  faIdCard,
  faArrowRight,
  faRotateRight,
  faDollarSign,
  faChartLine,
  faCheckCircle,
  faCircle,
  faBolt,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import RadarSkillChart from './RadarSkillChart';
import PassportCertificate from './PassportCertificate';

export default function QuizResults({ analysis, scores, persona, onRetake }) {
  const [activeTab, setActiveTab] = useState('passport'); // 'passport' | 'streams' | 'roadmap' | 'radar'

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 animate-fade-in">
      {/* Top Banner: AI Match Summary */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] shadow-sm">
          <FontAwesomeIcon icon={analysis.isAIGenerated ? faRobot : faWandMagicSparkles} className="text-xs" />
          <span>{analysis.isAIGenerated ? 'Gemini 1.5 AI Analysis Complete' : 'Cognitive Scoring Verified'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
          Your Matched Career Stream: <br className="hidden sm:block" />
          <span className="gradient-text-fire">{analysis.primaryStream}</span>
        </h1>

        <p className="text-[#D4D4D8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {analysis.summary}
        </p>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 p-1.5 max-w-fit mx-auto rounded-full glass-pill">
          <button
            type="button"
            onClick={() => setActiveTab('passport')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'passport'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faIdCard} />
            <span>Digital Passport</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('streams')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'streams'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faBolt} />
            <span>Top Matched Roles</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('radar')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'radar'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faChartPie} />
            <span>Cognitive Radar</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faRoad} />
            <span>90-Day Roadmap</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT 1: PASSPORT CERTIFICATE */}
      {activeTab === 'passport' && (
        <div className="space-y-8 animate-fade-in">
          <PassportCertificate analysis={analysis} persona={persona} />
        </div>
      )}

      {/* TAB CONTENT 2: TOP MATCHED ROLES & STREAMS */}
      {activeTab === 'streams' && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-display text-white">
              Recommended High-Fit Roles
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Based on your {analysis.dominantCodes} Holland profile and aptitude matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analysis.recommendedRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[2rem] glass-card-interactive flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8602E] bg-[#E8602E]/10 backdrop-blur-md px-2.5 py-0.5 rounded border border-[#E8602E]/30">
                      Rank #{idx + 1} Fit
                    </span>
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#E8602E] text-xs" />
                      <span>{role.fit} Match</span>
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold font-display text-white mb-4 leading-snug">
                    {role.title}
                  </h4>

                  <div className="space-y-2.5 p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[#A1A1AA]">Compensation:</span>
                      <span className="font-bold text-white">{role.salary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A1A1AA]">Market Demand:</span>
                      <span className="font-bold text-[#10B981]">{role.demand}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/careers"
                  className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold border border-white/15 hover:border-[#E8602E] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>View Verified Career Roadmap</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: COGNITIVE RADAR VISUALIZER */}
      {activeTab === 'radar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
          <div className="lg:col-span-6 flex justify-center">
            <RadarSkillChart scores={scores} />
          </div>

          <div className="lg:col-span-6 space-y-5 p-7 sm:p-9 rounded-[2.5rem] glass-panel-ultra">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8602E] block mb-1">
                Cognitive Aptitude Synthesis
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white">
                {analysis.cognitiveArchetype}
              </h3>
            </div>

            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              Your radar polygon visually plots your balance across theoretical investigation, aesthetic creative craft, data analysis, and commercial leadership.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Technical Score</span>
                <strong className="text-white text-sm">{(scores.technical || 7) * 10}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Creative Score</span>
                <strong className="text-white text-sm">{(scores.creative || 4) * 20}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Analytical Score</span>
                <strong className="text-white text-sm">{(scores.analytical || 4) * 20}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Leadership Score</span>
                <strong className="text-white text-sm">{(scores.enterprising || 3) * 20}%</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: 90-DAY ACTION ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-display text-white">
              Your 90-Day Execution Blueprint
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1">
              A structured step-by-step pathway to bridge the gap between aptitude and high-impact hiring.
            </p>
          </div>

          <div className="space-y-6">
            {analysis.roadmap.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[2rem] glass-card-interactive space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-[#E8602E] text-white text-xs font-bold flex items-center justify-center shadow-glow-orange-sm">
                      {idx + 1}
                    </span>
                    <span>{step.phase}</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-1 rounded-md border border-[#E8602E]/30">
                    {step.timeframe}
                  </span>
                </div>

                <ul className="space-y-2 pl-2">
                  {step.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="text-xs text-[#D4D4D8] flex items-start gap-2.5 leading-relaxed">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#E8602E] text-xs mt-0.5 flex-shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Global Actions */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onRetake}
          className="btn-secondary-dark px-6 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faRotateRight} />
          <span>Retake Career Assessment</span>
        </button>

        <div className="flex items-center gap-3">
          <Link
            to="/careers"
            className="btn-primary-orange px-8 py-3 text-xs font-bold flex items-center gap-2 shadow-glow-orange-sm"
          >
            <span>Explore All Careers in Bank</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}
