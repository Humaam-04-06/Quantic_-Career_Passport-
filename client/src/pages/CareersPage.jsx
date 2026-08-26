import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import CareerFilterBar from '../components/careers/CareerFilterBar';
import CareerCard from '../components/careers/CareerCard';
import CareerCompareModal from '../components/careers/CareerCompareModal';
import { CAREERS_DATABASE } from '../data/careersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faScaleBalanced,
  faBrain,
  faArrowRight,
  faChartColumn,
  faCheck,
  faFire,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function CareersPage() {
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [searchQuery, setSearchQuery] = useState('');
  const [minSalary, setMinSalary] = useState(50000);
  const [experienceLevel, setExperienceLevel] = useState('All');

  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [comparedIds, setComparedIds] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filter logic
  const filteredCareers = useMemo(() => {
    return CAREERS_DATABASE.filter((career) => {
      // Domain filter
      const matchesDomain =
        selectedDomain === 'All Domains' || career.domain === selectedDomain;

      // Text search
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        career.title.toLowerCase().includes(query) ||
        career.skills.hard.some((s) => s.toLowerCase().includes(query)) ||
        career.skills.tools.some((t) => t.toLowerCase().includes(query));

      // Salary filter (extract numerical lower bound)
      const rawSalary = parseInt(career.seniorSalary.replace(/[^0-9]/g, ''), 10) || 100000;
      const matchesSalary = rawSalary >= minSalary;

      // Experience level filter
      const matchesLevel =
        experienceLevel === 'All' || career.experienceLevel.includes(experienceLevel);

      return matchesDomain && matchesSearch && matchesSalary && matchesLevel;
    });
  }, [selectedDomain, searchQuery, minSalary, experienceLevel]);

  // Bookmarking handler
  const handleToggleBookmark = (id) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        toast('Removed from saved bookmarks', { icon: '📌' });
        return prev.filter((item) => item !== id);
      } else {
        toast.success('Career saved to your Passport collection!');
        return [...prev, id];
      }
    });
  };

  // Compare handler (max 3)
  const handleToggleCompare = (id) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        toast.error('You can compare up to 3 careers simultaneously.');
        return prev;
      }
      toast.success('Added to Comparison Matrix!');
      return [...prev, id];
    });
  };

  const comparedCareersList = useMemo(() => {
    return CAREERS_DATABASE.filter((c) => comparedIds.includes(c.id));
  }, [comparedIds]);

  const handleResetFilters = () => {
    setSelectedDomain('All Domains');
    setSearchQuery('');
    setMinSalary(50000);
    setExperienceLevel('All');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-[#E8602E]/30 relative overflow-x-clip">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-32 left-10 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-1/2 right-10 opacity-25 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-32 left-1/3 opacity-20 pointer-events-none" />

      {/* Main Explorer Content */}
      <main className="relative z-10 flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        
        {/* SECTION 1: HERO & MARKET INTELLIGENCE TICKER */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] shadow-sm">
            <FontAwesomeIcon icon={faCompass} className="text-xs" />
            <span>Global Career Passport Bank</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
            Explore 150+ High-Impact <br />
            <span className="gradient-text-fire">Global Career Pathways</span>
          </h1>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Real-world salary benchmarks, day-in-the-life operational routines, required skill trees, and verified step-by-step learning roadmaps.
          </p>

          {/* Market Intelligence Ticker Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-2xl glass-panel-ultra text-center">
              <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">Indexed Careers</span>
              <strong className="text-xl font-extrabold font-mono text-white">150+ Roles</strong>
            </div>
            <div className="p-4 rounded-2xl glass-panel-ultra text-center">
              <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">Avg Tech Comp</span>
              <strong className="text-xl font-extrabold font-mono text-[#FFE8DE]">$148,000</strong>
            </div>
            <div className="p-4 rounded-2xl glass-panel-ultra text-center">
              <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">AI & Cloud Growth</span>
              <strong className="text-xl font-extrabold font-mono text-[#10B981]">+28% YoY</strong>
            </div>
            <div className="p-4 rounded-2xl glass-panel-ultra text-center">
              <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">Industry Sectors</span>
              <strong className="text-xl font-extrabold font-mono text-white">12 Clusters</strong>
            </div>
          </div>
        </div>

        {/* SECTION 2: MULTI-FILTER CONTROL CENTER */}
        <CareerFilterBar
          selectedDomain={selectedDomain}
          setSelectedDomain={setSelectedDomain}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          minSalary={minSalary}
          setMinSalary={setMinSalary}
          experienceLevel={experienceLevel}
          setExperienceLevel={setExperienceLevel}
          onReset={handleResetFilters}
        />

        {/* SECTION 3 & 4: CAREER GRID */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white">
              Showing <span className="text-[#E8602E]">{filteredCareers.length}</span> Verified Pathways
            </h2>

            {comparedIds.length > 0 && (
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(true)}
                className="btn-primary-orange text-xs px-4 py-2 font-bold flex items-center gap-2 shadow-glow-orange-sm cursor-pointer"
              >
                <FontAwesomeIcon icon={faScaleBalanced} />
                <span>Compare Selected ({comparedIds.length})</span>
              </button>
            )}
          </div>

          {filteredCareers.length === 0 ? (
            <div className="p-12 rounded-3xl glass-panel-ultra text-center space-y-4">
              <p className="text-base text-[#D4D4D8]">
                No career matches found for your current filter criteria.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn-secondary-dark px-6 py-2.5 text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCareers.map((career) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isBookmarked={bookmarkedIds.includes(career.id)}
                  onToggleBookmark={handleToggleBookmark}
                  isCompared={comparedIds.includes(career.id)}
                  onToggleCompare={handleToggleCompare}
                />
              ))}
            </div>
          )}
        </div>

        {/* SECTION 5: INDUSTRY SALARY & GROWTH BENCHMARK CHART */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] glass-panel-ultra space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-lg shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faChartColumn} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8602E] block">
                Macroeconomic Trajectory
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white">
                Industry Domain Compensation Benchmarks
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { domain: 'AI & Machine Learning', avg: '$165k', max: '$340k+', growth: '+28%' },
              { domain: 'Quant Finance & Blockchain', avg: '$235k', max: '$500k+', growth: '+22%' },
              { domain: 'Software & Cloud Architecture', avg: '$155k', max: '$320k+', growth: '+24%' },
              { domain: 'Cybersecurity & Defense', avg: '$145k', max: '$360k+', growth: '+26%' },
              { domain: 'Robotics & Autonomous Tech', avg: '$140k', max: '$280k+', growth: '+21%' },
              { domain: 'UI/UX & Product Design', avg: '$130k', max: '$260k+', growth: '+18%' },
            ].map((d, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{d.domain}</span>
                  <span className="text-[#10B981] font-mono font-bold">{d.growth}</span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-[#A1A1AA]">
                  <span>Average: <strong className="text-white font-mono">{d.avg}</strong></span>
                  <span>Top: <strong className="text-[#FFE8DE] font-mono">{d.max}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: AI INTEREST MATCH CALLOUT BANNER */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] glass-card-interactive flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] text-xs font-bold border border-[#E8602E]/30">
              <FontAwesomeIcon icon={faBrain} />
              <span>Unsure Which Role Fits You Best?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Take the 3-Minute AI Interest Assessment
            </h3>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              Our 6-axis Holland RIASEC scoring engine maps your logic, passions, and operational preferences directly to top career pathways.
            </p>
          </div>

          <Link
            to="/quiz"
            className="btn-primary-orange px-8 py-4 text-xs sm:text-sm font-bold flex items-center gap-2 flex-shrink-0 shadow-glow-orange cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Start Free Assessment</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </main>

      {/* Floating Bottom Compare Matrix Bar (Sticky) */}
      {comparedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 animate-fade-in">
          <div className="p-4 rounded-2xl glass-panel-ultra border border-[#E8602E]/60 shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E8602E] text-white flex items-center justify-center text-xs font-bold">
                {comparedIds.length}
              </div>
              <span className="text-xs font-semibold text-white">
                Roles selected for comparison
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setComparedIds([])}
                className="text-xs text-[#A1A1AA] hover:text-white px-3 py-1.5"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(true)}
                className="btn-primary-orange text-xs px-4 py-2 font-bold flex items-center gap-1.5 shadow-glow-orange-sm"
              >
                <span>Launch Matrix</span>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {isCompareModalOpen && (
        <CareerCompareModal
          comparedCareers={comparedCareersList}
          onRemoveCompare={(id) => setComparedIds((prev) => prev.filter((item) => item !== id))}
          onClearAll={() => setComparedIds([])}
          onClose={() => setIsCompareModalOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
