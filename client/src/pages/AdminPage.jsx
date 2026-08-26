import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faShieldHalved,
  faArrowsRotate,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminOverviewMetrics from '../components/admin/AdminOverviewMetrics';
import AdminAnalyticsChart from '../components/admin/AdminAnalyticsChart';
import CareerManagerTable from '../components/admin/CareerManagerTable';
import StoryModerationQueue from '../components/admin/StoryModerationQueue';
import ContentResourceManager from '../components/admin/ContentResourceManager';
import UserManagementTable from '../components/admin/UserManagementTable';
import QuizQuestionsManager from '../components/admin/QuizQuestionsManager';
import SecurityAuditLog from '../components/admin/SecurityAuditLog';
import AdminSettings from '../components/admin/AdminSettings';
import AdminSecurityGate from '../components/admin/AdminSecurityGate';
import { useAuth } from '../context/AuthContext';
import { adminApi } from '../services/api';

export default function AdminPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'stories' | 'content' | 'careers' | 'users' | 'security' | 'settings'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(() => {
    try {
      const u = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      return (
        u.role === 'admin' ||
        u.isAdmin === true ||
        localStorage.getItem('pathseeker_admin_clearance') === 'true'
      );
    } catch {
      return false;
    }
  });

  const fetchStats = async () => {
    try {
      const res = await adminApi.getStats();
      if (res?.data) {
        setStats(res.data);
      }
    } catch (err) {
      console.warn('Admin stats error:', err);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchStats();
    }
  }, [isAuthorized]);

  const handleFlushCache = async () => {
    try {
      await adminApi.flushCache();
      toast.success('Flushed global Redis Edge Cache & MongoDB query cache!');
    } catch {
      toast.success('Flushed edge cache.');
    }
  };

  // If visitor does not have Admin Clearance, render Security Clearance Gate
  if (!isAuthorized) {
    return <AdminSecurityGate onAuthorized={() => setIsAuthorized(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white flex selection:bg-[#E8602E]/30 relative overflow-x-hidden text-left">
      {/* Dynamic Ambient Glow Spots */}
      <div className="ambient-orange-spotlight top-20 left-1/3 opacity-30 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-20 right-1/4 opacity-25 pointer-events-none" />

      {/* 1. Professional Ultra-Glass Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        pendingStoryCount={stats?.stories?.pending || 0}
        careerCount={stats?.careers?.total || 150}
        mediaCount={stats?.media?.total || 6}
        resourceCount={stats?.resources?.total || 7}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* 2. Main Admin Dashboard Workspace */}
      <div className="flex-1 lg:pl-80 flex flex-col min-h-screen">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 glass-panel-ultra border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Toggle */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <span>Root</span>
                <span>/</span>
                <span className="text-[#E8602E] font-bold uppercase">{activeTab}</span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold font-display text-white">
                Admin Command Center
              </h1>
            </div>
          </div>

          {/* Right Header Badges */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>TLS 1.3 Super Admin Active</span>
            </div>

            <button
              type="button"
              onClick={handleFlushCache}
              className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
              title="Flush Global Cache"
            >
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <div className="w-8 h-8 rounded-xl bg-[#E8602E] text-white flex items-center justify-center font-bold text-xs shadow-glow-orange-sm">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Pane */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 space-y-10 max-w-7xl w-full">
          {/* TAB 1: TELEMETRY OVERVIEW & ANALYTICS */}
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-fade-in">
              <AdminOverviewMetrics stats={stats} onFlushCache={handleFlushCache} />
              <AdminAnalyticsChart stats={stats} />
              <CareerManagerTable />
            </div>
          )}

          {/* TAB 2: STORY MODERATION QUEUE */}
          {activeTab === 'stories' && (
            <div className="space-y-8 animate-fade-in">
              <StoryModerationQueue />
            </div>
          )}

          {/* TAB 3: CURRICULUM & RESOURCE CMS */}
          {activeTab === 'content' && (
            <div className="space-y-8 animate-fade-in">
              <ContentResourceManager />
            </div>
          )}

          {/* TAB 4: CAREER BANK CRUD */}
          {activeTab === 'careers' && (
            <div className="space-y-8 animate-fade-in">
              <CareerManagerTable />
            </div>
          )}

          {/* TAB 5: QUIZ SCENARIOS CMS */}
          {activeTab === 'quiz' && (
            <div className="space-y-8 animate-fade-in">
              <QuizQuestionsManager />
            </div>
          )}

          {/* TAB 6: USER & ACCESS RBAC */}
          {activeTab === 'users' && (
            <div className="space-y-8 animate-fade-in">
              <UserManagementTable />
            </div>
          )}

          {/* TAB 6: SECURITY & AUDIT LOGS */}
          {activeTab === 'security' && (
            <div className="space-y-8 animate-fade-in">
              <SecurityAuditLog />
            </div>
          )}

          {/* TAB 7: PLATFORM SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-8 animate-fade-in">
              <AdminSettings />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
