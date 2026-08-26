import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faXmark,
  faCheckCircle,
  faQrcode,
  faEnvelope,
  faPaperPlane,
  faSpinner,
  faKey,
  faCopy,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function VerificationModal({
  isOpen,
  onClose,
  passportId,
  candidateName = 'Candidate Passport Holder',
  candidateEmail = '',
  hollandCode = 'IRA-94',
  primaryStream = 'AI Engineering & Machine Learning Systems',
  matchScore = 94,
  onVerified,
}) {
  const [activeTab, setActiveTab] = useState('email'); // 'email' | 'qr'
  const [email, setEmail] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
      return candidateEmail || stored.email || '';
    } catch {
      return candidateEmail || '';
    }
  });
  const [otp, setOtp] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);

  if (!isOpen) return null;

  const verificationUrl = `${window.location.origin}/verify?passportId=${passportId}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    verificationUrl
  )}&bgcolor=08080C&color=E8602E&margin=10`;

  const handleSendCode = async (e) => {
    e?.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/send-verification-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to dispatch verification code');
      }

      setCodeSent(true);
      toast.success(`Verification code sent to ${email}! Check your inbox.`);
    } catch (err) {
      toast.error(err.message || 'Error sending verification email.');
    } finally {
      setIsSending(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      toast.error('Please enter the 6-digit verification code sent to your email.');
      return;
    }

    setIsVerifying(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/verify-passport-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Invalid or expired verification code');
      }

      // Synchronize verified state locally
      try {
        const cleanEmail = email.trim().toLowerCase();
        localStorage.setItem(`pathseeker_verified_${cleanEmail}`, 'true');

        const currentUser = JSON.parse(localStorage.getItem('pathseeker_user') || '{}');
        if (currentUser) {
          currentUser.isVerified = true;
          localStorage.setItem('pathseeker_user', JSON.stringify(currentUser));
        }

        const accounts = JSON.parse(localStorage.getItem('pathseeker_accounts') || '{}');
        if (accounts[cleanEmail]) {
          accounts[cleanEmail].isVerified = true;
          localStorage.setItem('pathseeker_accounts', JSON.stringify(accounts));
        }

        window.dispatchEvent(new Event('authChange'));
      } catch {
        // ignore
      }

      setVerifiedSuccess(true);
      toast.success('Congratulations! Your Career Passport is cryptographically VERIFIED!');
      onVerified?.();

      setTimeout(() => {
        onClose();
        setVerifiedSuccess(false);
        setCodeSent(false);
        setOtp('');
      }, 1600);
    } catch (err) {
      toast.error(err.message || 'Verification failed. Please check the code.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    toast.success('Passport verification URL copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg rounded-[2.5rem] glass-panel-ultra border-2 border-white/20 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_-15px_rgba(232,96,46,0.4)] my-8 text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[10px] font-bold font-mono uppercase tracking-wider mb-2">
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Cryptographic Identity Attestation</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white font-display">
            Verify Digital Passport
          </h3>
          <p className="text-xs text-[#A1A1AA]">
            Authenticate your identity to unlock the verified green badge on your 3D Passport.
          </p>
        </div>

        {/* Tab Toggle: Email Code vs QR Scanner */}
        <div className="flex items-center justify-center p-1 rounded-2xl bg-black/50 border border-white/10 max-w-xs mx-auto text-xs font-bold font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'email'
                ? 'bg-[#10B981] text-black shadow-sm font-extrabold'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email OTP</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-[#E8602E] text-white shadow-glow-orange-sm font-extrabold'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon={faQrcode} />
            <span>QR Scan</span>
          </button>
        </div>

        {/* SUCCESS BANNER */}
        {verifiedSuccess && (
          <div className="p-5 rounded-2xl bg-[#10B981]/20 border-2 border-[#10B981] text-center space-y-2 animate-scale-up">
            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-[#10B981]" />
            <h4 className="text-lg font-extrabold text-white">Passport Verified!</h4>
            <p className="text-xs text-[#D4D4D8]">
              Your candidate profile has been cryptographically signed and the verified green badge is now active.
            </p>
          </div>
        )}

        {/* TAB 1: EMAIL OTP VERIFICATION */}
        {!verifiedSuccess && activeTab === 'email' && (
          <div className="space-y-4 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <label className="text-[11px] font-mono font-bold uppercase text-[#A1A1AA] block">
                Candidate Registered Email
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#10B981] focus:outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={isSending}
                  className="px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-black text-xs font-extrabold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-50 flex-none"
                >
                  {isSending ? (
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span>{codeSent ? 'Resend' : 'Send Code'}</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-[10px] text-[#71717A] block">
                Our SMTP mail service will deliver a 6-digit code directly to this inbox.
              </span>
            </div>

            {/* OTP Entry Form */}
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-1.5 text-center">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4D4D8] block">
                  Enter 6-Digit Verification Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  required
                  className="w-full max-w-xs mx-auto bg-black/60 border-2 border-[#10B981]/50 rounded-2xl py-3 px-4 text-center font-mono text-2xl tracking-[0.4em] text-[#10B981] focus:border-[#10B981] focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                />
              </div>

              <button
                type="submit"
                disabled={isVerifying || otp.length < 6}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-black font-extrabold text-xs font-mono transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
              >
                {isVerifying ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin text-sm" />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faKey} />
                    <span>Verify & Unlock Verified Green Tag</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: HOLOGRAPHIC QR SCANNER */}
        {!verifiedSuccess && activeTab === 'qr' && (
          <div className="space-y-5">
            {/* Holographic QR Scanner Box with Animated Laser Beam */}
            <div className="relative w-52 h-52 mx-auto rounded-3xl p-3 bg-[#08080C] border-2 border-[#E8602E]/60 shadow-[0_0_30px_rgba(232,96,46,0.25)] flex items-center justify-center overflow-hidden group">
              {/* Laser Scanning Line Animation */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8602E] to-transparent shadow-[0_0_15px_#E8602E] animate-pulse top-1/2 -translate-y-1/2 pointer-events-none" />

              <img
                src={qrCodeUrl}
                alt={`Passport QR Code for #${passportId}`}
                className="w-full h-full object-contain rounded-2xl"
              />

              {/* Holographic Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E8602E]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#E8602E]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#E8602E]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E8602E]" />
            </div>

            {/* Passport Ledger Data Details */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="text-[#A1A1AA]">Passport UID:</span>
                <span className="font-mono font-bold text-[#E8602E]">#{passportId}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="text-[#A1A1AA]">Issued Candidate:</span>
                <span className="font-bold text-white truncate max-w-[200px]">{candidateName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A1A1AA]">Holland RIASEC Code:</span>
                <span className="font-mono font-bold text-white">{hollandCode} ({matchScore}% Match)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} />
                <span>{copied ? 'Link Copied!' : 'Copy Verify Link'}</span>
              </button>

              <button
                type="button"
                onClick={() => window.open(qrCodeUrl, '_blank')}
                className="w-full py-3 rounded-xl bg-[#E8602E] hover:bg-[#FF7A45] text-white text-xs font-bold transition-all shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>Open High-Res QR</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
