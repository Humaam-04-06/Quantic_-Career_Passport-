import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faPenToSquare,
  faTrashCan,
  faArrowTrendUp,
  faClock,
  faThumbsUp,
  faPlus,
  faShareNodes,
  faCheckCircle,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import StoryEditModal from './StoryEditModal';
import { storiesApi } from '../../services/api';

export default function MyStoriesHub({ userEmail }) {
  const [myStories, setMyStories] = useState([]);
  const [editingStory, setEditingStory] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);

  // Load candidate's stories
  useEffect(() => {
    const loadMyStories = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
        const email = userEmail || user.email || '';

        // 1. Fetch from MongoDB Atlas
        let apiStories = [];
        if (email) {
          const res = await storiesApi.getMyStories({ email });
          if (res?.data) {
            apiStories = res.data;
          }
        }

        // 2. Read from localStorage cache
        const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        const userLocal = local.filter((s) => {
          if (!email) return true;
          const sEmail = (s.email || s.authorEmail || '').toLowerCase();
          return sEmail === email.toLowerCase();
        });

        // Merge & deduplicate
        const merged = [...apiStories, ...userLocal];
        const unique = Array.from(new Map(merged.map((m) => [m._id || m.id || m.title, m])).values());
        setMyStories(unique);
      } catch (err) {
        console.warn('Error loading my stories:', err);
      }
    };

    loadMyStories();

    const handleSync = () => loadMyStories();
    window.addEventListener('storiesChange', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('storiesChange', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [userEmail]);

  // Handle Delete
  const handleDeleteStory = async (storyId) => {
    if (!window.confirm('Are you sure you want to delete this published transformation story?')) {
      return;
    }

    setIsDeleting(storyId);
    try {
      // 1. Call Backend API
      try {
        await storiesApi.delete(storyId);
      } catch {
        // offline fallback
      }

      // 2. Update local storage
      try {
        const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        const filtered = local.filter((s) => s._id !== storyId && s.id !== storyId);
        localStorage.setItem('pathseeker_user_stories', JSON.stringify(filtered));
        window.dispatchEvent(new Event('storiesChange'));
      } catch {
        // ignore
      }

      // 3. Update state
      setMyStories((prev) => prev.filter((s) => (s._id !== storyId && s.id !== storyId)));
      toast.success('Transformation story deleted successfully');
    } catch (err) {
      toast.error('Error deleting story');
    } finally {
      setIsDeleting(null);
    }
  };

  const handleStoryUpdated = (updatedStory) => {
    setMyStories((prev) =>
      prev.map((s) =>
        (s._id === updatedStory._id || s.id === updatedStory.id) ? updatedStory : s
      )
    );
  };

  return (
    <div className="rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faAward} />
            <span>Candidate Published Milestones ({myStories.length})</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            My Transformation Stories
          </h3>
        </div>

        <Link
          to="/stories/submit"
          className="px-5 py-2.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-extrabold shadow-glow-orange-sm hover:scale-105 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>Publish New Milestone</span>
        </Link>
      </div>

      {/* Stories Grid or Empty State */}
      {myStories.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl border border-[#E8602E]/30">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">No Published Stories Yet</h4>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto">
              Share your career pivot journey to inspire thousands of candidates and earn a verified milestone badge on your passport!
            </p>
          </div>
          <Link
            to="/stories/submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-[#E8602E] text-white text-xs font-bold transition-all border border-white/15 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Publish Your First Story</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myStories.map((story) => {
            const storyId = story._id || story.id;
            return (
              <div
                key={storyId}
                className="group p-6 rounded-3xl glass-card-interactive border border-white/10 flex flex-col justify-between space-y-4 shadow-glass"
              >
                {/* Top Status & Metrics Row */}
                <div className="flex items-center justify-between gap-2 flex-wrap text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-bold flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Published & Live</span>
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white border border-white/10 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-[#E8602E]" />
                    <span>{story.upvotes || story.likesCount || 0} Likes</span>
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug">
                    {story.title || `From ${story.previousRole} to ${story.currentRole || story.authorRole} at ${story.currentCompany}`}
                  </h4>

                  <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-[#10B981]/20 text-[#10B981] font-bold">
                      {story.salaryIncrease || '+300%'} ({story.currentSalary})
                    </span>
                    <span className="text-[#A1A1AA] flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
                      <span>{story.timeToTransition}</span>
                    </span>
                  </div>

                  {story.quote && (
                    <p className="text-xs text-[#A1A1AA] italic line-clamp-2 pt-1">
                      &quot;{story.quote}&quot;
                    </p>
                  )}
                </div>

                {/* Actions: Edit & Delete */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    to="/stories"
                    className="text-xs font-bold text-[#A1A1AA] hover:text-white flex items-center gap-1.5 font-mono"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    <span>View on Feed</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingStory(story)}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold transition-all border border-white/15 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span>Edit</span>
                    </button>

                    <button
                      type="button"
                      disabled={isDeleting === storyId}
                      onClick={() => handleDeleteStory(storyId)}
                      className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 text-xs font-bold transition-all border border-red-500/30 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Story Modal */}
      {editingStory && (
        <StoryEditModal
          isOpen={!!editingStory}
          story={editingStory}
          onClose={() => setEditingStory(null)}
          onStoryUpdated={handleStoryUpdated}
        />
      )}
    </div>
  );
}
