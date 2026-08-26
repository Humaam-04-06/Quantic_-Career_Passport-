import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faBookmark as faBookmarkSolid,
  faBuilding,
  faArrowRight,
  faArrowTrendUp,
  faClock,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';
import { storiesApi } from '../../services/api';

export default function StoryCard({ story, onSelectStory }) {
  const [upvotes, setUpvotes] = useState(
    typeof story.upvotes === 'number'
      ? story.upvotes
      : typeof story.likesCount === 'number'
      ? story.likesCount
      : 0
  );
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleUpvote = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isUpvoted) {
      setUpvotes((prev) => Math.max(0, prev - 1));
      setIsUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      setIsUpvoted(true);
      toast.success(`Upvoted ${story.name || story.authorName}'s success story!`);
      try {
        if (story._id) {
          await storiesApi.like(story._id);
        }
      } catch {
        // offline fallback
      }
    }
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from saved stories.' : `Saved ${story.name}'s story!`);
  };

  return (
    <div className="group rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass">
      {/* 1. Top Fitted Image Header */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0A0A0F]">
        <img
          src={story.thumbnail}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#E8602E]">
            {story.category}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleBookmark}
              className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-[#E8602E] transition-colors cursor-pointer"
              title="Bookmark Story"
            >
              <FontAwesomeIcon
                icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
                className={`text-xs ${isBookmarked ? 'text-[#E8602E]' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Bottom Salary Bump Pill */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-md bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-bold backdrop-blur-md">
            Salary: {story.salaryIncrease} ({story.currentSalary})
          </span>
          <span className="text-[#A1A1AA] flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
            <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
            {story.timeToTransition}
          </span>
        </div>
      </div>

      {/* 2. Content & 3-Stage Progress Timeline */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Candidate Profile Row */}
          <div className="flex items-center gap-3">
            <img
              src={story.avatar}
              alt={story.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#E8602E] flex-none"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white truncate">{story.name}</h4>
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#10B981] text-[11px]" />
              </div>
              <span className="text-[11px] text-[#E8602E] font-medium block truncate">
                {story.currentRole} at {story.currentCompany}
              </span>
            </div>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug line-clamp-2">
            {story.title}
          </h3>

          {/* 3-Stage Visual Progress Road */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-[9px] uppercase font-mono font-bold text-[#A1A1AA] block">
              3-Stage Transition Journey:
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[#71717A] block font-mono">Stage 1</span>
                <span className="text-white font-bold truncate block">Non-Tech</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#E8602E]/10 border border-[#E8602E]/20">
                <span className="text-[#E8602E] block font-mono">Stage 2</span>
                <span className="text-white font-bold truncate block">90-Day Sprint</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
                <span className="text-[#10B981] block font-mono">Stage 3</span>
                <span className="text-white font-bold truncate block">{story.currentCompany}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleUpvote}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
              isUpvoted
                ? 'bg-[#E8602E] text-white border-[#E8602E]'
                : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border-white/10'
            }`}
          >
            <FontAwesomeIcon icon={faThumbsUp} className="text-[10px]" />
            <span>{upvotes}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectStory && onSelectStory(story)}
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white hover:shadow-glow-orange-sm transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <span>Read Blueprint</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
