import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHeadphones,
  faBolt,
  faClock,
  faEye,
  faStar,
  faBookmark as faBookmarkSolid,
  faCheckCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';

export default function MediaCard({ media, onPlayAudio }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      toast.success(`Bookmarked "${media.title.slice(0, 24)}..."`);
    } else {
      toast.success('Removed from saved masterclasses.');
    }
  };

  const getFormatIcon = (type) => {
    if (type.includes('Audio')) return faHeadphones;
    if (type.includes('Micro')) return faBolt;
    return faPlay;
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/10 hover:border-[#E8602E]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-glass">
      {/* 1. Top Media Thumbnail Header with Fitted Background */}
      <div className="relative h-52 w-full overflow-hidden bg-[#0A0A0F]">
        {/* Fitted Content Image */}
        <img
          src={media.thumbnail}
          alt={media.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500 brightness-90 contrast-110"
        />

        {/* Ambient Dark Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

        {/* Top Badges (Format & Bookmark) */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-sm">
            <FontAwesomeIcon icon={getFormatIcon(media.type)} className="text-[#E8602E] text-[10px]" />
            <span>{media.type}</span>
          </div>

          <button
            type="button"
            onClick={handleBookmarkToggle}
            className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-[#E8602E] hover:scale-110 transition-transform cursor-pointer"
            title="Bookmark Masterclass"
          >
            <FontAwesomeIcon
              icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
              className={`text-xs ${isBookmarked ? 'text-[#E8602E]' : ''}`}
            />
          </button>
        </div>

        {/* Center Hover Play Button */}
        <Link
          to={`/multimedia/${media.id}`}
          className="absolute inset-0 flex items-center justify-center z-10 group/btn"
        >
          <div className="w-14 h-14 rounded-full bg-[#E8602E] text-white flex items-center justify-center text-lg shadow-glow-orange opacity-90 group-hover/btn:scale-110 group-hover/btn:opacity-100 transition-all duration-300">
            <FontAwesomeIcon icon={getFormatIcon(media.type)} className="ml-1" />
          </div>
        </Link>

        {/* Bottom Duration & Views Pill */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#A1A1AA] z-10">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-white font-mono">
            <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
            {media.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-white">
            <FontAwesomeIcon icon={faEye} className="text-[#71717A]" />
            {media.views}
          </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] font-mono">
            <span className="text-[#E8602E] font-bold uppercase">{media.domain}</span>
            <span className="flex items-center gap-1 text-[#FFB800]">
              <FontAwesomeIcon icon={faStar} className="text-[9px]" />
              {media.rating}
            </span>
          </div>

          <Link to={`/multimedia/${media.id}`}>
            <h3 className="text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug line-clamp-2">
              {media.title}
            </h3>
          </Link>

          <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
            {media.summary}
          </p>
        </div>

        {/* Speaker & Action Row */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={media.speaker.avatar}
              alt={media.speaker.name}
              className="w-8 h-8 rounded-full object-cover border border-[#E8602E]/50 flex-none"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-white truncate">
                  {media.speaker.name}
                </span>
                {media.speaker.verified && (
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#10B981] text-[10px] flex-none" />
                )}
              </div>
              <span className="text-[10px] text-[#71717A] truncate block">
                {media.speaker.organization}
              </span>
            </div>
          </div>

          <Link
            to={`/multimedia/${media.id}`}
            className="flex-none p-2 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white hover:shadow-glow-orange-sm transition-all text-xs font-bold flex items-center gap-1.5"
          >
            <span>Watch</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
