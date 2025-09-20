'use client';

import { useAuth } from '@/contexts/AuthContext';
import EmailList from '@/components/molecules/EmailList';
import LoginForm from '@/components/molecules/LoginForm';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

export default function AdminPage() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Typography font="pixellari" className="text-white">
          Loading...
        </Typography>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <Typography as="h2" font="upheaval-tt" className="text-white text-3xl">
            Email Collection Admin
          </Typography>
          <Button
            variant="secondary"
            color="red"
            baseColor="steel"
            onClick={logout}
            className="px-4 py-2"
          >
            Logout
          </Button>
        </div>
        <EmailList />
      </div>
    </div>
  );
}

