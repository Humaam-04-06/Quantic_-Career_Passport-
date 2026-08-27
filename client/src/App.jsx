import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import CareerDetailPage from './pages/CareerDetailPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import MultimediaPage from './pages/MultimediaPage.jsx';
import MediaDetailPage from './pages/MediaDetailPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import StorySubmitPage from './pages/StorySubmitPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import AiCareerChatbot from './components/chat/AiCareerChatbot.jsx';
import MaintenanceModal from './components/common/MaintenanceModal.jsx';

function AppContent() {
  const { user, isAdmin, isMaintenance } = useAuth();
  const location = window.location;

  // When maintenance is active AND user is not an admin:
  // Render ONLY the Maintenance Screen immediately (no page routes, no chatbot, zero black flash!)
  const isBlocked = isMaintenance && !isAdmin && location.pathname !== '/login';

  if (isBlocked) {
    return <MaintenanceModal />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<CareerDetailPage />} />
        <Route path="/multimedia" element={<MultimediaPage />} />
        <Route path="/multimedia/:id" element={<MediaDetailPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/submit" element={<StorySubmitPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        
        {/* Protected Candidate Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Enterprise Admin Console */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin={false}>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        
        {/* Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

      {/* Non-intrusive floating status banner if admin is browsing during maintenance mode */}
      {isMaintenance && isAdmin && <MaintenanceModal />}

      {/* Global AI Career Copilot & Platform Navigation Chatbot */}
      <AiCareerChatbot />
    </>
  );
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
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
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
}
