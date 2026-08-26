import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function QuizQuestionCard({
  question,
  value,
  onChange,
  onNext,
  onPrev,
  isFirst,
  isLast,
}) {
  return (
    <div className="w-full max-w-2xl mx-auto p-8 sm:p-10 rounded-[2.5rem] glass-card-interactive shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-8 flex flex-col justify-between min-h-[460px]">
      <div>
        {/* Top Dimension Category & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#E8602E] backdrop-blur-md">
            <FontAwesomeIcon icon={question.icon} className="text-xs" />
            <span>{question.category}</span>
          </div>

          <span className="text-[11px] font-mono text-[#A1A1AA]">
            Dimension: {question.dimension.toUpperCase()}
          </span>
        </div>

        {/* Question Title & Prompt */}
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-snug mb-3">
          {question.title}
        </h2>

        <p className="text-[#D4D4D8] text-sm sm:text-base leading-relaxed mb-8">
          {question.prompt}
        </p>

        {/* Dynamic Input Types */}

        {/* 1. SLIDER FORMAT */}
        {question.type === 'slider' && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA]">{question.minLabel}</span>
              <span className="text-xl font-mono font-extrabold text-[#E8602E] bg-[#E8602E]/10 px-3 py-1 rounded-xl border border-[#E8602E]/30 shadow-sm">
                {value}/10
              </span>
              <span className="text-xs text-[#A1A1AA]">{question.maxLabel}</span>
            </div>

            <input
              type="range"
              min={question.min}
              max={question.max}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full h-3 bg-white/[0.08] backdrop-blur-md rounded-lg appearance-none cursor-pointer accent-[#E8602E]"
            />

            <div className="flex justify-between text-[11px] text-[#71717A] px-1">
              <span>Low Preference</span>
              <span>Balanced</span>
              <span>Strong Affinity</span>
            </div>
          </div>
        )}

        {/* 2. LIKERT 5-POINT SCALE */}
        {question.type === 'likert' && (
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2.5">
              {question.options.map((opt) => {
                const isSelected = value === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange(opt.value)}
                    className={`py-3.5 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#E8602E] text-white border border-white/40 shadow-glow-orange-sm scale-105'
                        : 'bg-white/[0.04] text-[#A1A1AA] border border-white/10 hover:bg-white/[0.08] hover:text-white backdrop-blur-sm'
                    }`}
                  >
                    <span className="text-base font-extrabold font-mono">{opt.value}</span>
                    <span className="text-[10px] hidden sm:block text-center leading-tight">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between text-[11px] text-[#71717A] px-1 pt-1">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
          </div>
        )}

        {/* 3. SCENARIO / OPERATIONAL CHOICE CARDS */}
        {question.type === 'choice' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {question.options.map((opt) => {
              const isSelected = value === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => onChange(opt.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#E8602E]/20 border border-[#E8602E] shadow-glow-orange-sm ring-1 ring-[#E8602E]'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#D4D4D8]'
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-end">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-[#E8602E] bg-[#E8602E]' : 'border-white/30'
                      }`}
                    >
                      {isSelected && <div className="w-1 h-1 rounded-full bg-white" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Card Navigation Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            isFirst
              ? 'opacity-30 cursor-not-allowed text-[#71717A]'
              : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
          }`}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="btn-primary-orange px-6 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-glow-orange-sm hover:scale-105 transition-transform"
        >
          <span>{isLast ? 'Analyze My Career Passport' : 'Next Question'}</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </button>
      </div>
    </div>
  );
}
