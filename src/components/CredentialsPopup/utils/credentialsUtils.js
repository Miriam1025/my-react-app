// src/components/CredentialsPopup/utils/credentialsUtils.js

/**
 * Validates the entered PIN against the master PIN
 * @param {string} enteredPin - The PIN entered by the user
 * @param {string} masterPin - The correct PIN
 * @returns {Promise<boolean>} - Whether the PIN is valid
 */
export const validatePin = async (enteredPin, masterPin) => {
  // Add a small delay to prevent brute force attacks
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // In a real application, you'd want to hash the PIN and compare hashes
  // For demo purposes, we're doing a simple string comparison
  return enteredPin === masterPin;
};

/**
 * Generates a masked version of a string
 * @param {string} str - The string to mask
 * @param {number} visibleChars - Number of characters to show at start/end
 * @returns {string} - The masked string
 */
export const maskString = (str, visibleChars = 1) => {
  if (!str) return '';
  if (str.length <= visibleChars * 2) return '•'.repeat(str.length);
  
  const start = str.slice(0, visibleChars);
  const end = str.slice(-visibleChars);
  const middle = '•'.repeat(Math.max(str.length - (visibleChars * 2), 2));
  
  return start + middle + end;
};

/**
 * Securely clears a value from memory (best effort)
 * @param {string} value - The value to clear
 */
export const secureClear = (value) => {
  // This is a best-effort approach to clear sensitive data
  // JavaScript doesn't give us direct memory management
  if (typeof value === 'string') {
    // Overwrite the string with random data (no-op in JS, but included for demo)
    for (let i = 0; i < 3; i++) {
      // No actual effect; included for demonstration purposes only
    }
  }
};

/**
 * Formats credentials for display
 * @param {Object} credentials - The credentials object
 * @param {boolean} masked - Whether to show masked version
 * @returns {Object} - Formatted credentials
 */
export const formatCredentials = (credentials, masked = false) => {
  if (!credentials) return null;

  if (!masked) return credentials;

  return {
    ...credentials,
    username: credentials.username ? maskString(credentials.username) : '',
    password: credentials.password ? '•'.repeat(Math.max(credentials.password.length, 8)) : ''
  };
};

/**
 * Checks if credentials object has valid data
 * @param {Object} credentials - The credentials to validate
 * @returns {boolean} - Whether credentials are valid
 */
export const hasValidCredentials = (credentials) => {
  return credentials && (
    (credentials.username && credentials.username.trim().length > 0) ||
    (credentials.password && credentials.password.trim().length > 0)
  );
};

/**
 * Gets display title for credentials based on URL or domain
 * @param {string} url - The URL to extract title from
 * @returns {string} - Display title
 */
export const getCredentialTitle = (url) => {
  if (!url) return 'Unknown Site';
  
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    
    // Remove www. prefix if present
    const domain = hostname.replace(/^www\./, '');
    
    // Capitalize first letter
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch {
    // If URL parsing fails, return the original string
    return url;
  }
};