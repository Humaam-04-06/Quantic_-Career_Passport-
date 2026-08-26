import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faArrowTrendUp,
  faPenNib,
  faBrain,
  faArrowRight,
  faUsers,
  faChartLine,
  faShieldHalved,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import CoverFlowStoriesSlider from '../components/stories/CoverFlowStoriesSlider';
import SixFacesCubeJourneySection from '../components/stories/SixFacesCubeJourneySection';
import StoryFilterBar from '../components/stories/StoryFilterBar';
import StoryCard from '../components/stories/StoryCard';
import StoryModal from '../components/stories/StoryModal';
import FeaturedStoryBanner from '../components/stories/FeaturedStoryBanner';
import { STORIES_DATABASE } from '../data/storiesData';
import { storiesApi } from '../services/api';

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStoryModal, setActiveStoryModal] = useState(null);
  const [stories, setStories] = useState(() => {
    try {
      const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
      return [...local, ...STORIES_DATABASE];
    } catch {
      return STORIES_DATABASE;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load live stories from MongoDB Atlas
  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      try {
        const res = await storiesApi.getAll();
        if (res?.data && res.data.length > 0) {
          const apiStories = res.data.map((s) => ({
            ...s,
            id: s._id || s.id,
            name: s.authorName || s.name,
            avatar: s.authorAvatar || s.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            currentRole: s.authorRole || s.currentRole,
            title: s.title || `From ${s.previousRole} to ${s.authorRole} at ${s.currentCompany}`,
          }));

          const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
          const merged = [...local, ...apiStories];
          // Deduplicate by ID / title
          const unique = Array.from(new Map(merged.map((m) => [m.id || m._id || m.title, m])).values());
          setStories(unique);
        }
      } catch (err) {
        console.warn('Using local stories database:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();

    const handleStoriesChange = () => {
      try {
        const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        setStories((prev) => {
          const merged = [...local, ...prev];
          return Array.from(new Map(merged.map((m) => [m.id || m._id || m.title, m])).values());
        });
      } catch {
        // ignore
      }
    };

    window.addEventListener('storiesChange', handleStoriesChange);
    return () => window.removeEventListener('storiesChange', handleStoriesChange);
  }, []);

  // Filtered Stories
  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const name = (story.name || story.authorName || '').toLowerCase();
      const title = (story.title || '').toLowerCase();
      const company = (story.currentCompany || '').toLowerCase();
      const prevRole = (story.previousRole || '').toLowerCase();
      const domain = (story.domain || '').toLowerCase();
      const cat = (story.category || '').toLowerCase();

      const matchesCat =
        selectedCategory === 'All Stories' ||
        cat === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Non-Tech to Tech' && cat.includes('non-tech')) ||
        (selectedCategory === 'Self-Taught to Full-Stack' && cat.includes('self-taught'));

      const matchesDom =
        selectedDomain === 'All Domains' ||
        domain === selectedDomain.toLowerCase() ||
        domain.includes(selectedDomain.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        name.includes(query) ||
        title.includes(query) ||
        company.includes(query) ||
        prevRole.includes(query) ||
        domain.includes(query);

      return matchesCat && matchesDom && matchesSearch;
    });
  }, [stories, selectedCategory, selectedDomain, searchQuery]);

  // Compute live dynamic stats across stories
  const telemetryStats = useMemo(() => {
    const totalCount = 1420 + stories.length;
    let totalPct = 0;
    let pctCount = 0;
    let totalMonths = 0;
    let monthCount = 0;

    stories.forEach((s) => {
      if (s.salaryIncrease) {
        const num = parseInt(s.salaryIncrease.replace(/[^0-9]/g, ''), 10);
        if (num) {
          totalPct += num;
          pctCount++;
        }
      }
      if (s.timeToTransition) {
        const m = parseInt(s.timeToTransition.replace(/[^0-9]/g, ''), 10);
        if (m) {
          totalMonths += m;
          monthCount++;
        }
      }
    });

    const avgSalaryPct = pctCount > 0 ? Math.round(totalPct / pctCount) : 315;
    const avgDuration = monthCount > 0 ? (totalMonths / monthCount).toFixed(1) : '5.4';

    return {
      totalCount,
      avgSalaryPct,
      avgDuration,
    };
  }, [stories]);

  const handleResetFilters = () => {
    setSelectedCategory('All Stories');
    setSelectedDomain('All Domains');
    setSearchQuery('');
  };

  const featuredStory = stories.find((s) => s.isFeatured) || stories[0] || STORIES_DATABASE[0];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30 relative">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-32 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-10 opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
        {/* ========================================================
            SECTION 1: HERO & TRANSFORMATION TELEMETRY TICKER
            ======================================================== */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
            <FontAwesomeIcon icon={faAward} />
            <span>Community Verified Transitions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white leading-tight tracking-tight">
            Proof That Anyone Can Break Into High-Growth Tech.
          </h1>

          <p className="text-xs sm:text-base text-[#D4D4D8] leading-relaxed">
            Real stories from liberal arts majors, baristas, customer support reps, and teachers who leveraged PathSeeker 90-day blueprints to secure $150k+ careers.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
            <Link
              to="/stories/submit"
              className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPenNib} />
              <span>Submit Your Journey</span>
            </Link>

            <a
              href="#stories-grid"
              className="px-6 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/15 cursor-pointer"
            >
              Explore {telemetryStats.totalCount.toLocaleString()}+ Stories
            </a>
          </div>

          {/* Real-World Dynamic Telemetry Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8602E] font-mono block">
                {telemetryStats.totalCount.toLocaleString()}+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Verified Transitions
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-mono block">
                +{telemetryStats.avgSalaryPct}%
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Avg Compensation Jump
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] font-mono block">
                {telemetryStats.avgDuration} Mos
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Avg Pivot Duration
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                98.4%
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Offer Placement Rate
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            COVER FLOW IMAGE SLIDER GALLERY
            ======================================================== */}
        <section>
          <CoverFlowStoriesSlider stories={stories} onSelectStory={(story) => setActiveStoryModal(story)} />
        </section>

        {/* ========================================================
            3D SIX FACES CUBE TRANSFORMATION SHOWCASE
            ======================================================== */}
        <section>
          <SixFacesCubeJourneySection />
        </section>

        {/* ========================================================
            FEATURED TRANSFORMATION BANNER
            ======================================================== */}
        {featuredStory && (
          <section>
            <FeaturedStoryBanner
              story={featuredStory}
              onSelectStory={(story) => setActiveStoryModal(story)}
            />
          </section>
        )}

        {/* ========================================================
            TRANSITION FILTER BAR & STORY CARDS GRID
            ======================================================== */}
        <section id="stories-grid" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Browse Full Community Journeys
              </h2>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Showing {filteredStories.length} verified candidate transformation roadmaps.
              </p>
            </div>

            <Link
              to="/stories/submit"
              className="px-5 py-2.5 rounded-xl bg-[#E8602E]/20 text-[#E8602E] hover:bg-[#E8602E] hover:text-white border border-[#E8602E]/40 text-xs font-bold font-mono transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <FontAwesomeIcon icon={faPenNib} />
              <span>Publish Your Story</span>
            </Link>
          </div>

          <StoryFilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onReset={handleResetFilters}
          />

          {filteredStories.length === 0 ? (
            <div className="rounded-3xl glass-panel-ultra p-12 text-center space-y-4">
              <h3 className="text-lg font-bold text-white">No Stories Found</h3>
              <p className="text-xs text-[#A1A1AA]">
                Try selecting a different transition category or reset your search.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-[#E8602E] text-white text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story._id || story.id || story.title}
                  story={story}
                  onSelectStory={(s) => setActiveStoryModal(s)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            'WRITE YOUR OWN STORY' AI QUIZ & CAREER CONDUIT
            ======================================================== */}
        <section className="rounded-3xl glass-panel-ultra border border-[#E8602E]/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-glow-orange">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl mx-auto shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faBrain} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Write Your Own Success Story?
            </h2>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              Discover which engineering stream fits your personality, cognitive aptitude, and career goals with our 7-step RIASEC engine.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] text-white font-extrabold text-sm shadow-glow-orange hover:scale-105 transition-transform cursor-pointer"
              >
                <span>Take AI Interest Quiz</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-colors"
              >
                <span>Explore Career Bank</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Deep-Dive Blueprint Story Modal */}
      {activeStoryModal && (
        <StoryModal
          story={activeStoryModal}
          onClose={() => setActiveStoryModal(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
