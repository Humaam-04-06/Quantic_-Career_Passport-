import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faShieldHalved,
  faQrcode,
  faPrint,
  faShareNodes,
  faCheckCircle,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import VerificationModal from './VerificationModal';
import toast from 'react-hot-toast';

export default function PassportCertificate({ analysis, persona, userName }) {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const passportId = useRef(`CP-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`).current;
  const issueDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const resolvedUserName = (() => {
    if (userName) return userName;
    try {
      const stored = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      if (stored && stored.name) return stored.name;
    } catch {
      // ignore
    }
    return 'Candidate Passport Holder';
  })();

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Passport verification link copied to clipboard!');
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* Printable / Viewable Ultra-Glass Passport Certificate */}
      <div
        id="career-passport-card"
        className="w-full rounded-[2.5rem] p-8 sm:p-10 glass-panel-ultra border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden group"
      >
        {/* Background Ambient Glow & Watermark */}
        <div className="ambient-orange-spotlight -top-20 -right-20 opacity-30 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#BC4C22]/10 blur-3xl pointer-events-none" />

        {/* Top Header Row: Branding & Passport Type */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8602E] flex items-center justify-center text-white shadow-glow-orange-sm">
              <FontAwesomeIcon icon={faGraduationCap} className="text-base" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#E8602E] block">
                Official Digital Credential
              </span>
              <h3 className="text-xl font-extrabold font-display text-white tracking-tight">
                PathSeeker <span className="text-[#E8602E]">Career Passport</span>
              </h3>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-[#A1A1AA] block">PASSPORT ID</span>
            <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
              #{passportId}
            </span>
          </div>
        </div>

        {/* Main Passport Identity Body */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center mb-8 relative z-10">
          {/* Col 1: Verified Seal & Stage */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-[#E8602E] mb-3 backdrop-blur-md shadow-inner">
              <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA]">
              Candidate Name
            </span>
            <span className="text-sm font-bold text-white truncate max-w-full">
              {resolvedUserName}
            </span>
          </div>

          {/* Col 2: Primary Stream & Match Percentage */}
          <div className="sm:col-span-2 space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8602E]/20 text-[#E8602E] text-xs font-bold border border-[#E8602E]/40 backdrop-blur-md">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[10px]" />
              <span>{analysis.matchPercentage}% Verified Aptitude Match</span>
            </div>

            <h4 className="text-2xl font-extrabold font-display text-white tracking-tight leading-snug">
              {analysis.primaryStream}
            </h4>

            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              Cognitive Profile: <strong className="text-white">{analysis.cognitiveArchetype}</strong>
            </p>
          </div>
        </div>

        {/* Bottom Passport Specs Bar */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs relative z-10">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#A1A1AA] block">
              Holland RIASEC Code
            </span>
            <span className="font-mono font-bold text-[#E8602E] text-sm">
              {analysis.dominantCodes || 'IA-Tech'}
            </span>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#A1A1AA] block">
              Issue Timestamp
            </span>
            <span className="font-mono font-bold text-white">
              {issueDate}
            </span>
          </div>

          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#A1A1AA] block">
              Verification Status
            </span>
            <span className="text-[#10B981] font-bold flex items-center gap-1">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[10px]" />
              <span>Authenticated</span>
            </span>
          </div>

          {/* Interactive QR Code & Scan Trigger */}
          <button
            type="button"
            onClick={() => setIsVerifyOpen(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-[#E8602E]/20 px-3 py-1.5 rounded-xl border border-white/15 hover:border-[#E8602E]/50 transition-all cursor-pointer group/qr shadow-sm"
            title="Click to Open Cryptographic Scanner & QR Code"
          >
            <FontAwesomeIcon icon={faQrcode} className="text-xl text-white group-hover/qr:text-[#E8602E] transition-colors" />
            <span className="text-[9px] font-mono text-[#D4D4D8] text-left leading-tight">
              SCAN TO<br /><strong className="text-white group-hover/qr:text-[#E8602E]">VERIFY</strong>
            </span>
          </button>
        </div>
      </div>

      {/* Action Buttons for Export & Sharing */}
      <div className="flex flex-wrap items-center gap-3 mt-6 w-full max-w-md">
        <button
          type="button"
          onClick={() => setIsVerifyOpen(true)}
          className="flex-1 py-3 px-4 rounded-2xl bg-white/[0.08] hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faQrcode} className="text-[#E8602E]" />
          <span>Interactive QR Scanner</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="flex-1 btn-primary-orange py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-orange-sm"
        >
          <FontAwesomeIcon icon={faPrint} />
          <span>Export PDF Dossier</span>
        </button>
      </div>

      {/* Interactive Verification & Scanner Modal */}
      <VerificationModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        passportId={passportId}
        candidateName={resolvedUserName}
        hollandCode={analysis.dominantCodes || 'IA-Tech'}
        primaryStream={analysis.primaryStream}
        matchScore={analysis.matchPercentage}
        issueDate={issueDate}
      />
    </div>
  );
}
