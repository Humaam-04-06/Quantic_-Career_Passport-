import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faDollarSign,
  faChartLine,
  faArrowRight,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

export function PassportDetailItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#D4D4D8]">
      <FontAwesomeIcon icon={icon} className="text-[#E8602E] text-xs w-3.5 text-center" />
      <span>
        {label && <span className="text-[#A1A1AA] mr-1">{label}</span>}
        <strong className="text-white font-semibold">{value}</strong>
      </span>
    </div>
  );
}

export function PassportBookmarkBtn({ isBookmarked, onToggle }) {
  return (
    <button
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer bg-[#18181C] hover:bg-[#222228] text-white border border-[#2B2B33] hover:border-[#E8602E]/60 flex-shrink-0"
      type="button"
      title={isBookmarked ? 'Remove from Saved' : 'Save Passport'}
      onClick={onToggle}
      aria-label="Toggle Bookmark"
    >
      <FontAwesomeIcon
        icon={isBookmarked ? faBookmark : faBookmarkRegular}
        className={`text-sm transition-transform active:scale-125 ${
          isBookmarked ? 'text-[#E8602E]' : 'text-[#A1A1AA]'
        }`}
      />
    </button>
  );
}

export default function CareerPassportCard({
  id,
  roleTitle,
  roleCategory,
  stageBadge,
  salaryOrBenefit,
  passportCode,
  imageUrl,
  keyHighlights = [],
  ctaText = 'Explore Pathway',
  ctaLink = '/quiz',
}) {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="relative rounded-[2rem] overflow-hidden transition-all duration-300 w-full sm:w-[19.5rem] lg:w-[21.5rem] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-glow-orange-sm hover:-translate-y-2 group bg-[#0D0D10] flex flex-col justify-between h-[33rem] p-3">
      {/* Top Image Container */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-[#16161A]">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
          src={imageUrl}
          alt={roleTitle}
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Stage Badge on Image */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#000000]/80 backdrop-blur-md text-[#E8602E] border border-[#E8602E]/40 shadow-sm">
            {stageBadge}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex-1 flex flex-col justify-between px-2 pt-3 pb-1">
        <div>
          {/* Category & Code */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider truncate mr-2">
              {roleCategory}
            </span>
            <span className="text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 px-2 py-0.5 rounded border border-[#E8602E]/20 flex-shrink-0">
              {passportCode}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold font-display text-white tracking-tight leading-tight mb-2 group-hover:text-[#FFE8DE] transition-colors">
            {roleTitle}
          </h3>

          {/* Key Highlights Checklist */}
          {keyHighlights.length > 0 && (
            <div className="space-y-1.5 my-3">
              {keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#E8602E] text-[10px] flex-shrink-0" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Details Row (Salary / Metrics) */}
          <div className="p-2.5 rounded-xl bg-[#121215] border border-[#202026] flex items-center justify-between mb-3">
            <PassportDetailItem
              icon={faDollarSign}
              label="Potential:"
              value={salaryOrBenefit}
            />
            <PassportDetailItem
              icon={faChartLine}
              label="Demand:"
              value="High Growth"
            />
          </div>

          {/* Action Button & Bookmark Button */}
          <div className="flex items-center gap-2.5 pt-1">
            <button
              className="flex-1 bg-[#E8602E] hover:bg-[#BC4C22] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer"
              type="button"
              onClick={() => navigate(ctaLink)}
            >
              <span>{ctaText}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px] transition-transform group-hover:translate-x-1" />
            </button>

            <PassportBookmarkBtn
              isBookmarked={isBookmarked}
              onToggle={() => setIsBookmarked(!isBookmarked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
