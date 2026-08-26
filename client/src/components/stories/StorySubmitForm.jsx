import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBuilding,
  faRoad,
  faLightbulb,
  faPaperPlane,
  faCheckCircle,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { STORY_CATEGORIES } from '../../data/storiesData';
import { CAREER_DOMAINS } from '../../data/careersData';

export default function StorySubmitForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    category: 'Non-Tech to Tech',
    domain: 'AI & Machine Learning',
    previousRole: '',
    previousSalary: '',
    currentRole: '',
    currentCompany: '',
    currentSalary: '',
    timeToTransition: '6 Months',
    quote: '',
    stage1Desc: '',
    stage2Desc: '',
    stage3Desc: '',
    advice1: '',
    advice2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.currentRole || !formData.currentCompany) {
      toast.error('Please fill in your name, current role, and company.');
      return;
    }

    toast.success('Your transformation journey has been submitted for verification!');
    setTimeout(() => {
      navigate('/stories');
    }, 1400);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Form (7 Columns) */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-7 rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl"
      >
        {/* Step 1: Candidate Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faUser} />
            <span>Step 1 • Candidate Identity</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Martinez"
                value={formData.name}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">LinkedIn or Portfolio URL</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/..."
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Transformation Metrics */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Step 2 • The Career Leap</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Role / Education</label>
              <input
                type="text"
                name="previousRole"
                required
                placeholder="e.g. Hospitality Manager"
                value={formData.previousRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Base Salary ($/yr)</label>
              <input
                type="text"
                name="previousSalary"
                placeholder="e.g. $42,000"
                value={formData.previousSalary}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Role Title</label>
              <input
                type="text"
                name="currentRole"
                required
                placeholder="e.g. AI Prompt Engineer"
                value={formData.currentRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Company / Organization</label>
              <input
                type="text"
                name="currentCompany"
                required
                placeholder="e.g. Anthropic"
                value={formData.currentCompany}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Step 3: 3-Stage Story Details */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faRoad} />
            <span>Step 3 • 3-Stage Transition Timeline</span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Stage 1: The Initial Struggle</label>
              <textarea
                rows={2}
                name="stage1Desc"
                placeholder="Describe your background and why you decided to pivot..."
                value={formData.stage1Desc}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Stage 2: The Pivot & Roadblocks</label>
              <textarea
                rows={2}
                name="stage2Desc"
                placeholder="What PathSeeker roadmaps/masterclasses did you study? What was difficult?"
                value={formData.stage2Desc}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Stage 3: The Job Offer Outcome</label>
              <textarea
                rows={2}
                name="stage3Desc"
                placeholder="How did the interview go? What does this milestone mean for you?"
                value={formData.stage3Desc}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Step 4: Golden Advice */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800] uppercase font-mono">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Step 4 • Golden Advice for Beginners</span>
          </div>

          <div className="space-y-2">
            <input
              type="text"
              name="advice1"
              placeholder="Rule #1 (e.g. Build in public every day)"
              value={formData.advice1}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
            <input
              type="text"
              name="advice2"
              placeholder="Rule #2 (e.g. Never skip foundational math concepts)"
              value={formData.advice2}
              onChange={handleChange}
              className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Publish Transformation Story</span>
          </button>
        </div>
      </form>

      {/* Right Live Preview (5 Columns) */}
      <div className="lg:col-span-5 space-y-4 sticky top-28">
        <span className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider block">
          Live Story Card Preview:
        </span>

        <div className="rounded-3xl overflow-hidden glass-panel-ultra border-2 border-[#E8602E] p-6 space-y-4 shadow-glow-orange">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E8602E]/20 text-[#E8602E] font-bold text-base flex items-center justify-center border border-[#E8602E]">
              {formData.name ? formData.name[0] : 'C'}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="text-sm font-bold text-white">
                  {formData.name || 'Your Full Name'}
                </h4>
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#10B981] text-xs" />
              </div>
              <span className="text-xs text-[#E8602E] font-semibold block">
                {formData.currentRole || 'Target Role'} at {formData.currentCompany || 'Company'}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#D4D4D8] italic">
            &quot;Transitioned from {formData.previousRole || 'Prior Role'} to {formData.currentRole || 'New Role'}.&quot;
          </p>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 text-xs">
            <span className="text-[10px] font-mono text-[#71717A] uppercase block">
              3-Stage Summary:
            </span>
            <p className="text-xs text-[#A1A1AA] line-clamp-2">
              {formData.stage2Desc || 'Building capstone architectures and mastering 90-day PathSeeker blueprints.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
