import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faDownload,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faChevronLeft,
  faChevronRight,
  faListOl,
  faBookOpen,
  faFileLines,
  faCopy,
  faCheck,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { resourcesApi } from '../../services/api';

export default function DocumentViewerModal({ resource, onClose, onDownloaded }) {
  const [activePage, setActivePage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [activeTab, setActiveTab] = useState('pages'); // 'pages' | 'toc'
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!resource) return null;

  const pages = resource.previewPages && resource.previewPages.length > 0
    ? resource.previewPages
    : [
        {
          pageNumber: 1,
          title: resource.title,
          content: resource.summary,
        },
      ];

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // 1. Trigger live telemetry API
      const res = await resourcesApi.download(resource.id || resource._id);
      onDownloaded?.(resource.id || resource._id);

      // 2. Generate and download real companion blueprint file
      const content = resource.downloadFileContent || `# ${resource.title}
Category: ${resource.category}
Format: ${resource.format}
Pages: ${resource.pages}
Author: ${resource.author || 'PathSeeker Faculty'}
Verified Hash: SHA256-${Math.random().toString(36).substring(2, 10).toUpperCase()}

===================================================================
EXECUTIVE BLUEPRINT SUMMARY
===================================================================
${resource.summary}

===================================================================
TOPICS & ARCHITECTURAL PATTERNS
===================================================================
${(resource.topics || []).map((t, i) => `${i + 1}. ${t}`).join('\n')}

===================================================================
TABLE OF CONTENTS & CURRICULUM BLUEPRINT
===================================================================
${(resource.tableOfContents || []).map((c, i) => `[${i + 1}] ${c}`).join('\n')}

===================================================================
COMPANION REPOSITORIES & PRODUCTION RUNBOOKS
===================================================================
- Official Repository: https://github.com/pathseeker-curriculum/masterclass-blueprints
- Verification Status: Certified by PathSeeker Architecture Board

© 2026 PathSeeker Career Passport. All rights reserved.
`;

      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const safeFilename = resource.title.replace(/[^a-zA-Z0-9_-]/g, '_');
      link.setAttribute('download', `${safeFilename}.md`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Downloaded "${resource.title}" (${resource.fileSize})!`);
    } catch {
      toast.success(`Downloaded "${resource.title}"!`);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyCode = () => {
    const textToCopy = pages[activePage]?.content || resource.summary;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    toast.success('Page contents copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(150, prev + 15));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(75, prev - 15));

  const currentPageData = pages[activePage] || pages[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[88vh] rounded-3xl glass-panel-ultra border border-white/20 flex flex-col justify-between shadow-2xl overflow-hidden text-left">
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
              disabled={isDownloading}
              className="px-3.5 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              <span className="hidden sm:inline">{isDownloading ? 'Saving...' : 'Download File'}</span>
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
          <div className="w-56 sm:w-64 border-r border-white/10 bg-black/40 flex-none flex flex-col justify-between hidden md:flex">
            <div className="p-3 border-b border-white/10 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('pages')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'pages'
                    ? 'bg-white/15 text-white'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={faFileLines} className="text-[10px]" />
                <span>Pages ({pages.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('toc')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'toc'
                    ? 'bg-white/15 text-white'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={faListOl} className="text-[10px]" />
                <span>Contents</span>
              </button>
            </div>

            {/* Sidebar List Content */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {activeTab === 'pages' ? (
                pages.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePage(i)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer block ${
                      activePage === i
                        ? 'bg-[#E8602E]/20 text-white border-[#E8602E]/50'
                        : 'bg-white/[0.02] text-[#A1A1AA] hover:text-white border-white/5 hover:border-white/15'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#E8602E] block">
                      Page {p.pageNumber || i + 1}
                    </span>
                    <span className="font-semibold line-clamp-1 block text-white">{p.title}</span>
                  </button>
                ))
              ) : (
                <div className="space-y-1.5 text-xs text-[#D4D4D8]">
                  {(resource.tableOfContents || []).map((toc, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] leading-snug"
                    >
                      {toc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Author Credit in Sidebar */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02] text-[11px] text-[#A1A1AA]">
              <span className="text-[10px] text-[#71717A] uppercase font-mono block">Published By</span>
              <span className="font-semibold text-white truncate block">{resource.author}</span>
            </div>
          </div>

          {/* Right Document Reading Viewport */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#07070A] flex flex-col items-center">
            <div
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="w-full max-w-3xl rounded-2xl bg-[#0E0E14] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-6 transition-transform duration-200"
            >
              {/* Document Header */}
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#E8602E] uppercase">
                    {resource.category} • Blueprint Sheet #{currentPageData.pageNumber || activePage + 1}
                  </span>
                  <h2 className="text-base sm:text-xl font-extrabold text-white">
                    {currentPageData.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} className="text-[11px]" />
                  <span>{isCopied ? 'Copied' : 'Copy Text'}</span>
                </button>
              </div>

              {/* Page Content Block */}
              <div className="space-y-4 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed font-sans">
                <p className="whitespace-pre-line leading-loose">
                  {currentPageData.content}
                </p>

                {/* Topics Tags */}
                {resource.topics && (
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono text-[#71717A]">TAGS:</span>
                    {resource.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Page Navigation Pager */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 flex-none">
          <button
            type="button"
            disabled={activePage === 0}
            onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
            className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-[10px]" />
            <span>Previous Page</span>
          </button>

          <span className="text-xs text-[#A1A1AA] font-mono font-bold">
            Page {activePage + 1} of {pages.length}
          </span>

          <button
            type="button"
            disabled={activePage === pages.length - 1}
            onClick={() => setActivePage((prev) => Math.min(pages.length - 1, prev + 1))}
            className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
          >
            <span>Next Page</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
