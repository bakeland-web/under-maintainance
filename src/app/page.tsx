'use client';

import Button from '@/components/atoms/Button';
import Input from '@/components/molecules/Input';
import Card from '@/components/atoms/Card';
import Image from 'next/image';
import { useState } from 'react';
import { saveEmail, EmailSubmissionResult } from '@/lib/emailService-client';
import { getEmailValidationError } from '@/lib/emailValidation';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage(null);
    
    // Validate email
    const validationError = getEmailValidationError(email);
    if (validationError) {
      setMessage({ text: validationError, type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const result: EmailSubmissionResult = await saveEmail(email, 'landing-page');
      
      if (result.success) {
        setShowSuccessPopup(true);
        setEmail(''); // Clear the form on success
      } else {
        setMessage({ text: result.message, type: 'error' });
      }
    } catch {
      setMessage({ 
        text: 'An unexpected error occurred. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 z-5 bg-black/30"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/bg.gif"
          alt="Bake Land Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Cloud Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="w-full h-full opacity-60">
          <div className="clouds-track" aria-hidden="true">
            <img src="/landing/Cloud.png" alt="" className="clouds-frame" />
            <img src="/landing/Cloud.png" alt="" className="clouds-frame" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo Section */}
        <div className="mb-4 flex flex-col items-center">
          {/* BAKE LAND Logo */}
          <div className="relative mb-2">
            <div className="relative">
              

              <div className="relative flex items-center justify-center">
                <Image
                  src="/landing/logo.svg"
                  alt="BAKE LAND"
                  width={1200}
                  height={400}
                    className="h-[40vh] w-auto object-contain min-h-[280px] max-h-[450px] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] scale-150 sm:scale-150 md:scale-125 lg:scale-100 max-[360px]:scale-[1.7]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Email Input and Waitlist Button */}
          <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-1">
            <Input
              type="email"
              variant="wood"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[75vw] max-w-[320px] min-w-[280px] sm:w-80"
              inputStyles="text-center"
              disabled={isSubmitting}
            />
            
            <div className="w-[50vw] max-w-[180px] min-w-[160px] sm:w-44">
              <Button
                variant="primary"
                color="steel"
                baseColor="wood"
                type="submit"
                className="w-full [&>div]:w-full [&>div>div]:w-full [&>div>div]:px-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'joining...' : 'join waitlist'}
              </Button>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`mt-2 px-4 py-2 rounded-md text-center font-pixellari text-sm ${
                message.type === 'success' 
                  ? 'text-green-400 bg-green-900/20 border border-green-500/30' 
                  : 'text-red-400 bg-red-900/20 border border-red-500/30'
              }`}>
                {message.text}
              </div>
            )}
          </form>

          {/* Social Media Buttons */}
          <div className="mt-8 flex gap-4">
            <Button
              variant="icon"
              color="grey"
              baseColor="steel"
              className="h-[8vw] w-[8vw] min-h-[48px] min-w-[48px] max-h-[60px] max-w-[60px] sm:h-12 sm:w-12"
              onClick={() => window.open('https://discord.gg/BVnF4fdD', '_blank')}
            >
              {/* Discord Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white w-[4vw] h-[4vw] min-w-[24px] min-h-[24px] max-w-[28px] max-h-[28px] sm:w-6 sm:h-6"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Button>

            <Button
              variant="icon"
              color="grey"
              baseColor="steel"
              className="h-[8vw] w-[8vw] min-h-[48px] min-w-[48px] max-h-[60px] max-w-[60px] sm:h-12 sm:w-12"
              onClick={() => window.open('https://x.com/bakelandxyz', '_blank')}
            >
              {/* X (Twitter) Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white w-[4vw] h-[4vw] min-w-[24px] min-h-[24px] max-w-[28px] max-h-[28px] sm:w-6 sm:h-6"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Button>
          </div>
         
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 font-pixellari">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="hidden sm:inline">|</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden sm:inline">|</span>
            <span>© 2025 8 Bit Studio Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Card variant="wood" className="p-6 max-w-sm w-full relative">
            {/* X Close Button */}
             <button
               onClick={() => setShowSuccessPopup(false)}
               className="absolute top-3 right-3 z-20 w-6 h-6 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
             >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-pixellari text-white mb-2">Success!</h3>
              <p className="text-sm text-gray-300 font-pixellari">
                You&apos;ve successfully joined the waitlist!
              </p>
            </div>
          </Card>
        </div>
      )}
      <style jsx>{`
        .clouds-track {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          display: flex;
          animation: clouds-marquee 90s linear infinite;
        }
        .clouds-frame {
          flex: 0 0 50%;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes clouds-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// Inline styles for smooth cloud movement
// Using styled-jsx to scope styles to this page
// Ensures a seamless, non-snapping horizontal scroll
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-assign-module-variable */

/* styled-jsx */
// (removed old styled-jsx for moving-clouds)