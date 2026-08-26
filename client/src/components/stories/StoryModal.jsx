import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faCheckCircle,
  faBuilding,
  faArrowRight,
  faQuoteLeft,
  faLightbulb,
  faWrench,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

export default function StoryModal({ story, onClose }) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-10 space-y-8 shadow-2xl scrollbar-thin scrollbar-thumb-white/20">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-sm transition-colors border border-white/15 cursor-pointer z-10"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Candidate Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src={story.avatar}
            alt={story.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-[#E8602E] shadow-glow-orange-sm flex-none"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">{story.name}</h3>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#10B981] text-sm" />
            </div>
            <p className="text-xs sm:text-sm text-[#E8602E] font-semibold">
              {story.currentRole} at {story.currentCompany}
            </p>
            <span className="text-[11px] text-[#A1A1AA] block">
              Prior Role: {story.previousRole}
            </span>
          </div>
        </div>

        {/* Quote Block */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 italic text-xs sm:text-sm text-[#D4D4D8]">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-[#E8602E] text-sm flex-none mt-1" />
          <span>&quot;{story.quote}&quot;</span>
        </div>

        {/* Before / After Salary Visualizer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-black/50 border border-white/10 text-center font-mono">
          <div className="space-y-1">
            <span className="text-[10px] uppercase text-[#71717A] block">Prior Salary</span>
            <span className="text-base sm:text-lg font-bold text-white line-through opacity-70">
              {story.previousSalary}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase text-[#E8602E] font-bold block">Current Salary</span>
            <span className="text-base sm:text-lg font-extrabold text-[#10B981]">
              {story.currentSalary}
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <span className="text-[10px] uppercase text-[#FFB800] block">Compensation Jump</span>
            <span className="text-base sm:text-lg font-extrabold text-[#FFB800]">
              {story.salaryIncrease}
            </span>
          </div>
        </div>

        {/* 3-Stage Detailed Transformation Journey */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
            3-Stage Transition Roadmap:
          </h4>

          <div className="space-y-4">
            {story.stages.map((stage) => (
              <div
                key={stage.stageNumber}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#E8602E]/20 text-[#E8602E] font-mono text-[10px] font-bold">
                    Stage {stage.stageNumber} • {stage.stageName}
                  </span>
                  <span className="text-[10px] font-mono text-[#71717A]">{stage.timeframe}</span>
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-white">{stage.title}</h5>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Advice & Tools Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800]">
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Golden Advice for Beginners:</span>
            </div>
            <ul className="space-y-2 text-xs text-[#D4D4D8] list-disc list-inside leading-relaxed">
              {story.advice.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E]">
              <FontAwesomeIcon icon={faWrench} />
              <span>Core Tool Stack Mastered:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {story.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-mono text-xs border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Link to Career Pathway */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to={`/careers/${story.careerId}`}
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange text-center flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Explore {story.currentRole} Pathway</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}
