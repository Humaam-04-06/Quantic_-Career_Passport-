import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRoad,
  faCircleCheck,
  faCheck,
  faCertificate,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

export default function RoadmapTimeline({ roadmap, certifications, prerequisites }) {
  const [completedMilestones, setCompletedMilestones] = useState({});

  const toggleMilestone = (key) => {
    setCompletedMilestones((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full rounded-[2.5rem] glass-panel-ultra p-7 sm:p-10 space-y-10 shadow-glass">
      <div className="flex items-center gap-3 border-b border-white/10 pb-6">
        <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-base shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faRoad} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E] block">
            Step-by-Step Pathway
          </span>
          <h3 className="text-2xl font-extrabold font-display text-white">
            Verified Learning Roadmap
          </h3>
        </div>
      </div>

      {/* 3-Phase Stepper */}
      <div className="space-y-8">
        {roadmap.map((phase, pIdx) => (
          <div key={pIdx} className="p-7 rounded-3xl glass-card-interactive space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E8602E] text-white text-xs font-extrabold flex items-center justify-center shadow-glow-orange-sm">
                  0{pIdx + 1}
                </span>
                <span>{phase.phase}</span>
              </h4>
              <span className="text-xs font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-3 py-1 rounded-md border border-[#E8602E]/30 self-start sm:self-auto">
                {phase.timeframe}
              </span>
            </div>

            {/* Checklist of Milestones */}
            <div className="space-y-2.5 pt-2">
              {phase.milestones.map((milestone, mIdx) => {
                const key = `${pIdx}-${mIdx}`;
                const isChecked = completedMilestones[key];
                return (
                  <div
                    key={mIdx}
                    onClick={() => toggleMilestone(key)}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-[#E8602E]/15 border-[#E8602E]/50 text-white'
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] text-[#D4D4D8]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-[#E8602E] border-[#E8602E] text-white shadow-glow-orange-sm'
                          : 'border-white/30 bg-white/[0.05]'
                      }`}
                    >
                      {isChecked && <FontAwesomeIcon icon={faCheck} className="text-[10px]" />}
                    </div>
                    <span className={`text-xs leading-relaxed ${isChecked ? 'line-through text-[#A1A1AA]' : ''}`}>
                      {milestone}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Prerequisites Callout Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
        {/* Industry Certifications */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase tracking-wider">
            <FontAwesomeIcon icon={faCertificate} />
            <span>Recommended Industry Credentials</span>
          </div>
          <ul className="space-y-2 text-xs text-[#D4D4D8]">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-[#E8602E] text-[10px] mt-1 flex-shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Prerequisites */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase tracking-wider">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Academic Prerequisites & Alternatives</span>
          </div>
          <p className="text-xs text-[#D4D4D8] leading-relaxed">
            {prerequisites}
          </p>
        </div>
      </div>
    </div>
  );
}
