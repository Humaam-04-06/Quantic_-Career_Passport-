import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faArrowRight,
  faCompass,
  faChartLine,
  faDollarSign,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { SAVED_CAREERS } from '../../data/dashboardData';

export default function SavedCareersHub() {
  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faBookmark} />
            <span>Target Career Pathways</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Pinned Career Blueprints
          </h3>
        </div>

        <Link
          to="/careers"
          className="text-xs font-bold text-[#E8602E] hover:text-white flex items-center gap-1.5 font-mono"
        >
          <span>Explore 150+ Careers in Bank</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAVED_CAREERS.map((career) => (
          <div
            key={career.id}
            className="group rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass"
          >
            {/* Top Image */}
            <div className="relative h-40 w-full overflow-hidden bg-black/40">
              <img
                src={career.thumbnail}
                alt={career.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#E8602E] border border-white/15">
                  {career.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[10px] font-bold font-mono">
                  {career.fitScore}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug">
                  {career.title}
                </h4>
                <div className="flex items-center justify-between text-xs font-mono pt-1 text-[#A1A1AA]">
                  <span>Avg: <strong className="text-white">{career.avgSalary}</strong></span>
                  <span className="text-[#10B981] font-bold">{career.growthRate}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/careers/${career.id}`}
                  className="w-full py-2 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Launch Roadmap</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
