import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function QuizStepper({ currentStep, totalSteps }) {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      {/* Top Meta: Step Count & Percentage */}
      <div className="flex items-center justify-between text-xs mb-3">
        <span className="font-bold uppercase tracking-wider text-[#A1A1AA]">
          Assessment Progress: <strong className="text-white">Question {currentStep} of {totalSteps}</strong>
        </span>
        <span className="font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-0.5 rounded-md border border-[#E8602E]/30">
          {progressPercent}% Completed
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-2.5 bg-white/[0.08] backdrop-blur-md rounded-full overflow-hidden border border-white/10 p-[1px]">
        <div
          className="h-full bg-gradient-to-r from-[#FF7A45] via-[#E8602E] to-[#BC4C22] rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(232,96,46,0.8)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step Indicator Nodes */}
      <div className="flex items-center justify-between mt-3 px-1">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isDone = step < currentStep;
          const isCurrent = step === currentStep;
          return (
            <div
              key={step}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                isDone
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : isCurrent
                  ? 'bg-white text-black ring-2 ring-[#E8602E] shadow-sm'
                  : 'bg-white/[0.06] text-[#71717A] border border-white/10'
              }`}
            >
              {isDone ? <FontAwesomeIcon icon={faCheck} className="text-[9px]" /> : step}
            </div>
          );
        })}
      </div>
    </div>
  );
}
