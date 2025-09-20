// Client-side email service that uses API routes
import { EmailSubmissionResult } from './emailService';

// Re-export the type for use in components
export type { EmailSubmissionResult };

/**
 * Saves an email using the API route
 * @param email - The email to save
 * @param source - The source of the email (e.g., 'landing-page')
 * @returns Promise<EmailSubmissionResult> - Result of the submission
 */
export const saveEmail = async (
  email: string, 
  source: string = 'landing-page'
): Promise<EmailSubmissionResult> => {
  try {
    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to save email',
        isDuplicate: result.isDuplicate || false
      };
    }

    return result;

  } catch (error) {
    console.error('Error saving email:', error);
    return {
      success: false,
      message: 'Failed to save email. Please try again.'
    };
  }
};

/**
 * Gets the total count of emails using the API route
 * @returns Promise<number> - Total number of emails
 */
export const getEmailCount = async (): Promise<number> => {
  try {
    const response = await fetch('/api/emails');
    const result = await response.json();
    
    if (result.success) {
      return result.count || 0;
    }
    
    return 0;
  } catch (error) {
    console.error('Error getting email count:', error);
    return 0;
  }
};
