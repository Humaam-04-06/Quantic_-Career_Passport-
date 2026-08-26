import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faCamera,
  faXmark,
  faCheck,
  faShieldHalved,
  faEnvelope,
  faBuilding,
  faGraduationCap,
  faBriefcase,
  faUserTie,
  faKey,
  faCode,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import ForgotPasswordModal from '../auth/ForgotPasswordModal.jsx';
import { AVATAR_PRESETS, DEFAULT_AVATAR } from '../../data/avatarsData.js';

export default function ProfileEditModal({
  currentProfile,
  onClose,
  onSave,
}) {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'skills' | 'security'
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  // Profile fields
  const [name, setName] = useState(currentProfile?.name || 'Alex Morgan');
  const [email, setEmail] = useState(currentProfile?.email || 'alex.morgan@pathseeker.ai');
  const [avatar, setAvatar] = useState(
    currentProfile?.avatar || DEFAULT_AVATAR
  );
  const [roleStage, setRoleStage] = useState(currentProfile?.roleStage || 'Student');
  const [targetRole, setTargetRole] = useState(currentProfile?.targetRole || 'AI & Cloud Solutions Architect');
  const [targetCompany, setTargetCompany] = useState(currentProfile?.targetCompany || 'Anthropic / AWS');

  // Skills fields
  const [skills, setSkills] = useState(currentProfile?.skills || ['Python', 'React', 'Problem Solving']);
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
    if (skills.length >= 15) {
      toast.error('Maximum 15 skills allowed');
      return;
    }
    setSkills([...skills, val]);
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // Security fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
        toast.success('Avatar updated with your new photo!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (e) => {
    if (e) e.preventDefault();
    if (!name.trim()) {
      toast.error('Please provide your name.');
      return;
    }

    const updated = {
      ...currentProfile,
      name: name.trim(),
      email: email.trim(),
      avatar,
      roleStage,
      targetRole: targetRole.trim(),
      targetCompany: targetCompany.trim(),
      skills: skills,
    };

    // Update localStorage user object
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      const updatedUser = {
        ...stored,
        name: name.trim(),
        email: email.trim(),
        avatar,
        role: roleStage,
        targetRole: targetRole.trim(),
        skills: skills,
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(updatedUser));
      window.dispatchEvent(new Event('authChange'));
    } catch {
      // ignore
    }

    onSave(updated);
    toast.success('Your Profile and Skills were updated!');
    onClose();
  };

  const handleSaveSecurity = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match.');
      return;
    }

    try {
      const userEmail = (email || '').trim().toLowerCase();
      const res = await fetch('http://localhost:5000/api/v1/auth/update-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userEmail,
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to update password in database');
      }

      // Sync to local accounts cache and active session
      try {
        const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
        if (accounts[userEmail]) {
          accounts[userEmail].password = newPassword;
          localStorage.setItem('pathseeker_accounts', JSON.stringify(accounts));
        }
        const currentUser = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
        if (currentUser) {
          currentUser.password = newPassword;
          localStorage.setItem('pathseeker_user', JSON.stringify(currentUser));
        }
      } catch {
        // ignore
      }

      toast.success('Password updated securely with 256-bit encryption!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      onClose();
    } catch (err) {
      toast.error(err.message || 'Error updating password.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl rounded-[2.5rem] glass-panel-ultra border-2 border-white/20 p-6 sm:p-10 space-y-6 shadow-[0_25px_60px_-15px_rgba(232,96,46,0.4)] my-8">
        {/* Header & Close */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold text-[#E8602E] block">
              Passport Credentials Settings
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Edit Profile & Security
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'profile'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'skills'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon={faCode} />
            <span>Skills ({skills.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('security')}
            className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'security'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon={faLock} />
            <span>Security</span>
          </button>
        </div>

        {/* TAB 1: PROFILE & PHOTO EDIT */}
        {activeTab === 'profile' ? (
          <form onSubmit={handleSaveProfile} className="space-y-6">
            {/* Avatar upload */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-[#E8602E] p-1 bg-black/60 shadow-glow-orange-sm">
                  <img src={avatar} alt="Avatar" className="w-full h-full object-contain rounded-2xl bg-black/40" />
                </div>

                <label
                  htmlFor="avatar-edit-file"
                  className="absolute inset-0 rounded-3xl bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-bold cursor-pointer gap-1 backdrop-blur-xs"
                >
                  <FontAwesomeIcon icon={faCamera} className="text-base text-[#E8602E]" />
                  <span>Upload Custom Photo</span>
                </label>

                <input
                  id="avatar-edit-file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Selected Avatar Tag */}
              {(() => {
                const selected = AVATAR_PRESETS.find((p) => p.url === avatar);
                return (
                  <span className="text-[11px] font-mono font-bold text-[#FFB800] bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                    {selected ? `${selected.name} • ${selected.tag}` : 'Custom Uploaded ID Photo'}
                  </span>
                );
              })()}

              {/* Presets Grid */}
              <div className="space-y-2 text-center w-full pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] uppercase px-1">
                  <span>Select Animated Character Preset:</span>
                  <label
                    htmlFor="avatar-edit-file"
                    className="text-[#E8602E] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <FontAwesomeIcon icon={faCamera} />
                    <span>Upload Picture</span>
                  </label>
                </div>

                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {AVATAR_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      title={`${preset.name} (${preset.tag})`}
                      onClick={() => setAvatar(preset.url)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden p-0.5 border-2 transition-all cursor-pointer bg-black/50 ${
                        avatar === preset.url
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

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
                />
              </div>
            </div>

            {/* Target Role & Target Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Target Career Role
                </label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Target Company / Domain
                </label>
                <input
                  type="text"
                  value={targetCompany}
                  onChange={(e) => setTargetCompany(e.target.value)}
                  className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
                />
              </div>
            </div>

            {/* Role Stage */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                Career Stage Track:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: 'Student', icon: faGraduationCap, label: 'Student' },
                  { id: 'Graduate', icon: faBriefcase, label: 'Graduate' },
                  { id: 'Professional', icon: faUserTie, label: 'Professional' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setRoleStage(s.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      roleStage === s.id
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

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-2xl bg-white/10 text-white text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-extrabold shadow-glow-orange-sm cursor-pointer transition-all flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faCheck} />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        ) : activeTab === 'skills' ? (
          /* TAB 2: SKILLS & TECH STACK EDIT */
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Verified Skills & Tech Stack ({skills.length}/15)
                </label>
                <span className="text-[10px] font-mono text-[#71717A]">Type & press Add / Enter</span>
              </div>

              {/* Custom Skill Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add skill (e.g. Python, Docker, Next.js, Figma)..."
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
                  <span>Add Skill</span>
                </button>
              </div>
            </div>

            {/* Added Skills Chips */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#A1A1AA] block">Your Current Skills:</span>
              <div className="flex flex-wrap gap-2 min-h-[48px] p-3 rounded-2xl bg-black/40 border border-white/10">
                {skills.length === 0 ? (
                  <span className="text-xs font-mono text-[#71717A] italic">No skills added yet. Add one above or pick from suggestions.</span>
                ) : (
                  skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#E8602E]/20 border border-[#E8602E]/40 text-white text-xs font-mono group shadow-xs"
                    >
                      <span className="font-bold">{skill}</span>
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
            </div>

            {/* Quick Skill Suggestion Chips */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">Quick Add Suggestions:</span>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_SKILL_SUGGESTIONS.map((sug) => {
                  const isAdded = skills.includes(sug);
                  return (
                    <button
                      key={sug}
                      type="button"
                      disabled={isAdded}
                      onClick={() => handleAddSkill(sug)}
                      className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
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

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-2xl bg-white/10 text-white text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-extrabold shadow-glow-orange-sm cursor-pointer transition-all flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faCheck} />
                <span>Save Skills Stack</span>
              </button>
            </div>
          </div>
        ) : (
          /* TAB 3: SECURITY & PASSWORD */
          <form onSubmit={handleSaveSecurity} className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                  Current Password
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotModalOpen(true)}
                  className="text-[11px] font-mono text-[#E8602E] hover:text-[#FF7A45] hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                type="password"
                required
                placeholder="Enter existing password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                New Password
              </label>
              <input
                type="password"
                required
                placeholder="Minimum 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4D4D8]">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                placeholder="Re-type new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full glass-input text-xs sm:text-sm text-white px-4 py-3 rounded-2xl focus:outline-none"
              />
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-[#A1A1AA] flex items-center gap-2.5">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[#10B981] text-base flex-none" />
              <span>Password changes will immediately invalidate prior sessions across all client devices.</span>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-2xl bg-white/10 text-white text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-black text-xs font-extrabold shadow-sm cursor-pointer transition-all flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faKey} />
                <span>Update Password</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Forgot Password OTP Verification & Reset Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        initialEmail={email}
        onClose={() => setIsForgotModalOpen(false)}
        onSuccess={() => {
          toast.success('Password updated successfully!');
          onClose();
        }}
      />
    </div>
  );
}
