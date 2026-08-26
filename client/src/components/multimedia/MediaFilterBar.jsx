import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faVideo,
  faHeadphones,
  faBolt,
  faLayerGroup,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { MEDIA_TYPES } from '../../data/multimediaData';
import { CAREER_DOMAINS } from '../../data/careersData';

export default function MediaFilterBar({
  selectedType,
  setSelectedType,
  selectedDomain,
  setSelectedDomain,
  searchQuery,
  setSearchQuery,
  onReset,
}) {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video Masterclasses':
        return faVideo;
      case 'Audio Podcasts':
        return faHeadphones;
      case 'Quick Micro-Lessons':
        return faBolt;
      default:
        return faLayerGroup;
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass mb-12">
      {/* Top Search & Media Format Switcher */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-sm"
          />
          <input
            type="text"
            placeholder="Search masterclasses by topic, speaker name, or tech stack (e.g. Transformers, Kubernetes, Figma)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-input text-white placeholder-[#71717A] text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl focus:outline-none transition-all"
          />
        </div>

        {/* Reset Filters Action */}
        <button
          type="button"
          onClick={onReset}
          title="Reset All Filters"
          className="self-end lg:self-auto p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faRotateRight} className="text-xs" />
        </button>
      </div>

      {/* Media Type Format Filter Tabs */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] block">
          Media Format
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {MEDIA_TYPES.map((type) => {
            const isSelected = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <FontAwesomeIcon icon={getTypeIcon(type)} className="text-[11px]" />
                <span>{type}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Industry Domain Horizontal Carousel */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] block">
          Filter by Industry Domain
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CAREER_DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain;
            return (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedDomain(domain)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-white/15 text-white border border-[#E8602E]'
                    : 'bg-transparent text-[#71717A] hover:text-[#D4D4D8] border border-transparent'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
