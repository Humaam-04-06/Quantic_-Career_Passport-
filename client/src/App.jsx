import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage.jsx';

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#121215',
            color: '#FFFFFF',
            border: '1px solid #232328',
          },
        }}
      />
      <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-[#E8602E] selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future Routes (Careers, Quiz, Media, Stories, Resources, Auth, Dashboard) */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
