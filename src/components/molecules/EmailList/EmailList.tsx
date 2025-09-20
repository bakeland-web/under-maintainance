'use client';

import { useState, useEffect } from 'react';
import Typography from '@/components/atoms/Typography';

interface EmailData {
  id: string;
  email: string;
  timestamp: Date | string;
  source: string;
}

export default function EmailList() {
  const [emails, setEmails] = useState<EmailData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('/api/emails');
        const result = await response.json();
        
        if (result.success) {
          setEmails(result.emails);
        } else {
          setError(result.message || 'Failed to fetch emails');
        }
      } catch (err) {
        setError('Failed to fetch emails');
        console.error('Error fetching emails:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <Typography font="pixellari">Loading emails...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Typography font="pixellari" className="text-red-400">{error}</Typography>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Typography as="h3" font="upheaval-tt" className="mb-4 text-2xl">
        Collected Emails ({emails.length})
      </Typography>
      
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {emails.map((emailData) => (
          <div 
            key={emailData.id} 
            className="p-2 bg-gray-800 rounded border border-gray-600"
          >
            <div className="flex justify-between items-start">
              <Typography font="pixellari" className="text-white">
                {emailData.email}
              </Typography>
              <div className="text-right text-sm text-gray-400">
                <div>{emailData.source}</div>
                {emailData.timestamp && (
                  <div>
                    {new Date(emailData.timestamp).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

