import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faFire,
  faCompass,
  faAward,
  faArrowRight,
  faBrain,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import MediaFilterBar from '../components/multimedia/MediaFilterBar';
import MediaCard from '../components/multimedia/MediaCard';
import FloatingAudioPlayer from '../components/multimedia/FloatingAudioPlayer';
import InfiniteDriftHeroBackground from '../components/multimedia/InfiniteDriftHeroBackground';
import { MULTIMEDIA_DATABASE } from '../data/multimediaData';

export default function MultimediaPage() {
  const [selectedType, setSelectedType] = useState('All Formats');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePodcast, setActivePodcast] = useState(null);

  // Featured Hero Masterclass
  const featuredMedia = useMemo(() => {
    return MULTIMEDIA_DATABASE.find((m) => m.isFeatured) || MULTIMEDIA_DATABASE[0];
  }, []);

  // Filtered Media
  const filteredMedia = useMemo(() => {
    return MULTIMEDIA_DATABASE.filter((item) => {
      const matchesType =
        selectedType === 'All Formats' || item.type === selectedType;
      const matchesDomain =
        selectedDomain === 'All Domains' || item.domain === selectedDomain;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.speaker.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesDomain && matchesSearch;
    });
  }, [selectedType, selectedDomain, searchQuery]);

  const handleResetFilters = () => {
    setSelectedType('All Formats');
    setSelectedDomain('All Domains');
    setSearchQuery('');
  };

  // Top Mentors Roster
  const topMentors = [
    {
      name: 'Dr. Elena Rostova',
      role: 'Principal AI Researcher',
      company: 'DeepMind',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      sessions: '14 Masterclasses',
      rating: 4.9,
    },
    {
      name: 'Marcus Vance',
      role: 'Staff Cloud Architect',
      company: 'AWS Solutions',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      sessions: '9 Masterclasses',
      rating: 4.8,
    },
    {
      name: 'Julianne Hayes',
      role: 'Head of Design Systems',
      company: 'Ex-Airbnb',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      sessions: '11 Masterclasses',
      rating: 4.9,
    },
    {
      name: 'Dr. Sterling Thorne',
      role: 'Lead Quant Strategist',
      company: 'Citadel Securities',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      sessions: '6 Podcasts',
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30 relative">
      {/* 3D Infinite Drift Eight Horizontal Bands Full-Page Body Background */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden">
        <InfiniteDriftHeroBackground />
        {/* Ambient Dark Gradient & Glass Vignette Overlay for High Legibility */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-32 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-10 opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
        
        {/* ========================================================
            SECTION 1: HERO FEATURED MASTERCLASS SPOTLIGHT
            ======================================================== */}
        <section className="relative rounded-3xl overflow-hidden glass-panel-ultra border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Fitted Hero Card Ambient Thumbnail Background */}
          <div className="absolute inset-0 bg-[#0A0A0F] z-0">
            <img
              src={featuredMedia.thumbnail}
              alt={featuredMedia.title}
              className="w-full h-full object-cover opacity-40 brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          </div>

          {/* Spotlight Content Overlay */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-[#E8602E] text-white font-mono text-xs font-extrabold shadow-glow-orange-sm flex items-center gap-1.5 uppercase">
                <FontAwesomeIcon icon={faFire} className="text-white text-xs" />
                Featured Masterclass
              </span>

              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#D4D4D8] font-mono">
                {featuredMedia.domain}
              </span>

              <span className="px-2.5 py-1 rounded-md bg-black/60 text-[#FFB800] text-xs font-bold font-mono">
                ★ {featuredMedia.rating} ({featuredMedia.views} views)
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight tracking-tight">
              {featuredMedia.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-xl">
              {featuredMedia.summary}
            </p>

            {/* Speaker & CTA Row */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={featuredMedia.speaker.avatar}
                  alt={featuredMedia.speaker.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E8602E]"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {featuredMedia.speaker.name}
                  </h4>
                  <span className="text-[11px] text-[#A1A1AA]">
                    {featuredMedia.speaker.organization}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/multimedia/${featuredMedia.id}`}
                  className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlay} />
                  <span>Watch Masterclass</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setActivePodcast(featuredMedia)}
                  className="px-4 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/15 cursor-pointer"
                >
                  Audio Only
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: MULTI-TYPE & DOMAIN DISCOVERY CONTROL BAR
            ======================================================== */}
        <section>
          <MediaFilterBar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onReset={handleResetFilters}
          />
        </section>

        {/* ========================================================
            SECTION 3: INTERACTIVE MEDIA GRID
            ======================================================== */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Explore Masterclasses & Keynotes
              </h2>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Showing {filteredMedia.length} verified sessions with synchronized transcripts.
              </p>
            </div>
          </div>

          {filteredMedia.length === 0 ? (
            <div className="rounded-3xl glass-panel-ultra p-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-white/10 text-[#71717A] flex items-center justify-center text-xl mx-auto">
                <FontAwesomeIcon icon={faCompass} />
              </div>
              <h3 className="text-lg font-bold text-white">No Masterclasses Matched</h3>
              <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto">
                Try selecting &apos;All Formats&apos; or reset your search query to explore all sessions.
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
              {filteredMedia.map((item) => (
                <MediaCard
                  key={item.id}
                  media={item}
                  onPlayAudio={(track) => setActivePodcast(track)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 5: VERIFIED INDUSTRY MENTORS & SPEAKERS CAROUSEL
            ======================================================== */}
        <section className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
                <FontAwesomeIcon icon={faAward} />
                <span>Industry Keynotes & Faculty</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Learn Directly from Top Tech Leaders
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMentors.map((mentor) => (
              <div
                key={mentor.name}
                className="p-5 rounded-3xl glass-panel-ultra border border-white/10 hover:border-[#E8602E]/50 transition-all space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-[#E8602E]/60 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#E8602E] transition-colors">
                      {mentor.name}
                    </h4>
                    <span className="text-[11px] text-[#A1A1AA] block">{mentor.company}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#71717A]">
                  <span>{mentor.sessions}</span>
                  <span className="text-[#FFB800] font-bold">★ {mentor.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 6: AI CAREER STREAM MATCHING CALLOUT BANNER
            ======================================================== */}
        <section className="rounded-3xl glass-panel-ultra border border-[#E8602E]/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-glow-orange">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl mx-auto shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faBrain} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not Sure Which Masterclasses to Watch First?
            </h2>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              Take our 7-step multi-dimensional Holland RIASEC quiz to get an AI-curated video playlist aligned with your cognitive aptitude.
            </p>

            <div className="pt-2">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] text-white font-extrabold text-sm shadow-glow-orange hover:scale-105 transition-transform cursor-pointer"
              >
                <span>Take AI Interest Quiz</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Sticky Audio Podcast Player Bar */}
      {activePodcast && (
        <FloatingAudioPlayer
          currentTrack={activePodcast}
          onClose={() => setActivePodcast(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
