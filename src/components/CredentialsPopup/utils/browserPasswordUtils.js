// src/components/CredentialsPopup/utils/browserPasswordUtils.js

/**
 * Utility functions for interacting with browser password systems
 * These functions help detect and synchronize passwords already stored in the browser
 */

/**
 * Attempts to detect if the browser has stored credentials for a given URL
 * 
 * @param {string} url - The URL to check for credentials
 * @returns {Promise<boolean>} - Whether credentials are likely available
 */
export const detectBrowserStoredCredentials = async (url) => {
  // Check if the Credential Management API is available
  if (window.PasswordCredential) {
    try {
      // Try to get credentials using the Credential Management API
      const credentials = await navigator.credentials.get({
        password: true,
        mediation: 'silent', // Don't show UI, just check if available
      });
      
      return !!credentials;
    } catch (e) {
      console.log('Unable to check credentials through API:', e);
      // Fall through to heuristic checks
    }
  }
  
  // Fallback: Use heuristics to guess if passwords might be saved
  // This is not reliable but provides a best-effort detection
  return checkForPasswordManagerHints(url);
};

/**
 * Uses various heuristics to guess if a password might be stored for a URL
 * 
 * @param {string} url - The URL to check
 * @returns {boolean} - Best guess if credentials exist
 */
const checkForPasswordManagerHints = (url) => {
  try {
    // Check local storage for hints that this site has been visited before
    const visitedSites = localStorage.getItem('visited_sites') || '';
    
    if (visitedSites) {
      const sites = JSON.parse(visitedSites);
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      
      // If this domain is in our visited sites, we might have credentials
      return sites.some(site => site.includes(domain));
    }
  } catch (e) {
    console.error('Error checking for password hints:', e);
  }
  
  return false;
};

/**
 * Track visited sites that might have password fields
 * This helps improve our credential detection heuristics
 * 
 * @param {string} url - The URL being visited
 */
export const trackVisitedSite = (url) => {
  try {
    if (!url) return;
    
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    // Get existing visited sites
    const visitedSitesStr = localStorage.getItem('visited_sites') || '[]';
    const visitedSites = JSON.parse(visitedSitesStr);
    
    // Add this domain if not already tracked
    if (!visitedSites.includes(domain)) {
      visitedSites.push(domain);
      
      // Keep list to a reasonable size
      if (visitedSites.length > 100) {
        visitedSites.shift();
      }
      
      localStorage.setItem('visited_sites', JSON.stringify(visitedSites));
    }
  } catch (e) {
    console.error('Error tracking visited site:', e);
  }
};

/**
 * Hook to listen for credential events when a link is opened
 * This function gets called when a link is clicked to set up detection
 * 
 * @param {string} url - The URL being opened
 * @param {Function} onCredentialsDetected - Callback for detected credentials
 */
export const setupCredentialListener = (url, onCredentialsDetected) => {
  if (!url) return;
  
  // Track this as a visited site
  trackVisitedSite(url);
  
  // Set up a listener for credential detection events
  // In a real implementation, this would need to work with browser extensions
  // or other mechanisms to detect when credentials are entered
  
  // For demonstration, we'll simulate credential detection with 
  // a timer that checks for presence of credentials
  setTimeout(async () => {
    const hasCredentials = await detectBrowserStoredCredentials(url);
    
    if (hasCredentials && onCredentialsDetected) {
      // In a real implementation, we would get the actual credentials
      // Here we just notify that credentials exist
      onCredentialsDetected({
        url,
        hasStoredCredentials: true,
        // We don't have actual values, but we notify that they exist
        source: 'browser_password_manager'
      });
    }
  }, 3000);
  
  // Return function to clean up listener if needed
  return () => {
    // Cleanup would happen here in a real implementation
  };
};

/**
 * Handle a link click with automatic credential detection if enabled
 * 
 * @param {string} url - The URL to open
 * @param {boolean} credentialDetectionEnabled - Whether credential detection is enabled
 * @param {Function} onCredentialsDetected - Callback when credentials are detected
 */
export const handleLinkWithCredentialDetection = (url, credentialDetectionEnabled, onCredentialsDetected) => {
  // Open the URL
  window.open(url, '_blank');
  
  // If credential detection is enabled, set up the listener
  if (credentialDetectionEnabled && url) {
    setupCredentialListener(url, onCredentialsDetected);
  }
};