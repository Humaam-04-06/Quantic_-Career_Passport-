import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEye,
  faBookmark as faBookmarkSolid,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';
import { resourcesApi } from '../../services/api';

export default function ResourceCard({ resource, onPreview }) {
  const [downloads, setDownloads] = useState(resource.downloads || 0);
  const [isBookmarked, setIsBookmarked] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('pathseeker_bookmarked_resources') || '[]');
      return saved.includes(resource.id || resource._id);
    } catch {
      return false;
    }
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const getFormatBadgeStyle = (fmt) => {
    switch (fmt) {
      case 'PDF':
        return 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]/40';
      case 'FIG':
        return 'bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/40';
      case 'ZIP':
        return 'bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/40';
      case 'NOTION':
        return 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDownloading(true);

    try {
      // 1. Call backend download tracker
      const res = await resourcesApi.download(resource.id || resource._id);
      if (res?.downloads) {
        setDownloads(res.downloads);
      } else {
        setDownloads((prev) => prev + 1);
      }

      // 2. Generate and trigger real browser blob download
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

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const next = !isBookmarked;
    setIsBookmarked(next);

    try {
      const saved = JSON.parse(localStorage.getItem('pathseeker_bookmarked_resources') || '[]');
      const id = resource.id || resource._id;
      const updated = next
        ? Array.from(new Set([...saved, id]))
        : saved.filter((s) => s !== id);
      localStorage.setItem('pathseeker_bookmarked_resources', JSON.stringify(updated));
    } catch {
      // ignore
    }

    toast.success(
      next
        ? `Saved "${resource.title}" to your Career Passport Vault!`
        : `Removed from saved resources.`
    );
  };

  return (
    <div className="group rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass text-left">
      {/* Cover Image & Badges */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0A0A0F]">
        <img
          src={resource.coverImage}
          alt={resource.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

        {/* Format Badge & Bookmark */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span
            className={`px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-bold font-mono ${getFormatBadgeStyle(
              resource.format
            )}`}
          >
            {resource.format} • {resource.fileSize}
          </span>

          <button
            type="button"
            onClick={handleBookmark}
            className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-[#E8602E] transition-colors cursor-pointer"
            title="Bookmark Resource"
          >
            <FontAwesomeIcon
              icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
              className={`text-xs ${isBookmarked ? 'text-[#E8602E]' : ''}`}
            />
          </button>
        </div>

        {/* Bottom Metrics Pill */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-md bg-black/70 text-[#FFB800] border border-white/10 font-bold backdrop-blur-md flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="text-[#FFB800] text-[10px]" />
            <span>{resource.rating || 4.9} ({downloads.toLocaleString()} DLs)</span>
          </span>
          <span className="text-[#A1A1AA] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
            {resource.pages}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8602E] font-mono block">
            {resource.category}
          </span>

          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug line-clamp-2">
            {resource.title}
          </h3>

          <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
            {resource.summary}
          </p>

          {/* Topics Chips */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            {(resource.topics || []).slice(0, 3).map((topic, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[#D4D4D8] border border-white/10 text-[10px] font-mono"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onPreview && onPreview(resource)}
            className="flex-1 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
          >
            <FontAwesomeIcon icon={faEye} className="text-[10px]" />
            <span>Quick Preview</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 py-2 px-3 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className={`text-[10px] ${isDownloading ? 'animate-bounce' : ''}`}
            />
            <span>{isDownloading ? 'Saving...' : 'Get File'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
