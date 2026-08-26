import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStar,
  faClock,
  faHeadphones,
  faVideo,
  faFileLines,
  faArrowRight,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const MEDIA_ITEMS = [
  {
    id: 'm1',
    title: 'A Day in the Life of a Senior AI & ML Engineer',
    type: 'video',
    speaker: 'Dr. Elena Rostova',
    role: 'Principal AI Scientist at DeepMind Labs',
    duration: '14 mins',
    domain: 'Technology',
    rating: 4.9,
    reviewsCount: 148,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    transcriptSnippet:
      'In modern AI engineering, over 60% of our pipeline is centered around high-quality dataset curation, distributed tensor evaluation, and ensuring low-latency inference on cloud GPU clusters...',
    offsetClass: 'sm:translate-x-[6vw]',
  },
  {
    id: 'm2',
    title: 'Mastering Modern UI/UX: From Wireframe to Design System',
    type: 'video',
    speaker: 'Jordan Taylor',
    role: 'Head of Product Design at Figma Studios',
    duration: '20 mins',
    domain: 'Creative & Design',
    rating: 4.8,
    reviewsCount: 92,
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80',
    transcriptSnippet:
      'Today we will dismantle the exact steps to create an accessible, tokenized design system in Figma. We will cover typography scales, 8pt spatial grids, and micro-interaction states...',
    offsetClass: 'sm:-translate-x-[4vw]',
  },
  {
    id: 'm3',
    title: 'Podcast: Breaking into High-Frequency Trading & Quant Finance',
    type: 'audio',
    speaker: 'David Sterling',
    role: 'Quantitative Portfolio Manager',
    duration: '32 mins',
    domain: 'Business & Finance',
    rating: 4.7,
    reviewsCount: 65,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    transcriptSnippet:
      'In this podcast episode, David discusses the mathematics of modern arbitrage, stochastic calculus requirements, and how software engineers can pivot into quantitative finance...',
    offsetClass: 'sm:translate-x-[6vw]',
  },
  {
    id: 'm4',
    title: 'Cloud & DevOps Architect: Distributed Microservices at Scale',
    type: 'video',
    speaker: 'Marcus Vance',
    role: 'Staff Infrastructure Architect',
    duration: '26 mins',
    domain: 'Cloud & DevOps',
    rating: 4.9,
    reviewsCount: 114,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    transcriptSnippet:
      'Building resilient multi-region cloud infrastructures requires immutable infrastructure-as-code, decoupled messaging queues, and automated zero-downtime blue/green rollouts...',
    offsetClass: 'sm:-translate-x-[4vw]',
  },
];

export default function MultimediaSection() {
  const [activeTranscriptId, setActiveTranscriptId] = useState(null);
  const containerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the curving SVG trails and 3D tablet background with ScrollTrigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const tabletVerMovement = 0.5 * window.innerHeight;

          const scrollProgress = -(2400 * progress);
          const scrollProgress2 = `${-parseInt(tabletVerMovement * progress, 10)}px`;

          document.documentElement.style.setProperty('--strokeDashoffset', scrollProgress);
          document.documentElement.style.setProperty('--tabletVerticaloffset', scrollProgress2);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[2200px] bg-[#000000] text-white flex flex-col items-center justify-start overflow-x-clip select-none py-20 border-t border-[#1C1C22]"
    >
      {/* 3D World Isometric Perspective Tablet (from 13_GSAP_Scroll_Trigger) */}
      <div id="world3d" className="world3d-container">
        <div id="tablet" className="tablet-surface" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4 shadow-sm">
          <FontAwesomeIcon icon={faPlay} className="text-xs" />
          <span>Interactive Masterclass Conduit</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
          Watch Masterclasses & <span className="gradient-text-fire">Audio Podcasts</span>
        </h2>

        <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-6">
          Scroll down the interactive learning pathway. Explore expert masterclasses with real-time transcripts and domain-specific blueprints.
        </p>

        <Link
          to="/multimedia"
          className="btn-secondary-dark text-xs sm:text-sm px-6 py-2.5 inline-flex items-center gap-2"
        >
          <span>Explore All 40+ Masterclasses</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#E8602E]" />
        </Link>
      </div>

      {/* Main Vertical Scroll Container */}
      <main
        ref={mainRef}
        className="relative flex items-center justify-center w-full max-w-[800px] h-[2000px] my-0 mx-auto px-4"
      >
        {/* Animated Cards Deck */}
        <div className="cards-deck block w-full max-w-[420px] absolute top-0 z-10">
          {MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`my-8 transition-transform duration-300 ${item.offsetClass}`}
            >
              {/* Full-Size Masterclass Card with Ultra-Glass Sheen */}
              <div className="w-[320px] sm:w-[380px] rounded-[2rem] glass-card-interactive overflow-hidden flex flex-col justify-between group">
                
                {/* Top Video / Audio Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-black/40 border-b border-white/10">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12]/90 via-transparent to-transparent" />

                  {/* Media Type & Duration Chip */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/15 flex items-center gap-1.5">
                      <FontAwesomeIcon
                        icon={item.type === 'video' ? faVideo : faHeadphones}
                        className="text-[#E8602E]"
                      />
                      <span>{item.type}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#D4D4D8] border border-white/15">
                      <FontAwesomeIcon icon={faClock} className="mr-1 text-[9px]" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <Link
                    to={`/multimedia/${item.id}`}
                    className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity"
                    aria-label="Play Media"
                  >
                    <div className="w-12 h-12 rounded-full btn-primary-orange text-white flex items-center justify-center shadow-glow-orange-sm group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faPlay} className="text-sm ml-0.5" />
                    </div>
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#E8602E] font-semibold">{item.domain}</span>
                      <div className="flex items-center gap-1 text-[#FFB800] font-bold text-xs">
                        <FontAwesomeIcon icon={faStar} className="text-[11px]" />
                        <span>{item.rating}</span>
                        <span className="text-[#A1A1AA] text-[10px]">({item.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold font-display text-white mb-2 group-hover:text-[#FFE8DE] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <div className="text-xs text-[#A1A1AA] mb-4">
                      <span className="text-white font-medium">{item.speaker}</span>
                      <span className="text-[#71717A] block text-[11px]">{item.role}</span>
                    </div>

                    {/* Smooth Framer Motion Accordion Transcript Expansion */}
                    <AnimatePresence initial={false}>
                      {activeTranscriptId === item.id && (
                        <motion.div
                          key="transcript-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs text-[#D4D4D8] leading-relaxed mb-4">
                            <span className="text-[10px] uppercase font-bold text-[#E8602E] block mb-1">
                              Transcript Excerpt:
                            </span>
                            <p>{item.transcriptSnippet}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTranscriptId(activeTranscriptId === item.id ? null : item.id)
                      }
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur-md ${
                        activeTranscriptId === item.id
                          ? 'bg-[#E8602E]/25 text-[#E8602E] border-[#E8602E]'
                          : 'bg-white/[0.05] hover:bg-white/[0.1] text-[#D4D4D8] border-white/15'
                      }`}
                    >
                      <FontAwesomeIcon icon={faFileLines} className="text-xs" />
                      <span>{activeTranscriptId === item.id ? 'Hide Transcript' : 'Transcript'}</span>
                    </button>

                    <Link
                      to={`/multimedia/${item.id}`}
                      className="px-4 py-2 rounded-xl btn-primary-orange text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-glow-orange-sm"
                    >
                      <span>Watch</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SVG Curving Glowing Trails Weaving Vertically */}
        <svg
          id="svgPaths"
          className="svg-paths-container sm:translate-x-[6vw]"
          width="740"
          height="2000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#linePath01" />
          <use href="#linePath02" />
          <use href="#linePath03" />
          <use href="#linePath04" />
        </svg>
      </main>

      {/* Global SVG Definitions & Fiery Orange Gradient Trails */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" role="none">
        <defs>
          <path
            id="linePath01"
            d="m 106,45h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105"
          />
          <path
            id="linePath02"
            d="m 33,85h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105"
          />
          <path
            id="linePath03"
            d="m 155,127h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105"
          />
          <path
            id="linePath04"
            d="m 283,173c 2,0 165,0 165,0C 544,175 577,238 577,330v 156c 0,94 -48,126 -140,125L 269,609C 167,602 29,702 29,851v 312c 0,111 101,235 242,235h 162c 109,1 144,49 144,136v 162c 0,73 -53,130 -118,130l -353,1"
          />

          {/* Fiery Orange (#E8602E), Rust (#BC4C22), Gold (#FFB800), and White Gradient */}
          <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
            <stop offset="15%" stopColor="#E8602E" />
            <stop offset="45%" stopColor="#BC4C22" />
            <stop offset="70%" stopColor="#FFB800" />
            <stop offset="90%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8602E" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
