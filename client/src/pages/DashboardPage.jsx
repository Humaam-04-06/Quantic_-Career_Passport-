import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faUserGraduate,
  faBriefcase,
  faUserTie,
  faFire,
  faBrain,
  faFileArrowDown,
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
import {
  CANDIDATE_PROFILE,
  ROLE_STAGE_CONFIGS,
  INITIAL_ROADMAP_TASKS,
} from '../data/dashboardData';

export default function DashboardPage() {
  const [profile, setProfile] = useState(CANDIDATE_PROFILE);
  const [tasks, setTasks] = useState(INITIAL_ROADMAP_TASKS);

  const completedTaskCount = tasks.filter((t) => t.isCompleted).length;
  const totalTaskCount = tasks.length;

  const currentStageConfig = ROLE_STAGE_CONFIGS[profile.roleStage];

  const handleStageChange = (stage) => {
    setProfile((prev) => ({ ...prev, roleStage: stage }));
    toast.success(`Switched dashboard view to ${stage} Track!`);
  };

  const handleToggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
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
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
        
        {/* ========================================================
            SECTION 1: HERO & 3D HOLOGRAPHIC PASSPORT ID CARD
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero & Role Switcher (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 text-xs font-bold font-mono uppercase backdrop-blur-md flex items-center gap-1.5">
                <FontAwesomeIcon icon={faPassport} />
                <span>Candidate Command Center</span>
              </span>

              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#D4D4D8] font-mono">
                {profile.hollandArchetype}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white leading-tight">
              Welcome back, <br />
              <span className="gradient-text-fire">{profile.name}.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed max-w-xl">
              Your digital credentials, Holland RIASEC telemetry, 90-day execution sprints, and verified capstone architectures are synchronized in real-time.
            </p>

            {/* Role Stage Switcher Pills */}
            <div className="space-y-2 pt-2">
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
              </div>
            </div>
          </div>

          {/* Right 3D Holographic Passport ID Card (5 Columns) */}
          <div className="lg:col-span-5">
            <DigitalPassportIDCard
              profile={profile}
              currentStageConfig={currentStageConfig}
            />
          </div>
        </section>

        {/* ========================================================
            SECTION 2: CAREER READINESS TELEMETRY METRICS
            ======================================================== */}
        <section>
          <DashboardMetrics
            profile={profile}
            completedTaskCount={completedTaskCount}
            totalTaskCount={totalTaskCount}
          />
        </section>

        {/* ========================================================
            SECTION 3: INTERACTIVE 90-DAY SPRINT ROADMAP CHECKLIST
            ======================================================== */}
        <section>
          <RoadmapChecklist
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
          />
        </section>

        {/* ========================================================
            SECTION 4: MULTI-AXIS SKILL COMPETENCY RADAR
            ======================================================== */}
        <section>
          <SkillCompetencyRadar />
        </section>

        {/* ========================================================
            SECTION 5: SAVED CAREER PATHWAYS HUB
            ======================================================== */}
        <section>
          <SavedCareersHub />
        </section>

        {/* ========================================================
            SECTION 6: LEARNING CURRICULUM & RESOURCE VAULT
            ======================================================== */}
        <section>
          <LearningVault onExportPdf={handleExportPdf} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
