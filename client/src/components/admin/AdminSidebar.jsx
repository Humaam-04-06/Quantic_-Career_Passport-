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
  faUsers,
  faBrain,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function AdminSidebar({
  activeTab,
  onTabChange,
  pendingStoryCount = 0,
  careerCount = 150,
  mediaCount = 6,
  resourceCount = 7,
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
      id: 'stories',
      name: 'Story Moderation',
      icon: faStar,
      badge: `${pendingStoryCount} Pending`,
      badgeColor: 'bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/30',
    },
    {
      id: 'content',
      name: 'Curriculum & Vault CMS',
      icon: faFolderOpen,
      badge: `${mediaCount + resourceCount} Items`,
      badgeColor: 'bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30',
    },
    {
      id: 'careers',
      name: 'Career Bank CRUD',
      icon: faBriefcase,
      badge: `${careerCount} Roles`,
      badgeColor: 'bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]/30',
    },
    {
      id: 'quiz',
      name: 'Quiz Scenarios CMS',
      icon: faBrain,
      badge: 'RIASEC',
      badgeColor: 'bg-[#FF7A45]/20 text-[#FF7A45] border-[#FF7A45]/30',
    },
    {
      id: 'users',
      name: 'User & Access RBAC',
      icon: faUsers,
      badge: 'Protected',
      badgeColor: 'bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/30',
    },
    {
      id: 'security',
      name: 'Security & Audit Logs',
      icon: faShieldHalved,
      badge: 'Active',
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
              <img
                src="/favicon-05.png"
                alt="PathSeeker Logo"
                className="w-10 h-10 rounded-2xl object-contain shadow-glow-orange-sm group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="text-sm font-extrabold font-display tracking-wider text-white uppercase block">
                  PATHSEEKER ROOT
                </span>
                <span className="text-[10px] font-mono text-[#E8602E] font-bold block flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>SUPER ADMIN ENGINE</span>
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-2 rounded-xl bg-white/5 text-white"
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
                    onClose?.();
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E8602E] text-white shadow-glow-orange-sm'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]'
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
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                        isActive ? 'bg-black/30 text-white border-white/20' : tab.badgeColor
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

        {/* Bottom System Health Pill */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#A1A1AA] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faServer} className="text-[#10B981]" />
                <span>Atlas Cluster</span>
              </span>
              <span className="text-[#10B981] font-bold">Optimal (99.98%)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-full h-full bg-[#10B981] rounded-full" />
            </div>
          </div>

          <Link
            to="/dashboard"
            className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/15 text-[#D4D4D8] hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>Return to Candidate View</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
