/**
 * Validates email format using a comprehensive regex pattern
 * @param email - The email string to validate
 * @returns boolean - true if email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

/**
 * Normalizes email by converting to lowercase and trimming whitespace
 * @param email - The email string to normalize
 * @returns string - Normalized email
 */
export const normalizeEmail = (email: string): string => {
  return email.toLowerCase().trim();
};

/**
 * Validates email and returns error message if invalid
 * @param email - The email string to validate
 * @returns string | null - Error message if invalid, null if valid
 */
export const getEmailValidationError = (email: string): string | null => {
  if (!email) {
    return 'Email is required';
  }
  
  if (!isValidEmail(email)) {
    return 'Please enter a valid email address';
  }
  
  return null;
};

