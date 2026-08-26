import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faLock,
  faArrowRight,
  faXmark,
  faUserPlus,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

export default function AuthPromptModal({
  isOpen,
  onClose,
  title = 'Sign In Required',
  message = 'Please sign in or create an account to save career blueprints, track 90-day roadmaps, and sync your digital Career Passport.',
}) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-md rounded-[2.5rem] glass-panel-ultra border-2 border-white/20 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_-15px_rgba(232,96,46,0.4)] my-8 text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>

        {/* Shield Glow Icon */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 flex items-center justify-center text-2xl shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faLock} />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase text-[#E8602E] tracking-widest block">
            Passport Authentication
          </span>
          <h3 className="text-2xl font-extrabold text-white font-display">
            {title}
          </h3>
          <p className="text-xs text-[#D4D4D8] leading-relaxed max-w-sm mx-auto">
            {message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('/login');
            }}
            className="w-full py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs sm:text-sm font-extrabold shadow-glow-orange-sm cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>Sign In to Account</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('/register');
            }}
            className="w-full py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/15 text-white text-xs sm:text-sm font-bold border border-white/15 cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Create Free Career Passport</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-[#71717A] hover:text-[#A1A1AA] transition-colors pt-1 block mx-auto"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
