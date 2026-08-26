import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faQrcode,
  faDownload,
  faCheckCircle,
  faFingerprint,
  faBrain,
  faBuilding,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function DigitalPassportIDCard({ profile, currentStageConfig }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  const handleDownloadBadge = () => {
    toast.success(`Exporting Digital Passport ID Badge for ${profile.name}!`);
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto perspective-1000 py-4 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Holographic Passport Card Shell */}
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-[2rem] overflow-hidden p-6 sm:p-7 glass-panel-ultra border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(232,96,46,0.35)] space-y-6"
      >
        {/* Iridescent Holographic Glare Layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-color-dodge transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 184, 0, 0.6) 0%, rgba(232, 96, 46, 0.4) 30%, rgba(6, 182, 212, 0.3) 60%, transparent 80%)`,
          }}
        />

        {/* Security Guilloche Circuit Pattern Mask */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />

        {/* Header: Logo, Passport UID & Cryptographic Chip */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E8602E] text-white flex items-center justify-center font-black text-xs shadow-glow-orange-sm">
              QS
            </div>
            <div>
              <span className="text-xs font-extrabold tracking-wider font-display text-white uppercase block">
                PATHSEEKER PASSPORT
              </span>
              <span className="text-[9px] font-mono text-[#A1A1AA] block">
                UID: {profile.passportUid}
              </span>
            </div>
          </div>

          {/* Microchip Graphic & Verified Shield */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-6 rounded-md bg-gradient-to-br from-[#FFB800] to-[#BC4C22] border border-[#FFB800]/60 flex items-center justify-center shadow-sm">
              <div className="w-4 h-3 border border-black/40 rounded-sm" />
            </div>
            <FontAwesomeIcon icon={faShieldHalved} className="text-[#10B981] text-sm" />
          </div>
        </div>

        {/* Candidate Profile Info & Photo */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative flex-none">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#E8602E] shadow-glow-orange-sm"
            />
            <div className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-[#10B981] text-black text-[9px] font-extrabold font-mono flex items-center gap-0.5">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>VERIFIED</span>
            </div>
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-display truncate">
              {profile.name}
            </h3>
            <span className="text-xs font-bold text-[#E8602E] block truncate">
              {profile.targetRole}
            </span>
            <span className="text-[11px] text-[#D4D4D8] block font-mono">
              Target: {profile.targetCompany}
            </span>
          </div>
        </div>

        {/* Cognitive RIASEC & Stage Credentials Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono">
          <div className="space-y-0.5">
            <span className="text-[9px] uppercase text-[#71717A] block">Holland Code</span>
            <span className="text-xs font-extrabold text-[#FFB800] block">
              {profile.hollandCode}
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[9px] uppercase text-[#71717A] block">Career Stage</span>
            <span className="text-xs font-extrabold text-[#10B981] block">
              {profile.roleStage} Track
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[9px] uppercase text-[#71717A] block">Issued / Expiry</span>
            <span className="text-[10px] text-white block">
              {profile.issueDate} - 2029
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[9px] uppercase text-[#71717A] block">Readiness</span>
            <span className="text-xs font-extrabold text-[#E8602E] block">
              {profile.readinessScore}% Level 3
            </span>
          </div>
        </div>

        {/* QR Code & Cryptographic Verification Footer */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
          <div className="space-y-0.5 max-w-[200px]">
            <span className="text-[8px] font-mono text-[#71717A] uppercase block">
              Blockchain Attestation:
            </span>
            <span className="text-[9px] font-mono text-[#A1A1AA] truncate block">
              {profile.verificationHash}
            </span>
          </div>

          {/* Stylized QR Code Visual */}
          <div className="p-1.5 rounded-xl bg-white text-black flex items-center justify-center shadow-md">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4 4h2v4h-2v-4zm-4 2h2v2h-2v-2zm2-4h2v2h-2v-2zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Action Button below Card */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleDownloadBadge}
          className="px-5 py-2.5 rounded-2xl bg-white/[0.08] hover:bg-[#E8602E] text-white text-xs font-bold transition-all border border-white/15 flex items-center gap-2 cursor-pointer shadow-glass hover:scale-105"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Save Digital Passport Badge</span>
        </button>
      </div>
    </div>
  );
}
