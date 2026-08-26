import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBuilding,
  faEnvelope,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';

export default function SpeakerDossier({ speaker }) {
  const handleConnect = () => {
    toast.success(`Mentorship invitation sent to ${speaker.name}!`);
  };

  return (
    <div className="w-full rounded-3xl glass-panel-ultra p-6 sm:p-8 space-y-6 shadow-glass">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faAward} className="text-[#E8602E] text-sm" />
        <h3 className="text-lg font-bold text-white">Mentor & Speaker Dossier</h3>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <img
          src={speaker.avatar}
          alt={speaker.name}
          className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E8602E] shadow-glow-orange-sm flex-none"
        />

        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base sm:text-lg font-extrabold text-white">
              {speaker.name}
            </h4>
            {speaker.verified && (
              <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 text-[10px] font-bold flex items-center gap-1">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Verified Mentor</span>
              </span>
            )}
          </div>

          <p className="text-xs font-semibold text-[#E8602E]">{speaker.role}</p>

          <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
            <FontAwesomeIcon icon={faBuilding} className="text-[#71717A]" />
            <span>{speaker.organization}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleConnect}
          className="self-stretch sm:self-auto px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-[#E8602E] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/15 hover:border-[#E8602E] cursor-pointer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Request Mentorship</span>
        </button>
      </div>

      <p className="text-xs text-[#D4D4D8] leading-relaxed pt-3 border-t border-white/10">
        {speaker.bio}
      </p>

      {/* Social Verification Badges */}
      <div className="flex items-center gap-3 pt-2">
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] text-[#A1A1AA] border border-white/10 text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>

        <a
          href={speaker.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/20 hover:text-white text-[#A1A1AA] border border-white/10 text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
