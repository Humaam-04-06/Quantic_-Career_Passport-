import React, { useState, useMemo } from 'react';
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

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStoryModal, setActiveStoryModal] = useState(null);

  // Filtered Stories
  const filteredStories = useMemo(() => {
    return STORIES_DATABASE.filter((story) => {
      const matchesCat =
        selectedCategory === 'All Stories' || story.category === selectedCategory;
      const matchesDom =
        selectedDomain === 'All Domains' || story.domain === selectedDomain;
      const matchesSearch =
        story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.previousRole.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesDom && matchesSearch;
    });
  }, [selectedCategory, selectedDomain, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All Stories');
    setSelectedDomain('All Domains');
    setSearchQuery('');
  };

  const featuredStory = STORIES_DATABASE.find((s) => s.isFeatured) || STORIES_DATABASE[0];

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
              className="px-6 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/15"
            >
              Explore 1,420+ Stories
            </a>
          </div>

          {/* Real-World Telemetry Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8602E] font-mono block">
                1,420+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Verified Transitions
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-mono block">
                +84%
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Avg Salary Increase
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] font-mono block">
                12
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Tech Clusters
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                96%
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Placement Rate
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            COVER FLOW IMAGE SLIDER GALLERY (CodePen 06 Asset)
            ======================================================== */}
        <section>
          <CoverFlowStoriesSlider onSelectStory={(story) => setActiveStoryModal(story)} />
        </section>

        {/* ========================================================
            3D SIX FACES CUBE TRANSFORMATION SHOWCASE (CodePen 08 Asset)
            ======================================================== */}
        <section>
          <SixFacesCubeJourneySection />
        </section>

        {/* ========================================================
            SECTION 4: FEATURED TRANSFORMATION OF THE MONTH
            ======================================================== */}
        <section>
          <FeaturedStoryBanner
            story={featuredStory}
            onSelectStory={(story) => setActiveStoryModal(story)}
          />
        </section>

        {/* ========================================================
            SECTION 2 & 3: TRANSITION FILTER BAR & STORY CARDS GRID
            ======================================================== */}
        <section id="stories-grid" className="space-y-8 scroll-mt-28">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Browse Full Community Journeys
            </h2>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Showing {filteredStories.length} verified candidate transformation roadmaps.
            </p>
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
                  key={story.id}
                  story={story}
                  onSelectStory={(s) => setActiveStoryModal(s)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 6: 'WRITE YOUR OWN STORY' AI QUIZ & CAREER CONDUIT
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
