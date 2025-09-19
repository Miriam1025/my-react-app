// src/components/CredentialsPopup/CredentialDetector.jsx
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { saveCredentialsForUrl, hasStoredPin, validatePin } from './utils/credentialsUtils';
import './CredentialDetector.css';

/**
 * CredentialDetector
 * 
 * This component is responsible for:
 * 1. Monitoring for credential submission on password-protected sites
 * 2. Detecting when browser has saved credentials
 * 3. Prompting the user to save credentials to the app
 * 
 * Technical limitations:
 * - Cannot directly access browser-saved passwords due to security restrictions
 * - Uses message passing and iframe techniques to coordinate login detection
 */
const CredentialDetector = ({ onCredentialsDetected, isOpen, onClose }) => {
  const [detectedCredentials, setDetectedCredentials] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [pin, setPin] = useState('');
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const promptTimeoutRef = useRef(null);

  // Cleanup function to ensure timeouts are cleared
  useEffect(() => {
    return () => {
      if (promptTimeoutRef.current) {
        clearTimeout(promptTimeoutRef.current);
      }
    };
  }, []);

  // Setup credential detection when component mounts
  useEffect(() => {
    // This function gets called when credentials are detected
    // Note: This is a simplified version that demonstrates the concept
    // In a real implementation, this would need to be adapted to work with browser APIs
    const handleCredentialDetection = (event) => {
      // Real implementations would likely use the Credential Management API
      // This simplified version just demonstrates the concept
      if (event.data && event.data.type === 'CREDENTIALS_AVAILABLE') {
        const { username, password, url } = event.data;
        
        // Extract site name from URL
        try {
          const urlObj = new URL(url);
          setSiteName(urlObj.hostname.replace('www.', ''));
          setSiteUrl(url);
        } catch (e) {
          setSiteName('Unknown site');
          setSiteUrl(url || window.location.href);
        }

        setDetectedCredentials({
          username,
          password,
          url: url || window.location.href
        });
        
        setShowPrompt(true);
        
        // Auto-hide prompt after 30 seconds if no action
        promptTimeoutRef.current = setTimeout(() => {
          setShowPrompt(false);
        }, 30000);
      }
    };

    // Add event listener for messages from potential iframes or browser extensions
    window.addEventListener('message', handleCredentialDetection);
    
    return () => {
      window.removeEventListener('message', handleCredentialDetection);
    };
  }, []);

  // Handle saving detected credentials
  const handleSaveCredentials = async () => {
    if (!detectedCredentials) return;
    
    setSaving(true);
    setError(null);
    
    try {
      // Verify PIN if one is set
      if (hasStoredPin()) {
        const isPinValid = await validatePin(pin);
        if (!isPinValid) {
          setError('Invalid PIN. Please try again.');
          setSaving(false);
          return;
        }
      }
      
      // Save credentials using existing utility
      await saveCredentialsForUrl(
        detectedCredentials.url,
        {
          username: detectedCredentials.username,
          password: detectedCredentials.password,
          notes: `Auto-saved from browser on ${new Date().toLocaleString()}`
        },
        pin
      );
      
      // Notify parent component
      if (onCredentialsDetected) {
        onCredentialsDetected(detectedCredentials);
      }
      
      // Reset state and close prompt
      setShowPrompt(false);
      setDetectedCredentials(null);
      setSaving(false);
      setPin('');
      
    } catch (err) {
      console.error('Error saving credentials:', err);
      setError('Failed to save credentials. Please try again.');
      setSaving(false);
    }
  };

  // Handle declining to save credentials
  const handleDecline = () => {
    setShowPrompt(false);
    setDetectedCredentials(null);
    setPin('');
    
    if (promptTimeoutRef.current) {
      clearTimeout(promptTimeoutRef.current);
    }
  };

  // Don't render anything if not showing prompt
  if (!showPrompt) return null;

  return (
    <div className="credential-detector-overlay">
      <div className="credential-detector-popup">
        <button 
          className="credential-detector-close" 
          onClick={handleDecline}
          aria-label="Close popup"
        >
          ×
        </button>
        
        <div className="credential-detector-header">
          <h3>Save Password for {siteName}?</h3>
        </div>
        
        <div className="credential-detector-content">
          <p>
            Would you like to save the credentials you just entered for <strong>{siteName}</strong> to your 
            MyLinks Browser password manager?
          </p>
          
          {hasStoredPin() && (
            <div className="credential-detector-pin-field">
              <label htmlFor="pin-input">Enter your PIN to securely save:</label>
              <input
                id="pin-input"
                type="password"
                maxLength="4"
                placeholder="Enter 4-digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
            </div>
          )}
          
          {error && (
            <div className="credential-detector-error">
              {error}
            </div>
          )}
          
          <div className="credential-detector-actions">
            <button 
              onClick={handleDecline}
              className="credential-detector-button secondary"
              disabled={saving}
            >
              Not Now
            </button>
            <button 
              onClick={handleSaveCredentials}
              className="credential-detector-button primary"
              disabled={saving || (hasStoredPin() && pin.length !== 4)}
            >
              {saving ? 'Saving...' : 'Save Password'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CredentialDetector.propTypes = {
  onCredentialsDetected: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default CredentialDetector;