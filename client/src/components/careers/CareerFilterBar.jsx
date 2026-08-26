import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSliders,
  faDollarSign,
  faFilter,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { CAREER_DOMAINS } from '../../data/careersData';

export default function CareerFilterBar({
  selectedDomain,
  setSelectedDomain,
  searchQuery,
  setSearchQuery,
  minSalary,
  setMinSalary,
  experienceLevel,
  setExperienceLevel,
  onReset,
}) {
  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass mb-12">
      {/* Top Search & Filter Header */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-sm"
          />
          <input
            type="text"
            placeholder="Search 150+ careers by title, required tools, or skillsets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-input text-white placeholder-[#71717A] text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl focus:outline-none transition-all"
          />
        </div>

        {/* Experience Level Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#A1A1AA] font-bold uppercase tracking-wider hidden sm:inline-block">
            Level:
          </span>
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            aria-label="Filter by Experience Level"
            className="glass-input text-xs font-semibold text-white px-4 py-3 rounded-2xl focus:outline-none cursor-pointer"
          >
            <option value="All" className="bg-[#121215] text-white">All Experience Levels</option>
            <option value="Entry" className="bg-[#121215] text-white">Entry / Associate (0-2 yrs)</option>
            <option value="Mid" className="bg-[#121215] text-white">Mid-Level (2-5 yrs)</option>
            <option value="Senior" className="bg-[#121215] text-white">Senior / Specialist (5+ yrs)</option>
          </select>

          {/* Reset Filters Button */}
          <button
            type="button"
            onClick={onReset}
            title="Reset All Filters"
            className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faRotateRight} className="text-xs" />
          </button>
        </div>
      </div>

      {/* Domain Categories Carousel / Horizontal Pill Bar */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] block">
          Select Industry Domain
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CAREER_DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain;
            return (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Range Slider: Minimum Target Compensation */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faDollarSign} className="text-[#E8602E]" />
          <span className="text-[#D4D4D8]">
            Minimum Target Compensation: <strong className="text-white font-mono font-bold text-sm">${minSalary.toLocaleString()} / yr</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-xs">
          <span className="text-[10px] text-[#71717A] font-mono">$50k</span>
          <input
            type="range"
            min="50000"
            max="200000"
            step="10000"
            value={minSalary}
            onChange={(e) => setMinSalary(Number(e.target.value))}
            className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-[#E8602E]"
          />
          <span className="text-[10px] text-[#71717A] font-mono">$200k+</span>
        </div>
      </div>
    </div>
  );
}
