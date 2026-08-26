import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    toast.error('Please sign in to access your Career Passport Dashboard.');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && user.role !== 'admin') {
    toast.error('Restricted access: Super Admin clearance required.');
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
