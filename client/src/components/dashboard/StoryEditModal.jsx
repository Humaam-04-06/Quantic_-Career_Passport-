import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBuilding,
  faRoad,
  faLightbulb,
  faSave,
  faSpinner,
  faDollarSign,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { STORY_CATEGORIES } from '../../data/storiesData';
import { CAREER_DOMAINS } from '../../data/careersData';
import { storiesApi } from '../../services/api';

export default function StoryEditModal({ isOpen, onClose, story, onStoryUpdated }) {
  const [formData, setFormData] = useState({
    previousRole: '',
    previousSalary: '',
    currentRole: '',
    currentCompany: '',
    currentSalary: '',
    timeToTransition: '6 Months',
    category: 'Non-Tech to Tech',
    domain: 'Technology',
    quote: '',
    stage1Desc: '',
    stage2Desc: '',
    stage3Desc: '',
    advice1: '',
    advice2: '',
    toolsUsed: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (story) {
      setFormData({
        previousRole: story.previousRole || '',
        previousSalary: story.previousSalary || '',
        currentRole: story.currentRole || story.authorRole || '',
        currentCompany: story.currentCompany || '',
        currentSalary: story.currentSalary || '',
        timeToTransition: story.timeToTransition || '6 Months',
        category: story.category || 'Non-Tech to Tech',
        domain: story.domain || 'Technology',
        quote: story.quote || '',
        stage1Desc: story.stages?.[0]?.description || '',
        stage2Desc: story.stages?.[1]?.description || '',
        stage3Desc: story.stages?.[2]?.description || '',
        advice1: story.advice?.[0] || '',
        advice2: story.advice?.[1] || '',
        toolsUsed: Array.isArray(story.toolsUsed)
          ? story.toolsUsed.join(', ')
          : story.toolsUsed || '',
      });
    }
  }, [story]);

  if (!isOpen || !story) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const storyId = story._id || story.id;
      let updatedData = { ...formData };

      if (story._id) {
        const res = await storiesApi.update(story._id, formData);
        updatedData = res?.data || updatedData;
      }

      // Update localStorage cache
      try {
        const local = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        const updatedLocal = local.map((s) =>
          (s._id === storyId || s.id === storyId) ? { ...s, ...updatedData } : s
        );
        localStorage.setItem('pathseeker_user_stories', JSON.stringify(updatedLocal));
        window.dispatchEvent(new Event('storiesChange'));
      } catch {
        // ignore
      }

      toast.success('Transformation story updated successfully!');
      onStoryUpdated?.({ ...story, ...updatedData });
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || 'Error updating story');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] glass-panel-ultra border border-white/20 p-6 sm:p-10 space-y-6 shadow-2xl my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-[#E8602E] tracking-wider block">
            Milestone Management
          </span>
          <h3 className="text-2xl font-extrabold text-white font-display">
            Edit Transformation Story
          </h3>
          <p className="text-xs text-[#A1A1AA]">
            Update your transformation timeline, new role, or golden advice.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Role</label>
              <input
                type="text"
                name="previousRole"
                value={formData.previousRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Salary</label>
              <input
                type="text"
                name="previousSalary"
                value={formData.previousSalary}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Role Title</label>
              <input
                type="text"
                name="currentRole"
                required
                value={formData.currentRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Company</label>
              <input
                type="text"
                name="currentCompany"
                required
                value={formData.currentCompany}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Verified Salary</label>
              <input
                type="text"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Transition Time</label>
              <select
                name="timeToTransition"
                value={formData.timeToTransition}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E] bg-black"
              >
                <option value="3 Months">3 Months</option>
                <option value="5 Months">5 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="9 Months">9 Months</option>
                <option value="1 Year">1 Year</option>
              </select>
            </div>
          </div>

          {/* Highlight Quote */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#D4D4D8]">Highlight Quote</label>
            <input
              type="text"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none focus:border-[#E8602E]"
            />
          </div>

          {/* 3 Stages */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <label className="text-xs font-mono font-bold text-[#E8602E] uppercase block">
              3-Stage Transformation Timeline:
            </label>
            <textarea
              rows={2}
              name="stage1Desc"
              placeholder="Stage 1 Starting Ground..."
              value={formData.stage1Desc}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
            />
            <textarea
              rows={2}
              name="stage2Desc"
              placeholder="Stage 2 Pivot & Roadblocks..."
              value={formData.stage2Desc}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
            />
            <textarea
              rows={2}
              name="stage3Desc"
              placeholder="Stage 3 Job Offer Outcome..."
              value={formData.stage3Desc}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
            />
          </div>

          {/* Golden Advice & Tools */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <label className="text-xs font-mono font-bold text-[#FFB800] uppercase block">
              Golden Advice & Tools:
            </label>
            <input
              type="text"
              name="advice1"
              placeholder="Rule #1..."
              value={formData.advice1}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
            <input
              type="text"
              name="toolsUsed"
              placeholder="Tools (e.g. React, Python, Docker)"
              value={formData.toolsUsed}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none font-mono"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSaving ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faSave} />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
