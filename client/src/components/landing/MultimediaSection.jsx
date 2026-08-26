import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    transcriptSnippet: 'In modern AI engineering, over 60% of our pipeline is centered around high-quality dataset curation, distributed tensor evaluation, and ensuring low-latency inference on cloud GPU clusters...',
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
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=600&q=80',
    transcriptSnippet: 'Today we will dismantle the exact steps to create an accessible, tokenized design system in Figma. We will cover typography scales, 8pt spatial grids, and micro-interaction states...',
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
    transcriptSnippet: 'In this podcast episode, David discusses the mathematics of modern arbitrage, stochastic calculus requirements, and how software engineers can pivot into quantitative finance...',
  },
];

export default function MultimediaSection() {
  const [activeTranscriptId, setActiveTranscriptId] = useState(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#1C1C22]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3">
              <FontAwesomeIcon icon={faPlay} className="text-xs" />
              <span>Multimedia Learning Center</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Watch Masterclasses & <span className="gradient-text-fire">Audio Podcasts</span>
            </h2>
            <p className="text-[#A1A1AA] text-base mt-2 max-w-xl">
              Learn directly from seasoned industry practitioners. Featuring interactive transcripts, playback controls, and domain-based discussions.
            </p>
          </div>

          <Link
            to="/multimedia"
            className="btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2"
          >
            <span>Explore All Media</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#E8602E]" />
          </Link>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-[#0D0D10] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#16161A]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-transparent to-transparent" />

                {/* Media Type & Duration Chip */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={item.type === 'video' ? faVideo : faHeadphones} className="text-[#E8602E]" />
                    <span>{item.type}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#D4D4D8] border border-white/10">
                    <FontAwesomeIcon icon={faClock} className="mr-1 text-[9px]" />
                    {item.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <Link
                  to={`/multimedia/${item.id}`}
                  className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                  aria-label="Play Media"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E8602E] text-white flex items-center justify-center shadow-glow-orange-sm group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faPlay} className="text-sm ml-0.5" />
                  </div>
                </Link>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#E8602E] font-semibold">{item.domain}</span>
                    <div className="flex items-center gap-1 text-[#FFB800] font-bold text-xs">
                      <FontAwesomeIcon icon={faStar} className="text-[11px]" />
                      <span>{item.rating}</span>
                      <span className="text-[#71717A] text-[10px]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold font-display text-white mb-2 group-hover:text-[#FFE8DE] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs text-[#A1A1AA] mb-4">
                    <span className="text-white font-medium">{item.speaker}</span>
                    <span className="text-[#71717A] block text-[11px]">{item.role}</span>
                  </div>

                  {/* Transcript Preview Toggle */}
                  {activeTranscriptId === item.id && (
                    <div className="p-3 rounded-xl bg-[#141418] border border-[#232328] text-xs text-[#D4D4D8] leading-relaxed mb-4">
                      <span className="text-[10px] uppercase font-bold text-[#E8602E] block mb-1">
                        Transcript Excerpt:
                      </span>
                      {item.transcriptSnippet}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#232328]">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTranscriptId(activeTranscriptId === item.id ? null : item.id)
                    }
                    className="flex-1 py-2 rounded-xl bg-[#16161A] hover:bg-[#202026] text-[#D4D4D8] text-xs font-semibold border border-[#26262E] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faFileLines} className="text-[#E8602E] text-xs" />
                    <span>{activeTranscriptId === item.id ? 'Hide Transcript' : 'Transcript'}</span>
                  </button>

                  <Link
                    to={`/multimedia/${item.id}`}
                    className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#BC4C22] text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Watch</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
