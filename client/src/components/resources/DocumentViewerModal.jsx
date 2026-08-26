import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faDownload,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faFilePdf,
  faChevronLeft,
  faChevronRight,
  faListOl,
  faBookOpen,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function DocumentViewerModal({ resource, onClose }) {
  const [activePage, setActivePage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [activeTab, setActiveTab] = useState('pages'); // 'pages' | 'toc'

  if (!resource) return null;

  const pages = resource.previewPages || [
    {
      pageNumber: 1,
      title: resource.title,
      content: resource.summary,
    },
  ];

  const handleDownload = () => {
    toast.success(`Downloaded "${resource.title}" (${resource.fileSize})!`);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(150, prev + 15));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(75, prev - 15));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[88vh] rounded-3xl glass-panel-ultra border border-white/20 flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 flex-none">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center flex-none">
              <FontAwesomeIcon icon={faBookOpen} className="text-sm" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                {resource.title}
              </h3>
              <span className="text-[11px] text-[#A1A1AA] font-mono block">
                {resource.format} • {resource.pages} • {resource.fileSize}
              </span>
            </div>
          </div>

          {/* Zoom & View Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-white/[0.05] p-1 rounded-xl border border-white/10 text-xs">
              <button
                type="button"
                onClick={handleZoomOut}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white cursor-pointer"
                title="Zoom Out"
              >
                <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
              </button>
              <span className="px-2 font-mono text-[11px] text-[#D4D4D8]">{zoomLevel}%</span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white cursor-pointer"
                title="Zoom In"
              >
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center gap-1.5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              <span className="hidden sm:inline">Download File</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15 ml-1"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        {/* Main Document Reader Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation Sidebar */}
          <div className="w-56 sm:w-64 border-r border-white/10 bg-black/40 p-4 space-y-4 flex flex-col justify-between flex-none overflow-y-auto scrollbar-none hidden md:flex">
            <div className="space-y-3">
              {/* Tab Selector */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('pages')}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    activeTab === 'pages'
                      ? 'bg-[#E8602E] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  Pages ({pages.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('toc')}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    activeTab === 'toc'
                      ? 'bg-[#E8602E] text-white'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  Contents
                </button>
              </div>

              {/* Page Thumbnails List */}
              {activeTab === 'pages' ? (
                <div className="space-y-2">
                  {pages.map((p, idx) => {
                    const isCurrent = idx === activePage;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePage(idx)}
                        className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center gap-2.5 cursor-pointer border ${
                          isCurrent
                            ? 'bg-[#E8602E]/20 border-[#E8602E] text-white shadow-glow-orange-sm'
                            : 'bg-white/[0.02] border-white/5 text-[#A1A1AA] hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-black/60 flex items-center justify-center font-mono text-[10px] font-bold text-[#E8602E]">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-medium truncate flex-1">
                          {p.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-2 text-xs text-[#D4D4D8]">
                  {resource.tableOfContents.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] leading-snug"
                    >
                      {ch}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* License Note */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[10px] text-[#71717A] flex items-center gap-2">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[#10B981]" />
              <span>MIT / Creative Commons for PathSeeker Students</span>
            </div>
          </div>

          {/* Center Document Page Canvas */}
          <div className="flex-1 bg-[#06060A] p-6 sm:p-10 overflow-y-auto flex items-center justify-center">
            <div
              className="w-full max-w-2xl min-h-[460px] bg-[#111116] rounded-2xl border border-white/15 p-8 sm:p-12 space-y-6 shadow-2xl transition-transform origin-top"
              style={{ transform: `scale(${zoomLevel / 100})` }}
            >
              {/* Document Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#E8602E]/20 text-[#E8602E] font-mono text-[10px] font-bold">
                    PAGE {activePage + 1} OF {pages.length}
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">• {resource.category}</span>
                </div>
                <span className="text-xs font-mono text-[#A1A1AA]">{resource.author}</span>
              </div>

              {/* Page Title & Main Content */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-snug">
                {pages[activePage]?.title}
              </h2>

              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-[#D4D4D8] leading-relaxed whitespace-pre-line">
                {pages[activePage]?.content}
              </div>

              {/* Topics Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#71717A]">
                <span>PathSeeker Career Passport Ecosystem</span>
                <span className="font-mono text-[#E8602E]">Verified Production Blueprint</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Page Step Navigation */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs flex-none">
          <button
            type="button"
            onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
            disabled={activePage === 0}
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/20 disabled:opacity-30 text-white font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-white/10"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Previous Page</span>
          </button>

          <span className="font-mono text-xs text-[#A1A1AA]">
            Page {activePage + 1} of {pages.length}
          </span>

          <button
            type="button"
            onClick={() => setActivePage((prev) => Math.min(pages.length - 1, prev + 1))}
            disabled={activePage === pages.length - 1}
            className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] disabled:opacity-30 text-white font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-glow-orange-sm"
          >
            <span>Next Page</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
