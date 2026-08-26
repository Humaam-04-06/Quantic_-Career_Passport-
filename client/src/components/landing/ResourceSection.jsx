import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faDownload,
  faEye,
  faFilePdf,
  faXmark,
  faCheck,
  faArrowRight,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const RESOURCES = [
  {
    id: 'r1',
    title: 'Full-Stack Engineering Career Roadmap & Interview Prep 2026',
    category: 'PDF Guide',
    audience: 'All Stages',
    size: '3.2 MB',
    downloads: 540,
    tags: ['Beginner', 'Interview-Prep', 'MERN Stack'],
    summary: 'A 40-page master blueprint covering JavaScript fundamentals, system design principles, API security, and top 50 technical interview questions.',
  },
  {
    id: 'r2',
    title: 'Global STEM & Tech Scholarships Directory',
    category: 'Scholarship',
    audience: 'Students',
    size: '2.1 MB',
    downloads: 890,
    tags: ['Scholarship', 'Undergraduate', 'Postgraduate'],
    summary: 'Curated compilation of 100+ fully funded global undergraduate and postgraduate STEM scholarships with application timelines and eligibility criteria.',
  },
  {
    id: 'r3',
    title: 'Technical Resume & GitHub Portfolio Audit Checklist',
    category: 'Checklist',
    audience: 'Graduates & Pros',
    size: '1.1 MB',
    downloads: 1240,
    tags: ['Resume-Building', 'Portfolio', 'FAANG Ready'],
    summary: 'An actionable 15-point checklist used by top technology recruiters to evaluate engineering resumes, live project showcases, and GitHub commit histories.',
  },
];

export default function ResourceSection() {
  const [previewItem, setPreviewItem] = useState(null);
  const [downloadCounts, setDownloadCounts] = useState({
    r1: 540,
    r2: 890,
    r3: 1240,
  });

  const handleDownload = (id) => {
    setDownloadCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    // Simulate PDF file download trigger
    const element = document.createElement('a');
    const file = new Blob(['PathSeeker Career Passport Document Resource: Simulated PDF Content.'], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = `${id}_pathseeker_guide.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-orange-spotlight top-1/2 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4">
              <FontAwesomeIcon icon={faFolderOpen} className="text-xs" />
              <span>Document Resource Library</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Downloadable Guides & <span className="gradient-text-fire">Checklists</span>
            </h2>
            <p className="text-[#A1A1AA] text-base mt-2 max-w-xl">
              Curated career cheat-sheets, scholarship compilations, and interview checklists with instant in-browser modal previews.
            </p>
          </div>

          <Link
            to="/resources"
            className="btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2"
          >
            <span>Browse Full Library</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#E8602E]" />
          </Link>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RESOURCES.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-[2rem] glass-card-interactive flex flex-col justify-between"
            >
              <div>
                {/* Meta Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8602E] bg-[#E8602E]/10 backdrop-blur-md px-2.5 py-1 rounded border border-[#E8602E]/30">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-[#A1A1AA] font-mono">
                    {item.size} • {downloadCounts[item.id]} DLs
                  </span>
                </div>

                <h3 className="text-xl font-extrabold font-display text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#D4D4D8] leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-[10px] bg-white/[0.05] text-[#D4D4D8] border border-white/10 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setPreviewItem(item)}
                  className="flex-1 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#D4D4D8] hover:text-white text-xs font-semibold border border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur-md"
                >
                  <FontAwesomeIcon icon={faEye} className="text-xs text-[#E8602E]" />
                  <span>Preview</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownload(item.id)}
                  className="flex-1 py-2.5 rounded-xl btn-primary-orange text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-glow-orange-sm"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-xs" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Preview Frosted Glass Modal Popup */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-lg p-7 sm:p-9 rounded-[2rem] glass-panel-ultra shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <FontAwesomeIcon icon={faXmark} className="text-sm" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8602E]/15 border border-[#E8602E]/30 flex items-center justify-center text-[#E8602E] backdrop-blur-md">
                <FontAwesomeIcon icon={faFilePdf} className="text-lg" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#E8602E] tracking-wider block">
                  In-Browser Document Preview
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {previewItem.title}
                </h4>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-[#D4D4D8] leading-relaxed my-4 space-y-2">
              <p><strong>Audience Scope:</strong> {previewItem.audience}</p>
              <p><strong>File Specifications:</strong> PDF Document ({previewItem.size})</p>
              <p className="pt-2 border-t border-[#1C1C22]">{previewItem.summary}</p>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#A1A1AA] hover:text-white"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(previewItem.id);
                  setPreviewItem(null);
                }}
                className="btn-primary-orange text-xs px-5 py-2.5 font-bold flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                <span>Download Complete PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
