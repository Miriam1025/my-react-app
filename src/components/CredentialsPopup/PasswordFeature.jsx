// src/components/CredentialsPopup/PasswordFeature.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hasStoredPin } from './utils/credentialsUtils';
import PinSetupModal from './PinSetupModal';
import './PasswordFeature.css';

const PasswordFeature = ({ enabled, onToggleEnabled }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showPinSetup, setShowPinSetup] = useState(false);

  const handleToggle = () => {
    if (!enabled) {
      // If turning ON and no PIN exists, show PIN setup
      if (!hasStoredPin()) {
        setShowPinSetup(true);
      } else {
        // PIN already exists, just toggle
        onToggleEnabled(true);
      }
    } else {
      // Just turn it OFF
      onToggleEnabled(false);
    }
  };

  const handlePinSetupSuccess = () => {
    // PIN was successfully created, now enable the feature
    onToggleEnabled(true);
  };

  const handlePinSetupClose = () => {
    setShowPinSetup(false);
    // If they cancel PIN setup, make sure toggle stays OFF
    onToggleEnabled(false);
  };

  return (
    <div className="password-feature">
      <div className="password-feature-header">
        <h3>Remember Passwords</h3>
        <div className="password-toggle">
          <label className="switch">
            <span className="visually-hidden">Enable password storage</span>
            <input 
              type="checkbox" 
              checked={enabled} 
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">{enabled ? 'On' : 'Off'}</span>
        </div>
      </div>
      
      {enabled && (
        <div className="password-feature-content">
          <button 
            className="info-button"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? 'Hide Info' : 'How It Works'}
          </button>
          
          {showInfo && (
            <div className="password-feature-info">
              <p className="feature-description">
                When turned on, your bookmark page will automatically detect and remember passwords already saved in your browser.
              </p>
              <ol>
                <li>Turn on the "Remember Passwords" switch above</li>
                <li>Click any bookmark that requires a password</li>
                <li>If you've saved this password in your browser before, it will be automatically detected and saved</li>
                <li>Your passwords are securely stored and can be accessed using your PIN</li>
                <li>The lock icon for the bookmark will be highlighted once credentials are saved</li>
              </ol>
              <p className="security-note">
                <span className="lock-icon">🔒</span> Your passwords are always encrypted and protected
              </p>
            </div>
          )}
        </div>
      )}
      
      {/* PIN Setup Modal */}
      <PinSetupModal 
        isOpen={showPinSetup}
        onClose={handlePinSetupClose}
        onSuccess={handlePinSetupSuccess}
      />
    </div>
  );
};

PasswordFeature.propTypes = {
  enabled: PropTypes.bool.isRequired,
  onToggleEnabled: PropTypes.func.isRequired
};

export default PasswordFeature;