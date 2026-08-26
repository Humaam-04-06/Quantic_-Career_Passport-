import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faHeartPulse,
  faWrench,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

export default function SkillTreeMatrix({ skills }) {
  return (
    <div className="w-full rounded-[2.5rem] glass-panel-ultra p-7 sm:p-10 space-y-8 shadow-glass">
      <div className="flex items-center gap-3 border-b border-white/10 pb-6">
        <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-base shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E] block">
            Competency Architecture
          </span>
          <h3 className="text-2xl font-extrabold font-display text-white">
            Core Skill Tree & Tool Stack
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Col 1: Hard Skills */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase tracking-wider">
            <FontAwesomeIcon icon={faCode} />
            <span>Technical Hard Skills</span>
          </div>
          <div className="space-y-2">
            {skills.hard.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white flex items-center justify-between"
              >
                <span>{s}</span>
                <span className="w-2 h-2 rounded-full bg-[#E8602E] shadow-glow-orange-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Soft Competencies */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase tracking-wider">
            <FontAwesomeIcon icon={faHeartPulse} />
            <span>Cognitive & Soft Skills</span>
          </div>
          <div className="space-y-2">
            {skills.soft.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white flex items-center justify-between"
              >
                <span>{s}</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Tools & Frameworks */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase tracking-wider">
            <FontAwesomeIcon icon={faWrench} />
            <span>Essential Industry Tools</span>
          </div>
          <div className="space-y-2">
            {skills.tools.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white flex items-center justify-between"
              >
                <span>{s}</span>
                <span className="text-[10px] font-mono text-[#A1A1AA]">Standard</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
