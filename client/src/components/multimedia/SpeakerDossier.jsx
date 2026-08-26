import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBuilding,
  faEnvelope,
  faAward,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';

export default function SpeakerDossier({ speaker = {} }) {
  const [hasRequested, setHasRequested] = useState(false);

  const safeSpeaker = {
    name: speaker?.name || 'Dr. Elena Rostova',
    role: speaker?.role || 'Principal AI Scientist',
    organization: speaker?.organization || 'DeepMind Labs / Stanford AI',
    avatar: speaker?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: speaker?.bio || 'Pioneered distributed quantization algorithms deployed in production across major foundation models. Keynote speaker at NeurIPS and ICML.',
    verified: speaker?.verified !== false,
    linkedin: speaker?.linkedin || 'https://linkedin.com',
    github: speaker?.github || 'https://github.com',
  };

  const handleConnect = () => {
    setHasRequested(true);
    toast.success(`Mentorship request dispatched to ${safeSpeaker.name}!`);
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra border border-white/10 p-6 space-y-5 shadow-glass text-left">
      {/* Header Tag */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E8602E] uppercase font-mono">
          <FontAwesomeIcon icon={faAward} />
          <span>Faculty & Keynote Mentor</span>
        </div>
        {safeSpeaker.verified && (
          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[10px] font-bold flex items-center gap-1 font-mono">
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Verified</span>
          </span>
        )}
      </div>

      {/* Speaker Identity Info (Stacked neatly for sidebar) */}
      <div className="flex items-center gap-4">
        <img
          src={safeSpeaker.avatar}
          alt={safeSpeaker.name}
          className="w-16 h-16 rounded-2xl object-cover border-2 border-[#E8602E] shadow-glow-orange-sm flex-none"
        />

        <div className="space-y-1 min-w-0 flex-1">
          <h4 className="text-base font-extrabold text-white truncate">
            {safeSpeaker.name}
          </h4>
          <p className="text-xs font-semibold text-[#E8602E] truncate">
            {safeSpeaker.role}
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] truncate">
            <FontAwesomeIcon icon={faBuilding} className="text-[#71717A] text-[10px]" />
            <span className="truncate">{safeSpeaker.organization}</span>
          </div>
        </div>
      </div>

      {/* Bio Paragraph */}
      {safeSpeaker.bio && (
        <p className="text-xs text-[#D4D4D8] leading-relaxed line-clamp-3">
          {safeSpeaker.bio}
        </p>
      )}

      {/* Full-width Request Mentorship CTA */}
      <button
        type="button"
        disabled={hasRequested}
        onClick={handleConnect}
        className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#E8602E] to-[#BC4C22] hover:from-[#FF7A45] hover:to-[#E8602E] text-white text-xs font-extrabold shadow-glow-orange-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
      >
        <FontAwesomeIcon icon={hasRequested ? faCheckCircle : faPaperPlane} className="text-xs" />
        <span>{hasRequested ? 'Mentorship Request Sent' : 'Request 1-on-1 Mentorship'}</span>
      </button>

      {/* Social Links Grid */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
        <a
          href={safeSpeaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] text-[#A1A1AA] border border-white/10 text-xs font-bold transition-colors flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>

        <a
          href={safeSpeaker.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/20 hover:text-white text-[#A1A1AA] border border-white/10 text-xs font-bold transition-colors flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
