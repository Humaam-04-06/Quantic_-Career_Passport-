import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faHeart,
  faGraduationCap,
  faTriangleExclamation,
  faWandMagicSparkles,
  faTrophy,
  faArrowRight,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

const STORIES = [
  {
    id: 's1',
    author: 'Aarav Mehta',
    role: 'Senior Cloud Engineer',
    company: 'Microsoft',
    domain: 'Technology',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    likes: 84,
    timeline: {
      education: 'Graduated in Electrical Engineering with zero prior coding experience.',
      challenges: 'Faced 40+ job rejections in the first year and struggled with distributed systems.',
      turningPoint: 'Dedicated 6 months to building open-source cloud microservices and got AWS certified.',
      outcome: 'Promoted to Senior Cloud Engineer within 3 years leading multi-region Azure migrations.',
    },
    quote: 'Do not just watch tutorials. Build 2 deeply complex projects that solve real problems, deploy them live, and document what broke.',
  },
  {
    id: 's2',
    author: 'Sophia Lindqvist',
    role: 'Lead UI/UX Designer',
    company: 'Spotify',
    domain: 'Creative & Design',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    likes: 112,
    timeline: {
      education: 'Bachelor of Fine Arts in Traditional Painting and Printmaking.',
      challenges: 'Felt intense imposter syndrome when transitioning into tech and struggled with developer handoffs.',
      turningPoint: 'Enrolled in an interactive UX mentorship program and redesigned an indie audio streaming app.',
      outcome: 'Spearheading design systems and audio accessibility features for millions of daily active listeners.',
    },
    quote: 'Your non-traditional background is your biggest superpower. Empathy and visual storytelling are what elevate good software into unforgettable experiences.',
  },
];

export default function StoriesSection() {
  const [likesState, setLikesState] = useState({ s1: 84, s2: 112 });
  const [liked, setLiked] = useState({});

  const handleLike = (id) => {
    if (liked[id]) return;
    setLikesState((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setLiked((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-orange-spotlight top-1/3 left-10 opacity-30 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-10 right-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4">
              <FontAwesomeIcon icon={faStar} className="text-xs" />
              <span>Success Stories Hub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Real Journeys, <span className="gradient-text-fire">Proven Breakthroughs</span>
            </h2>
            <p className="text-[#A1A1AA] text-base mt-2 max-w-xl">
              Discover timeline-style career narratives detailing educational beginnings, obstacles overcome, and final outcomes.
            </p>
          </div>

          <Link
            to="/stories"
            className="btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2"
          >
            <span>Submit Your Story</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#E8602E]" />
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="p-8 sm:p-10 rounded-[2.5rem] glass-card-interactive flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-13 h-13 rounded-2xl object-cover border-2 border-[#E8602E]/40"
                    />
                    <div>
                      <h3 className="text-lg font-extrabold font-display text-white">
                        {story.author}
                      </h3>
                      <p className="text-xs text-[#D4D4D8]">
                        {story.role} at <strong className="text-white">{story.company}</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleLike(story.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer backdrop-blur-md ${
                      liked[story.id]
                        ? 'bg-[#E8602E]/25 text-[#E8602E] border-[#E8602E]'
                        : 'bg-white/[0.05] text-[#A1A1AA] border-white/15 hover:text-white'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-xs ${liked[story.id] ? 'text-[#E8602E]' : 'text-[#71717A]'}`}
                    />
                    <span>{likesState[story.id]}</span>
                  </button>
                </div>

                {/* Timeline Accordion Steps */}
                <div className="space-y-4 relative pl-6 border-l-2 border-white/10 my-6">
                  {/* Step 1: Education */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center shadow-glow-orange-sm" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block">
                      1. Educational Path
                    </span>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed">
                      {story.timeline.education}
                    </p>
                  </div>

                  {/* Step 2: Challenges */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center shadow-glow-orange-sm" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block">
                      2. Major Hurdles & Challenges
                    </span>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed">
                      {story.timeline.challenges}
                    </p>
                  </div>

                  {/* Step 3: Turning Point */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center shadow-glow-orange-sm" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8602E] block">
                      3. The Strategic Turning Point
                    </span>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed">
                      {story.timeline.turningPoint}
                    </p>
                  </div>

                  {/* Step 4: Outcome */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#E8602E] border-2 border-[#FFE8DE] flex items-center justify-center shadow-glow-orange-sm" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#10B981] block">
                      4. Current Career Outcome
                    </span>
                    <p className="text-xs font-semibold text-white leading-relaxed">
                      {story.timeline.outcome}
                    </p>
                  </div>
                </div>

                {/* Key Advice Callout */}
                <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex items-start gap-3 mt-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-[#E8602E] text-base mt-0.5" />
                  <p className="text-xs italic text-[#D4D4D8] leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
