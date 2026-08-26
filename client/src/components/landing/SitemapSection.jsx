import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSitemap,
  faHouse,
  faCompass,
  faBrain,
  faPlay,
  faStar,
  faFolderOpen,
  faUser,
  faShieldHalved,
  faGraduationCap,
  faBriefcase,
  faChartPie,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const SITEMAP_TREE = [
  {
    category: 'Public Exploration Gateway',
    color: '#E8602E',
    nodes: [
      { name: 'Landing Page (Home)', path: '/', desc: 'Hero globe, persona passports, feature spotlights, sitemap index' },
      { name: 'Global Career Bank', path: '/careers', desc: '150+ job profiles, salary filters, demand metrics, skill maps' },
      { name: 'AI Interest Assessment', path: '/quiz', desc: '7-step timed quiz with Likert scales & stream recommendations' },
      { name: 'Multimedia Learning Hub', path: '/multimedia', desc: 'Video masterclasses, audio podcasts, and interactive transcripts' },
      { name: 'Success Stories Hub', path: '/stories', desc: 'Timeline-style narratives & community submission portal' },
      { name: 'Document Resource Library', path: '/resources', desc: 'Downloadable PDF cheat-sheets, scholarships, and checklists' },
    ],
  },
  {
    category: 'Role-Based Authentication & Passports',
    color: '#3B82F6',
    nodes: [
      { name: 'User Authentication', path: '/login', desc: 'Multi-role tabbed login & registration with OTP password reset' },
      { name: 'Student Career Passport', path: '/dashboard?tab=student', desc: 'Stream matching, high school STEM guidance, scholarship directory' },
      { name: 'Graduate Career Passport', path: '/dashboard?tab=graduate', desc: 'Skill gap analytics, resume upload, entry-level engineering tracks' },
      { name: 'Professional Passport', path: '/dashboard?tab=professional', desc: 'Executive compensation benchmarks, career pivot roadmaps' },
      { name: 'Saved Bookmarks & Notes', path: '/bookmarks', desc: 'Pinned careers, sticky notes, and printable PDF passport export' },
    ],
  },
  {
    category: 'Administration & Intelligence Engine',
    color: '#10B981',
    nodes: [
      { name: 'Admin Control Center', path: '/admin', desc: 'Usage statistics, active users telemetry, and system metrics' },
      { name: 'Career & Content Management', path: '/admin/careers', desc: 'CRUD operations for career profiles, media items, and quiz questions' },
      { name: 'Story & Feedback Moderation', path: '/admin/moderation', desc: 'Review user-submitted career stories & reply to support inquiries' },
    ],
  },
];

export default function SitemapSection() {
  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="ambient-orange-spotlight top-1/2 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] mb-4">
            <FontAwesomeIcon icon={faSitemap} className="text-xs" />
            <span>TechWiz 6 Requirement • Section 1.9</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Interactive <span className="gradient-text-fire">Application Sitemap</span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg">
            Understand the complete architectural navigation flow and role access patterns across the PathSeeker platform.
          </p>

          {/* Frosted Glass Branch Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 p-1.5 max-w-fit mx-auto rounded-full glass-pill">
            {SITEMAP_TREE.map((branch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBranch(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeBranch === idx
                    ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {branch.category}
              </button>
            ))}
          </div>
        </div>

        {/* Ultra-Glass Tree Node Grid */}
        <div className="p-7 sm:p-10 rounded-[2.5rem] glass-panel-ultra shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8602E]">
                Active Exploration Layer
              </span>
              <h3 className="text-xl font-bold text-white">
                {SITEMAP_TREE[activeBranch].category}
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/[0.06] text-[#D4D4D8] border border-white/10 backdrop-blur-md">
              {SITEMAP_TREE[activeBranch].nodes.length} Endpoints
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITEMAP_TREE[activeBranch].nodes.map((node, i) => (
              <Link
                key={i}
                to={node.path}
                className="group p-5 rounded-2xl glass-card-interactive flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 backdrop-blur-md px-2 py-0.5 rounded border border-[#E8602E]/30">
                      {node.path}
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs text-[#71717A] group-hover:text-[#E8602E] transition-colors group-hover:translate-x-1"
                    />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#FFE8DE] transition-colors mb-1.5">
                    {node.name}
                  </h4>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
