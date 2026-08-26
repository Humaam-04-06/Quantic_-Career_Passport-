import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import CareerDetailPage from './pages/CareerDetailPage.jsx';
import AuthPage from './pages/AuthPage.jsx';

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
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<CareerDetailPage />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
          {/* Future Routes (Media, Stories, Resources, Dashboard) */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
