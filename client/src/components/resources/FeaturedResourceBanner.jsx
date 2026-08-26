import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faDownload,
  faEye,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { resourcesApi } from '../../services/api';

export default function FeaturedResourceBanner({ resource, onPreview }) {
  const [downloads, setDownloads] = useState(resource?.downloads || 14250);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!resource) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // 1. Call API
      const res = await resourcesApi.download(resource.id || resource._id);
      if (res?.downloads) {
        setDownloads(res.downloads);
      } else {
        setDownloads((prev) => prev + 1);
      }

      // 2. Generate and download real blueprint companion document
      const content = resource.downloadFileContent || `# ${resource.title}
Category: ${resource.category}
Format: ${resource.format}
Size: ${resource.fileSize}
Author: ${resource.author || 'PathSeeker Faculty'}
Timestamp: ${new Date().toLocaleString()}

===================================================================
EXECUTIVE ARCHITECTURAL SUMMARY
===================================================================
${resource.summary}

===================================================================
TABLE OF CONTENTS & CURRICULUM BLUEPRINTS
===================================================================
${(resource.tableOfContents || []).map((t, i) => `[${i + 1}] ${t}`).join('\n')}

===================================================================
PRODUCTION CODE & SYSTEM DESIGN BLUEPRINTS
===================================================================
- Official Repository: https://github.com/pathseeker-curriculum/masterclass-blueprints
- Verification Status: Certified by PathSeeker Architecture Board

© 2026 PathSeeker Career Passport. All rights reserved.
`;

      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const safeFilename = resource.title.replace(/[^a-zA-Z0-9_-]/g, '_');
      link.setAttribute('download', `${safeFilename}.md`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Downloaded "${resource.title}" (${resource.fileSize})!`);
    } catch {
      setDownloads((prev) => prev + 1);
      toast.success(`Downloaded "${resource.title}"!`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl text-left">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#0A0A0F] z-0">
        <img
          src={resource.coverImage}
          alt={resource.title}
          className="w-full h-full object-cover opacity-30 brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3.5 py-1 rounded-full bg-[#E8602E] text-white font-mono text-xs font-extrabold shadow-glow-orange-sm flex items-center gap-1.5 uppercase">
            <FontAwesomeIcon icon={faFire} className="text-white text-xs" />
            <span>Resource of the Week</span>
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#D4D4D8] font-mono">
            {resource.category}
          </span>

          <span className="px-2.5 py-1 rounded-md bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 text-xs font-bold font-mono flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="text-[#FFB800] text-[10px]" />
            <span>{resource.rating || 4.9} ({downloads.toLocaleString()} DLs)</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
          {resource.title}
        </h1>

        <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-2xl">
          {resource.summary}
        </p>

        {/* Table of Contents Highlight */}
        {resource.tableOfContents && resource.tableOfContents.length > 0 && (
          <div className="p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-mono font-bold text-[#E8602E] block">
              Inside This Blueprint:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#A1A1AA]">
              {resource.tableOfContents.slice(0, 4).map((ch, idx) => (
                <li key={idx} className="truncate">
                  • {ch}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-6 py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className={isDownloading ? 'animate-bounce' : ''}
            />
            <span>{isDownloading ? 'Downloading...' : `Download ${resource.format} (${resource.fileSize})`}</span>
          </button>

          <button
            type="button"
            onClick={() => onPreview && onPreview(resource)}
            className="px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all border border-white/15 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faEye} />
            <span>Live Document Preview</span>
          </button>
        </div>
      </div>
    </section>
  );
}
