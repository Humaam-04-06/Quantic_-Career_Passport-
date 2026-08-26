import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NotchNavbar from '../components/layout/NotchNavbar';
import Footer from '../components/layout/Footer';
import VoltAuthCard from '../components/auth/VoltAuthCard';
import TabNavigation from '../components/auth/TabNavigation';
import {
  faShieldHalved,
  faBrain,
  faUserLock,
  faGlobe,
  faVideo,
  faRoad,
} from '@fortawesome/free-solid-svg-icons';

export default function AuthPage({ mode = 'login' }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const initialMode = location.pathname.includes('register') ? 'register' : mode;

  const leftNavItems = [
    {
      href: '#_1',
      name: 'Vault',
      icon: faShieldHalved,
      title: 'Passport Quantum Vault',
      subtext: 'End-to-end verified credential hashing and cryptographic proof.',
      badge: 'PRO',
    },
    {
      href: '#_2',
      name: 'Signals',
      icon: faBrain,
      title: 'AI Telemetry Signals',
      subtext: 'Real-time RIASEC cognitive score telemetry and stream alignment.',
      badge: 'LIVE',
    },
    {
      href: '#_3',
      name: 'Privacy',
      icon: faUserLock,
      title: 'Zero-Knowledge Guard',
      subtext: 'Volt turns around on password focus for complete user privacy.',
      badge: 'AI v2',
    },
  ];

  const rightNavItems = [
    {
      href: '#_1',
      name: 'Vault Preview',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      badge: 'QUANTUM SHIELD',
    },
    {
      href: '#_2',
      name: 'Signals Preview',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      badge: 'AI TELEMETRY',
    },
    {
      href: '#_3',
      name: 'Privacy Preview',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      badge: 'ZERO-KNOWLEDGE',
    },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const index = leftNavItems.findIndex((item) => item.href === hash);
      if (index !== -1) {
        setActiveTab(index);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E8602E]/30">
      {/* Notch Header */}
      <NotchNavbar />

      {/* Dynamic Ambient Glow Refraction Fields */}
      <div className="ambient-orange-spotlight top-24 left-1/4 opacity-35 pointer-events-none" />
      <div className="ambient-orange-spotlight top-2/3 right-12 opacity-30 pointer-events-none" />

      {/* Main Authentication Scene */}
      <main className="relative z-10 flex-1 w-full flex items-center justify-center pt-24 pb-16">
        {/* Central Volt Auth Card */}
        <VoltAuthCard initialMode={initialMode} />

        {/* Flanking Isometric Tab Navigation Cards (Desktop / Wide Screen) */}
        <div className="hidden 2xl:flex fixed inset-y-0 inset-x-12 items-center justify-between pointer-events-none z-30">
          {/* Left Security Vault Tab Card */}
          <div className="pointer-events-auto shadow-2xl rounded-3xl">
            <TabNavigation
              navItems={leftNavItems}
              activeIndex={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Right Isometric Ecosystem Tab Card */}
          <div className="pointer-events-auto shadow-2xl rounded-3xl">
            <TabNavigation
              navItems={rightNavItems}
              isIsometric
              activeIndex={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
