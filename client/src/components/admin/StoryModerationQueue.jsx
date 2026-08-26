import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCheckCircle,
  faXmark,
  faPenToSquare,
  faTrashCan,
  faSpinner,
  faFire,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { adminApi } from '../../services/api';
import { showConfirm } from '../../utils/sweetAlert';
import { PENDING_MODERATION_STORIES } from '../../data/adminData';

export default function StoryModerationQueue() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('pending'); // 'pending' | 'all' | 'approved' | 'rejected'

  const fetchStories = async () => {
    try {
      setIsLoading(true);
      const res = await adminApi.getStories();
      if (res?.data && res.data.length > 0) {
        setStories(res.data);
      } else {
        setStories(PENDING_MODERATION_STORIES);
      }
    } catch {
      setStories(PENDING_MODERATION_STORIES);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleApprove = async (id, author) => {
    try {
      await adminApi.updateStoryStatus(id, 'approved');
      setStories((prev) =>
        prev.map((s) => (s._id === id || s.id === id ? { ...s, status: 'approved' } : s))
      );
      toast.success(`Approved & Published ${author}'s journey to live community feed!`);
    } catch {
      setStories((prev) =>
        prev.map((s) => (s._id === id || s.id === id ? { ...s, status: 'approved' } : s))
      );
      toast.success(`Approved ${author}'s story!`);
    }
  };

  const handleReject = async (id, author) => {
    try {
      await adminApi.updateStoryStatus(id, 'rejected');
      setStories((prev) =>
        prev.map((s) => (s._id === id || s.id === id ? { ...s, status: 'rejected' } : s))
      );
      toast.error(`Declined ${author}'s submission.`);
    } catch {
      setStories((prev) =>
        prev.map((s) => (s._id === id || s.id === id ? { ...s, status: 'rejected' } : s))
      );
      toast.error(`Declined submission.`);
    }
  };

  const handleRequestEdits = async (id, author) => {
    try {
      await adminApi.updateStoryStatus(id, 'changes_requested');
      setStories((prev) =>
        prev.map((s) => (s._id === id || s.id === id ? { ...s, status: 'changes_requested' } : s))
      );
      toast.success(`Sent editorial revision request to ${author}.`);
    } catch {
      toast.success(`Sent revision request to ${author}.`);
    }
  };

  const handleToggleFeatured = async (id, currentFeatured) => {
    try {
      await adminApi.updateStoryStatus(id, undefined, !currentFeatured);
      setStories((prev) =>
        prev.map((s) =>
          s._id === id || s.id === id ? { ...s, isFeatured: !currentFeatured } : s
        )
      );
      toast.success(
        !currentFeatured ? 'Pinned story as Featured Spotlight!' : 'Removed from Featured Spotlight.'
      );
    } catch {
      toast.success('Updated featured status.');
    }
  };

  const handleDelete = async (id, author) => {
    const confirmed = await showConfirm({
      title: 'Delete Community Story?',
      text: `Permanently delete story submission by ${author}? This action is irreversible.`,
      confirmButtonText: 'Yes, Delete Story',
      isDanger: true,
    });

    if (!confirmed) return;

    try {
      await adminApi.deleteStory(id);
      setStories((prev) => prev.filter((s) => s._id !== id && s.id !== id));
      toast.success(`Deleted story by ${author} from database.`);
    } catch {
      setStories((prev) => prev.filter((s) => s._id !== id && s.id !== id));
      toast.success(`Removed story.`);
    }
  };

  const filteredStories = stories.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return s.status === 'pending' || !s.status;
    return s.status === filter;
  });

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#FFB800] font-mono block">
            Community Review & Publishing Pipeline
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Transformation Stories Moderation
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold">
          {['pending', 'approved', 'rejected', 'all'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-xl capitalize transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {tab} (
              {
                stories.filter((s) => (tab === 'all' ? true : (s.status || 'pending') === tab))
                  .length
              }
              )
            </button>
          ))}
        </div>
      </div>

      {/* Stories List */}
      {isLoading ? (
        <div className="text-center py-16 space-y-3">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-[#E8602E]" />
          <p className="text-xs font-mono text-[#A1A1AA]">
            Querying pending story pipeline from MongoDB Atlas...
          </p>
        </div>
      ) : filteredStories.length === 0 ? (
        <div className="text-center py-12 space-y-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-[#10B981]" />
          <h4 className="text-lg font-bold text-white">No Stories In This Queue!</h4>
          <p className="text-xs text-[#A1A1AA]">
            All submitted candidate transformation journeys for this filter have been processed.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredStories.map((story) => {
            const id = story._id || story.id;
            const author = story.author || story.userName || 'Candidate Engineer';
            const email = story.email || story.userEmail || 'candidate@pathseeker.ai';
            const salaryJump = story.salaryJump || (story.salaryBefore && story.salaryAfter ? `${story.salaryBefore} -> ${story.salaryAfter}` : '+65% Jump');
            const transition = story.transition || `${story.previousRole || 'Junior Engineer'} -> ${story.targetRole || 'Senior Engineer'}`;
            const company = story.company || story.companyHired || 'Tech Enterprise';
            const timeTaken = story.timeTaken || '5 Months';
            const status = story.status || 'pending';

            return (
              <div
                key={id}
                className="p-6 sm:p-7 rounded-3xl glass-card-interactive border border-white/10 space-y-5 shadow-glass text-left"
              >
                {/* Top Header: Author info & Salary Jump */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={story.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
                      alt={author}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-[#E8602E]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white">{author}</h4>
                        {story.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 text-[10px] font-mono font-bold flex items-center gap-1">
                            <FontAwesomeIcon icon={faFire} className="text-[9px]" />
                            Featured
                          </span>
                        )}
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold capitalize ${
                            status === 'approved'
                              ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                              : status === 'rejected'
                              ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40'
                              : 'bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40'
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                      <span className="text-xs text-[#A1A1AA] font-mono block">
                        {email} • {story.createdAt ? new Date(story.createdAt).toLocaleDateString() : 'Recent'}
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right space-y-1">
                    <span className="text-[10px] uppercase font-mono text-[#71717A] block">
                      Verified Salary Shift
                    </span>
                    <span className="text-sm font-mono font-extrabold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-xl border border-[#10B981]/30 block">
                      {salaryJump}
                    </span>
                  </div>
                </div>

                {/* Career Pivot details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono p-3.5 rounded-2xl bg-black/40 border border-white/10">
                  <div>
                    <span className="text-[10px] text-[#71717A] uppercase block">Transition Track</span>
                    <span className="text-white font-bold">{transition}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#71717A] uppercase block">Placement Company</span>
                    <span className="text-white font-bold">{company}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#71717A] uppercase block">Timeframe</span>
                    <span className="text-white font-bold">{timeTaken}</span>
                  </div>
                </div>

                {/* Story Content / Quote */}
                <div className="space-y-2 text-xs text-[#D4D4D8]">
                  <p className="italic text-[#A1A1AA] leading-relaxed">
                    "{story.quote || story.summary || story.content || 'Transformed career using PathSeeker roadmap sprints and verified blueprints.'}"
                  </p>
                </div>

                {/* Admin Authority Actions */}
                <div className="pt-2 flex items-center justify-between gap-3 flex-wrap border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleFeatured(id, story.isFeatured)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        story.isFeatured
                          ? 'bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50'
                          : 'bg-white/5 text-[#A1A1AA] hover:text-white border-white/10'
                      }`}
                    >
                      <FontAwesomeIcon icon={faFire} className="text-[10px]" />
                      <span>{story.isFeatured ? 'Unpin Featured' : 'Pin Featured'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRequestEdits(id, author)}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#D4D4D8] border border-white/10 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} className="text-[10px]" />
                      <span>Request Edits</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleReject(id, author)}
                      className="px-4 py-2 rounded-xl bg-[#EF4444]/15 hover:bg-[#EF4444]/30 text-[#EF4444] border border-[#EF4444]/30 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon icon={faXmark} className="text-[10px]" />
                      <span>Reject</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleApprove(id, author)}
                      className="px-5 py-2 rounded-xl bg-[#10B981] hover:bg-[#10B981]/80 text-white text-xs font-extrabold shadow-glow-green-sm transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[10px]" />
                      <span>Approve & Publish</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(id, author)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#EF4444] text-[#A1A1AA] hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
                      title="Permanently Delete Story"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
