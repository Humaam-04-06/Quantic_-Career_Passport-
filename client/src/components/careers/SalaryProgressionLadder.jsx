import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faChartLine,
  faLayerGroup,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function SalaryProgressionLadder({ salaryLadder, title }) {
  const [selectedTier, setSelectedTier] = useState(1); // 0, 1, 2, 3

  return (
    <div className="w-full rounded-[2.5rem] glass-panel-ultra p-7 sm:p-10 space-y-8 shadow-glass">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-2">
            <FontAwesomeIcon icon={faDollarSign} className="text-xs" />
            <span>4-Tier Compensation Progression</span>
          </div>
          <h3 className="text-2xl font-extrabold font-display text-white">
            Seniority & Earning Trajectory
          </h3>
        </div>

        <span className="text-xs text-[#A1A1AA]">
          Click any tier to view experience requirements & daily focus
        </span>
      </div>

      {/* Interactive 4-Tier Ladder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {salaryLadder.map((tier, idx) => {
          const isSelected = selectedTier === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedTier(idx)}
              className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'glass-panel-ultra border-[#E8602E] shadow-glow-orange-sm ring-1 ring-[#E8602E] scale-105'
                  : 'glass-card-interactive hover:border-white/20'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8602E] block mb-1">
                  Tier 0{idx + 1}
                </span>
                <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                  {tier.level}
                </h4>
                <span className="text-xs font-mono text-[#A1A1AA] bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/10 inline-block mb-4">
                  {tier.exp}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                  Annual Compensation
                </span>
                <span className="text-base font-extrabold font-mono text-white">
                  {tier.salary}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Tier Deep-Dive Callout */}
      <div className="p-6 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8602E] block mb-1">
            Active Tier Breakdown: {salaryLadder[selectedTier].level} ({salaryLadder[selectedTier].exp})
          </span>
          <p className="text-sm text-[#D4D4D8] leading-relaxed">
            {salaryLadder[selectedTier].focus}
          </p>
        </div>

        <div className="text-right flex-shrink-0">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
            Target Compensation
          </span>
          <span className="text-xl font-mono font-extrabold text-[#FFE8DE]">
            {salaryLadder[selectedTier].salary}
          </span>
        </div>
      </div>
    </div>
  );
}
