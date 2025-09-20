// Simple authentication utilities
// In production, you might want to use Firebase Auth or another service

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const authenticate = (password: string): boolean => {
  return password === ADMIN_PASSWORD;
};

export const getStoredAuth = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const stored = localStorage.getItem('admin_auth');
    return stored === 'true';
  } catch {
    return false;
  }
};

export const setStoredAuth = (isAuthenticated: boolean): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('admin_auth', isAuthenticated.toString());
  } catch {
    // Ignore localStorage errors
  }
};

export const clearAuth = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('admin_auth');
  } catch {
    // Ignore localStorage errors
  }
};
