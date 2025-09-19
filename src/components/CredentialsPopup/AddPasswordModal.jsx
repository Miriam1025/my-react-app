// src/components/CredentialsPopup/AddPasswordModal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { saveCredentialsForUrl, hasStoredPin } from './utils/credentialsUtils';
import './AddPasswordModal.css';

const AddPasswordModal = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1); // 1: Enter site info, 2: PIN, 3: Success
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [isCreatingPin, setIsCreatingPin] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setWebsite('');
    setUsername('');
    setPassword('');
    setPin('');
    setStep(1);
    setError('');
    setSaving(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!website) {
      setError('Please enter the website address');
      return;
    }
    
    if (!username && !password) {
      setError('Please enter at least a username or password');
      return;
    }
    
    // Format website if needed
    let formattedWebsite = website;
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      formattedWebsite = 'https://' + website;
    }
    
    setWebsite(formattedWebsite);
    setError('');
    
    // Check if we need to set a PIN
    if (!hasStoredPin()) {
      setIsCreatingPin(true);
    }
    
    // Move to PIN step
    setStep(2);
  };

  const handleSubmitPin = async (e) => {
    e.preventDefault();
    
    if (pin.length !== 4 || !/^\d+$/.test(pin)) {
      setError('Please enter a 4-digit PIN');
      return;
    }
    
    setSaving(true);
    setError('');
    
    try {
      // Save the credentials
      await saveCredentialsForUrl(website, { username, password }, pin);
      
      // Move to success step
      setStep(3);
      setSaving(false);
      
      // Notify parent component
      if (onSave) {
        onSave({ website, username, password });
      }
      
      // Auto-close after a delay
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error('Error saving password:', err);
      setError('Something went wrong. Please try again.');
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="add-password-overlay">
      <div className="add-password-modal">
        <button className="close-button" onClick={handleClose}>×</button>
        
        {step === 1 && (
          <>
            <h2>Save Password</h2>
            <p className="modal-description">Enter the website and login details below</p>
            
            <form onSubmit={handleSubmitInfo}>
              <div className="form-group">
                <label htmlFor="website">Website Address</label>
                <input
                  id="website"
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="www.example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="your.name@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
                <button type="submit" className="continue-button">Continue</button>
              </div>
            </form>
          </>
        )}
        
        {step === 2 && (
          <>
            <h2>{isCreatingPin ? 'Create PIN' : 'Enter PIN'}</h2>
            <p className="modal-description">
              {isCreatingPin 
                ? 'Create a 4-digit PIN to protect your passwords' 
                : 'Enter your 4-digit PIN to save this password'}
            </p>
            
            <form onSubmit={handleSubmitPin}>
              <div className="form-group pin-group">
                <label htmlFor="pin">4-Digit PIN</label>
                <input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="Enter 4 digits"
                  maxLength="4"
                />
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="back-button" 
                  onClick={() => setStep(1)}
                  disabled={saving}
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="save-button"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Password'}
                </button>
              </div>
            </form>
          </>
        )}
        
        {step === 3 && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Password Saved!</h2>
            <p>Your password has been securely saved.</p>
          </div>
        )}
      </div>
    </div>
  );
};

AddPasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func
};

export default AddPasswordModal;