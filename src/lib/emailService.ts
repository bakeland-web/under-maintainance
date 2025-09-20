import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  serverTimestamp,
  FieldValue
} from 'firebase/firestore';
import { db } from './firebase';
import { normalizeEmail, isValidEmail } from './emailValidation';

export interface EmailSubmission {
  email: string;
  timestamp: FieldValue | Date | { seconds: number; nanoseconds: number };
  source: string;
}

export interface EmailSubmissionResult {
  success: boolean;
  message: string;
  isDuplicate?: boolean;
}

/**
 * Checks if an email already exists in the database
 * @param email - The email to check
 * @returns Promise<boolean> - true if email exists, false otherwise
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const normalizedEmail = normalizeEmail(email);
    const emailsRef = collection(db, 'emails');
    const q = query(emailsRef, where('email', '==', normalizedEmail));
    const querySnapshot = await getDocs(q);
    
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw new Error('Failed to check email existence');
  }
};

/**
 * Saves an email to Firebase with duplicate checking
 * @param email - The email to save
 * @param source - The source of the email (e.g., 'landing-page')
 * @returns Promise<EmailSubmissionResult> - Result of the submission
 */
export const saveEmail = async (
  email: string, 
  source: string = 'landing-page'
): Promise<EmailSubmissionResult> => {
  try {
    // Validate email format
    if (!isValidEmail(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    const normalizedEmail = normalizeEmail(email);

    // Check if email already exists
    const emailExists = await checkEmailExists(normalizedEmail);
    
    if (emailExists) {
      return {
        success: false,
        message: 'This email is already registered',
        isDuplicate: true
      };
    }

    // Save email to Firebase
    const emailData: EmailSubmission = {
      email: normalizedEmail,
      timestamp: serverTimestamp(),
      source
    };

    await addDoc(collection(db, 'emails'), emailData);

    return {
      success: true,
      message: 'Email successfully added to waitlist!'
    };

  } catch (error) {
    console.error('Error saving email:', error);
    
    // Check if it's a duplicate error (Firebase might throw this in some cases)
    if (error instanceof Error && error.message.includes('duplicate')) {
      return {
        success: false,
        message: 'This email is already registered',
        isDuplicate: true
      };
    }

    return {
      success: false,
      message: 'Failed to save email. Please try again.'
    };
  }
};

/**
 * Gets the total count of emails in the database
 * @returns Promise<number> - Total number of emails
 */
export const getEmailCount = async (): Promise<number> => {
  try {
    const emailsRef = collection(db, 'emails');
    const querySnapshot = await getDocs(emailsRef);
    return querySnapshot.size;
  } catch (error) {
    console.error('Error getting email count:', error);
    return 0;
  }
};

