import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faRocket,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function NotchNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Careers', path: '/careers' },
    { name: 'Interest Quiz', path: '/quiz' },
    { name: 'Multimedia', path: '/multimedia' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Resource Library', path: '/resources' },
  ];

  const pillRef = useRef(null);
  const containerRef = useRef(null);

  // Sync active tab with current URL
  useEffect(() => {
    const current = navLinks.find((item) => item.path === location.pathname);
    if (current) {
      setActiveTab(current.name);
    }
  }, [location.pathname]);

  // GSAP magnetic active hover pill animation (Exact Supaste physics)
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
          {/* Glossy 3D Orange App Icon */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#FF7A45] via-[#E8602E] to-[#BC4C22] p-[1px] shadow-[0_2px_10px_rgba(232,96,46,0.5)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-gradient-to-b from-[#E8602E] to-[#BC4C22] rounded-[11px] flex items-center justify-center border-t border-white/40">
              <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-white drop-shadow" />
            </div>
          </div>
          <span className="text-base font-extrabold tracking-tight text-white font-sans">
            Path<span className="text-[#E8602E]">Seeker</span>
          </span>
        </Link>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <nav
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="hidden md:flex items-center gap-1 relative py-1"
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
          <Link
            to="/register"
            className="group flex items-center gap-1.5 btn-primary-orange px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex-shrink-0"
          >
            <FontAwesomeIcon icon={faRocket} className="w-3.5 h-3.5 mb-0.5" />
            <span>Get Started</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 glass-panel-ultra p-4 rounded-3xl shadow-2xl flex flex-col gap-2 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileOpen(false);
                  navigate(link.path);
                }}
                className={`text-left px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  activeTab === link.name
                    ? 'bg-[#E8602E]/25 text-[#E8602E] font-bold border border-[#E8602E]/40'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 rounded-xl btn-primary-orange text-xs font-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
