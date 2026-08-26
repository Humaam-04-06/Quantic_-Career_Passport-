import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faArrowRight,
  faPaperPlane,
  faHeart,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import toast from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Subscribed! You will receive weekly career trend insights.');
    setEmail('');
  };

  return (
    <footer className="relative bg-[#000000] border-t border-white/10 text-[#D4D4D8] pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-orange-spotlight -bottom-40 left-1/2 -translate-x-1/2 opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1 & 2: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/favicon-05.png"
                alt="PathSeeker Logo"
                className="w-8 h-8 rounded-xl object-contain drop-shadow-[0_2px_10px_rgba(232,96,46,0.5)]"
              />
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                Path<span className="text-[#E8602E]">Seeker</span>
              </span>
            </Link>

            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm">
              Empowering students, graduates, and working professionals to discover tailored career paths, AI-matched streams, and verified learning milestones.
            </p>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-sm">
              <span className="text-xs font-bold text-white block mb-2">
                Subscribe for Weekly Career Trends
              </span>
              <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel-ultra">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white text-xs px-3.5 py-2 focus:outline-none placeholder-[#71717A]"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary-orange text-xs px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-glow-orange-sm flex-shrink-0"
                >
                  <span>Join</span>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-[10px]" />
                </button>
              </div>
            </form>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
              <li>
                <Link to="/careers" className="hover:text-[#E8602E] transition-colors">Career Bank</Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#E8602E] transition-colors">AI Interest Quiz</Link>
              </li>
              <li>
                <Link to="/multimedia" className="hover:text-[#E8602E] transition-colors">Multimedia Center</Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-[#E8602E] transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#E8602E] transition-colors">Document Library</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Career Passports */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Career Passports
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
              <li>
                <Link to="/quiz?role=student" className="hover:text-[#E8602E] transition-colors">Student Passport</Link>
              </li>
              <li>
                <Link to="/careers?stage=graduate" className="hover:text-[#E8602E] transition-colors">Graduate Passport</Link>
              </li>
              <li>
                <Link to="/careers?stage=professional" className="hover:text-[#E8602E] transition-colors">Professional Pivot</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#E8602E] transition-colors">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: TechWiz & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Competition Info
            </h4>
            <div className="p-4 rounded-2xl glass-panel-ultra space-y-1.5 text-xs text-[#A1A1AA]">
              <p className="text-white font-bold">TechWiz 6 Global</p>
              <p className="text-[11px]">Category: Full-Stack Web Application</p>
              <p className="text-[11px] text-[#E8602E]">Theme: Career Passport</p>
            </div>

            <div className="flex items-center gap-3 mt-4 text-[#A1A1AA]">
              <a href="#" className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all backdrop-blur-sm">
                <FontAwesomeIcon icon={faGithub} className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all backdrop-blur-sm">
                <FontAwesomeIcon icon={faLinkedin} className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all backdrop-blur-sm">
                <FontAwesomeIcon icon={faTwitter} className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all backdrop-blur-sm">
                <FontAwesomeIcon icon={faDiscord} className="text-xs" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© 2026 PathSeeker • Global Career Passport System. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
