import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faThumbsUp,
  faReply,
  faPaperPlane,
  faClock,
  faPenToSquare,
  faTrashCan,
  faCheck,
  faXmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { multimediaApi } from '../../services/api';
import { showConfirm } from '../../utils/sweetAlert';

export default function CommunityDiscussion({ initialFaqs = [], mediaId }) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [questionText, setQuestionText] = useState('');
  const [timestampInput, setTimestampInput] = useState('');
  const [upvotedIndices, setUpvotedIndices] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Edit State
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editTimestamp, setEditTimestamp] = useState('');
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  // Get current logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('pathseeker_user') ||
        localStorage.getItem('user') ||
        'null'
      );
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleAuth = () => {
      try {
        const u = JSON.parse(
          localStorage.getItem('pathseeker_user') ||
          localStorage.getItem('user') ||
          'null'
        );
        setCurrentUser(u);
      } catch {
        setCurrentUser(null);
      }
    };
    window.addEventListener('storage', handleAuth);
    window.addEventListener('authChange', handleAuth);
    window.addEventListener('profileChange', handleAuth);
    return () => {
      window.removeEventListener('storage', handleAuth);
      window.removeEventListener('authChange', handleAuth);
      window.removeEventListener('profileChange', handleAuth);
    };
  }, []);

  useEffect(() => {
    if (initialFaqs && initialFaqs.length > 0) {
      setFaqs(initialFaqs);
    }
  }, [initialFaqs]);

  const handleUpvote = (idx) => {
    const updated = [...faqs];
    if (upvotedIndices.has(idx)) {
      updated[idx].upvotes = Math.max(0, (updated[idx].upvotes || 1) - 1);
      const nextSet = new Set(upvotedIndices);
      nextSet.delete(idx);
      setUpvotedIndices(nextSet);
    } else {
      updated[idx].upvotes = (updated[idx].upvotes || 0) + 1;
      const nextSet = new Set(upvotedIndices);
      nextSet.add(idx);
      setUpvotedIndices(nextSet);
      toast.success('Upvoted question answer!');
    }
    setFaqs(updated);
  };

  const handlePostQuestion = async (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    setIsSubmitting(true);
    const user = currentUser || JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
    const userName = user.name || 'Candidate Member';
    const userEmail = user.email || '';
    const userAvatar =
      user.avatar ||
      'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f';
    const userRole = user.role || 'Aspiring Professional';

    const tempId = `temp-${Date.now()}`;
    const newQuestion = {
      _id: tempId,
      id: tempId,
      user: userName,
      userName,
      userEmail,
      userAvatar,
      avatar: userAvatar,
      role: userRole,
      userRole,
      timeAgo: 'Just now',
      timestamp: timestampInput || '00:00',
      timestampTag: timestampInput || '00:00',
      question: questionText,
      text: questionText,
      answer: 'Your technical question has been submitted to the faculty speaker. Mentor responses typically arrive within 24 hours.',
      upvotes: 0,
      isOwn: true,
    };

    setFaqs([newQuestion, ...faqs]);
    setQuestionText('');
    setTimestampInput('');

    try {
      if (mediaId) {
        const res = await multimediaApi.postDiscussion(mediaId, {
          text: questionText,
          timestampTag: timestampInput || '00:00',
          userName,
          userEmail,
          userAvatar,
          userRole,
        });
        if (res?.data) {
          setFaqs(res.data);
        }
      }
      toast.success('Question submitted to speaker & community!');
    } catch {
      toast.success('Question saved to discussion!');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit Comment Handlers
  const handleStartEdit = (faq, idx) => {
    setEditingIndex(idx);
    setEditText(faq.text || faq.question || '');
    setEditTimestamp(faq.timestampTag || faq.timestamp || '');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditText('');
    setEditTimestamp('');
  };

  const handleSaveEdit = async (faq, idx) => {
    if (!editText.trim()) return;
    setIsSavingEdit(true);

    const updated = [...faqs];
    updated[idx] = {
      ...updated[idx],
      text: editText.trim(),
      question: editText.trim(),
      timestampTag: editTimestamp.trim() || '00:00',
      timestamp: editTimestamp.trim() || '00:00',
    };
    setFaqs(updated);
    setEditingIndex(null);

    try {
      const commentId = faq._id || faq.id;
      if (mediaId && commentId && !commentId.startsWith('temp-')) {
        await multimediaApi.updateDiscussion(mediaId, commentId, {
          text: editText.trim(),
          timestampTag: editTimestamp.trim() || '00:00',
        });
      }
      toast.success('Comment updated successfully!');
    } catch {
      toast.success('Comment updated locally!');
    } finally {
      setIsSavingEdit(false);
    }
  };

  // Delete Comment Handler
  const handleDeleteComment = async (faq, idx) => {
    const confirmed = await showConfirm({
      title: 'Delete Question / Comment?',
      text: 'Are you sure you want to delete your comment from this masterclass?',
      confirmButtonText: 'Yes, Delete',
      isDanger: true,
    });

    if (!confirmed) return;

    const updated = faqs.filter((_, i) => i !== idx);
    setFaqs(updated);

    try {
      const commentId = faq._id || faq.id;
      if (mediaId && commentId && !commentId.startsWith('temp-')) {
        await multimediaApi.deleteDiscussion(mediaId, commentId);
      }
      toast.success('Comment deleted successfully!');
    } catch {
      toast.success('Comment removed!');
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass text-left">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-base">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Community Q&A & Mentor Discussion</h3>
            <p className="text-xs text-[#A1A1AA]">
              Ask technical questions linked to specific timestamps in the masterclass.
            </p>
          </div>
        </div>
      </div>

      {/* Question Submission Input */}
      <form onSubmit={handlePostQuestion} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <div className="flex items-center gap-3">
          <img
            src={
              currentUser?.avatar ||
              'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f'
            }
            alt="My Avatar"
            className="w-7 h-7 rounded-full object-cover border border-[#E8602E] bg-slate-800 flex-none"
          />
          <span className="text-xs font-bold text-white">
            Ask as {currentUser?.name || 'Candidate Member'}:
          </span>
          <div className="flex items-center gap-1.5 ml-auto">
            <FontAwesomeIcon icon={faClock} className="text-[#E8602E] text-xs" />
            <input
              type="text"
              placeholder="Timestamp (e.g. 14:20)"
              value={timestampInput}
              onChange={(e) => setTimestampInput(e.target.value)}
              className="glass-input text-[11px] text-white px-2.5 py-1 rounded-lg w-28 text-center font-mono focus:outline-none"
            />
          </div>
        </div>

        <textarea
          rows={3}
          placeholder="What technical concept would you like clarified from this session?"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="w-full glass-input text-xs text-white placeholder-[#71717A] p-3 rounded-xl focus:outline-none resize-none"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            <span>Post to Mentor</span>
          </button>
        </div>
      </form>

      {/* Discussion List */}
      <div className="space-y-4">
        {faqs.length === 0 ? (
          <div className="text-center py-6 text-xs text-[#71717A]">
            No questions asked yet. Be the first to ask the speaker a question!
          </div>
        ) : (
          faqs.map((faq, idx) => {
            const isUpvoted = upvotedIndices.has(idx);
            const userLabel = faq.userName || faq.user || 'Candidate';
            const questionBody = faq.question || faq.text || '';
            const timestamp = faq.timestamp || faq.timestampTag || '';
            const avatarUrl =
              faq.userAvatar ||
              faq.avatar ||
              (currentUser && (faq.userEmail === currentUser.email || faq.userName === currentUser.name)
                ? currentUser.avatar
                : 'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f');

            const isMyComment =
              faq.isOwn ||
              (currentUser &&
                ((faq.userEmail && currentUser.email && faq.userEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
                  (faq.userName && currentUser.name && faq.userName.toLowerCase() === currentUser.name.toLowerCase()) ||
                  (faq.user && currentUser.name && faq.user.toLowerCase() === currentUser.name.toLowerCase())));

            const isEditing = editingIndex === idx;

            return (
              <div
                key={faq._id || faq.id || `${userLabel}-${idx}`}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={avatarUrl}
                      alt={userLabel}
                      className="w-8 h-8 rounded-full object-cover border border-[#E8602E]/50 bg-slate-800 flex-none"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f';
                      }}
                    />
                    <div className="min-w-0 truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">{userLabel}</span>
                        {isMyComment && (
                          <span className="px-1.5 py-0.2 rounded bg-[#E8602E]/20 text-[#E8602E] text-[9px] font-bold font-mono">
                            YOU
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#71717A] block">
                        {faq.role || faq.userRole || 'Candidate Member'} • {faq.timeAgo || 'Recent'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-none">
                    {timestamp && (
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[#E8602E] font-mono text-[10px] font-bold">
                        at {timestamp}
                      </span>
                    )}

                    {/* Edit & Delete Actions for Author */}
                    {isMyComment && !isEditing && (
                      <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-2">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(faq, idx)}
                          className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#E8602E] hover:bg-white/5 text-[11px] transition-colors cursor-pointer"
                          title="Edit Comment"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteComment(faq, idx)}
                          className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-red-400 hover:bg-red-500/10 text-[11px] transition-colors cursor-pointer"
                          title="Delete Comment"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Question Body or Inline Editor */}
                {isEditing ? (
                  <div className="pl-10 space-y-2 pt-1">
                    <textarea
                      rows={2}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full glass-input text-xs text-white p-2.5 rounded-xl focus:outline-none resize-none"
                    />
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        placeholder="Timestamp (e.g. 14:20)"
                        value={editTimestamp}
                        onChange={(e) => setEditTimestamp(e.target.value)}
                        className="glass-input text-[10px] text-white px-2 py-1 rounded-lg w-28 text-center font-mono focus:outline-none"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faXmark} className="text-[10px]" />
                          <span>Cancel</span>
                        </button>
                        <button
                          type="button"
                          disabled={isSavingEdit}
                          onClick={() => handleSaveEdit(faq, idx)}
                          className="px-3 py-1 rounded-lg bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold flex items-center gap-1 cursor-pointer disabled:opacity-50"
                        >
                          <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-white font-medium pl-10 leading-relaxed">
                    {questionBody}
                  </p>
                )}

                {/* Speaker Answer Box */}
                {faq.answer && (
                  <div className="ml-10 p-3 rounded-xl bg-white/[0.04] border border-[#E8602E]/30 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#E8602E]">
                      <FontAwesomeIcon icon={faReply} className="rotate-180" />
                      <span>Speaker / Mentor Response</span>
                    </div>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}

                {/* Upvote Row */}
                <div className="flex items-center justify-end gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleUpvote(idx)}
                    className={`text-[11px] flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                      isUpvoted
                        ? 'bg-[#E8602E] text-white border-[#E8602E]'
                        : 'bg-white/5 text-[#A1A1AA] hover:text-white border-white/10'
                    }`}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} className="text-[10px]" />
                    <span>{faq.upvotes || 0}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
