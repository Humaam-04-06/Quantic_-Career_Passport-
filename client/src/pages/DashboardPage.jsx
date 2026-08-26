import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faUserGraduate,
  faBriefcase,
  faUserTie,
  faFire,
  faBrain,
  faFileArrowDown,
  faGear,
  faPenToSquare,
  faShieldHalved,
  faArrowRight,
  faUsers,
  faDatabase,
  faComments,
  faBookOpen,
  faServer,
  faChartLine,
  faSliders,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import DigitalPassportIDCard from '../components/dashboard/DigitalPassportIDCard';
import DashboardMetrics from '../components/dashboard/DashboardMetrics';
import RoadmapChecklist from '../components/dashboard/RoadmapChecklist';
import SkillCompetencyRadar from '../components/dashboard/SkillCompetencyRadar';
import SavedCareersHub from '../components/dashboard/SavedCareersHub';
import LearningVault from '../components/dashboard/LearningVault';
import MyStoriesHub from '../components/dashboard/MyStoriesHub';
import ProfileEditModal from '../components/dashboard/ProfileEditModal';
import { adminApi } from '../services/api';
import {
  CANDIDATE_PROFILE,
  ROLE_STAGE_CONFIGS,
  INITIAL_ROADMAP_TASKS,
} from '../data/dashboardData';

export default function DashboardPage() {
  const loadProfileData = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      if (stored) {
        const userEmailKey = (stored.email || 'guest').toLowerCase();
        const verifiedOverride = localStorage.getItem(`pathseeker_verified_${userEmailKey}`);
        const customAvatar = localStorage.getItem(`pathseeker_avatar_${userEmailKey}`);

        return {
          ...CANDIDATE_PROFILE,
          name: stored.name || CANDIDATE_PROFILE.name,
          email: stored.email || CANDIDATE_PROFILE.email,
          avatar: customAvatar || stored.avatar || CANDIDATE_PROFILE.avatar,
          roleStage: stored.role || CANDIDATE_PROFILE.roleStage,
          targetRole: stored.targetRole || CANDIDATE_PROFILE.targetRole,
          skills: stored.skills || ['Python', 'React', 'Problem Solving'],
          isNewUser: !!stored.isNewUser,
          isVerified: verifiedOverride !== null ? (verifiedOverride === 'true') : (stored.isVerified !== undefined ? !!stored.isVerified : false),
          isAdmin: stored.role === 'admin' || stored.isAdmin === true,
        };
      }
    } catch {
      // ignore
    }
    return CANDIDATE_PROFILE;
  };

  const [profile, setProfile] = useState(loadProfileData);
  const [adminStats, setAdminStats] = useState(null);

  // Synchronize profile in real-time on any external/admin update
  useEffect(() => {
    const handleSync = () => {
      setProfile(loadProfileData());
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('authChange', handleSync);
    window.addEventListener('userUpdate', handleSync);
    window.addEventListener('profileChange', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('authChange', handleSync);
      window.removeEventListener('userUpdate', handleSync);
      window.removeEventListener('profileChange', handleSync);
    };
  }, []);

  // Fetch admin stats if user is an admin
  useEffect(() => {
    if (profile.isAdmin || profile.roleStage === 'admin') {
      adminApi.getStats()
        .then((res) => {
          if (res?.data) setAdminStats(res.data);
        })
        .catch(() => {});
    }
  }, [profile.isAdmin, profile.roleStage]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      if (stored) {
        const userEmailKey = (stored.email || 'guest').toLowerCase();
        const savedTasks = localStorage.getItem(`pathseeker_tasks_${userEmailKey}`);
        if (savedTasks) {
          return JSON.parse(savedTasks);
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_ROADMAP_TASKS.map((t) => ({ ...t, isCompleted: false }));
  });

  const completedTaskCount = tasks.filter((t) => t.isCompleted).length;
  const totalTaskCount = tasks.length;

  const currentStageConfig = ROLE_STAGE_CONFIGS[profile.roleStage] || ROLE_STAGE_CONFIGS.Student;
  const isAdminUser = profile.isAdmin || profile.roleStage === 'admin';

  const handleStageChange = (stage) => {
    setProfile((prev) => ({ ...prev, roleStage: stage }));
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      localStorage.setItem('pathseeker_user', JSON.stringify({ ...stored, role: stage }));
      window.dispatchEvent(new Event('authChange'));
      window.dispatchEvent(new Event('profileChange'));
    } catch {
      // ignore
    }
    toast.success(`Switched dashboard view to ${stage} Track!`);
  };

  const handleToggleTask = (taskId) => {
    setTasks((prev) => {
      const updated = prev.map((t) => (t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t));
      try {
        const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
        if (stored) {
          const userEmailKey = (stored.email || 'guest').toLowerCase();
          localStorage.setItem(`pathseeker_tasks_${userEmailKey}`, JSON.stringify(updated));
        }
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => {
      const updated = [newTask, ...prev];
      try {
        const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
        if (stored) {
          const userEmailKey = (stored.email || 'guest').toLowerCase();
          localStorage.setItem(`pathseeker_tasks_${userEmailKey}`, JSON.stringify(updated));
        }
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleVerifyPassport = () => {
    setProfile((prev) => ({ ...prev, isVerified: true }));
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      if (stored) {
        const userEmailKey = (stored.email || 'guest').toLowerCase();
        localStorage.setItem(`pathseeker_verified_${userEmailKey}`, 'true');
        localStorage.setItem('pathseeker_user', JSON.stringify({ ...stored, isVerified: true }));
        window.dispatchEvent(new Event('authChange'));
        window.dispatchEvent(new Event('userUpdate'));
        window.dispatchEvent(new Event('profileChange'));
      }
    } catch {
      // ignore
    }
  };

  const handleExportPdf = () => {
    toast.success('Generating your Complete Career Passport PDF Dossier...');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30 relative">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-28 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-10 opacity-30 pointer-events-none" />

      {/* Main Command Center Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        
        {/* ========================================================
            HERO & 3D HOLOGRAPHIC PASSPORT / CLEARANCE ID CARD
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero & Actions (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              {isAdminUser ? (
                <>
                  <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono uppercase backdrop-blur-md flex items-center gap-1.5 shadow-glow-orange-sm">
                    <FontAwesomeIcon icon={faShieldHalved} />
                    <span>Super Administrator Clearance</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#D4D4D8] font-mono">
                    Tier 5 Root Governance
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono uppercase backdrop-blur-md flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faPassport} />
                    <span>Candidate Command Center</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#D4D4D8] font-mono">
                    {profile.hollandArchetype}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white leading-tight">
              {isAdminUser ? 'Platform Governance,' : profile.isNewUser ? 'Welcome to PathSeeker,' : 'Welcome back,'} <br />
              <span className="gradient-text-fire">{profile.name}.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-xl">
              {isAdminUser
                ? 'Enterprise root clearance active. Full platform governance authority over career ontologies, story moderation, user access control, and telemetry.'
                : 'Your digital credentials, Holland RIASEC telemetry, 90-day execution sprints, and verified capstone architectures are synchronized in real-time.'}
            </p>

            {/* Action Bar */}
            <div className="space-y-2 pt-2">
              {isAdminUser ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    to="/admin"
                    className="px-5 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-extrabold shadow-glow-orange-sm hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faShieldHalved} />
                    <span>Launch Enterprise Admin Console (/admin)</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(true)}
                    className="px-4 py-3 rounded-2xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 bg-white/[0.08] hover:bg-white/15 text-white border border-white/15 shadow-sm"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <span>Edit Profile & Credentials</span>
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA] tracking-wider block">
                    Active Career Stage View:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {['Student', 'Graduate', 'Professional'].map((stage) => {
                      const isSelected = profile.roleStage === stage;
                      return (
                        <button
                          key={stage}
                          type="button"
                          onClick={() => handleStageChange(stage)}
                          className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 ${
                            isSelected
                              ? 'bg-[#E8602E] text-white shadow-glow-orange-sm scale-105'
                              : 'bg-white/[0.04] text-[#A1A1AA] hover:text-white border border-white/10'
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={
                              stage === 'Student'
                                ? faUserGraduate
                                : stage === 'Graduate'
                                ? faBriefcase
                                : faUserTie
                            }
                          />
                          <span>{stage} Track</span>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(true)}
                      className="px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-2 bg-white/[0.08] hover:bg-[#E8602E] text-white border border-white/15 shadow-sm hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span>Edit Profile & Security</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right 3D Holographic Passport ID Card (5 Columns) */}
          <div className="lg:col-span-5">
            <DigitalPassportIDCard
              profile={profile}
              currentStageConfig={currentStageConfig}
              onEditProfile={() => setIsEditModalOpen(true)}
              completedTaskCount={completedTaskCount}
              totalTaskCount={totalTaskCount}
              onVerifyPassport={handleVerifyPassport}
            />
          </div>
        </section>

        {/* ========================================================
            ADMIN PLATFORM DASHBOARD vs CANDIDATE DASHBOARD
            ======================================================== */}
        {isAdminUser ? (
          /* ========================================================
              DEDICATED ENTERPRISE ADMIN OPERATIONS HUB
             ======================================================== */
          <div className="space-y-10 animate-fadeIn">
            {/* 1. Admin System Health & Metrics */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faServer} className="text-[#E8602E]" />
                  <h2 className="text-xl font-extrabold text-white">Platform Infrastructure & Telemetry</h2>
                </div>
                <span className="text-xs font-mono text-[#10B981] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  All Systems Operational
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-3xl glass-panel-ultra border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA]">Registered User Base</span>
                  <div className="text-2xl font-black text-white font-display">
                    {adminStats?.users?.total || 12} Accounts
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] block">
                    {adminStats?.users?.students || 0} Students • {adminStats?.users?.professionals || 0} Pros
                  </span>
                </div>

                <div className="p-5 rounded-3xl glass-panel-ultra border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA]">Career Repository</span>
                  <div className="text-2xl font-black text-[#FFB800] font-display">
                    {adminStats?.careers?.total || 150}+ Pathways
                  </div>
                  <span className="text-[10px] font-mono text-[#FFB800] block">
                    6 Engineering Domains
                  </span>
                </div>

                <div className="p-5 rounded-3xl glass-panel-ultra border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA]">Story Moderation Queue</span>
                  <div className="text-2xl font-black text-[#06B6D4] font-display">
                    {adminStats?.stories?.pending || 2} Pending Review
                  </div>
                  <span className="text-[10px] font-mono text-[#06B6D4] block">
                    {adminStats?.stories?.approved || 4} Published Live
                  </span>
                </div>

                <div className="p-5 rounded-3xl glass-panel-ultra border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA]">Database Cluster</span>
                  <div className="text-2xl font-black text-[#10B981] font-display">
                    MongoDB Atlas
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] block">
                    Zero Downtime • Encrypted
                  </span>
                </div>
              </div>
            </section>

            {/* 2. Admin Command Launchpad Grid */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <FontAwesomeIcon icon={faSliders} className="text-[#E8602E]" />
                <h2 className="text-xl font-extrabold text-white">Platform Governance Launchpads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/admin"
                  className="p-6 rounded-3xl glass-panel-ultra border border-white/10 hover:border-[#E8602E]/60 transition-all group hover:scale-[1.01] block"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8602E]/20 text-[#E8602E] flex items-center justify-center text-xl group-hover:bg-[#E8602E] group-hover:text-white transition-all">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#A1A1AA] group-hover:text-[#E8602E] transition-colors" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E8602E] transition-colors">
                      User Access & RBAC Governance
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Search candidates, inspect dossiers, assign role clearances, and manage blocked accounts.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/admin"
                  className="p-6 rounded-3xl glass-panel-ultra border border-white/10 hover:border-[#FFB800]/60 transition-all group hover:scale-[1.01] block"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center text-xl group-hover:bg-[#FFB800] group-hover:text-black transition-all">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#A1A1AA] group-hover:text-[#FFB800] transition-colors" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FFB800] transition-colors">
                      Career Bank & Taxonomy CMS
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Add new careers, modify salary benchmarks, toggle trending spotlight flags, and delete pathways.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/admin"
                  className="p-6 rounded-3xl glass-panel-ultra border border-white/10 hover:border-[#06B6D4]/60 transition-all group hover:scale-[1.01] block"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#06B6D4]/20 text-[#06B6D4] flex items-center justify-center text-xl group-hover:bg-[#06B6D4] group-hover:text-black transition-all">
                      <FontAwesomeIcon icon={faComments} />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#A1A1AA] group-hover:text-[#06B6D4] transition-colors" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                      Community Transformation Story Moderation
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Review candidate submission drafts, approve public broadcasts, request edits, or pin featured stories.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/admin"
                  className="p-6 rounded-3xl glass-panel-ultra border border-white/10 hover:border-[#10B981]/60 transition-all group hover:scale-[1.01] block"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center text-xl group-hover:bg-[#10B981] group-hover:text-black transition-all">
                      <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#A1A1AA] group-hover:text-[#10B981] transition-colors" />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#10B981] transition-colors">
                      Curriculum Masterclasses & Resource Vault
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Upload masterclass streams, blueprint PDFs, Holland RIASEC cognitive scenarios, and manage downloads.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* 3. Published Announcements / Stories */}
            <section>
              <MyStoriesHub userEmail={profile.email} />
            </section>
          </div>
        ) : (
          /* ========================================================
              STANDARD CANDIDATE DASHBOARD
             ======================================================== */
          <>
            {/* SECTION 2: CAREER READINESS TELEMETRY METRICS */}
            <section>
              <DashboardMetrics
                profile={profile}
                completedTaskCount={completedTaskCount}
                totalTaskCount={totalTaskCount}
              />
            </section>

            {/* SECTION 3: INTERACTIVE 90-DAY SPRINT ROADMAP CHECKLIST */}
            <section>
              <RoadmapChecklist
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onAddTask={handleAddTask}
              />
            </section>

            {/* SECTION 4: MULTI-AXIS SKILL COMPETENCY RADAR */}
            <section>
              <SkillCompetencyRadar
                userSkills={profile.skills || []}
                completedTaskCount={completedTaskCount}
                totalTaskCount={totalTaskCount}
                isNewUser={profile.isNewUser}
              />
            </section>

            {/* SECTION 5: SAVED CAREER PATHWAYS HUB */}
            <section>
              <SavedCareersHub />
            </section>

            {/* SECTION 6: LEARNING CURRICULUM & RESOURCE VAULT */}
            <section>
              <LearningVault onExportPdf={handleExportPdf} />
            </section>

            {/* SECTION 7: MY PUBLISHED TRANSFORMATION STORIES */}
            <section>
              <MyStoriesHub userEmail={profile.email} />
            </section>
          </>
        )}
      </main>

      {/* Candidate Profile & Security Edit Modal */}
      {isEditModalOpen && (
        <ProfileEditModal
          currentProfile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onSave={(updated) => setProfile(updated)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
