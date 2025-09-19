// src/components/CredentialsPopup/utils/credentialDetectionUtils.js
/**
 * This utility provides functions for detecting credentials
 * and integrating with browser password systems
 */

/**
 * Creates an HTML form for a target site that will be embedded in an iframe
 * This allows us to potentially capture credentials entered on that site
 * 
 * @param {string} targetUrl - The URL of the site to create a form for
 * @returns {string} - HTML for the form iframe
 */
export const createCredentialDetectionScript = (targetUrl) => {
  try {
    const url = new URL(targetUrl);
    const domain = url.hostname;
    
    return `
      <!-- This script helps detect when credentials are entered on ${domain} -->
      <script>
        // Set up a message listener to receive credential information from the site
        window.addEventListener('message', function(event) {
          // Verify the message is from the correct domain
          if (event.origin === '${url.origin}' && event.data?.type === 'CREDENTIAL_SUBMISSION') {
            // Forward the credentials to the parent window (our app)
            window.parent.postMessage({
              type: 'CREDENTIALS_AVAILABLE',
              username: event.data.username,
              password: event.data.password,
              url: '${targetUrl}'
            }, '*');
          }
        });
      </script>
    `;
  } catch (e) {
    console.error('Error creating credential detection script:', e);
    return '';
  }
};

/**
 * Detects if the browser has stored credentials for a given URL
 * 
 * Note: Due to browser security restrictions, this is limited in capability
 * and requires Credential Management API support in the browser
 * 
 * @param {string} url - The URL to check for credentials
 * @returns {Promise<boolean>} - Whether credentials are available
 */
export const checkForStoredCredentials = async (url) => {
  // Check if the Credential Management API is available
  if (!window.PasswordCredential) {
    console.log('Credential Management API not supported in this browser');
    return false;
  }
  
  try {
    // Request credentials from the browser's password manager
    const credentials = await navigator.credentials.get({
      password: true,
      mediation: 'optional' // 'optional' means browser will only show if auto-fill is possible
    });
    
    return !!credentials;
  } catch (e) {
    console.error('Error checking for stored credentials:', e);
    return false;
  }
};

/**
 * Provides a script that sites can use to send credential information back to our app
 * This script would need to be injected into target sites via a browser extension
 * or some other mechanism (a bookmark with JavaScript, for example)
 * 
 * @returns {string} - JavaScript code that can detect and report credentials
 */
export const getCredentialDetectionInjectionScript = () => {
  return `
    // This code needs to be injected into the target site via a browser extension
    // or as a bookmarklet
    (function() {
      // Find password fields on the page
      const passwordFields = document.querySelectorAll('input[type="password"]');
      if (passwordFields.length === 0) return;
      
      // For each password field, find its associated form and username field
      passwordFields.forEach(passwordField => {
        const form = passwordField.closest('form');
        if (!form) return;
        
        // Look for common username/email field types
        const usernameField = form.querySelector('input[type="text"], input[type="email"], input[name="username"], input[name="email"], input[id="username"], input[id="email"]');
        if (!usernameField) return;
        
        // Monitor the form for submission
        form.addEventListener('submit', function(e) {
          // Send the credentials back to our app
          window.opener.postMessage({
            type: 'CREDENTIAL_SUBMISSION',
            username: usernameField.value,
            password: passwordField.value,
            url: window.location.href
          }, '*');
        });
      });
      
      console.log('Credential detection active on this page');
    })();
  `;
};

/**
 * Creates a bookmarklet that users can drag to their bookmarks bar
 * When clicked on a login page, it will attempt to detect and save credentials
 * 
 * @returns {string} - Bookmarklet code that can be used as a bookmark URL
 */
export const createCredentialBookmarklet = () => {
  const script = getCredentialDetectionInjectionScript();
  
  // Compress the script and convert to a bookmarklet format
  const compressedScript = script
    .replace(/\s+/g, ' ')
    .replace(/\/\/ .*?$/gm, '') // Remove comments
    .trim();
  
  return `javascript:(function(){${encodeURIComponent(compressedScript)}})();`;
};

/**
 * Experimental: This function attempts to use the browser's credential store
 * through the Credential Management API. This has limited browser support
 * and may not work in all environments.
 * 
 * @param {Object} credentials - The credentials to store
 * @param {string} credentials.username - The username
 * @param {string} credentials.password - The password
 * @param {string} credentials.url - The URL for the credentials
 * @returns {Promise<boolean>} - Whether the credentials were successfully stored
 */
export const storeInBrowserCredentialManager = async (credentials) => {
  // Check if the Credential Management API is available
  if (!window.PasswordCredential) {
    console.log('Credential Management API not supported in this browser');
    return false;
  }
  
  try {
    // Create a new password credential
    const passwordCredential = new window.PasswordCredential({
      id: credentials.username,
      password: credentials.password,
      name: `Login for ${new URL(credentials.url).hostname}`,
      iconURL: `https://${new URL(credentials.url).hostname}/favicon.ico`
    });
    
    // Store the credential in the browser
    await navigator.credentials.store(passwordCredential);
    return true;
  } catch (e) {
    console.error('Error storing in browser credential manager:', e);
    return false;
  }
};

/**
 * A special browser window opener that attempts to capture credentials
 * This opens the target URL in a new window and sets up communication
 * between the windows to capture credentials
 * 
 * @param {string} url - The URL to open
 * @param {Function} onCredentialsDetected - Callback when credentials are detected
 */
export const openWindowWithCredentialDetection = (url, onCredentialsDetected) => {
  // Open the new window
  const newWindow = window.open(url, '_blank');
  
  if (!newWindow) {
    alert('Popup blocked! Please allow popups for this site to enable credential detection.');
    return;
  }
  
  // Set up message listener for credential data
  const messageHandler = (event) => {
    // Check if the message is from our opened window
    if (event.source === newWindow && event.data?.type === 'CREDENTIAL_SUBMISSION') {
      // Call the callback with the credentials
      if (onCredentialsDetected) {
        onCredentialsDetected({
          username: event.data.username,
          password: event.data.password,
          url: event.data.url || url
        });
      }
      
      // Clean up the event listener
      window.removeEventListener('message', messageHandler);
    }
  };
  
  // Add the message listener
  window.addEventListener('message', messageHandler);
  
  // Return a function to clean up the listener if needed
  return () => {
    window.removeEventListener('message', messageHandler);
  };
};

/**
 * Generate HTML with instructions for users on how to use
 * the credential detection feature
 * 
 * @returns {string} - HTML instructions
 */
export const getCredentialDetectionInstructions = () => {
  return `
    <div style="padding: 15px; background-color: #f8fafc; border-radius: 8px; margin-top: 20px;">
      <h3 style="margin-top: 0; color: #0f172a;">How to Save Website Passwords</h3>
      <p style="line-height: 1.5; color: #334155;">
        To save passwords from websites you visit:
      </p>
      <ol style="color: #334155; line-height: 1.6;">
        <li>Click the bookmark link below when you're on a login page</li>
        <li>Enter your username and password on the website</li>
        <li>Submit the login form</li>
        <li>A popup will appear asking if you want to save the password</li>
      </ol>
      <p style="line-height: 1.5; color: #334155; font-style: italic;">
        Note: Due to browser security restrictions, you'll need to use the bookmark method to save passwords.
      </p>
      <p style="margin-top: 15px;">
        <a href="${createCredentialBookmarklet()}" style="
          display: inline-block;
          padding: 8px 15px;
          background-color: #3b82f6;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
        ">
          📋 Save My Password
        </a>
        <span style="margin-left: 10px; font-size: 0.9em; color: #64748b;">
          ← Drag this to your bookmarks bar!
        </span>
      </p>
    </div>
  `;
};