import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faDownload,
  faLayerGroup,
  faBrain,
  faArrowRight,
  faPlus,
  faShieldHalved,
  faStar,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import ResourceFilterBar from '../components/resources/ResourceFilterBar';
import ResourceCard from '../components/resources/ResourceCard';
import FeaturedResourceBanner from '../components/resources/FeaturedResourceBanner';
import DocumentViewerModal from '../components/resources/DocumentViewerModal';
import ResourceRequestModal from '../components/resources/ResourceRequestModal';
import { RESOURCES_DATABASE } from '../data/resourcesData';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Resources');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [activePreviewResource, setActivePreviewResource] = useState(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Filter & Sort Resources
  const filteredResources = useMemo(() => {
    let result = RESOURCES_DATABASE.filter((r) => {
      const matchesCat =
        selectedCategory === 'All Resources' || r.category === selectedCategory;
      const matchesFmt =
        selectedFormat === 'All Formats' || r.format === selectedFormat;
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesFmt && matchesSearch;
    });

    if (sortBy === 'popular') {
      result.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') {
      result.sort((a, b) => parseInt(b.pages) - parseInt(a.pages));
    }

    return result;
  }, [selectedCategory, selectedFormat, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All Resources');
    setSelectedFormat('All Formats');
    setSearchQuery('');
    setSortBy('popular');
  };

  const featuredResource =
    RESOURCES_DATABASE.find((r) => r.isFeatured) || RESOURCES_DATABASE[0];

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
            SECTION 1: HERO & RESOURCE DISCOVERY TELEMETRY
            ======================================================== */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md">
            <FontAwesomeIcon icon={faBookOpen} />
            <span>Open Production Blueprints & Cheat-sheets</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white leading-tight tracking-tight">
            The Engineering Playbook You Wish You Had on Day One.
          </h1>

          <p className="text-xs sm:text-base text-[#D4D4D8] leading-relaxed">
            Download production-ready system design blueprints, ATS resume Figma kits, PyTorch calculation cheat-sheets, and verified $200k+ salary negotiation scripts.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
            <button
              type="button"
              onClick={() => setIsRequestModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Request a Custom Blueprint</span>
            </button>

            <a
              href="#resources-grid"
              className="px-6 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/15"
            >
              Explore 180+ Downloads
            </a>
          </div>

          {/* Real-World Telemetry Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8602E] font-mono block">
                180+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Verified Blueprints
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-mono block">
                45,000+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Total Downloads
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] font-mono block">
                99.4%
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Quality Satisfaction
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                100% Free
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Community Access
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: FEATURED RESOURCE OF THE WEEK SPOTLIGHT
            ======================================================== */}
        <FeaturedResourceBanner
          resource={featuredResource}
          onPreview={(res) => setActivePreviewResource(res)}
        />

        {/* ========================================================
            SECTION 3 & 4: FILTER BAR & RESOURCE CARDS GRID
            ======================================================== */}
        <section id="resources-grid" className="space-y-8 scroll-mt-28">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Browse Document & Template Repository
            </h2>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Showing {filteredResources.length} production-ready downloads.
            </p>
          </div>

          <ResourceFilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={handleResetFilters}
          />

          {filteredResources.length === 0 ? (
            <div className="rounded-3xl glass-panel-ultra p-12 text-center space-y-4">
              <h3 className="text-lg font-bold text-white">No Resources Found</h3>
              <p className="text-xs text-[#A1A1AA]">
                Try adjusting your search keywords or switching category filters.
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
              {filteredResources.map((res) => (
                <ResourceCard
                  key={res.id}
                  resource={res}
                  onPreview={(r) => setActivePreviewResource(r)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 6: 'MATCH BLUEPRINTS TO YOUR PERSONA' CONDUIT
            ======================================================== */}
        <section className="rounded-3xl glass-panel-ultra border border-[#E8602E]/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-glow-orange">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl mx-auto shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faBrain} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not Sure Which Blueprints to Study First?
            </h2>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              Take the 7-step Holland RIASEC Cognitive Assessment to receive a curated bundle of blueprints customized for your career path.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] text-white font-extrabold text-sm shadow-glow-orange hover:scale-105 transition-transform cursor-pointer"
              >
                <span>Take Holland RIASEC Quiz</span>
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

      {/* Live Document Preview Reader Modal */}
      {activePreviewResource && (
        <DocumentViewerModal
          resource={activePreviewResource}
          onClose={() => setActivePreviewResource(null)}
        />
      )}

      {/* Community Request Modal */}
      <ResourceRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
