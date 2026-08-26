import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faScaleBalanced,
  faArrowRight,
  faDollarSign,
  faChartLine,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';

export default function CareerCompareModal({
  comparedCareers,
  onRemoveCompare,
  onClearAll,
  onClose,
}) {
  if (comparedCareers.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-5xl p-6 sm:p-10 rounded-[2.5rem] glass-panel-ultra shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-lg shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8602E] block">
                Side-by-Side Evaluation
              </span>
              <h2 className="text-2xl font-extrabold font-display text-white">
                Career Comparison Matrix ({comparedCareers.length}/3)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs text-[#A1A1AA] hover:text-[#E8602E] transition-colors cursor-pointer"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Comparison"
            >
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparedCareers.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-3xl glass-card-interactive flex flex-col justify-between relative space-y-6"
            >
              {/* Remove Single Career Button */}
              <button
                type="button"
                onClick={() => onRemoveCompare(c.id)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-[#71717A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Remove from comparison"
              >
                <FontAwesomeIcon icon={faXmark} className="text-xs" />
              </button>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 px-2 py-0.5 rounded border border-[#E8602E]/30">
                    #{c.passportCode}
                  </span>
                  <h3 className="text-lg font-extrabold font-display text-white mt-1 leading-snug">
                    {c.title}
                  </h3>
                  <span className="text-xs text-[#A1A1AA]">{c.domain}</span>
                </div>

                {/* Salary Comparison */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                    Compensation Band
                  </span>
                  <div className="font-mono font-bold text-white text-sm">
                    {c.entrySalary} – {c.seniorSalary}
                  </div>
                  <span className="text-[11px] text-[#E8602E]">Avg Comp: {c.avgComp}</span>
                </div>

                {/* Demand & Growth */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                    Growth Velocity
                  </span>
                  <div className="font-bold text-[#10B981] text-sm">
                    {c.growthRate}
                  </div>
                  <span className="text-[11px] text-[#A1A1AA]">Demand: {c.demandLevel}</span>
                </div>

                {/* Stress & Work-Life Score */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 text-xs">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                    Lifestyle & Work-Life
                  </span>
                  <div className="text-white text-xs font-semibold">
                    Work-Life: <strong className="text-[#E8602E]">{c.workLifeScore}</strong>
                  </div>
                  <span className="text-[11px] text-[#71717A]">Stress Index: {c.stressScore}</span>
                </div>

                {/* Core Hard Skills */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                    Primary Hard Skills
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {c.skills.hard.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[#D4D4D8]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Full Roadmap Link */}
              <Link
                to={`/careers/${c.id}`}
                onClick={onClose}
                className="w-full py-2.5 rounded-xl btn-primary-orange text-xs font-bold flex items-center justify-center gap-2 shadow-glow-orange-sm"
              >
                <span>View Full Roadmap</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
