// src/components/CredentialsPopup/AutoCredentialDetector.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveCredentialsForUrl, hasStoredPin } from './utils/credentialsUtils';
import { detectBrowserStoredCredentials } from './utils/browserPasswordUtils';
import './AutoCredentialDetector.css';

/**
 * A component that automatically detects browser-stored credentials
 * and offers to save them to the application
 */
const AutoCredentialDetector = ({ 
  enabled, 
  url, 
  onCredentialsSaved,
  onClose
}) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [loading, setLoading] = useState(true);
  const [domain, setDomain] = useState('');
  const [pin, setPin] = useState('');
  const [pinRequired, setPinRequired] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  
  // When the component mounts, check if credentials are available
  useEffect(() => {
    if (!enabled || !url) {
      setShowPrompt(false);
      return;
    }
    
    let mounted = true;
    
    // Extract the domain from the URL for display
    try {
      const urlObj = new URL(url);
      setDomain(urlObj.hostname.replace('www.', ''));
    } catch (error) {
      console.error("Error parsing URL:", error);
      setDomain('this website');
    }
    
    // Check for credentials
    const checkCredentials = async () => {
      setLoading(true);
      
      // Simulate a delay to make it feel like we're checking
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if credentials exist in the browser
      const hasCredentials = await detectBrowserStoredCredentials(url);
      
      if (mounted) {
        setLoading(false);
        
        if (hasCredentials) {
          setShowPrompt(true);
          // Check if PIN is required for saving
          setPinRequired(hasStoredPin());
        } else {
          // No credentials found, close the component
          if (onClose) {
            onClose();
          }
          console.log('No credentials detected for this URL');
        }
      }
    };
    
    checkCredentials();
    
    return () => {
      mounted = false;
    };
  }, [enabled, url, onClose]);
  
  // Handle user approving credential saving
  const handleSaveCredentials = async () => {
    if (saving) return;
    
    setError('');
    setSaving(true);
    
    try {
      // In a real implementation, we would actually get the credentials
      // from the browser API. Here we're simulating with sample data
      const simulatedCredentials = {
        username: 'detected_user@example.com',
        password: 'password_from_browser',
        notes: `Automatically detected from browser on ${new Date().toLocaleString()}`
      };
      
      // Save credentials to our storage
      await saveCredentialsForUrl(url, simulatedCredentials, pin);
      
      // Notify parent component
      if (onCredentialsSaved) {
        onCredentialsSaved({
          url,
          success: true
        });
      }
      
      // Close the prompt
      setShowPrompt(false);
      if (onClose) onClose();
      
    } catch (e) {
      console.error('Error saving detected credentials:', e);
      setError('Something went wrong. Please try again.');
      setSaving(false);
    }
  };
  
  // Close without saving
  const handleDecline = () => {
    setShowPrompt(false);
    if (onClose) onClose();
  };
  
  // If feature disabled or no prompt to show, render nothing
  if (!enabled || !showPrompt) return null;
  
  return (
    <div className="auto-detector-overlay">
      <div className="auto-detector-container">
        <button className="auto-detector-close" onClick={handleDecline}>×</button>
        
        <div className="auto-detector-content">
          {loading ? (
            <div className="auto-detector-loading">
              <div className="auto-detector-spinner"></div>
              <p>Checking for saved passwords...</p>
            </div>
          ) : (
            <>
              <div className="auto-detector-icon">🔑</div>
              <h3>Password Found</h3>
              <p>
                We detected that your browser has saved passwords for <strong>{domain}</strong>.
              </p>
              <p>
                Would you like to add this to your bookmark page so you can access it later?
              </p>
              
              {pinRequired && (
                <div className="auto-detector-pin">
                  <label htmlFor="auto-detector-pin-input">Enter your 4-digit PIN:</label>
                  <input
                    id="auto-detector-pin-input"
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="Enter PIN"
                    maxLength="4"
                  />
                </div>
              )}
              
              {error && <div className="auto-detector-error">{error}</div>}
              
              <div className="auto-detector-actions">
                <button 
                  className="auto-detector-decline"
                  onClick={handleDecline}
                  disabled={saving}
                >
                  No Thanks
                </button>
                <button 
                  className="auto-detector-approve"
                  onClick={handleSaveCredentials}
                  disabled={saving || (pinRequired && pin.length !== 4)}
                >
                  {saving ? 'Saving...' : 'Yes, Remember Password'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

AutoCredentialDetector.propTypes = {
  enabled: PropTypes.bool.isRequired,
  url: PropTypes.string,
  onCredentialsSaved: PropTypes.func,
  onClose: PropTypes.func
};

export default AutoCredentialDetector;