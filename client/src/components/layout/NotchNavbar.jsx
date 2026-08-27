import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faRocket,
  faBars,
  faXmark,
  faArrowRightFromBracket,
  faUser,
  faCompass,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

export default function NotchNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('pathseeker_user') ||
        localStorage.getItem('user') ||
        'null'
      );
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Base navigation links (NO 'Overview')
  const baseNavLinks = [
    { name: 'Careers', path: '/careers' },
    { name: 'Interest Quiz', path: '/quiz' },
    { name: 'Multimedia', path: '/multimedia' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Resource Library', path: '/resources' },
  ];

  // Include 'Dashboard' and 'Admin Console' when user is logged in
  const navLinks = [
    ...baseNavLinks,
    ...(currentUser ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
    ...(currentUser && (currentUser.role === 'admin' || currentUser.isAdmin)
      ? [{ name: 'Admin Console', path: '/admin' }]
      : []),
  ];

  const pillRef = useRef(null);
  const containerRef = useRef(null);

  // Sync auth state on storage/authChange event
  useEffect(() => {
    const checkAuth = () => {
      try {
        const u = JSON.parse(
          localStorage.getItem('pathseeker_user') ||
          localStorage.getItem('user') ||
          'null'
        );
        setCurrentUser(u);
      } catch {
        setCurrentUser(null);
      }
    };

    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);
    window.addEventListener('profileChange', checkAuth);
    window.addEventListener('userUpdate', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
      window.removeEventListener('profileChange', checkAuth);
      window.removeEventListener('userUpdate', checkAuth);
    };
  }, []);

  // Sync active tab with current URL
  useEffect(() => {
    const current = navLinks.find((item) => item.path === location.pathname);
    if (current) {
      setActiveTab(current.name);
    } else {
      setActiveTab('');
    }
  }, [location.pathname, currentUser]);

  // GSAP magnetic active hover pill animation
  const handleMouseEnter = (e) => {
    if (!pillRef.current || !containerRef.current) return;
    const linkEl = e.currentTarget;
    const containerRect = containerRef.current.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    gsap.to(pillRef.current, {
      left: left,
      width: width,
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!pillRef.current) return;
    gsap.to(pillRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('pathseeker_user');
    localStorage.removeItem('user');
    sessionStorage.removeItem('pathseeker_active_chat_session');
    localStorage.removeItem('pathseeker_chat_history');
    setCurrentUser(null);
    window.dispatchEvent(new Event('authChange'));
    toast.success('Signed out of Career Passport.');
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Central Floating Frosted Glass Notch Bar */}
      <div className="relative pointer-events-auto bg-[#08080C]/80 backdrop-blur-2xl text-white px-5 py-2.5 rounded-b-[24px] border-b border-x border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex items-center justify-between gap-6 sm:gap-8 max-w-full">
        {/* Left Inverted Corner SVG Curve */}
        <svg
          className="notch-curve-left text-[#08080C]/80 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M 0 0 C 12 0 20 8 20 20 L 20 0 Z" />
        </svg>

        {/* Right Inverted Corner SVG Curve */}
        <svg
          className="notch-curve-right text-[#08080C]/80 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M 20 0 C 8 0 0 8 0 20 L 0 0 Z" />
        </svg>

        {/* 1. BRAND LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <img
            src="/favicon-05.png"
            alt="PathSeeker Logo"
            className="w-8 h-8 rounded-xl object-contain drop-shadow-[0_2px_10px_rgba(232,96,46,0.5)] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base font-extrabold tracking-tight text-white font-sans">
            Path<span className="text-[#E8602E]">Seeker</span>
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION LINKS (Active on XL screens 1280px+) */}
        <nav
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="hidden xl:flex items-center gap-1 relative py-1"
        >
          {/* Active / Hover Background Glass Pill */}
          <div
            ref={pillRef}
            className="absolute top-1 bottom-1 bg-white/15 backdrop-blur-md rounded-full pointer-events-none opacity-0 border border-white/20"
            style={{ left: 0, width: 0 }}
          />

          {navLinks.map((link) => (
            <button
              key={link.name}
              onMouseEnter={handleMouseEnter}
              onClick={() => {
                setActiveTab(link.name);
                navigate(link.path);
              }}
              className={`relative z-10 px-3.5 py-1 text-xs sm:text-[13px] font-medium transition-colors rounded-full cursor-pointer ${
                activeTab === link.name
                  ? 'text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* 3. ACTION CAPSULE BUTTON */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <div className="flex items-center gap-2">
              {(currentUser.role === 'admin' || currentUser.isAdmin) && (
                <Link
                  to="/admin"
                  className="px-2.5 py-1 rounded-full bg-[#E8602E]/20 hover:bg-[#E8602E] text-[#E8602E] hover:text-white border border-[#E8602E]/40 text-[10px] font-mono font-bold uppercase transition-all flex items-center gap-1 shadow-glow-orange-sm cursor-pointer"
                  title="Open Admin Command Center"
                >
                  <FontAwesomeIcon icon={faShieldHalved} className="text-[9px]" />
                  <span>Admin</span>
                </Link>
              )}

              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-[#E8602E]/20 border border-white/15 text-xs font-bold text-white transition-all shadow-sm group cursor-pointer"
              >
                <span className="max-w-[70px] sm:max-w-[100px] truncate">
                  {currentUser.name || 'Alex M.'}
                </span>
                <img
                  src={
                    (currentUser.email && localStorage.getItem(`pathseeker_avatar_${currentUser.email.toLowerCase()}`)) ||
                    currentUser.avatar ||
                    'https://api.dicebear.com/7.x/bottts/svg?seed=VoltCyber&backgroundColor=1e1e2f'
                  }
                  alt="Avatar"
                  className="w-5 h-5 rounded-full object-cover border border-[#E8602E] bg-slate-800"
                />
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="p-1.5 rounded-full text-[#A1A1AA] hover:text-red-400 hover:bg-white/10 text-xs transition-colors cursor-pointer"
                title="Sign Out"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="hidden xl:inline-block text-xs font-semibold text-slate-300 hover:text-white px-2 py-1 transition-colors"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="hidden sm:flex group items-center gap-1.5 btn-primary-orange px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex-shrink-0"
              >
                <FontAwesomeIcon icon={faRocket} className="w-3.5 h-3.5 mb-0.5" />
                <span>Get Started</span>
              </Link>
            </div>
          )}

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/[0.06] hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 cursor-pointer transition-all flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile / Tablet Dropdown Drawer */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 glass-panel-ultra p-4 rounded-3xl shadow-2xl flex flex-col gap-2 xl:hidden animate-fadeIn border border-white/15">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileOpen(false);
                  navigate(link.path);
                }}
                className={`text-left px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  activeTab === link.name
                    ? 'bg-[#E8602E]/25 text-[#E8602E] font-bold border border-[#E8602E]/40'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              {currentUser ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-center py-2.5 rounded-xl bg-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  <span>Sign Out ({currentUser.name || 'Account'})</span>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition-colors border border-white/10"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2.5 rounded-xl btn-primary-orange text-xs font-bold shadow-glow-orange-sm flex items-center justify-center gap-1.5"
                  >
                    <FontAwesomeIcon icon={faRocket} className="w-3.5 h-3.5" />
                    <span>Get Started</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
