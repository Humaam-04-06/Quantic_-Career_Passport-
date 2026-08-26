import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faCode,
  faCircleCheck,
  faAward,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { SKILL_COMPETENCIES, HARD_SKILL_CHIPS } from '../../data/dashboardData';

export default function SkillCompetencyRadar({
  userSkills = [],
  completedTaskCount = 0,
  totalTaskCount = 10,
  isNewUser = false,
}) {
  const displaySkills = userSkills && userSkills.length > 0
    ? userSkills.map((name, idx) => {
        const colors = [
          'bg-orange-500/20 text-orange-400 border-orange-500/30',
          'bg-blue-500/20 text-blue-400 border-blue-500/30',
          'bg-purple-500/20 text-purple-400 border-purple-500/30',
          'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
          'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
        ];
        const levels = ['Proficient', 'Intermediate', 'Advanced', 'Mastery'];
        return {
          name,
          level: levels[idx % levels.length],
          color: colors[idx % colors.length],
        };
      })
    : HARD_SKILL_CHIPS;

  // Dynamically compute benchmark scores based on candidate task completion
  const completionRatio = totalTaskCount > 0 ? completedTaskCount / totalTaskCount : 0;
  const isBaseline = isNewUser && completedTaskCount === 0;

  const dynamicCompetencies = SKILL_COMPETENCIES.map((item, idx) => {
    let score = isBaseline ? 0 : Math.round(item.score * Math.max(0.1, completionRatio));
    if (completedTaskCount === 0 && !isNewUser) {
      score = 0;
    }
    return {
      ...item,
      score: Math.min(100, score),
    };
  });

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faChartPie} />
            <span>Multi-Axis Engineering Competency</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Skill Mastery & Technical Benchmarks
          </h3>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${
          isBaseline
            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
            : 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40'
        }`}>
          {isBaseline ? 'Genesis Calibration Tier' : `Top ${Math.max(4, Math.round(100 - completionRatio * 92))}% Global Percentile`}
        </span>
      </div>

      {/* 6 Competency Axis Progress Meters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dynamicCompetencies.map((item, idx) => (
          <div key={idx} className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">{item.axis}</span>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[#A1A1AA] text-[10px]">Benchmark: {item.benchmark}%</span>
                <span className={`font-extrabold ${item.score > 0 ? 'text-[#E8602E]' : 'text-[#71717A]'}`}>
                  {item.score}%
                </span>
              </div>
            </div>

            {/* Dual Progress Meter Bar */}
            <div className="relative w-full h-3 bg-white/[0.08] rounded-full overflow-hidden">
              {/* Benchmark Target Indicator */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#FFB800] z-10"
                style={{ left: `${item.benchmark}%` }}
                title={`Industry Benchmark: ${item.benchmark}%`}
              />

              {/* Candidate Score Fill */}
              <div
                className="h-full bg-gradient-to-r from-[#E8602E] to-[#FFB800] rounded-full transition-all duration-700 shadow-glow-orange-sm"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hard Skill Stack Chips */}
      <div className="space-y-3 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold text-[#A1A1AA] uppercase font-mono">
          <FontAwesomeIcon icon={faWrench} className="text-[#E8602E]" />
          <span>Core Verified Frameworks & Tooling Stack ({displaySkills.length}):</span>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {displaySkills.map((chip, i) => (
            <div
              key={i}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 ${chip.color}`}
            >
              <span>{chip.name}</span>
              <span className="text-[9px] opacity-75 uppercase">({chip.level})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
