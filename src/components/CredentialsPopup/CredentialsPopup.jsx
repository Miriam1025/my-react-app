// src/components/CredentialsPopup/CredentialsPopup.jsx
import React, { useState, useEffect } from 'react';
import { PopupOverlay } from './PopupOverlay';
import { PinInput } from './PinInput';
import { CredentialsDisplay } from './CredentialsDisplay';
import { useCredentialsSecurity } from './hooks/useCredentialsSecurity';
import { validatePin } from './utils/credentialsUtils';
import './CredentialsPopup.css';
import PropTypes from 'prop-types';

const CredentialsPopup = ({ 
  isOpen, 
  onClose, 
  linkUrl, 
  credentials,
  masterPin = "1234" // You can make this configurable
}) => {
  const [pinEntered, setPinEntered] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    maskedCredentials, 
    showCredentials,
    handlePinValidation,
    resetSecurity 
  } = useCredentialsSecurity(credentials);

  // Reset state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setPinEntered(false);
      setPinError(false);
      setIsLoading(false);
      resetSecurity();
    }
  }, [isOpen, resetSecurity]);

  const handlePinSubmit = async (enteredPin) => {
    setIsLoading(true);
    setPinError(false);
    
    try {
      const isValid = await validatePin(enteredPin, masterPin);
      
      if (isValid) {
        await handlePinValidation(enteredPin);
        setPinEntered(true);
      } else {
        setPinError(true);
        // Clear error after 3 seconds
        setTimeout(() => setPinError(false), 3000);
      }
    } catch (error) {
      console.error('Pin validation error:', error);
      setPinError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay onClose={handleClose}>
      <div className="credentials-popup">
        <div className="credentials-popup__header">
          <h3 className="credentials-popup__title">
            Stored Credentials
          </h3>
          <button 
            className="credentials-popup__close"
            onClick={handleClose}
            aria-label="Close popup"
          >
            ×
          </button>
        </div>

        <div className="credentials-popup__content">
          {linkUrl && (
            <div className="credentials-popup__url">
              <span className="credentials-popup__url-label">Site:</span>
              <span className="credentials-popup__url-value">{linkUrl}</span>
            </div>
          )}

          {!pinEntered ? (
            <PinInput
              onSubmit={handlePinSubmit}
              hasError={pinError}
              isLoading={isLoading}
              errorMessage="Invalid PIN. Please try again."
            />
          ) : (
            <CredentialsDisplay
              credentials={showCredentials ? credentials : maskedCredentials}
              isRevealed={showCredentials}
            />
          )}
        </div>
      </div>
    </PopupOverlay>
  );
};
CredentialsPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  linkUrl: PropTypes.string,
  credentials: PropTypes.object.isRequired,
  masterPin: PropTypes.string
};

export default CredentialsPopup;