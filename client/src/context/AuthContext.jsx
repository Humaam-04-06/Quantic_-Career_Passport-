import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api';
import { DEFAULT_AVATAR } from '../data/avatarsData';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
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
    };

    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authChange', handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await authApi.login({ email, password });
      const userData = {
        id: res.data?.user?.id || res.data?.user?._id || 'cand-alex',
        name: res.data?.user?.name || 'Alex Morgan',
        email: res.data?.user?.email || email,
        role: res.data?.user?.role || 'graduate',
        avatar: res.data?.user?.avatar || DEFAULT_AVATAR,
        token: res.token || 'jwt-token-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(userData));
      setUser(userData);
      window.dispatchEvent(new Event('authChange'));
      toast.success(`Welcome back, ${userData.name}!`);
      return { success: true, user: userData };
    } catch (err) {
      // Fallback offline mock for development
      const fallbackUser = {
        name: email.split('@')[0],
        email,
        role: 'graduate',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        token: 'mock-jwt-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(fallbackUser));
      setUser(fallbackUser);
      window.dispatchEvent(new Event('authChange'));
      toast.success(`Welcome back, ${fallbackUser.name}!`);
      return { success: true, user: fallbackUser };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password, role) => {
    setIsLoading(true);
    try {
      const res = await authApi.register({ name, email, password, role });
      const userData = {
        id: res.data?.user?.id || res.data?.user?._id,
        name: res.data?.user?.name || name,
        email: res.data?.user?.email || email,
        role: res.data?.user?.role || role || 'graduate',
        avatar: res.data?.user?.avatar || DEFAULT_AVATAR,
        token: res.token || 'jwt-token-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(userData));
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
        avatar: DEFAULT_AVATAR,
        token: 'mock-jwt-' + Date.now(),
      };
      localStorage.setItem('pathseeker_user', JSON.stringify(fallbackUser));
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
    setUser(null);
    window.dispatchEvent(new Event('authChange'));
    toast.success('Signed out of Career Passport.');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
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
