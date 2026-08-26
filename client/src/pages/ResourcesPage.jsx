import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faDownload,
  faPlus,
  faStar,
  faCheckCircle,
  faLayerGroup,
  faUsers,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import ResourceFilterBar from '../components/resources/ResourceFilterBar';
import ResourceCard from '../components/resources/ResourceCard';
import FeaturedResourceBanner from '../components/resources/FeaturedResourceBanner';
import DocumentViewerModal from '../components/resources/DocumentViewerModal';
import ResourceRequestModal from '../components/resources/ResourceRequestModal';
import { RESOURCES_DATABASE } from '../data/resourcesData';
import { resourcesApi } from '../services/api';

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [telemetry, setTelemetry] = useState({
    totalResources: 7,
    totalDownloads: 78160,
    avgRating: 4.94,
    totalContributors: 14,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Resources');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [activePreviewResource, setActivePreviewResource] = useState(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Fetch dynamic resources from MongoDB Atlas
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchResources = async () => {
      try {
        setIsLoading(true);
        const [res, telRes] = await Promise.allSettled([
          resourcesApi.getAll(),
          resourcesApi.getTelemetry(),
        ]);

        if (res.status === 'fulfilled' && res.value?.data && res.value.data.length > 0) {
          setResources(res.value.data);
        } else {
          setResources(RESOURCES_DATABASE);
        }

        if (telRes.status === 'fulfilled' && telRes.value?.data) {
          setTelemetry(telRes.value.data);
        }
      } catch (err) {
        console.warn('API error, using local database fallback:', err);
        setResources(RESOURCES_DATABASE);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  // Filter & Sort Resources
  const filteredResources = useMemo(() => {
    const list = resources && resources.length > 0 ? resources : RESOURCES_DATABASE;
    let result = list.filter((r) => {
      const matchesCat =
        selectedCategory === 'All Resources' || r.category === selectedCategory;
      const matchesFmt =
        selectedFormat === 'All Formats' || r.format === selectedFormat;
      const matchesSearch =
        (r.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.topics || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesFmt && matchesSearch;
    });

    if (sortBy === 'popular') {
      result.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'pages') {
      result.sort((a, b) => parseInt(b.pages || '0') - parseInt(a.pages || '0'));
    }

    return result;
  }, [resources, selectedCategory, selectedFormat, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All Resources');
    setSelectedFormat('All Formats');
    setSearchQuery('');
    setSortBy('popular');
  };

  const handleDownloadIncrement = (id) => {
    setResources((prev) =>
      prev.map((r) =>
        r.id === id || r._id === id ? { ...r, downloads: (r.downloads || 0) + 1 } : r
      )
    );
    setTelemetry((prev) => ({
      ...prev,
      totalDownloads: prev.totalDownloads + 1,
    }));
  };

  const featuredResource =
    (resources.length > 0 && (resources.find((r) => r.isFeatured) || resources[0])) ||
    RESOURCES_DATABASE[0];

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
              Explore {resources.length || 7} Verified Blueprints
            </a>
          </div>

          {/* Real-World Telemetry Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8602E] font-mono block">
                {telemetry.totalResources}+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Verified Blueprints
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-mono block">
                {(telemetry.totalDownloads || 78160).toLocaleString()}+
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Total Downloads
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB800] font-mono block">
                {telemetry.avgRating || 4.95} / 5.0
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Average Community Score
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel-ultra border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] font-mono block">
                100% Free
              </span>
              <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                Open Career Passport
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: FEATURED RESOURCE BANNER
            ======================================================== */}
        {featuredResource && (
          <FeaturedResourceBanner
            resource={featuredResource}
            onPreview={(res) => setActivePreviewResource(res)}
          />
        )}

        {/* ========================================================
            SECTION 3: LIVE FILTER BAR & SEARCH ENGINE
            ======================================================== */}
        <section id="resources-grid" className="space-y-8 scroll-mt-24">
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

          {/* ========================================================
              SECTION 4: 3-COLUMN RESOURCES CARDS GRID
              ======================================================== */}
          {isLoading ? (
            <div className="py-20 text-center space-y-4">
              <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
              <p className="text-sm font-mono text-[#A1A1AA]">
                Synchronizing verified engineering blueprints from MongoDB Atlas...
              </p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="p-12 rounded-3xl glass-panel-ultra border border-white/10 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 text-[#A1A1AA] flex items-center justify-center mx-auto text-lg">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h3 className="text-lg font-bold text-white">No Matching Blueprints Found</h3>
              <p className="text-xs text-[#A1A1AA] max-w-md mx-auto">
                No resources matched your search criteria. Try clearing filters or submit a custom blueprint request to our engineering faculty.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#E8602E] text-white text-xs font-bold shadow-glow-orange-sm cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id || resource._id}
                  resource={resource}
                  onPreview={(res) => setActivePreviewResource(res)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* In-Browser Document Viewer Modal */}
      {activePreviewResource && (
        <DocumentViewerModal
          resource={activePreviewResource}
          onClose={() => setActivePreviewResource(null)}
          onDownloaded={handleDownloadIncrement}
        />
      )}

      {/* Request Custom Blueprint Modal */}
      <ResourceRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
}
