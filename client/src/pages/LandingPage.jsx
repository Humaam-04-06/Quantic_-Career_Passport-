import React from 'react';
import NotchNavbar from '../components/layout/NotchNavbar.jsx';
import GlobeHero from '../components/hero/GlobeHero.jsx';
import PersonaSection from '../components/landing/PersonaSection.jsx';
import CareerSpotlightSection from '../components/landing/CareerSpotlightSection.jsx';
import QuizPreviewSection from '../components/landing/QuizPreviewSection.jsx';
import MultimediaSection from '../components/landing/MultimediaSection.jsx';
import StoriesSection from '../components/landing/StoriesSection.jsx';
import ResourceSection from '../components/landing/ResourceSection.jsx';
import SitemapSection from '../components/landing/SitemapSection.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#E8602E] selection:text-white overflow-x-clip font-sans">
      {/* 1. Inverted Notch Navbar */}
      <NotchNavbar />

      {/* 2. 3D Capturing Globe Hero Scene */}
      <main>
        <GlobeHero />

        {/* 3. Role-Based Persona Passports (Ticket Booking Cards) */}
        <PersonaSection />

        {/* 4. Career Bank Spotlight & Live Filtering */}
        <CareerSpotlightSection />

        {/* 5. Interactive AI Quiz Assessment Preview Widget */}
        <QuizPreviewSection />

        {/* 6. Multimedia Learning Center & Masterclasses */}
        <MultimediaSection />

        {/* 7. Success Stories Timeline Hub */}
        <StoriesSection />

        {/* 8. Document Resource Library & Downloadable PDF Guides */}
        <ResourceSection />

        {/* 9. Interactive Home Page Application Sitemap (SRS Mandate) */}
        <SitemapSection />
      </main>

      {/* 10. Dark Glass Footer */}
      <Footer />
    </div>
  );
}
