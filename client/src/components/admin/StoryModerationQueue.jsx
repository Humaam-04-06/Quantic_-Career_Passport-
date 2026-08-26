import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCheckCircle,
  faXmark,
  faPenToSquare,
  faFileLines,
  faBuilding,
  faArrowRight,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { PENDING_MODERATION_STORIES } from '../../data/adminData';

export default function StoryModerationQueue() {
  const [stories, setStories] = useState(PENDING_MODERATION_STORIES);

  const handleApprove = (id, author) => {
    setStories((prev) => prev.filter((s) => s.id !== id));
    toast.success(`Approved & Published ${author}'s journey to /stories!`);
  };

  const handleReject = (id, author) => {
    setStories((prev) => prev.filter((s) => s.id !== id));
    toast.error(`Declined ${author}'s submission.`);
  };

  const handleRequestEdits = (author) => {
    toast(`Sent editorial revision request to ${author}.`, {
      icon: '📝',
    });
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#FFB800] font-mono block">
            Community Review Pipeline
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Pending Transformation Stories ({stories.length})
          </h3>
        </div>

        <span className="px-3 py-1 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 text-xs font-mono font-bold">
          Queue Status: Live
        </span>
      </div>

      {/* Stories List */}
      {stories.length === 0 ? (
        <div className="text-center py-12 space-y-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-[#10B981]" />
          <h4 className="text-lg font-bold text-white">Moderation Queue is Clear!</h4>
          <p className="text-xs text-[#A1A1AA]">
            All submitted candidate transformation journeys have been reviewed and published.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="p-6 sm:p-7 rounded-3xl glass-card-interactive border border-white/10 space-y-5 shadow-glass"
            >
              {/* Top Header: Author info & Salary Jump */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-[#E8602E]"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{story.author}</h4>
                    <span className="text-xs text-[#A1A1AA] font-mono block">
                      {story.email} • Submitted {story.submittedAt}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-1">
                  <span className="text-[10px] uppercase font-mono text-[#71717A] block">
                    Verified Salary Shift
                  </span>
                  <span className="text-sm font-mono font-extrabold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-xl border border-[#10B981]/30">
                    {story.salaryJump}
                  </span>
                </div>
              </div>

              {/* Career Pivot details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono p-3.5 rounded-2xl bg-black/40 border border-white/10">
                <div>
                  <span className="text-[10px] text-[#71717A] uppercase block">Transition Track</span>
                  <span className="text-white font-bold">{story.transition}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#71717A] uppercase block">Placement Company</span>
                  <span className="text-[#FFE8DE] font-bold">{story.company}</span>
                </div>
              </div>

              {/* Story Narrative */}
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed italic bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                "{story.storyExcerpt}"
              </p>

              {/* Proof File & Action Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#06B6D4]">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  <span>Proof: {story.proofAttachment}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleRequestEdits(story.author)}
                    className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/15 text-[#D4D4D8] hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <span>Request Edits</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleReject(story.id, story.author)}
                    className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                    <span>Decline</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleApprove(story.id, story.author)}
                    className="px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-black text-xs font-extrabold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Approve & Publish</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
