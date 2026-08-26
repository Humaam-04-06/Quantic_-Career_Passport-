import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faArrowRight,
  faCompass,
  faChartLine,
  faDollarSign,
  faTrashCan,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { CAREERS_DATABASE } from '../../data/careersData';
import { userApi } from '../../services/api';
import toast from 'react-hot-toast';

export default function SavedCareersHub() {
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const user = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      const emailKey = (user?.email || 'guest').toLowerCase();
      const savedUserBookmarks = localStorage.getItem(`pathseeker_bookmarks_${emailKey}`);
      if (savedUserBookmarks) {
        return JSON.parse(savedUserBookmarks);
      }
      const generic = localStorage.getItem('pathseeker_bookmarks');
      if (generic) {
        return JSON.parse(generic);
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    const handleSync = () => {
      try {
        const user = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
        const emailKey = (user?.email || 'guest').toLowerCase();
        const savedUserBookmarks = localStorage.getItem(`pathseeker_bookmarks_${emailKey}`);
        if (savedUserBookmarks) {
          setBookmarkedIds(JSON.parse(savedUserBookmarks));
          return;
        }
        const stored = JSON.parse(
          localStorage.getItem('pathseeker_bookmarks') || '[]'
        );
        setBookmarkedIds(stored);
      } catch {
        // ignore
      }
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('bookmarksChange', handleSync);
    window.addEventListener('authChange', handleSync);
    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('bookmarksChange', handleSync);
      window.removeEventListener('authChange', handleSync);
    };
  }, []);

  const handleRemoveBookmark = async (id) => {
    const updated = bookmarkedIds.filter((item) => item !== id);
    setBookmarkedIds(updated);
    try {
      const user = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      const emailKey = (user?.email || 'guest').toLowerCase();
      localStorage.setItem(`pathseeker_bookmarks_${emailKey}`, JSON.stringify(updated));
      localStorage.setItem('pathseeker_bookmarks', JSON.stringify(updated));
      window.dispatchEvent(new Event('bookmarksChange'));
    } catch {
      // ignore
    }
    toast('Removed from saved bookmarks', { icon: '📌' });

    // Sync with backend API
    try {
      await userApi.toggleBookmark('career', id);
    } catch {
      // offline fallback
    }
  };

  // Resolve matching career objects from database
  const savedCareers = CAREERS_DATABASE.filter((c) =>
    bookmarkedIds.includes(c.id)
  );

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faBookmark} />
            <span>Target Career Pathways ({savedCareers.length})</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Pinned Career Blueprints
          </h3>
        </div>

        <Link
          to="/careers"
          className="text-xs font-bold text-[#E8602E] hover:text-white flex items-center gap-1.5 font-mono group"
        >
          <span>Explore 150+ Careers in Bank</span>
          <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Cards Grid or Empty State */}
      {savedCareers.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl border border-[#E8602E]/30">
            <FontAwesomeIcon icon={faCompass} />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">No Pinned Career Blueprints Yet</h4>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto">
              Explore our Career Bank and click the bookmark icon on any role to pin it to your Candidate Dashboard.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold font-mono transition-all shadow-glow-orange-sm cursor-pointer"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Browse Careers & Save Roles</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savedCareers.map((career) => (
            <div
              key={career.id}
              className="group rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass relative"
            >
              {/* Top Image */}
              <div className="relative h-40 w-full overflow-hidden bg-black/40">
                <img
                  src={career.thumbnail}
                  alt={career.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-[#E8602E] border border-white/15">
                    {career.domain}
                  </span>
                  
                  {/* Remove Bookmark Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveBookmark(career.id)}
                    className="w-7 h-7 rounded-full bg-black/70 hover:bg-red-500/80 text-white/80 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                    title="Remove from Pinned Careers"
                  >
                    <FontAwesomeIcon icon={faTrashCan} className="text-[10px]" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug">
                    {career.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs font-mono pt-1 text-[#A1A1AA]">
                    <span>Senior: <strong className="text-white">{career.seniorSalary}</strong></span>
                    <span className="text-[#10B981] font-bold">{career.growthRate} Growth</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/careers/${career.id}`}
                    className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Launch Roadmap</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
