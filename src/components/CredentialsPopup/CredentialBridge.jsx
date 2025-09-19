// src/components/CredentialsPopup/CredentialBridge.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveCredentialsForUrl, hasStoredPin, hasCredentialsForUrl } from './utils/credentialsUtils';
import { openWindowWithCredentialDetection, getCredentialDetectionInstructions } from './utils/credentialDetectionUtils';
import CredentialDetector from './CredentialDetector';
import './CredentialBridge.css';

/**
 * CredentialBridge
 * 
 * This component acts as a bridge between the browser's password system
 * and the app's own credential storage system. It provides:
 * 
 * 1. A UI for showing credential saving instructions
 * 2. Methods for detecting credentials from the browser
 * 3. Saving detected credentials to the app's storage
 */
const CredentialBridge = ({ onCredentialsSaved, showInstructions }) => {
  const [detectedCredentials, setDetectedCredentials] = useState(null);
  const [showDetector, setShowDetector] = useState(false);
  const [savingStatus, setSavingStatus] = useState(null); // null, 'saving', 'success', 'error'
  
  // Handle credential detection callback
  const handleCredentialsDetected = (credentials) => {
    if (!credentials || !credentials.username || !credentials.password) {
      return;
    }
    
    // Check if we already have credentials for this URL
    if (hasCredentialsForUrl(credentials.url)) {
      setSavingStatus('exists');
      return;
    }
    
    setDetectedCredentials(credentials);
    setShowDetector(true);
  };
  
  // Handle saving credentials
  const handleCredentialsSaved = (savedCredentials) => {
    setShowDetector(false);
    setDetectedCredentials(null);
    setSavingStatus('success');
    
    // Notify parent component
    if (onCredentialsSaved) {
      onCredentialsSaved(savedCredentials);
    }
    
    // Clear success message after a delay
    setTimeout(() => {
      setSavingStatus(null);
    }, 3000);
  };
  
  // Helper function to open a URL with credential detection
  const openUrlWithDetection = (url) => {
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }
    
    openWindowWithCredentialDetection(url, handleCredentialsDetected);
  };
  
  // Function to generate bookmarklet instructions
  const renderInstructions = () => {
    return (
      <div 
        className="credential-bridge-instructions"
        dangerouslySetInnerHTML={{ __html: getCredentialDetectionInstructions() }}
      />
    );
  };
  
  // Status message display
  const renderStatusMessage = () => {
    if (!savingStatus) return null;
    
    const messages = {
      saving: 'Saving credentials...',
      success: 'Credentials saved successfully!',
      error: 'Error saving credentials. Please try again.',
      exists: 'Credentials already exist for this URL.'
    };
    
    const classes = {
      saving: 'credential-bridge-status info',
      success: 'credential-bridge-status success',
      error: 'credential-bridge-status error',
      exists: 'credential-bridge-status warning'
    };
    
    return (
      <div className={classes[savingStatus]}>
        {messages[savingStatus]}
      </div>
    );
  };
  
  return (
    <div className="credential-bridge">
      {showInstructions && renderInstructions()}
      
      {renderStatusMessage()}
      
      {/* Credential detector popup */}
      {showDetector && detectedCredentials && (
        <CredentialDetector
          onCredentialsDetected={handleCredentialsSaved}
          onClose={() => setShowDetector(false)}
          isOpen={showDetector}
        />
      )}
    </div>
  );
};

CredentialBridge.propTypes = {
  onCredentialsSaved: PropTypes.func,
  showInstructions: PropTypes.bool
};

CredentialBridge.defaultProps = {
  showInstructions: true
};

export default CredentialBridge;