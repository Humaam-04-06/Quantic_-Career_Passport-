import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faUser,
  faCheck,
  faArrowRight,
  faGraduationCap,
  faBriefcase,
  faUserTie,
  faShieldHalved,
  faUpload,
  faPlus,
  faXmark,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { AVATAR_PRESETS, DEFAULT_AVATAR } from '../../data/avatarsData.js';

export default function ProfileSetupModal({
  initialData,
  onComplete,
}) {
  const [firstName, setFirstName] = useState(
    initialData?.name ? initialData.name.split(' ')[0] : ''
  );
  const [lastName, setLastName] = useState(
    initialData?.name && initialData.name.split(' ').length > 1
      ? initialData.name.split(' ').slice(1).join(' ')
      : ''
  );
  const [avatarUrl, setAvatarUrl] = useState(
    initialData?.avatar || DEFAULT_AVATAR
  );
  const [targetRole, setTargetRole] = useState('AI & Cloud Solutions Architect');
  const [stage, setStage] = useState(initialData?.role || 'Student');
  const [skills, setSkills] = useState(['Python', 'Problem Solving']);
  const [skillInput, setSkillInput] = useState('');

  const POPULAR_SKILL_SUGGESTIONS = [
    'Python',
    'JavaScript',
    'React',
    'C++',
    'Java',
    'SQL',
    'Machine Learning',
    'Data Structures',
    'Figma / UI',
    'AWS / Cloud',
    'Cybersecurity',
    'Git',
  ];

  const handleAddSkill = (skillToAdd) => {
    const val = (skillToAdd || skillInput).trim();
    if (!val) return;
    if (skills.includes(val)) {
      toast.error('Skill already added!');
      return;
    }
    if (skills.length >= 12) {
      toast.error('Maximum 12 skills allowed');
      return;
    }
    setSkills([...skills, val]);
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // Handle local image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarUrl(event.target.result);
        toast.success('Profile picture uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim()) {
      toast.error('Please enter your first name.');
      return;
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const updatedProfile = {
      ...initialData,
      name: fullName,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      avatar: avatarUrl,
      role: stage,
      targetRole: targetRole,
      skills: skills,
      isNewUser: true,
    };

    toast.success(`Career Passport ID generated for ${fullName}!`);
    onComplete(updatedProfile);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg rounded-[2.5rem] glass-panel-ultra border-2 border-white/20 p-6 sm:p-10 space-y-8 shadow-[0_25px_60px_-15px_rgba(232,96,46,0.4)] my-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-mono font-bold uppercase backdrop-blur-md">
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Digital ID Personalization</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Personalize Your <br />
            <span className="gradient-text-fire">Career Passport Identity</span>
          </h2>
          <p className="text-xs text-[#A1A1AA]">
            Upload your official ID photo and verify your career track credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Upload with Live Preview */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-[#E8602E] p-1 bg-black/60 shadow-glow-orange-sm">
                <img
                  src={avatarUrl}
                  alt="Avatar Preview"
                  className="w-full h-full object-contain rounded-2xl bg-black/40"
                />
              </div>

              {/* Upload Overlay Button */}
              <label
                htmlFor="avatar-file-input"
                className="absolute inset-0 rounded-3xl bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-bold cursor-pointer gap-1 backdrop-blur-xs"
              >
                <FontAwesomeIcon icon={faCamera} className="text-base text-[#E8602E]" />
                <span>Upload Custom Photo</span>
              </label>

              <input
                id="avatar-file-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Selected Avatar Label */}
            {(() => {
              const selected = AVATAR_PRESETS.find((p) => p.url === avatarUrl);
              return (
                <span className="text-[11px] font-mono font-bold text-[#FFB800] bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                  {selected ? `${selected.name} • ${selected.tag}` : 'Custom Uploaded ID Photo'}
                </span>
              );
            })()}

            {/* Avatar Preset Quick Chooser */}
            <div className="space-y-2 text-center w-full pt-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] uppercase px-1">
                <span>Select Animated Character Preset:</span>
                <label
                  htmlFor="avatar-file-input"
                  className="text-[#E8602E] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faUpload} />
                  <span>or Upload Picture</span>
                </label>
              </div>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                {AVATAR_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    title={`${preset.name} (${preset.tag})`}
                    onClick={() => setAvatarUrl(preset.url)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden p-0.5 border-2 transition-all cursor-pointer bg-black/50 ${
                      avatarUrl === preset.url
                        ? 'border-[#E8602E] scale-110 shadow-glow-orange-sm'
                        : 'border-white/15 opacity-65 hover:opacity-100 hover:border-white/40 hover:scale-105'
                    }`}
                  >
                    <img src={preset.url} alt={preset.name} className="w-full h-full object-contain rounded-xl" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* First Name & Last Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                First Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Morgan"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
              />
            </div>
          </div>

          {/* Career Stage Selection */}
          <div className="space-y-2">
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
              Primary Career Pathway Stage:
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { id: 'Student', icon: faGraduationCap, label: 'Student' },
                { id: 'Graduate', icon: faBriefcase, label: 'Graduate' },
                { id: 'Professional', icon: faUserTie, label: 'Pro Pivot' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStage(s.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    stage === s.id
                      ? 'bg-[#E8602E]/20 border-[#E8602E] text-[#E8602E] font-bold shadow-glow-orange-sm'
                      : 'bg-white/[0.04] border-white/10 text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={s.icon} />
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Target Role Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
              Primary Target Career Goal
            </label>
            <input
              type="text"
              placeholder="e.g. AI & Machine Learning Architect"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
            />
          </div>

          {/* Skills & Technologies Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                Your Skills & Tech Stack ({skills.length}/12)
              </label>
              <span className="text-[10px] font-mono text-[#71717A]">Type & press Enter</span>
            </div>

            {/* Custom Skill Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill (e.g. React, Python, UI Design)..."
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
                className="flex-1 glass-input text-xs text-white px-4 py-2.5 rounded-2xl focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddSkill()}
                className="px-4 py-2.5 rounded-2xl bg-[#E8602E]/20 hover:bg-[#E8602E] text-[#E8602E] hover:text-white border border-[#E8602E]/40 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Add</span>
              </button>
            </div>

            {/* Added Skills Chips */}
            <div className="flex flex-wrap gap-2 min-h-[32px] p-2.5 rounded-2xl bg-white/[0.02] border border-white/10">
              {skills.length === 0 ? (
                <span className="text-xs font-mono text-[#71717A] italic">No skills added yet. Select from quick suggestions below.</span>
              ) : (
                skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#E8602E]/15 border border-[#E8602E]/30 text-white text-xs font-mono group"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-[#A1A1AA] hover:text-red-400 cursor-pointer ml-1"
                    >
                      <FontAwesomeIcon icon={faXmark} className="text-[10px]" />
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Quick Skill Suggestion Chips */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">Quick Suggestions:</span>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_SKILL_SUGGESTIONS.map((sug) => {
                  const isAdded = skills.includes(sug);
                  return (
                    <button
                      key={sug}
                      type="button"
                      disabled={isAdded}
                      onClick={() => handleAddSkill(sug)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-white/10 text-white/40 border border-white/5 cursor-default'
                          : 'bg-white/[0.05] hover:bg-[#E8602E]/20 text-[#A1A1AA] hover:text-white border border-white/10'
                      }`}
                    >
                      + {sug}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] hover:from-[#FF7A45] hover:to-[#E8602E] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>Generate & Launch Passport Dashboard</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </div>
  );
}
