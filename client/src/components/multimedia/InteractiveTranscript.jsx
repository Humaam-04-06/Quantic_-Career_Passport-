import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faClock,
  faPlay,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function InteractiveTranscript({ transcript = [], activeSeconds = 0, onSeekTo }) {
  const [searchTerm, setSearchTerm] = useState('');

  const safeTranscript = Array.isArray(transcript) ? transcript : [];
  const filteredTranscript = safeTranscript.filter((line) =>
    (line.text || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass">
      {/* Transcript Header & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <h3 className="text-lg font-bold text-white">
              Synchronized Interactive Transcript
            </h3>
          </div>
          <p className="text-xs text-[#A1A1AA] mt-1">
            Click any timestamp to jump directly to that exact moment in the masterclass.
          </p>
        </div>

        {/* Live Search in Transcript */}
        <div className="relative w-full sm:w-64">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
          />
          <input
            type="text"
            placeholder="Search transcript words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full glass-input text-xs text-white placeholder-[#71717A] pl-9 pr-3 py-2 rounded-xl focus:outline-none"
          />
        </div>
      </div>

      {/* Transcript Lines Scrollable Box */}
      <div className="max-h-[380px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-white/20">
        {filteredTranscript.length === 0 ? (
          <div className="text-center py-8 text-xs text-[#71717A]">
            No matching transcript lines found for &quot;{searchTerm}&quot;.
          </div>
        ) : (
          filteredTranscript.map((line, idx) => {
            // Check if this line is currently playing
            const isActive =
              activeSeconds >= line.seconds &&
              (idx === filteredTranscript.length - 1 ||
                activeSeconds < filteredTranscript[idx + 1].seconds);

            return (
              <div
                key={line.time}
                onClick={() => onSeekTo && onSeekTo(line.seconds)}
                className={`group p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isActive
                    ? 'bg-[#E8602E]/20 border-[#E8602E] shadow-glow-orange-sm translate-x-1'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                }`}
              >
                {/* Timestamp Button */}
                <button
                  type="button"
                  className={`flex-none px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-[#E8602E] text-white'
                      : 'bg-white/10 text-[#E8602E] group-hover:bg-[#E8602E] group-hover:text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={isActive ? faPlay : faClock} className="text-[9px]" />
                  <span>{line.time}</span>
                </button>

                {/* Line Text */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed flex-1 ${
                    isActive ? 'text-white font-medium' : 'text-[#D4D4D8] group-hover:text-white'
                  }`}
                >
                  {line.text}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
