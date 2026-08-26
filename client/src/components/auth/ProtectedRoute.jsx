import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // Check both AuthContext and localStorage for maximum resilience
  const localUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
    } catch {
      return null;
    }
  })();

  const activeUser = user || localUser;
  const isAuth = Boolean(activeUser && (activeUser.email || activeUser.token || isAuthenticated));

  useEffect(() => {
    if (!isAuth) {
      toast.error('Access Denied: Please sign in to access this protected area.');
    }
  }, [isAuth]);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If admin access is required and user is not admin
  if (requireAdmin) {
    const isAdmin =
      activeUser.role === 'admin' ||
      activeUser.isAdmin === true ||
      localStorage.getItem('pathseeker_admin_clearance') === 'true';

    if (!isAdmin) {
      toast.error('Restricted access: Super Administrator clearance required.');
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
}
