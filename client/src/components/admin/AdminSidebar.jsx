import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faBriefcase,
  faStar,
  faFolderOpen,
  faShieldHalved,
  faGear,
  faArrowRightFromBracket,
  faServer,
  faCircleCheck,
  faBolt,
  faCompass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { SYSTEM_HEALTH_METRICS } from '../../data/adminData';

export default function AdminSidebar({
  activeTab,
  onTabChange,
  pendingStoryCount,
  careerCount,
  isOpen,
  onClose,
}) {
  const navTabs = [
    {
      id: 'overview',
      name: 'Telemetry Overview',
      icon: faChartPie,
      badge: 'Live',
      badgeColor: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
    },
    {
      id: 'careers',
      name: 'Career Bank CRUD',
      icon: faBriefcase,
      badge: `${careerCount || 150} Roles`,
      badgeColor: 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]/30',
    },
    {
      id: 'stories',
      name: 'Story Moderation',
      icon: faStar,
      badge: `${pendingStoryCount} Pending`,
      badgeColor: 'bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/30',
    },
    {
      id: 'content',
      name: 'Content & Vault Hub',
      icon: faFolderOpen,
      badge: '12 Items',
      badgeColor: 'bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30',
    },
    {
      id: 'security',
      name: 'Security & Audit Logs',
      icon: faShieldHalved,
      badge: 'Protected',
      badgeColor: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
    },
    {
      id: 'settings',
      name: 'Platform Settings',
      icon: faGear,
      badge: null,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-80 glass-panel-ultra border-r border-white/15 p-6 flex flex-col justify-between transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header: Brand & Identity */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E8602E] to-[#BC4C22] text-white flex items-center justify-center font-black text-sm shadow-glow-orange-sm group-hover:scale-105 transition-transform">
                QS
              </div>
              <div>
                <span className="text-sm font-extrabold font-display tracking-wider text-white uppercase block">
                  PATHSEEKER ROOT
                </span>
                <span className="text-[10px] font-mono text-[#E8602E] font-bold block flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  SUPER ADMIN CONSOLE
                </span>
              </div>
            </Link>

            {/* Mobile Close */}
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-2 text-[#A1A1AA] hover:text-white"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onTabChange(tab.id);
                    onClose();
                  }}
                  className={`w-full p-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#E8602E] text-white shadow-glow-orange-sm translate-x-1'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={tab.icon}
                      className={isActive ? 'text-white' : 'text-[#E8602E]'}
                    />
                    <span>{tab.name}</span>
                  </div>

                  {tab.badge && (
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                        isActive
                          ? 'bg-black/30 text-white border-transparent'
                          : tab.badgeColor
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom System Health Widget & Exit Action */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          {/* Live Microservices Telemetry */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#A1A1AA] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faServer} className="text-[#E8602E]" />
                <span>Microservices</span>
              </span>
              <span className="text-[#10B981] font-bold">6/6 Online</span>
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#A1A1AA]">CPU / RAM Load:</span>
              <span className="text-white font-bold">{SYSTEM_HEALTH_METRICS.cpuUsage}% / 1.2GB</span>
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#A1A1AA]">Gemini AI Latency:</span>
              <span className="text-[#FFB800] font-bold">185ms</span>
            </div>
          </div>

          {/* Return to Public Portal */}
          <Link
            to="/dashboard"
            className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/15 text-[#D4D4D8] hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faCompass} />
            <span>Switch to Candidate View</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
