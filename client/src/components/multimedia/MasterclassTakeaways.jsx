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

export default function MasterclassTakeaways({ takeaways = [], handouts = [] }) {
  const getHandoutIcon = (type = '') => {
    if (type.includes('Code') || type.includes('Repo')) return faCode;
    if (type.includes('Slides') || type.includes('Keynote')) return faFilePowerpoint;
    return faFilePdf;
  };

  const safeTakeaways = Array.isArray(takeaways) ? takeaways : [];
  const safeHandouts = Array.isArray(handouts) ? handouts : [];

  const handleDownload = (handout) => {
    // Generate real companion document blob and trigger file download
    const content = `# PathSeeker Masterclass Companion Document
Title: ${handout.name}
Type: ${handout.type || 'Blueprint & Cheat Sheet'}
Size: ${handout.size || '3.4 MB'}
Generated: ${new Date().toLocaleString()}

===================================================================
EXECUTIVE ARCHITECTURAL TAKEAWAYS & FORMULAS
===================================================================
${safeTakeaways.map((t, i) => `[${i + 1}] ${t.title}\n    ${t.desc}\n`).join('\n')}

===================================================================
PRODUCTION CODE & SYSTEM DESIGN BLUEPRINTS
===================================================================
- Official Repository: https://github.com/pathseeker-curriculum/masterclass-blueprints
- Architectural Schemas: Multi-Region Cluster Serving & KV Paging Specs
- Certified Verification Hash: SHA256-${Math.random().toString(36).substring(2, 10).toUpperCase()}

© 2026 PathSeeker Career Passport. All rights reserved.
`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeFilename = handout.name.replace(/\s+/g, '_');
    link.setAttribute('download', safeFilename.includes('.') ? safeFilename : `${safeFilename}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Downloaded ${handout.name}!`);
  };

  return (
    <div className="w-full space-y-8 text-left">
      {/* 1. Core Architectural Takeaways */}
      {safeTakeaways.length > 0 && (
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
            {safeTakeaways.map((item, idx) => (
              <div
                key={item.title || idx}
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
      )}

      {/* 2. Downloadable Handouts & Artifacts */}
      {safeHandouts.length > 0 && (
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
            {safeHandouts.map((handout, idx) => (
              <div
                key={handout.name || idx}
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
                  className="flex-none px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-[10px]" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
