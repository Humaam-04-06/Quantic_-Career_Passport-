import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWrench,
  faGear,
  faTriangleExclamation,
  faArrowsRotate,
  faShieldHalved,
  faUserShield,
  faCheck,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export default function MaintenanceModal() {
  const { user, isAdmin, isMaintenance, setMaintenanceMode, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isChecking, setIsChecking] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Turn off maintenance mode (Admin action)
  const handleDisableMaintenance = () => {
    setMaintenanceMode(false);
    toast.success('Maintenance mode disabled. Public access restored!');
  };

  // Re-check status
  const handleRecheckStatus = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      if (!isMaintenance) {
        toast.success('System maintenance completed! Platform is online.');
      } else {
        toast.error('System is still undergoing scheduled maintenance.');
      }
    }, 500);
  };

  // Direct Admin Login from Maintenance screen
  const handleAdminDirectLogin = async (e) => {
    e.preventDefault();
    if (!adminEmail || !adminPassword) {
      toast.error('Please enter admin email and password.');
      return;
    }

    setIsLoggingIn(true);
    try {
      const res = await login(adminEmail.trim(), adminPassword);
      if (res?.user && (res.user.role === 'admin' || res.user.isAdmin)) {
        toast.success(`Welcome Super Admin, ${res.user.name || 'Admin'}!`);
        setShowAdminLogin(false);
      } else {
        toast.error('Access Denied: Account does not have Super Administrator clearance.');
      }
    } catch {
      toast.error('Invalid administrator credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // 1. If Maintenance Mode is OFF, render nothing
  if (!isMaintenance) return null;

  // 2. If user is ADMIN: render a non-intrusive floating cyber capsule at bottom-left
  //    (Leaves the top navbar and Admin Header 100% visible and unblocked!)
  if (isAdmin) {
    return (
      <aside aria-label="Maintenance Status" className="fixed bottom-6 left-6 z-50 animate-bounce-subtle pointer-events-auto">
        <div className="bg-[#121215]/95 backdrop-blur-xl text-white px-4 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-[#E8602E]/60 flex items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8602E] animate-ping" />
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-[#E8602E]" />
            <span className="font-bold text-white hidden sm:inline">
              Maintenance Active <span className="text-[#A1A1AA] font-normal">(Public Restricted)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 border-l border-white/10 pl-2">
            <button
              type="button"
              onClick={handleDisableMaintenance}
              className="px-3 py-1 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white font-bold transition-all cursor-pointer shadow-glow-orange-sm text-[11px]"
            >
              Turn Off
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // 3. If user is on /login page, allow rendering the login page
  if (location.pathname === '/login') {
    return null;
  }

  // 4. For PUBLIC USERS: render the blocking full-screen uncloseable Maintenance Screen
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-[#050508] text-white overflow-hidden select-none">
      {/* Dynamic Cyber Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E8602E]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Card (Uncloseable) */}
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-ultra border border-white/20 p-6 sm:p-10 text-center space-y-6 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
        {/* Brand Logo & Maintenance Emblem */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#E8602E]/20 to-black/80 border border-[#E8602E]/40 flex items-center justify-center shadow-glow-orange">
              <img
                src="/favicon-05.png"
                alt="PathSeeker Logo"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#E8602E] border-2 border-black flex items-center justify-center text-white text-xs animate-bounce">
              <FontAwesomeIcon icon={faWrench} />
            </div>
          </div>

          <span className="px-3.5 py-1 rounded-full bg-[#E8602E]/15 border border-[#E8602E]/40 text-[#E8602E] text-[11px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8602E] animate-ping" />
            <span>Scheduled System Maintenance</span>
          </span>
        </div>

        {/* Title & Message */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Systems Under Maintenance
          </h1>
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm mx-auto">
            PathSeeker is currently undergoing scheduled database schema indexing and cloud cluster optimization. Public access will resume shortly.
          </p>
        </div>

        {/* Technical Status Grid */}
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-black/60 border border-white/10 text-left font-mono text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#71717A] uppercase block">Platform State</span>
            <span className="text-[#FFB800] font-bold block flex items-center gap-1 text-[11px]">
              <FontAwesomeIcon icon={faGear} className="animate-spin text-[9px]" />
              <span>Optimizing</span>
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] text-[#71717A] uppercase block">Data Integrity</span>
            <span className="text-[#10B981] font-bold block flex items-center gap-1 text-[11px]">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[9px]" />
              <span>Encrypted</span>
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] text-[#71717A] uppercase block">Duration</span>
            <span className="text-[#06B6D4] font-bold block text-[11px]">Few Mins</span>
          </div>
        </div>

        {/* Interactive Actions / Embedded Admin Sign In Form */}
        {!showAdminLogin ? (
          <div className="space-y-3 pt-1">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRecheckStatus}
                disabled={isChecking}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/20 text-white font-mono text-xs font-bold transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <FontAwesomeIcon icon={faArrowsRotate} className={isChecking ? 'animate-spin text-[#E8602E]' : ''} />
                <span>{isChecking ? 'Checking System...' : 'Re-check Status'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowAdminLogin(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-glow-orange-sm"
              >
                <FontAwesomeIcon icon={faUserShield} />
                <span>Admin Sign In</span>
              </button>
            </div>
          </div>
        ) : (
          /* Embedded Admin Sign In Box */
          <form onSubmit={handleAdminDirectLogin} className="p-4 rounded-2xl bg-black/70 border border-white/15 text-left space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                <FontAwesomeIcon icon={faUserShield} className="text-[#E8602E]" />
                <span>Super Admin Clearance Sign In</span>
              </span>
              <button
                type="button"
                onClick={() => setShowAdminLogin(false)}
                className="text-[11px] text-[#71717A] hover:text-white font-mono cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-[#A1A1AA] font-mono uppercase block">Admin Email</label>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-xs" />
                <input
                  type="email"
                  required
                  placeholder="admin@pathseeker.com"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E8602E] font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-[#A1A1AA] font-mono uppercase block">Admin Password</label>
              <div className="relative">
                <FontAwesomeIcon icon={faKey} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-xs" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E8602E] font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-glow-orange-sm mt-2"
            >
              <FontAwesomeIcon icon={faCheck} />
              <span>{isLoggingIn ? 'Authenticating Clearance...' : 'Verify Admin Clearance'}</span>
            </button>
          </form>
        )}

        {/* Preservation Guarantee Note */}
        <p className="text-[11px] text-[#71717A] font-mono">
          🔒 All candidate digital passports, Hollands RIASEC assessments, and quiz records are fully preserved and secure.
        </p>
      </div>
    </div>
  );
}
