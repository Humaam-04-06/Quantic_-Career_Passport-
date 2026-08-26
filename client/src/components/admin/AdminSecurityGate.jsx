import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faKey,
  faLock,
  faArrowRightFromBracket,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function AdminSecurityGate({ onAuthorized }) {
  const [passkey, setPasskey] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAuthorize = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanKey = passkey.trim().toUpperCase();

    // Master keys that authorize super admin access
    if (
      cleanKey === 'PATHSEEKER-ADMIN-2026' ||
      cleanKey === '984021' ||
      cleanKey === 'ADMIN' ||
      cleanKey === 'ROOT'
    ) {
      localStorage.setItem('pathseeker_admin_clearance', 'true');
      try {
        const u = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
        u.role = 'admin';
        u.isAdmin = true;
        localStorage.setItem('pathseeker_user', JSON.stringify(u));
        window.dispatchEvent(new Event('authChange'));
      } catch {
        // ignore
      }
      toast.success('Super Administrator clearance granted! Full command authority unlocked.');
      onAuthorized();
    } else {
      toast.error('Invalid Master Key. Super Admin access denied.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center p-4 selection:bg-[#E8602E]/30 relative overflow-hidden">
      {/* Ambient Spotlight refractions */}
      <div className="ambient-orange-spotlight top-1/4 left-1/3 opacity-30 pointer-events-none" />
      <div className="ambient-orange-spotlight bottom-1/4 right-1/3 opacity-25 pointer-events-none" />

      <div className="w-full max-w-md rounded-3xl glass-panel-ultra border border-white/20 p-8 space-y-6 shadow-2xl relative z-10 text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 flex items-center justify-center mx-auto text-2xl shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40 text-xs font-mono font-bold uppercase">
            <FontAwesomeIcon icon={faLock} />
            <span>Restricted Zone</span>
          </div>

          <h2 className="text-2xl font-extrabold text-white">
            Super Admin Clearance Gate
          </h2>

          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            Direct URL access to the Enterprise Admin Console is restricted. Enter your authorized Master Passkey to unlock full authority.
          </p>
        </div>

        <form onSubmit={handleAuthorize} className="space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#D4D4D8] flex items-center justify-between">
              <span>Security Passkey</span>
              <span className="text-[10px] text-[#71717A] font-mono">Hint: PATHSEEKER-ADMIN-2026</span>
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faKey}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"
              />
              <input
                type="password"
                required
                placeholder="Enter Master Admin Key..."
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full glass-input text-xs text-white pl-10 pr-4 py-3 rounded-2xl focus:outline-none font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold shadow-glow-orange-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Verify & Unlock Command Center</span>
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#A1A1AA] hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Return to Candidate Dashboard</span>
        </button>
      </div>
    </div>
  );
}
