import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWrench,
  faGear,
  faTriangleExclamation,
  faArrowsRotate,
  faShieldHalved,
  faLock,
  faUserShield,
  faServer,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function MaintenanceModal() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check user
  const getCurrentUser = () => {
    try {
      return JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
    } catch {
      return null;
    }
  };

  // Helper to check maintenance mode
  const getMaintenanceMode = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('pathseeker_platform_settings') || 'null');
      if (saved && typeof saved.maintenanceMode === 'boolean') {
        return saved.maintenanceMode;
      }
      return localStorage.getItem('pathseeker_maintenance_mode') === 'true';
    } catch {
      return false;
    }
  };

  const [isMaintenance, setIsMaintenance] = useState(getMaintenanceMode);
  const [currentUser, setCurrentUser] = useState(getCurrentUser);
  const [isChecking, setIsChecking] = useState(false);

  // Synchronize state across tabs and local events
  useEffect(() => {
    const handleSync = () => {
      setIsMaintenance(getMaintenanceMode());
      setCurrentUser(getCurrentUser());
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('platformSettingsChange', handleSync);
    window.addEventListener('authChange', handleSync);
    window.addEventListener('userUpdate', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('platformSettingsChange', handleSync);
      window.removeEventListener('authChange', handleSync);
      window.removeEventListener('userUpdate', handleSync);
    };
  }, []);

  const isAdmin = currentUser && (currentUser.role === 'admin' || currentUser.isAdmin === true);

  // Lock body scroll when maintenance modal is active for public users
  useEffect(() => {
    if (isMaintenance && !isAdmin && location.pathname !== '/login') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMaintenance, isAdmin, location.pathname]);

  // Disable maintenance mode directly from admin banner
  const handleDisableMaintenance = () => {
    try {
      const currentSettings = JSON.parse(localStorage.getItem('pathseeker_platform_settings') || '{}');
      const updated = { ...currentSettings, maintenanceMode: false };
      localStorage.setItem('pathseeker_platform_settings', JSON.stringify(updated));
      localStorage.setItem('pathseeker_maintenance_mode', 'false');
      window.dispatchEvent(new Event('platformSettingsChange'));
      window.dispatchEvent(new Event('storage'));
      setIsMaintenance(false);
      toast.success('Maintenance mode disabled. Public access restored!');
    } catch {
      toast.error('Failed to update maintenance settings.');
    }
  };

  // Re-check maintenance status
  const handleRecheckStatus = () => {
    setIsChecking(true);
    setTimeout(() => {
      const active = getMaintenanceMode();
      setIsMaintenance(active);
      setIsChecking(false);
      if (!active) {
        toast.success('System maintenance completed! Platform is online.');
      } else {
        toast.error('System is still undergoing scheduled maintenance.');
      }
    }, 700);
  };

  // If maintenance mode is OFF, render nothing
  if (!isMaintenance) return null;

  // If user is ADMIN: show an administrative top banner and allow full site access
  if (isAdmin) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#E8602E] text-white px-4 py-2 text-xs font-mono font-bold flex flex-wrap items-center justify-between gap-2 shadow-2xl border-b border-black/20">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-black animate-pulse" />
          <span>MAINTENANCE MODE ACTIVE: Public candidate traffic is currently restricted to maintenance screen.</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/admin"
            className="px-2.5 py-1 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors"
          >
            Admin Console
          </Link>
          <button
            type="button"
            onClick={handleDisableMaintenance}
            className="px-3 py-1 rounded-lg bg-black text-white hover:bg-white hover:text-black transition-all cursor-pointer shadow-sm"
          >
            Turn Off Maintenance
          </button>
        </div>
      </div>
    );
  }

  // If user is NOT admin, and currently on /login, allow them to attempt logging in
  if (location.pathname === '/login') {
    return null;
  }

  // For all PUBLIC non-admin users: render full-screen blocking Maintenance Modal
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      {/* Background Cyber Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8602E]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFB800]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-xl rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-10 text-center space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
        {/* Brand Logo & Animated Maintenance Beacon */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#E8602E]/20 to-black/80 border border-[#E8602E]/40 flex items-center justify-center shadow-glow-orange">
              <img
                src="/favicon-05.png"
                alt="PathSeeker"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#E8602E] border-2 border-black flex items-center justify-center text-white text-xs animate-bounce">
              <FontAwesomeIcon icon={faWrench} />
            </div>
          </div>

          <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/15 border border-[#E8602E]/40 text-[#E8602E] text-[11px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8602E] animate-ping" />
            <span>Scheduled Maintenance</span>
          </span>
        </div>

        {/* Modal Title & Explanation */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Systems Under Maintenance
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-md mx-auto">
            PathSeeker is currently undergoing scheduled database indexing, cloud cluster synchronization, and performance optimization.
          </p>
        </div>

        {/* Technical Status Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-2xl bg-black/60 border border-white/10 text-left font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[10px] text-[#71717A] uppercase block">Platform State</span>
            <span className="text-[#FFB800] font-bold block flex items-center gap-1">
              <FontAwesomeIcon icon={faGear} className="animate-spin text-[10px]" />
              <span>Optimizing</span>
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#71717A] uppercase block">Data Integrity</span>
            <span className="text-[#10B981] font-bold block flex items-center gap-1">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[10px]" />
              <span>100% Encrypted</span>
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 space-y-1">
            <span className="text-[10px] text-[#71717A] uppercase block">Estimated Duration</span>
            <span className="text-[#06B6D4] font-bold block">Few Minutes</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleRecheckStatus}
            disabled={isChecking}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/20 text-white font-mono text-xs font-bold transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <FontAwesomeIcon icon={faArrowsRotate} className={isChecking ? 'animate-spin' : ''} />
            <span>{isChecking ? 'Checking System...' : 'Re-check Status'}</span>
          </button>

          <Link
            to="/login"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-glow-orange-sm"
          >
            <FontAwesomeIcon icon={faUserShield} />
            <span>Admin Sign In</span>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] text-[#71717A] font-mono">
          We apologize for the brief interruption. All candidate roadmaps, quiz results, and passports are safely preserved.
        </p>
      </div>
    </div>
  );
}
