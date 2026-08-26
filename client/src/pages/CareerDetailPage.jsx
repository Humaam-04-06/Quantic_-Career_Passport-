import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import SalaryProgressionLadder from '../components/careers/SalaryProgressionLadder';
import DayInLifeTimeline from '../components/careers/DayInLifeTimeline';
import SkillTreeMatrix from '../components/careers/SkillTreeMatrix';
import RoadmapTimeline from '../components/careers/RoadmapTimeline';
import { CAREERS_DATABASE } from '../data/careersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faBookmark,
  faShareNodes,
  faShieldHalved,
  faFire,
  faVideo,
  faArrowRight,
  faCheckCircle,
  faCircle,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import toast from 'react-hot-toast';

export default function CareerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Find career by string ID or numericId fallback
  const career = CAREERS_DATABASE.find((c) => c.id === id || c.numericId === id) || CAREERS_DATABASE[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Pathway link copied to clipboard!');
  };

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      toast.success('Pathway saved to your Career Passport bookmarks!');
    } else {
      toast.success('Removed from saved bookmarks');
    }
  };

  // Related adjacent roles
  const adjacentCareers = CAREERS_DATABASE.filter((c) => c.id !== career.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-[#E8602E]/30 relative overflow-x-clip">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-24 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-1/2 right-10 opacity-30 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-40 left-10 opacity-25 pointer-events-none" />

      {/* Main Detail Content */}
      <main className="relative z-10 flex-1 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Back Link Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/careers')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs text-[#E8602E]" />
            <span>Back to Global Career Bank</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleBookmark}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]'
                  : 'bg-white/[0.05] text-[#A1A1AA] border-white/10 hover:text-white'
              }`}
            >
              <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBookmarkRegular} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save Pathway'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faShareNodes} className="text-[#E8602E]" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: ROLE HERO & PASSPORT CODE BADGE */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] glass-panel-ultra relative overflow-hidden space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-3 py-1 rounded-md border border-[#E8602E]/30">
              #{career.passportCode}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] bg-white/[0.05] px-3 py-1 rounded-md border border-white/10">
              {career.domain}
            </span>
            {career.isTrending && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8602E]/20 border border-[#E8602E]/40 text-[#E8602E] text-xs font-bold backdrop-blur-md">
                <FontAwesomeIcon icon={faFire} className="text-[10px]" />
                <span>Exponential Demand</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-4xl">
            {career.title}
          </h1>

          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-w-3xl">
            {career.fullDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Target Avg Salary</span>
              <strong className="text-lg font-mono font-extrabold text-white">{career.avgComp}</strong>
            </div>
            <div>
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Growth Velocity</span>
              <strong className="text-lg font-mono font-extrabold text-[#10B981]">{career.growthRate}</strong>
            </div>
            <div>
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Work Environment</span>
              <strong className="text-lg font-extrabold text-white">{career.workEnvironment}</strong>
            </div>
            <div>
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Work-Life Score</span>
              <strong className="text-lg font-mono font-extrabold text-[#FFE8DE]">{career.workLifeScore}</strong>
            </div>
          </div>
        </div>

        {/* SECTION 2: 4-TIER COMPENSATION PROGRESSION LADDER */}
        <SalaryProgressionLadder
          salaryLadder={career.salaryLadder}
          title={career.title}
        />

        {/* SECTION 3 & 4: DAY IN LIFE & SKILL TREE MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <DayInLifeTimeline dayInLife={career.dayInLife} />
          </div>
          <div className="lg:col-span-6">
            <SkillTreeMatrix skills={career.skills} />
          </div>
        </div>

        {/* SECTION 5 & 6: STEP-BY-STEP VERIFIED LEARNING ROADMAP & CERTIFICATIONS */}
        <RoadmapTimeline
          roadmap={career.roadmap}
          certifications={career.certifications}
          prerequisites={career.prerequisites}
        />

        {/* SECTION 7: RELATED MASTERCLASSES & ADJACENT PIVOTS */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E] block">
                Next Lateral Opportunities
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white">
                Adjacent Career Pathways
              </h3>
            </div>

            <Link
              to="/careers"
              className="btn-secondary-dark text-xs px-5 py-2.5 flex items-center gap-2"
            >
              <span>Explore All 150+ Roles</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-[#E8602E] text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adjacentCareers.map((adj) => (
              <div
                key={adj.id}
                className="p-7 rounded-3xl glass-card-interactive flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 px-2 py-0.5 rounded">
                    #{adj.passportCode}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 leading-snug">
                    {adj.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2 mt-1">
                    {adj.heroSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white">{adj.avgComp}</span>
                  <Link
                    to={`/careers/${adj.id}`}
                    className="text-xs font-bold text-[#E8602E] hover:text-white flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
