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

export default function SkillCompetencyRadar() {
  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faChartPie} />
            <span>Multi-Axis Engineering Competency</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Skill Mastery & Technical Benchmarks
          </h3>
        </div>

        <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-xs font-bold font-mono">
          Top 8% Global Percentile
        </span>
      </div>

      {/* 6 Competency Axis Progress Meters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_COMPETENCIES.map((item, idx) => (
          <div key={idx} className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">{item.axis}</span>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[#A1A1AA] text-[10px]">Benchmark: {item.benchmark}%</span>
                <span className="font-extrabold text-[#E8602E]">{item.score}%</span>
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
          <span>Core Verified Frameworks & Tooling Stack:</span>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {HARD_SKILL_CHIPS.map((chip, i) => (
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
