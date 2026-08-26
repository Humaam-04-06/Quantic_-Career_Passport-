import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faQuoteLeft,
  faArrowTrendUp,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export default function FeaturedStoryBanner({ story, onSelectStory }) {
  if (!story) return null;

  return (
    <section className="relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#0A0A0F] z-0">
        <img
          src={story.thumbnail}
          alt={story.title}
          className="w-full h-full object-cover opacity-35 brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3.5 py-1 rounded-full bg-[#E8602E] text-white font-mono text-xs font-extrabold shadow-glow-orange-sm flex items-center gap-1.5 uppercase">
            <FontAwesomeIcon icon={faFire} className="text-white text-xs" />
            Transformation of the Month
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#D4D4D8] font-mono">
            {story.category}
          </span>

          <span className="px-2.5 py-1 rounded-md bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-xs font-bold font-mono">
            {story.salaryIncrease} Salary Increase
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
          {story.title}
        </h1>

        <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D4D8] italic bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-2xl">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-[#E8602E] text-sm flex-none mt-1" />
          <span>&quot;{story.quote}&quot;</span>
        </div>

        {/* Candidate Info & Action */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img
              src={story.avatar}
              alt={story.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#E8602E]"
            />
            <div>
              <h4 className="text-sm font-bold text-white">{story.name}</h4>
              <span className="text-xs text-[#A1A1AA]">
                {story.currentRole} at {story.currentCompany}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectStory && onSelectStory(story)}
            className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <span>Read 3-Stage Blueprint</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
