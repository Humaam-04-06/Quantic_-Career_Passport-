import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export default function DayInLifeTimeline({ dayInLife }) {
  return (
    <div className="w-full rounded-[2.5rem] glass-panel-ultra p-7 sm:p-10 space-y-8 shadow-glass">
      <div className="flex items-center gap-3 border-b border-white/10 pb-6">
        <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-base shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faCalendarDay} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E] block">
            Operational Blueprint
          </span>
          <h3 className="text-2xl font-extrabold font-display text-white">
            A Day in the Life
          </h3>
        </div>
      </div>

      {/* Timeline Stepper */}
      <div className="space-y-6 relative pl-6 sm:pl-8 border-l-2 border-white/10 ml-2">
        {dayInLife.map((slot, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Orb */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-5 h-5 rounded-full bg-[#121215] border-2 border-[#E8602E] flex items-center justify-center shadow-glow-orange-sm group-hover:scale-125 transition-transform" />

            <div className="p-5 rounded-2xl glass-card-interactive space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-0.5 rounded border border-[#E8602E]/30 flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                  <span>{slot.time}</span>
                </span>
              </div>

              <h4 className="text-base font-extrabold font-display text-white leading-snug">
                {slot.title}
              </h4>

              <p className="text-xs text-[#D4D4D8] leading-relaxed">
                {slot.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
