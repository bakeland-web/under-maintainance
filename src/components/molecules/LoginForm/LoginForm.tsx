'use client';

import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Input from '@/components/molecules/Input';
import Typography from '@/components/atoms/Typography';

interface LoginFormProps {
  onLogin: (password: string) => boolean;
  error?: string;
}

export default function LoginForm({ onLogin, error }: LoginFormProps) {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError('');

    const success = onLogin(password);
    
    if (!success) {
      setLoginError('Invalid password');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <Typography as="h2" font="upheaval-tt" className="text-white mb-2 text-3xl">
            Admin Access
          </Typography>
          <Typography font="pixellari" className="text-gray-400">
            Enter password to access email collection
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              variant="wood"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            color="steel"
            baseColor="wood"
            className="w-full"
            disabled={isSubmitting || !password.trim()}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>

          {(loginError || error) && (
            <div className="text-center">
              <Typography 
                font="pixellari" 
                className="text-red-400 text-sm"
              >
                {loginError || error}
              </Typography>
            </div>
          )}
        </form>

        <div className="text-center">
          <Typography font="pixellari" className="text-gray-500 text-xs">
            Contact administrator for access
          </Typography>
        </div>
      </div>
    </div>
  );
}
