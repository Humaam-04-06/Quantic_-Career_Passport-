import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faEnvelope,
  faLock,
  faKey,
  faArrowRight,
  faXmark,
  faCheckCircle,
  faSpinner,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { authApi } from '../../services/api';
import toast from 'react-hot-toast';

export default function ForgotPasswordModal({ isOpen, onClose, onSuccess, initialEmail = '' }) {
  const [step, setStep] = useState(1); // 1 = Enter Email, 2 = Enter OTP & New Password
  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewOtp, setPreviewOtp] = useState('');

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail, isOpen]);

  if (!isOpen) return null;

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    try {
      // Call backend API /api/v1/auth/forgot-password
      const res = await fetch('http://localhost:5000/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to send OTP email');
      }

      toast.success(`Verification email dispatched to ${email}! Check your inbox.`);
      if (data.devOtp) {
        setPreviewOtp(data.devOtp);
      }
      setStep(2);
    } catch (err) {
      toast.error(err.message || 'Could not send verification email.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      toast.error('Please enter the 6-digit OTP code sent to your email.');
      return;
    }
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          otp: otp.trim(),
          newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Password reset failed');
      }

      // Synchronize new password to local account cache
      try {
        const userEmail = email.trim().toLowerCase();
        const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
        if (accounts[userEmail]) {
          accounts[userEmail].password = newPassword;
          localStorage.setItem('pathseeker_accounts', JSON.stringify(accounts));
        }
        const currentUser = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
        if (currentUser && currentUser.email?.toLowerCase() === userEmail) {
          currentUser.password = newPassword;
          localStorage.setItem('pathseeker_user', JSON.stringify(currentUser));
        }
      } catch {
        // ignore
      }

      toast.success('Password reset successfully! You can now log in.');
      onSuccess?.();
      onClose();
    } catch (err) {
      toast.error(err.message || 'Invalid or expired OTP code.');
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Icon & Title */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-[#E8602E]/20 text-[#E8602E] border border-[#E8602E]/40 flex items-center justify-center text-2xl shadow-glow-orange-sm">
          <FontAwesomeIcon icon={faKey} />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-[#E8602E] tracking-widest block">
            {step === 1 ? 'Step 1 of 2 • Email Verification' : 'Step 2 of 2 • Secure Reset'}
          </span>
          <h3 className="text-2xl font-extrabold text-white font-display">
            {step === 1 ? 'Forgot Password' : 'Enter OTP & New Password'}
          </h3>
          <p className="text-xs text-[#D4D4D8]">
            {step === 1
              ? 'Enter your registered email and our SMTP service will dispatch a 6-digit one-time code.'
              : `We sent a 6-digit code to ${email}. Enter it below along with your new password.`}
          </p>
        </div>

        {/* STEP 1: ENTER EMAIL */}
        {step === 1 && (
          <form onSubmit={handleRequestOtp} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider font-mono">
                Registered Email
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#71717A]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  required
                  className="w-full bg-black/50 border border-white/15 rounded-2xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-[#52525B] focus:border-[#E8602E] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold font-mono transition-all shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Send Reset OTP Email</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* STEP 2: ENTER OTP & NEW PASSWORD */}
        {step === 2 && (
          <form onSubmit={handleResetPassword} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider font-mono">
                6-Digit Email OTP
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                required
                className="w-full bg-black/50 border border-white/15 rounded-2xl py-3 px-4 text-center font-mono text-lg tracking-widest text-[#FF7A45] focus:border-[#E8602E] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider font-mono">
                New Password
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#71717A]" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  className="w-full bg-black/50 border border-white/15 rounded-2xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-[#52525B] focus:border-[#E8602E] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider font-mono">
                Confirm New Password
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#71717A]" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm matching password"
                  required
                  className="w-full bg-black/50 border border-white/15 rounded-2xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-[#52525B] focus:border-[#E8602E] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold font-mono transition-all shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Update Password & Complete</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
