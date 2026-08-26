import React, { useState, useEffect } from 'react';
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
  faArrowTrendUp,
  faClock,
  faDollarSign,
  faWrench,
  faShieldHalved,
  faQuoteLeft,
  faSpinner,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { STORY_CATEGORIES } from '../../data/storiesData';
import { CAREER_DOMAINS } from '../../data/careersData';
import { AVATAR_PRESETS } from '../../data/avatarsData';
import { storiesApi } from '../../services/api';

export default function StorySubmitForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize from logged in user if available
  const [formData, setFormData] = useState(() => {
    try {
      const user = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      return {
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || AVATAR_PRESETS[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        linkedin: '',
        category: 'Non-Tech to Tech',
        domain: 'AI & Machine Learning',
        previousRole: 'Liberal Arts Graduate / Non-Technical',
        previousSalary: '$38,000',
        currentRole: 'Junior AI Engineer',
        currentCompany: 'DeepMind Labs',
        currentSalary: '$165,000',
        timeToTransition: '5 Months',
        quote: 'PathSeeker gave me the exact 90-day technical curriculum and architecture portfolio that got me hired.',
        stage1Desc: 'Graduated with zero professional coding background and struggled with imposter syndrome.',
        stage2Desc: 'Followed PathSeeker 90-day sprint, deployed 2 full-stack cloud microservices, and completed Holland RIASEC calibration.',
        stage3Desc: 'Passed 4 technical interview rounds and accepted an offer with full health and equity benefits.',
        advice1: 'Build deeply technical, deployable projects rather than following basic hello-world tutorials.',
        advice2: 'Document your architectural decisions and latency benchmarks publicly on GitHub.',
        toolsUsed: 'Python, PyTorch, Docker, React, AWS',
        proofUrl: '',
      };
    } catch {
      return {
        name: '',
        email: '',
        avatar: AVATAR_PRESETS[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        linkedin: '',
        category: 'Non-Tech to Tech',
        domain: 'AI & Machine Learning',
        previousRole: '',
        previousSalary: '$40,000',
        currentRole: '',
        currentCompany: '',
        currentSalary: '$150,000',
        timeToTransition: '6 Months',
        quote: '',
        stage1Desc: '',
        stage2Desc: '',
        stage3Desc: '',
        advice1: '',
        advice2: '',
        toolsUsed: 'Python, React, AWS',
        proofUrl: '',
      };
    }
  });

  // Calculate dynamic salary jump
  const calculateSalaryJump = () => {
    const prev = parseInt((formData.previousSalary || '').replace(/[^0-9]/g, ''), 10);
    const curr = parseInt((formData.currentSalary || '').replace(/[^0-9]/g, ''), 10);
    if (prev && curr && curr > prev) {
      const diff = curr - prev;
      const pct = Math.round((diff / prev) * 100);
      return `+$${(diff / 1000).toFixed(0)}k (+${pct}%)`;
    }
    return '+280%';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.currentRole || !formData.currentCompany) {
      toast.error('Please fill in your name, target role, and company.');
      return;
    }

    setIsSubmitting(true);
    const salaryIncrease = calculateSalaryJump();

    const payload = {
      ...formData,
      salaryIncrease,
      title: `From ${formData.previousRole || 'Career Switcher'} to ${formData.currentRole} at ${formData.currentCompany}`,
      toolsUsed: typeof formData.toolsUsed === 'string'
        ? formData.toolsUsed.split(',').map((t) => t.trim()).filter(Boolean)
        : formData.toolsUsed,
    };

    try {
      // 1. Dispatch to MongoDB Atlas via Backend API
      const res = await storiesApi.submit(payload);

      // 2. Also cache to localStorage for instant client synchronization
      try {
        const stored = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        const newStoryDoc = res?.data || {
          ...payload,
          _id: `story_${Date.now()}`,
          id: `story_${Date.now()}`,
          createdAt: new Date().toISOString(),
          upvotes: 0,
          likesCount: 0,
          isVerifiedSalary: true,
        };
        localStorage.setItem('pathseeker_user_stories', JSON.stringify([newStoryDoc, ...stored]));
        window.dispatchEvent(new Event('storiesChange'));
      } catch {
        // ignore
      }

      toast.success('Your transformation story has been published to the community feed!');
      setTimeout(() => {
        navigate('/stories');
      }, 1200);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || 'Error submitting story. Saved locally.');
      // Offline fallback
      try {
        const stored = JSON.parse(localStorage.getItem('pathseeker_user_stories') || '[]');
        localStorage.setItem(
          'pathseeker_user_stories',
          JSON.stringify([{ ...payload, _id: `story_${Date.now()}`, createdAt: new Date().toISOString(), upvotes: 0, likesCount: 0 }, ...stored])
        );
        window.dispatchEvent(new Event('storiesChange'));
      } catch {
        // ignore
      }
      setTimeout(() => {
        navigate('/stories');
      }, 1200);
    } finally {
      setIsSubmitting(false);
    }
  };

  const salaryJumpBadge = calculateSalaryJump();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Form (7 Columns) */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-7 rounded-3xl glass-panel-ultra border border-white/15 p-6 sm:p-10 space-y-8 shadow-2xl"
      >
        {/* Step 1: Candidate Identity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
              <FontAwesomeIcon icon={faUser} />
              <span>Step 1 • Candidate Identity & Avatar</span>
            </div>
            <span className="text-[10px] text-[#A1A1AA] font-mono">Required</span>
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
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="alex@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">LinkedIn or GitHub URL</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/alex-martinez"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Salary Proof / Offer Letter URL (Optional)</label>
              <input
                type="url"
                name="proofUrl"
                placeholder="https://drive.google.com/... or screenshot link"
                value={formData.proofUrl}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>
          </div>

          {/* Avatar Preset Selector */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-[#A1A1AA] flex items-center gap-1.5 font-mono">
              <FontAwesomeIcon icon={faCamera} />
              <span>Select Profile Avatar Preset:</span>
            </label>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {AVATAR_PRESETS.map((preset) => {
                const isSelected = formData.avatar === preset.url;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, avatar: preset.url }))}
                    className={`relative rounded-2xl overflow-hidden flex-none border-2 transition-all p-0.5 cursor-pointer ${
                      isSelected ? 'border-[#E8602E] scale-110 shadow-glow-orange-sm' : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={preset.url} alt={preset.name} className="w-11 h-11 rounded-xl object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 2: The Career Leap Metrics */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
              <FontAwesomeIcon icon={faBuilding} />
              <span>Step 2 • The Career Leap & Compensation</span>
            </div>
            <span className="text-[10px] text-[#10B981] font-mono font-bold">{salaryJumpBadge} Jump</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Role / Education</label>
              <input
                type="text"
                name="previousRole"
                required
                placeholder="e.g. Retail Support / Math Teacher"
                value={formData.previousRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Prior Salary ($/year)</label>
              <input
                type="text"
                name="previousSalary"
                placeholder="e.g. $38,000"
                value={formData.previousSalary}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Role Title</label>
              <input
                type="text"
                name="currentRole"
                required
                placeholder="e.g. Senior Cloud Solutions Architect"
                value={formData.currentRole}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Company / Employer</label>
              <input
                type="text"
                name="currentCompany"
                required
                placeholder="e.g. Google Cloud / CrowdStrike"
                value={formData.currentCompany}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">New Verified Salary ($/year)</label>
              <input
                type="text"
                name="currentSalary"
                placeholder="e.g. $165,000"
                value={formData.currentSalary}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Time to Pivot</label>
              <select
                name="timeToTransition"
                value={formData.timeToTransition}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E] bg-black"
              >
                <option value="3 Months">3 Months (Intensive)</option>
                <option value="5 Months">5 Months (Fast-Track)</option>
                <option value="6 Months">6 Months (Standard)</option>
                <option value="9 Months">9 Months (Part-Time)</option>
                <option value="1 Year">1 Year (Mastery)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Transition Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E] bg-black"
              >
                {STORY_CATEGORIES.filter((c) => c !== 'All Stories').map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Target Domain</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none focus:border-[#E8602E] bg-black"
              >
                {CAREER_DOMAINS.filter((d) => d !== 'All Domains').map((dom) => (
                  <option key={dom} value={dom}>
                    {dom}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 3: 3-Stage Story Details */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
            <FontAwesomeIcon icon={faRoad} />
            <span>Step 3 • 3-Stage Transformation Timeline</span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Stage 1: The Initial Struggle & Starting Point</label>
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
              <label className="text-xs font-bold text-white">Stage 2: The Pivot, Roadblocks & PathSeeker Sprints</label>
              <textarea
                rows={2}
                name="stage2Desc"
                placeholder="What PathSeeker roadmaps or masterclasses did you study? What project did you build?"
                value={formData.stage2Desc}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Stage 3: The Job Offer Outcome & Milestone</label>
              <textarea
                rows={2}
                name="stage3Desc"
                placeholder="How did the interview process go? What does this offer mean for you?"
                value={formData.stage3Desc}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Step 4: Golden Advice & Tech Tools */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFB800] uppercase font-mono">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Step 4 • Golden Advice & Tech Stack</span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Candidate Highlight Quote</label>
              <input
                type="text"
                name="quote"
                placeholder="A key one-sentence takeaway from your transition"
                value={formData.quote}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#D4D4D8]">Primary Tech Tools Used (Comma-separated)</label>
              <input
                type="text"
                name="toolsUsed"
                placeholder="e.g. Python, PyTorch, Docker, Kubernetes, React"
                value={formData.toolsUsed}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3.5 rounded-xl focus:outline-none font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="advice1"
                placeholder="Rule #1 (e.g. Build production code)"
                value={formData.advice1}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
              <input
                type="text"
                name="advice2"
                placeholder="Rule #2 (e.g. Document all failure post-mortems)"
                value={formData.advice2}
                onChange={handleChange}
                className="w-full glass-input text-xs text-white p-3 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] hover:from-[#FF7A45] hover:to-[#E8602E] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Publish Transformation Story</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Right Live Preview (5 Columns) */}
      <div className="lg:col-span-5 space-y-4 sticky top-28">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold font-mono text-[#A1A1AA] uppercase tracking-wider block">
            Live 3D Story Card Preview:
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[10px] font-mono font-bold">
            Real-Time Render
          </span>
        </div>

        {/* Holographic Card Preview */}
        <div className="rounded-3xl overflow-hidden glass-card-interactive border-2 border-[#E8602E]/60 shadow-[0_20px_50px_rgba(232,96,46,0.35)] flex flex-col justify-between">
          {/* Top Banner Image */}
          <div className="relative h-44 w-full overflow-hidden bg-[#0A0A0F]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Preview Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#E8602E]">
                {formData.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-white font-mono">
                {formData.domain}
              </span>
            </div>

            {/* Bottom Salary & Duration Badges */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 text-[11px] font-mono">
              <span className="px-2.5 py-0.5 rounded-md bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-bold backdrop-blur-md flex items-center gap-1">
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <span>Salary: {salaryJumpBadge} ({formData.currentSalary || '$150,000'})</span>
              </span>
              <span className="text-[#A1A1AA] flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                <FontAwesomeIcon icon={faClock} className="text-[#E8602E]" />
                <span>{formData.timeToTransition}</span>
              </span>
            </div>
          </div>

          {/* Profile & Content Details */}
          <div className="p-6 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img
                src={formData.avatar}
                alt={formData.name || 'Candidate'}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#E8602E] shadow-glow-orange-sm flex-none"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white truncate">
                    {formData.name || 'Candidate Name'}
                  </h4>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#10B981] text-xs" />
                </div>
                <span className="text-xs text-[#E8602E] font-semibold block truncate">
                  {formData.currentRole || 'Target Role'} at {formData.currentCompany || 'Company'}
                </span>
                <span className="text-[10px] text-[#A1A1AA] block truncate">
                  Previously: {formData.previousRole || 'Career Switcher'} ({formData.previousSalary || '$40k'})
                </span>
              </div>
            </div>

            {/* Highlight Quote */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-[#FFB800] font-mono font-bold">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <span>Key Highlight:</span>
              </div>
              <p className="text-xs text-[#D4D4D8] italic line-clamp-2">
                &quot;{formData.quote || 'PathSeeker gave me the exact technical curriculum that got me hired.'}&quot;
              </p>
            </div>

            {/* Tools Chip preview */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">
                Tech Stack Mastered:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(typeof formData.toolsUsed === 'string'
                  ? formData.toolsUsed.split(',')
                  : formData.toolsUsed
                )
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[10px] font-mono text-[#D4D4D8]"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
