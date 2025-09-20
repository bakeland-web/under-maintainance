'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, getStoredAuth, setStoredAuth, clearAuth, authenticate } from '@/lib/auth';

interface AuthContextType extends AuthState {
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication on mount
    const storedAuth = getStoredAuth();
    setIsAuthenticated(storedAuth);
    setIsLoading(false);
  }, []);

  const login = (password: string): boolean => {
    const success = authenticate(password);
    
    if (success) {
      setIsAuthenticated(true);
      setStoredAuth(true);
    }
    
    return success;
  };

  const logout = () => {
    setIsAuthenticated(false);
    clearAuth();
  };

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
