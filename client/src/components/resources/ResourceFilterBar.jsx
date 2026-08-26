import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faRotateRight,
  faFilePdf,
  faFileCode,
  faFileLines,
  faLayerGroup,
  faArrowDownShortWide,
} from '@fortawesome/free-solid-svg-icons';
import { RESOURCE_CATEGORIES, RESOURCE_FORMATS } from '../../data/resourcesData';

export default function ResourceFilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedFormat,
  setSelectedFormat,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  onReset,
}) {
  const getFormatIcon = (format) => {
    switch (format) {
      case 'PDF':
        return faFilePdf;
      case 'FIG':
      case 'ZIP':
        return faFileCode;
      case 'NOTION':
        return faFileLines;
      default:
        return faLayerGroup;
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass mb-12">
      {/* Search & Sort Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-sm"
          />
          <input
            type="text"
            placeholder="Search blueprints, cheat-sheets, resume templates, and scripts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-input text-white placeholder-[#71717A] text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl focus:outline-none transition-all"
          />
        </div>

        {/* Sort Selector & Reset */}
        <div className="flex items-center gap-3 self-end lg:self-auto">
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-[#D4D4D8]">
            <FontAwesomeIcon icon={faArrowDownShortWide} className="text-[#E8602E]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-mono text-xs focus:outline-none cursor-pointer"
            >
              <option value="popular" className="bg-[#121215] text-white">
                Most Downloaded
              </option>
              <option value="rating" className="bg-[#121215] text-white">
                Highest Rated
              </option>
              <option value="pages" className="bg-[#121215] text-white">
                Most Comprehensive
              </option>
            </select>
          </div>

          <button
            type="button"
            onClick={onReset}
            title="Reset Filters"
            className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faRotateRight} className="text-xs" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] block">
          Resource Category
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {RESOURCE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                    : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* File Format Filter Pills */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] block">
          Filter by File Format
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {RESOURCE_FORMATS.map((fmt) => {
            const isSelected = selectedFormat === fmt;
            return (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-white/15 text-white border border-[#E8602E]'
                    : 'bg-transparent text-[#71717A] hover:text-[#D4D4D8] border border-transparent'
                }`}
              >
                <FontAwesomeIcon icon={getFormatIcon(fmt)} className="text-[10px]" />
                <span>{fmt}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
