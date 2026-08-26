import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faChartPie,
  faRoad,
  faIdCard,
  faArrowRight,
  faRotateRight,
  faDollarSign,
  faChartLine,
  faCheckCircle,
  faCircle,
  faBolt,
  faRobot,
  faLock,
  faUserCheck,
  faPassport,
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import RadarSkillChart from './RadarSkillChart';
import PassportCertificate from './PassportCertificate';
import AuthPromptModal from '../auth/AuthPromptModal';
import toast from 'react-hot-toast';

export default function QuizResults({ analysis, scores, persona, onRetake }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('passport'); // 'passport' | 'streams' | 'roadmap' | 'radar'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleAuthChange = () => {
      try {
        setUser(JSON.parse(localStorage.getItem('pathseeker_user') || 'null'));
      } catch {
        setUser(null);
      }
    };
    window.addEventListener('authChange', handleAuthChange);

    // Save quiz result telemetry dynamically to user profile
    try {
      const currentUser = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      const emailKey = (currentUser?.email || 'guest').toLowerCase();
      const quizData = {
        hollandCode: analysis.dominantCodes || 'IA-Tech',
        hollandArchetype: analysis.cognitiveArchetype || 'The Visionary Systems Builder',
        targetRole: analysis.matchedStreams?.[0]?.name || 'AI & Cloud Architect',
        scores,
        savedAt: new Date().toISOString(),
      };

      localStorage.setItem(`pathseeker_quiz_result_${emailKey}`, JSON.stringify(quizData));
      localStorage.setItem('pathseeker_quiz_result', JSON.stringify(quizData));

      if (currentUser) {
        const updated = {
          ...currentUser,
          hollandCode: quizData.hollandCode,
          hollandArchetype: quizData.hollandArchetype,
          targetRole: currentUser.targetRole || quizData.targetRole,
        };
        localStorage.setItem('pathseeker_user', JSON.stringify(updated));
        window.dispatchEvent(new Event('authChange'));
      }
    } catch {
      // ignore
    }

    return () => window.removeEventListener('authChange', handleAuthChange);
  }, [analysis, scores]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in">
      {/* Dynamic Save Progress Notice Banner for Logged-in vs Logged-out users */}
      {user ? (
        <div className="p-5 sm:p-6 rounded-3xl glass-panel-ultra border-2 border-[#10B981]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glass bg-gradient-to-r from-[#10B981]/10 via-transparent to-transparent">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center text-xl flex-shrink-0">
              <FontAwesomeIcon icon={faUserCheck} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#10B981] tracking-wider">
                  Progress Synced
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              </div>
              <h4 className="text-base font-bold text-white leading-snug">
                Assessment Saved to {user.name}'s Passport
              </h4>
              <p className="text-xs text-[#A1A1AA]">
                Holland Code <strong className="text-white font-mono">{analysis.dominantCodes || 'IA-Tech'}</strong> & 90-Day Roadmap are synced with your Candidate Dashboard.
              </p>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold font-mono transition-all shadow-glow-orange-sm flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPassport} />
            <span>Open My Dashboard</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </Link>
        </div>
      ) : (
        <div className="p-6 sm:p-7 rounded-[2.5rem] glass-panel-ultra border-2 border-[#E8602E]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(232,96,46,0.2)] bg-gradient-to-r from-[#E8602E]/15 via-black to-black">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-3xl bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#E8602E] tracking-widest block">
                Guest Assessment Completed
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-white font-display">
                Sign In to Save Your Assessment Progress
              </h4>
              <p className="text-xs text-[#D4D4D8] leading-relaxed max-w-xl">
                You took this assessment as a Guest. Sign in or create a free account to permanently bind your Holland Code (<strong className="text-white font-mono">{analysis.dominantCodes || 'IA-Tech'}</strong>), verified 90-day roadmap, and digital passport certificate.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold font-mono transition-all shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>Sign In & Save</span>
            </button>

            <button
              type="button"
              onClick={() => {
                navigate('/register');
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              <span>Create Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Banner: AI Match Summary */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#E8602E] shadow-sm">
          <FontAwesomeIcon icon={analysis.isAIGenerated ? faRobot : faWandMagicSparkles} className="text-xs" />
          <span>{analysis.isAIGenerated ? 'Gemini 1.5 AI Analysis Complete' : 'Cognitive Scoring Verified'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
          Your Matched Career Stream: <br className="hidden sm:block" />
          <span className="gradient-text-fire">{analysis.primaryStream}</span>
        </h1>

        <p className="text-[#D4D4D8] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {analysis.summary}
        </p>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 p-1.5 max-w-fit mx-auto rounded-full glass-pill">
          <button
            type="button"
            onClick={() => setActiveTab('passport')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'passport'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faIdCard} />
            <span>Digital Passport</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('streams')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'streams'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faBolt} />
            <span>Top Matched Roles</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('radar')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'radar'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faChartPie} />
            <span>Cognitive Radar</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <FontAwesomeIcon icon={faRoad} />
            <span>90-Day Roadmap</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT 1: PASSPORT CERTIFICATE */}
      {activeTab === 'passport' && (
        <div className="space-y-8 animate-fade-in">
          <PassportCertificate
            analysis={analysis}
            persona={persona}
            userName={user?.name}
          />
        </div>
      )}

      {/* TAB CONTENT 2: TOP MATCHED ROLES & STREAMS */}
      {activeTab === 'streams' && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-display text-white">
              Recommended High-Fit Roles
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Based on your {analysis.dominantCodes} Holland profile and aptitude matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analysis.recommendedRoles.map((role, idx) => {
              const bgImages = [
                'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
              ];

              return (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden glass-card-interactive flex flex-col justify-between shadow-glass group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-black/40">
                    <img
                      src={bgImages[idx % bgImages.length]}
                      alt={role.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/40 to-transparent" />
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-xs font-bold font-mono">
                        {role.fit} Match
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-[#E8602E] transition-colors leading-snug">
                        {role.title}
                      </h4>
                      <div className="space-y-1 text-xs text-[#D4D4D8] font-mono">
                        <div className="flex items-center gap-1 text-[#A1A1AA]">
                          <FontAwesomeIcon icon={faDollarSign} className="text-[#E8602E]" />
                          <span>{role.salary}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#10B981]">
                          <FontAwesomeIcon icon={faChartLine} />
                          <span>{role.demand} Demand</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/careers"
                      className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#E8602E] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Career Blueprint</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: COGNITIVE RADAR POLYGON */}
      {activeTab === 'radar' && (
        <div className="p-8 sm:p-12 rounded-[2.5rem] glass-card-interactive grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
          <div className="w-full flex items-center justify-center">
            <RadarSkillChart scores={scores} />
          </div>

          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] text-xs font-bold border border-[#E8602E]/30">
              <FontAwesomeIcon icon={faChartPie} />
              <span>Multi-Dimensional Aptitude Profile</span>
            </div>

            <h3 className="text-2xl font-extrabold font-display text-white">
              {analysis.cognitiveArchetype}
            </h3>

            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              Your radar polygon visually plots your balance across theoretical investigation, aesthetic creative craft, data analysis, and commercial leadership.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Technical Score</span>
                <strong className="text-white text-sm">{(scores.technical || 7) * 10}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Creative Score</span>
                <strong className="text-white text-sm">{(scores.creative || 4) * 20}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Analytical Score</span>
                <strong className="text-white text-sm">{(scores.analytical || 4) * 20}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <span className="text-[10px] text-[#A1A1AA] uppercase block">Leadership Score</span>
                <strong className="text-white text-sm">{(scores.enterprising || 3) * 20}%</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: 90-DAY ACTION ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-display text-white">
              Your 90-Day Execution Blueprint
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1">
              A structured step-by-step pathway to bridge the gap between aptitude and high-impact hiring.
            </p>
          </div>

          <div className="space-y-6">
            {analysis.roadmap.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[2rem] glass-card-interactive space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-[#E8602E] text-white text-xs font-bold flex items-center justify-center shadow-glow-orange-sm">
                      {idx + 1}
                    </span>
                    <span>{step.phase}</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-1 rounded-md border border-[#E8602E]/30">
                    {step.timeframe}
                  </span>
                </div>

                <ul className="space-y-2 pl-2">
                  {step.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="text-xs text-[#D4D4D8] flex items-start gap-2.5 leading-relaxed">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#E8602E] text-xs mt-0.5 flex-shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Global Actions */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onRetake}
          className="btn-secondary-dark px-6 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faRotateRight} />
          <span>Retake Career Assessment</span>
        </button>

        <div className="flex items-center gap-3">
          <Link
            to="/careers"
            className="btn-primary-orange px-8 py-3 text-xs font-bold flex items-center gap-2 shadow-glow-orange-sm"
          >
            <span>Explore All Careers in Bank</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      {/* Auth Prompt Modal when clicking Sign In from guest results */}
      <AuthPromptModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        title="Sign In to Save Career Passport"
        message="Sign in or create your account to permanently bind your Holland RIASEC code, 90-day sprint checklist, and digital passport certificate to your Candidate Dashboard."
      />
    </div>
  );
}
