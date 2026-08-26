import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faArrowRight,
  faChartLine,
  faDollarSign,
  faBookmark,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

export default function CareerCard({
  career,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare,
}) {
  return (
    <div className="group relative p-7 rounded-[2.5rem] glass-card-interactive flex flex-col justify-between h-full overflow-hidden shadow-glass hover:border-white/30 transition-all duration-300">
      {/* Content-Related Background Image with High Visibility & Smooth Hover Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={career.thumbnail}
          alt={career.title}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
          }}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out brightness-90 contrast-110"
        />
        {/* Balanced Dark Frosted Gradient Mask for Perfect Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/75 to-[#08080C]/35" />
        <div className="absolute inset-0 bg-black/25" />
        {/* Ambient Refraction Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#E8602E]/20 blur-2xl group-hover:bg-[#E8602E]/35 transition-all duration-500" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Top Header: Domain Category, Trending Badge & Compare Action */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-md border border-white/10">
            {career.domain}
          </span>

          <div className="flex items-center gap-2">
            {career.isTrending && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8602E]/25 border border-[#E8602E]/50 text-[#E8602E] text-[10px] font-bold backdrop-blur-md shadow-sm">
                <FontAwesomeIcon icon={faFire} className="text-[9px]" />
                <span>Trending</span>
              </span>
            )}

            {/* Bookmark Toggle */}
            <button
              type="button"
              onClick={() => onToggleBookmark(career.id)}
              className="p-1.5 rounded-lg bg-black/40 text-[#A1A1AA] hover:text-[#E8602E] hover:bg-white/15 transition-colors cursor-pointer backdrop-blur-md border border-white/10"
              title={isBookmarked ? 'Remove Bookmark' : 'Save Career'}
            >
              <FontAwesomeIcon
                icon={isBookmarked ? faBookmark : faBookmarkRegular}
                className={isBookmarked ? 'text-[#E8602E]' : 'text-white/80'}
              />
            </button>
          </div>
        </div>

        {/* Passport Code Chip & Title */}
        <div className="mb-2">
          <span className="text-[10px] font-mono text-[#E8602E] bg-black/50 px-2.5 py-0.5 rounded border border-[#E8602E]/40 mb-2 inline-block backdrop-blur-md shadow-sm">
            #{career.passportCode}
          </span>
          <h3 className="text-xl font-extrabold font-display text-white group-hover:text-[#FFE8DE] transition-colors leading-snug drop-shadow-md">
            {career.title}
          </h3>
        </div>

        {/* Short Summary Description */}
        <p className="text-xs text-[#D4D4D8] leading-relaxed line-clamp-3 mb-5 drop-shadow-sm font-medium">
          {career.heroSummary}
        </p>

        {/* Key Required Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {career.skills.hard.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-xl text-[10px] font-semibold bg-black/50 text-[#E4E4E7] border border-white/15 backdrop-blur-md shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Metric Box: Compensation & Growth */}
        <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between mb-4 shadow-inner">
          <div>
            <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block font-medium">
              Salary Trajectory
            </span>
            <span className="text-xs font-bold text-white font-mono">
              {career.entrySalary} – {career.seniorSalary}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block font-medium">
              Growth Demand
            </span>
            <span className="text-xs font-bold text-[#10B981]">
              {career.growthRate}
            </span>
          </div>
        </div>

        {/* Bottom Actions: Compare Checkbox & View Roadmap CTA */}
        <div className="flex items-center gap-2.5">
          {/* Compare Checkbox */}
          <button
            type="button"
            onClick={() => onToggleCompare(career.id)}
            className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-md ${
              isCompared
                ? 'bg-[#E8602E]/25 text-[#E8602E] border-[#E8602E]'
                : 'bg-black/40 text-[#A1A1AA] hover:text-white border-white/15 hover:bg-black/60'
            }`}
            title="Add to Comparison Matrix"
          >
            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${isCompared ? 'bg-[#E8602E] border-[#E8602E]' : 'border-white/40'}`}>
              {isCompared && <FontAwesomeIcon icon={faCheck} className="text-[8px] text-white" />}
            </div>
            <span className="hidden sm:inline">Compare</span>
          </button>

          {/* View Full Roadmap Link */}
          <Link
            to={`/careers/${career.id}`}
            className="flex-1 py-2.5 rounded-xl bg-black/40 hover:bg-[#E8602E] text-[#D4D4D8] hover:text-white text-xs font-bold border border-white/20 hover:border-[#E8602E] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer backdrop-blur-md"
          >
            <span>Explore Roadmap</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
