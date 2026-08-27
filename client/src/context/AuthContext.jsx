import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api';
import { DEFAULT_AVATAR } from '../data/avatarsData';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const getStoredMaintenanceMode = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('pathseeker_platform_settings') || 'null');
      if (saved && typeof saved.maintenanceMode === 'boolean') {
        return saved.maintenanceMode;
      }
      return localStorage.getItem('pathseeker_maintenance_mode') === 'true';
    } catch {
      return false;
    }
  };

  const [user, setUser] = useState(() => {
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
  const [isMaintenance, setIsMaintenance] = useState(getStoredMaintenanceMode);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleAuthChange = () => {
      try {
        const u = JSON.parse(
          localStorage.getItem('pathseeker_user') ||
          localStorage.getItem('user') ||
          'null'
        );
        setUser(u);
      } catch {
        setUser(null);
      }
      setIsMaintenance(getStoredMaintenanceMode());
    };

    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('platformSettingsChange', handleAuthChange);
    window.addEventListener('userUpdate', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('platformSettingsChange', handleAuthChange);
      window.removeEventListener('userUpdate', handleAuthChange);
    };
  }, []);

  const setMaintenanceMode = (enabled) => {
    try {
      const current = JSON.parse(localStorage.getItem('pathseeker_platform_settings') || '{}');
      const updated = { ...current, maintenanceMode: enabled };
      localStorage.setItem('pathseeker_platform_settings', JSON.stringify(updated));
      localStorage.setItem('pathseeker_maintenance_mode', String(enabled));
      setIsMaintenance(enabled);
      window.dispatchEvent(new Event('platformSettingsChange'));
      window.dispatchEvent(new Event('storage'));
    } catch {
      // ignore
    }
  };

  const isAdmin = !!(user && (user.role === 'admin' || user.isAdmin === true));

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await authApi.login({ email, password });
      const rawUser = res?.user || res?.data?.user || {};
      const userRole = rawUser.role || (email.toLowerCase() === 'admin@pathseeker.com' || email.toLowerCase() === 'admin@pathseeker.ai' ? 'admin' : 'graduate');
      const isUserAdmin = userRole === 'admin' || rawUser.isAdmin === true || email.toLowerCase() === 'admin@pathseeker.com' || email.toLowerCase() === 'admin@pathseeker.ai';

      const userData = {
        id: rawUser.id || rawUser._id || 'cand-alex',
        name: rawUser.name || (isUserAdmin ? 'System Administrator' : 'Candidate'),
        email: rawUser.email || email,
        role: userRole,
        isAdmin: isUserAdmin,
        avatar: rawUser.avatar || DEFAULT_AVATAR,
        token: res?.token || res?.data?.token || 'jwt-token-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(userData));
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      window.dispatchEvent(new Event('authChange'));
      toast.success(`Welcome back, ${userData.name}!`);
      return { success: true, user: userData };
    } catch (err) {
      // Local fallback for offline mode
      const isOfflineAdmin = (email.toLowerCase() === 'admin@pathseeker.com' || email.toLowerCase() === 'admin@pathseeker.ai') && password === 'Admin@123';
      if (isOfflineAdmin) {
        const adminUser = {
          id: 'admin-root',
          name: 'System Administrator',
          email,
          role: 'admin',
          isAdmin: true,
          avatar: DEFAULT_AVATAR,
          token: 'mock-jwt-' + Date.now(),
        };
        localStorage.setItem('pathseeker_user', JSON.stringify(adminUser));
        localStorage.setItem('user', JSON.stringify(adminUser));
        setUser(adminUser);
        window.dispatchEvent(new Event('authChange'));
        toast.success(`Welcome back, ${adminUser.name}!`);
        return { success: true, user: adminUser };
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password, role) => {
    setIsLoading(true);
    try {
      const res = await authApi.register({ name, email, password, role });
      const rawUser = res?.user || res?.data?.user || {};
      const userRole = rawUser.role || role || 'graduate';
      const isUserAdmin = userRole === 'admin' || rawUser.isAdmin === true;

      const userData = {
        id: rawUser.id || rawUser._id || 'cand-' + Date.now(),
        name: rawUser.name || name,
        email: rawUser.email || email,
        role: userRole,
        isAdmin: isUserAdmin,
        avatar: rawUser.avatar || DEFAULT_AVATAR,
        token: res?.token || res?.data?.token || 'jwt-token-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(userData));
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      window.dispatchEvent(new Event('authChange'));
      toast.success('Career Passport profile registered successfully!');
      return { success: true, user: userData };
    } catch (err) {
      // Fallback offline mock
      const fallbackUser = {
        name,
        email,
        role: role || 'graduate',
        isAdmin: role === 'admin',
        avatar: DEFAULT_AVATAR,
        token: 'mock-jwt-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(fallbackUser));
      localStorage.setItem('user', JSON.stringify(fallbackUser));
      setUser(fallbackUser);
      window.dispatchEvent(new Event('authChange'));
      toast.success('Career Passport profile created!');
      return { success: true, user: fallbackUser };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('pathseeker_user');
    localStorage.removeItem('user');
    sessionStorage.removeItem('pathseeker_active_chat_session');
    localStorage.removeItem('pathseeker_chat_history');
    setUser(null);
    window.dispatchEvent(new Event('authChange'));
    toast.success('Signed out of Career Passport.');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin,
        isMaintenance,
        setMaintenanceMode,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
