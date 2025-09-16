// src/components/CredentialsPopup/CredentialsPopup.jsx
import React, { useState, useEffect } from 'react';
import { PopupOverlay } from './PopupOverlay';
import { PinInput } from './PinInput';
import { CredentialsDisplay } from './CredentialsDisplay';
import { useCredentialsSecurity } from './hooks/useCredentialsSecurity';
import { validatePin, hasStoredPin, setPin, loadCredentialsForUrl } from './utils/credentialsUtils';
import './CredentialsPopup.css';
import PropTypes from 'prop-types';

const CredentialsPopup = ({ 
  isOpen, 
  onClose, 
  linkUrl, 
  credentials: initialCredentials
}) => {
  const [pinEntered, setPinEntered] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [creatingPin, setCreatingPin] = useState(false);
  const [hasPin, setHasPin] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState(null);
  
  const { 
    maskedCredentials, 
    showCredentials,
    handlePinValidation,
    resetSecurity 
  } = useCredentialsSecurity(storedCredentials || initialCredentials);

  // Reset state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setPinEntered(false);
      setPinError(false);
      setIsLoading(false);
      resetSecurity();
    }
    // detect whether a pin is stored
    setHasPin(hasStoredPin());
  }, [isOpen, resetSecurity]);

  const handlePinSubmit = async (enteredPin) => {
    setIsLoading(true);
    setPinError(false);
    
    try {
      if (!hasPin) {
        // Create a new PIN
        await setPin(enteredPin);
        setHasPin(true);
        setCreatingPin(false);
        // Optionally show a success message - for now reveal nothing until user re-opens
      } else {
        const isValid = await validatePin(enteredPin);
        if (isValid) {
          // Attempt to load encrypted credentials for this URL if present
          try {
            const loaded = await loadCredentialsForUrl(linkUrl, enteredPin);
            if (loaded) setStoredCredentials(loaded);
          } catch (e) {
            // ignore decryption errors - fall back to provided initial credentials
            console.warn('Could not decrypt stored credentials for url', e);
          }

          await handlePinValidation();
          setPinEntered(true);
        } else {
          setPinError(true);
          setTimeout(() => setPinError(false), 3000);
        }
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
            <div>
              {!hasPin && !creatingPin && (
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ marginBottom: '8px', color: '#374151' }}>No PIN set. Create a 4-digit PIN to secure your credentials locally.</div>
                  <button onClick={() => setCreatingPin(true)} style={{ background: '#667eea', color: 'white', padding: '8px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Create PIN</button>
                </div>
              )}

              {creatingPin && (
                <PinInput
                  onSubmit={handlePinSubmit}
                  hasError={pinError}
                  isLoading={isLoading}
                  errorMessage="Could not set PIN. Try again."
                />
              )}

              {hasPin && (
                <PinInput
                  onSubmit={handlePinSubmit}
                  hasError={pinError}
                  isLoading={isLoading}
                  errorMessage="Invalid PIN. Please try again."
                />
              )}
            </div>
          ) : (
            <CredentialsDisplay
              credentials={showCredentials ? (storedCredentials || initialCredentials) : maskedCredentials}
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