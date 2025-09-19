// src/components/CredentialsPopup/PinSetupModal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PinInput } from './PinInput';
import { setPin } from './utils/credentialsUtils';
import './PinSetupModal.css';

const PinSetupModal = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState('create'); // create, confirm, success
  const [pin, setUserPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCreatePin = async (enteredPin) => {
    setUserPin(enteredPin);
    setStep('confirm');
  };

  const handleConfirmPin = async (confirmedPin) => {
    if (confirmedPin !== pin) {
      setError('PINs do not match. Please try again.');
      setTimeout(() => setError(''), 2000);
      return;
    }

    setLoading(true);
    try {
      await setPin(pin);
      setStep('success');
      setLoading(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const handleComplete = () => {
    onSuccess();
    onClose();
  };

  return (
    <div className="pin-modal-overlay">
      <div className="pin-modal">
        <button className="pin-modal-close" onClick={onClose}>×</button>
        
        <div className="pin-modal-content">
          {step === 'create' && (
            <>
              <div className="pin-modal-header">
                <div className="pin-modal-icon">🔒</div>
                <h2>Create a PIN</h2>
                <p>
                  Set a 4-digit PIN to protect your saved passwords.
                  You'll need this PIN to access your credentials later.
                </p>
              </div>
              
              <PinInput
                onSubmit={handleCreatePin}
                hasError={!!error}
                errorMessage={error}
                labelText="Create 4-Digit PIN"
              />
            </>
          )}
          
          {step === 'confirm' && (
            <>
              <div className="pin-modal-header">
                <div className="pin-modal-icon">🔐</div>
                <h2>Confirm Your PIN</h2>
                <p>
                  Please re-enter your 4-digit PIN to confirm.
                </p>
              </div>
              
              <PinInput
                onSubmit={handleConfirmPin}
                hasError={!!error}
                errorMessage={error}
                isLoading={loading}
                labelText="Confirm 4-Digit PIN"
              />
            </>
          )}
          
          {step === 'success' && (
            <div className="pin-modal-success">
              <div className="pin-modal-icon success">✓</div>
              <h2>PIN Created Successfully</h2>
              <p>
                Your credentials will now be protected with your PIN.
                Don't forget your PIN - it cannot be recovered!
              </p>
              <button 
                className="pin-modal-button"
                onClick={handleComplete}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PinSetupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default PinSetupModal;