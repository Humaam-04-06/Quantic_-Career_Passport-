import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faThumbsUp,
  faReply,
  faPaperPlane,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function CommunityDiscussion({ initialFaqs = [] }) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [questionText, setQuestionText] = useState('');
  const [timestampInput, setTimestampInput] = useState('');
  const [upvotedIndices, setUpvotedIndices] = useState(new Set());

  const handleUpvote = (idx) => {
    const updated = [...faqs];
    if (upvotedIndices.has(idx)) {
      updated[idx].upvotes -= 1;
      const nextSet = new Set(upvotedIndices);
      nextSet.delete(idx);
      setUpvotedIndices(nextSet);
    } else {
      updated[idx].upvotes += 1;
      const nextSet = new Set(upvotedIndices);
      nextSet.add(idx);
      setUpvotedIndices(nextSet);
      toast.success('Upvoted question answer!');
    }
    setFaqs(updated);
  };

  const handlePostQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    const newQuestion = {
      user: 'You (Candidate)',
      role: 'Student / Aspiring Pro',
      timeAgo: 'Just now',
      timestamp: timestampInput || '00:00',
      question: questionText,
      answer: 'Your question has been submitted to the speaker. Mentor responses typically arrive within 24 hours.',
      upvotes: 1,
    };

    setFaqs([newQuestion, ...faqs]);
    setQuestionText('');
    setTimestampInput('');
    toast.success('Question submitted to speaker & community!');
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass">
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
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white">Ask a question:</span>
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
            className="px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer"
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

            return (
              <div
                key={`${faq.user}-${idx}`}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#E8602E]/20 text-[#E8602E] font-bold text-xs flex items-center justify-center">
                      {faq.user[0]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white">{faq.user}</span>
                      <span className="text-[10px] text-[#71717A] ml-2">{faq.timeAgo}</span>
                    </div>
                  </div>

                  {faq.timestamp && (
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[#E8602E] font-mono text-[10px] font-bold">
                      at {faq.timestamp}
                    </span>
                  )}
                </div>

                {/* Question Body */}
                <p className="text-xs text-white font-medium pl-9">
                  {faq.question}
                </p>

                {/* Speaker Answer Box */}
                {faq.answer && (
                  <div className="ml-9 p-3 rounded-xl bg-white/[0.04] border border-[#E8602E]/30 space-y-1.5">
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
                    <span>{faq.upvotes}</span>
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
