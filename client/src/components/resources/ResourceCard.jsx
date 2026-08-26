import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEye,
  faBookmark as faBookmarkSolid,
  faFilePdf,
  faFileCode,
  faFileLines,
  faStar,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';

export default function ResourceCard({ resource, onPreview }) {
  const [downloads, setDownloads] = useState(resource.downloads);
  const [isBookmarked, setIsBookmarked] = useState(false);
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

  const handleDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDownloading(true);
    setTimeout(() => {
      setDownloads((prev) => prev + 1);
      setIsDownloading(false);
      toast.success(`Downloaded "${resource.title}" (${resource.fileSize})!`);
    }, 600);
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked
        ? `Removed from saved resources.`
        : `Saved "${resource.title}" to your Career Passport!`
    );
  };

  return (
    <div className="group rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass">
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
          <span className="px-2.5 py-0.5 rounded-md bg-black/70 text-[#FFB800] border border-white/10 font-bold backdrop-blur-md">
            ★ {resource.rating} ({downloads.toLocaleString()} DLs)
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
            {resource.topics.slice(0, 3).map((topic, i) => (
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
            <span>{isDownloading ? 'Downloading...' : 'Get File'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
