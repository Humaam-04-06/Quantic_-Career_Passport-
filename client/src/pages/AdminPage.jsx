import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faShieldHalved,
  faServer,
  faCheckCircle,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminOverviewMetrics from '../components/admin/AdminOverviewMetrics';
import AdminAnalyticsChart from '../components/admin/AdminAnalyticsChart';
import CareerManagerTable from '../components/admin/CareerManagerTable';
import StoryModerationQueue from '../components/admin/StoryModerationQueue';
import ContentResourceManager from '../components/admin/ContentResourceManager';
import SecurityAuditLog from '../components/admin/SecurityAuditLog';
import AdminSettings from '../components/admin/AdminSettings';
import { PENDING_MODERATION_STORIES } from '../data/adminData';
import { CAREERS_DATABASE } from '../data/careersData';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'careers' | 'stories' | 'content' | 'security' | 'settings'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFlushCache = () => {
    toast.success('Flushed global Redis Edge Cache for all 150+ career pathways!');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex selection:bg-[#E8602E]/30 relative overflow-x-hidden">
      {/* Dynamic Ambient Glow Spots */}
      <div className="ambient-orange-spotlight top-20 left-1/3 opacity-30 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-20 right-1/4 opacity-25 pointer-events-none" />

      {/* 1. Professional Ultra-Glass Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        pendingStoryCount={PENDING_MODERATION_STORIES.length}
        careerCount={CAREERS_DATABASE.length}
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
              <span>TLS 1.3 Secure Session</span>
            </div>

            <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-xs text-[#D4D4D8]">
              <FontAwesomeIcon icon={faBell} />
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <div className="w-8 h-8 rounded-xl bg-[#E8602E] text-white flex items-center justify-center font-bold text-xs">
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
              <AdminOverviewMetrics onFlushCache={handleFlushCache} />
              <AdminAnalyticsChart />
              <CareerManagerTable />
            </div>
          )}

          {/* TAB 2: CAREER BANK CRUD */}
          {activeTab === 'careers' && (
            <div className="animate-fade-in">
              <CareerManagerTable />
            </div>
          )}

          {/* TAB 3: STORY MODERATION QUEUE */}
          {activeTab === 'stories' && (
            <div className="animate-fade-in">
              <StoryModerationQueue />
            </div>
          )}

          {/* TAB 4: CONTENT & VAULT MANAGER */}
          {activeTab === 'content' && (
            <div className="animate-fade-in">
              <ContentResourceManager />
            </div>
          )}

          {/* TAB 5: SECURITY AUDIT STREAM */}
          {activeTab === 'security' && (
            <div className="animate-fade-in">
              <SecurityAuditLog />
            </div>
          )}

          {/* TAB 6: SETTINGS & APIS */}
          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <AdminSettings />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
