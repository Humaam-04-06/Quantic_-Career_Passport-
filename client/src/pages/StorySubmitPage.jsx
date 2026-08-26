import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faAward,
  faShieldHalved,
  faCheckCircle,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import StorySubmitForm from '../components/stories/StorySubmitForm';

export default function StorySubmitPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30 relative">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-32 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-10 opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Navigation Breadcrumb */}
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#A1A1AA] hover:text-[#E8602E] transition-colors font-mono"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Success Stories Hub</span>
        </Link>

        {/* Hero Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono uppercase">
            <FontAwesomeIcon icon={faAward} />
            <span>Milestone Publisher Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
            Publish Your Career Transformation.
          </h1>

          <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
            Your journey will inspire thousands of aspiring developers, designers, and engineers taking their first steps. Every verified story earns a permanent digital milestone badge.
          </p>
        </div>

        {/* 4-Step Interactive Story Submission Form with Live Card Preview */}
        <StorySubmitForm />

        {/* Community Verification & Trust Protocol */}
        <div className="rounded-3xl glass-panel-ultra border border-white/10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A1A1AA]">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[#E8602E] text-base flex-none mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">Strict Peer Verification</h4>
              <p>Submissions are cross-checked via verified LinkedIn or GitHub proof of work before publication.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faLock} className="text-[#10B981] text-base flex-none mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">Compensation Privacy</h4>
              <p>Salary figures can be displayed in salary tiers or exact values per your privacy preference.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="text-[#FFB800] text-base flex-none mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">Permanent Mentorship Tier</h4>
              <p>Published candidates gain access to private keynote hosting and alumni network roundtables.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
