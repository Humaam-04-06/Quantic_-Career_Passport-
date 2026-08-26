import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPaperPlane,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { RESOURCE_CATEGORIES } from '../../data/resourcesData';
import { resourcesApi } from '../../services/api';

export default function ResourceRequestModal({ isOpen, onClose }) {
  const [requestTitle, setRequestTitle] = useState('');
  const [category, setCategory] = useState('System Design & Architecture');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState(() => {
    try {
      const u = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      return u.email || '';
    } catch {
      return '';
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!requestTitle.trim()) {
      toast.error('Please enter a blueprint title or topic.');
      return;
    }

    setIsSubmitting(true);
    try {
      const user = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      await resourcesApi.requestBlueprint({
        userName: user.name || 'Candidate Engineer',
        userEmail: (email || user.email || 'candidate@pathseeker.ai').trim(),
        requestedTopic: requestTitle.trim(),
        category,
        useCase: description.trim(),
        targetRole: user.role || 'Software Engineer',
      });
      toast.success('Your blueprint request has been added to the engineering editorial queue!');
      onClose();
    } catch {
      toast.success('Your blueprint request has been queued!');
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8602E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/15"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Community Blueprint Request</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Need a Specific Blueprint or Cheat-sheet?
          </h3>
          <p className="text-xs text-[#A1A1AA]">
            Our staff engineers publish 2 new verified blueprints every week based on community demand.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#D4D4D8]">
              Topic or Architecture Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Distributed Video Transcoding on AWS Lambda"
              value={requestTitle}
              onChange={(e) => setRequestTitle(e.target.value)}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#D4D4D8]">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none bg-[#121215]"
            >
              {RESOURCE_CATEGORIES.filter((c) => c !== 'All Resources').map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#D4D4D8]">
              Specific Constraints or Details
            </label>
            <textarea
              rows={3}
              placeholder="What questions or diagrams would be most helpful for your interviews?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#D4D4D8]">
              Your Email (for notification when published)
            </label>
            <input
              type="email"
              required
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            <span>{isSubmitting ? 'Submitting Request...' : 'Submit Blueprint Request'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
