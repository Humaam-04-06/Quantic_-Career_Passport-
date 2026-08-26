import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPaperPlane,
  faLightbulb,
  faBuilding,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { RESOURCE_CATEGORIES } from '../../data/resourcesData';

export default function ResourceRequestModal({ isOpen, onClose }) {
  const [requestTitle, setRequestTitle] = useState('');
  const [category, setCategory] = useState('System Design & Architecture');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requestTitle.trim()) {
      toast.error('Please enter a blueprint title or topic.');
      return;
    }
    toast.success('Your blueprint request has been added to the editorial queue!');
    onClose();
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

        <div className="space-y-2">
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
              Notify Me via Email (Optional)
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Submit Request</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
