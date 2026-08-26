import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faDownload,
  faFilePdf,
  faCode,
  faFilePowerpoint,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function MasterclassTakeaways({ takeaways, handouts }) {
  const getHandoutIcon = (type) => {
    if (type.includes('Code')) return faCode;
    if (type.includes('Slides') || type.includes('Keynote')) return faFilePowerpoint;
    return faFilePdf;
  };

  const handleDownload = (handout) => {
    toast.success(`Downloading ${handout.name} (${handout.size})...`);
  };

  return (
    <div className="w-full space-y-8">
      {/* 1. Core Architectural Takeaways */}
      <div className="rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center text-base">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Executive Key Takeaways</h3>
            <p className="text-xs text-[#A1A1AA]">
              Essential architectural patterns and production formulas discussed in this session.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {takeaways.map((item, idx) => (
            <div
              key={item.title}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E8602E]/40 transition-all space-y-2"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-[#E8602E] text-xs" />
                <span className="text-xs font-bold text-white line-clamp-1">{item.title}</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Downloadable Handouts & Artifacts */}
      <div className="rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-base">
              <FontAwesomeIcon icon={faDownload} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Handouts, Slides & Repository</h3>
              <p className="text-xs text-[#A1A1AA]">
                Official companion materials, slide decks, and runnable starter code.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {handouts.map((handout) => (
            <div
              key={handout.name}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center text-sm flex-none">
                  <FontAwesomeIcon icon={getHandoutIcon(handout.type)} className="text-[#E8602E]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {handout.name}
                  </h4>
                  <span className="text-[10px] text-[#71717A]">
                    {handout.type} • {handout.size}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(handout)}
                className="flex-none px-4 py-2 rounded-xl bg-[#E8602E] text-white text-xs font-bold shadow-glow-orange-sm hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer"
              >
                <FontAwesomeIcon icon={faDownload} className="text-[10px]" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
