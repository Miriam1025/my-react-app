// src/components/CredentialsPopup/utils/securityUtils.js
/**
 * This utility provides security-focused functions for handling
 * sensitive credential data safely
 */

/**
 * Sanitizes credential data to prevent XSS and other attacks
 * @param {Object} credentials - The credentials to sanitize
 * @returns {Object} - Sanitized credentials
 */
export const sanitizeCredentials = (credentials) => {
  if (!credentials) return null;
  
  // Basic sanitization function
  const sanitize = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  
  return {
    ...credentials,
    username: sanitize(credentials.username),
    password: credentials.password, // Don't sanitize password to preserve special chars
    url: sanitize(credentials.url),
    notes: sanitize(credentials.notes)
  };
};

/**
 * Ensures the URL is properly formatted and normalized
 * @param {string} url - The URL to normalize
 * @returns {string} - Normalized URL
 */
export const normalizeUrl = (url) => {
  if (!url) return '';
  
  try {
    // Add protocol if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // Create URL object to normalize
    const urlObj = new URL(url);
    
    // Remove trailing slash for consistency
    return urlObj.origin + urlObj.pathname.replace(/\/$/, '') + 
           (urlObj.search || '') + (urlObj.hash || '');
  } catch (e) {
    console.error('Error normalizing URL:', e);
    return url; // Return original if parsing fails
  }
};

/**
 * Validates that the provided object has the required credential properties
 * @param {Object} obj - The object to validate
 * @returns {boolean} - Whether the object is valid credentials
 */
export const isValidCredentialObject = (obj) => {
  if (!obj || typeof obj !== 'object') return false;
  
  // Must have either username or password
  if (!obj.username?.trim() && !obj.password?.trim()) {
    return false;
  }
  
  // URL must be present and valid
  if (!obj.url) return false;
  
  try {
    new URL(normalizeUrl(obj.url));
  } catch (error) {
    console.error('Invalid URL format:', error.message);
    return false;
  }
  
  return true;
};

/**
 * Creates a secure audit log entry for credential operations
 * This helps track when credentials are accessed, but doesn't log the actual values
 * @param {string} action - The action performed (save, view, etc.)
 * @param {string} url - The URL associated with the credentials
 * @returns {Object} - Audit log entry
 */
export const createAuditLogEntry = (action, url) => {
  const entry = {
    action,
    url: url ? new URL(normalizeUrl(url)).hostname : 'unknown',
    timestamp: new Date().toISOString(),
    // Include partial user info for audit purposes
    user: typeof localStorage !== 'undefined' ? 
      (localStorage.getItem('user_id') || 'anonymous') : 'anonymous'
  };
  
  // Store audit log in localStorage with a limit of 100 entries
  if (typeof localStorage !== 'undefined') {
    try {
      const auditLog = JSON.parse(localStorage.getItem('creds_audit_log') || '[]');
      auditLog.unshift(entry);
      
      // Keep only the last 100 entries
      if (auditLog.length > 100) {
        auditLog.length = 100;
      }
      
      localStorage.setItem('creds_audit_log', JSON.stringify(auditLog));
    } catch (e) {
      console.error('Error saving audit log:', e);
    }
  }
  
  return entry;
};

/**
 * Securely cleans up credential data from memory
 * This is a best-effort approach as JavaScript has limitations in memory management
 * @param {Object} credentials - The credentials to clean up
 */
export const secureCleanup = (credentials) => {
  if (!credentials) return;
  
  // Best-effort cleanup of sensitive fields
  if (credentials.username) credentials.username = '';
  if (credentials.password) credentials.password = '';
  
  // Force garbage collection where possible
  try {
    credentials = null;
    // We can't reliably force garbage collection in browsers
    // Just set sensitive data to null
    if (window && window.performance) {
      window.performance.clearMarks();
      window.performance.clearMeasures();
    }
  } catch (error) {
    console.error('Error in secure cleanup:', error);
  }
};

/**
 * Verifies the integrity of saved credentials by comparing hash
 * @param {Object} credentials - The credentials to verify
 * @param {string} hash - The hash to verify against
 * @returns {boolean} - Whether the credentials are valid
 */
export const verifyCredentialIntegrity = (credentials, hash) => {
  // This is a simplified placeholder implementation
  // In a real app, you would use a proper hash function
  if (!credentials || !hash) return false;
  
  // Simple hash function for demo purposes
  const simpleHash = (obj) => {
    const str = JSON.stringify(obj);
    let hashValue = 0;
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hashValue = ((hashValue << 5) - hashValue) + char;
      hashValue = hashValue & hashValue; // Convert to 32bit integer
    }
    
    return hashValue.toString(16);
  };
  
  return simpleHash(credentials) === hash;
};