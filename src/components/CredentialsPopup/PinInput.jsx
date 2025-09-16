// src/components/CredentialsPopup/PinInput.jsx
import React, { useState, useRef, useEffect } from 'react';

export const PinInput = ({ onSubmit, hasError, isLoading, errorMessage }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Clear PIN when there's an error
  useEffect(() => {
    if (hasError) {
      setPin(['', '', '', '']);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [hasError]);

  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value.slice(-1); // Only take the last character
    setPin(newPin);

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Submit when all 4 digits are entered
    if (newPin.every(digit => digit !== '') && index === 3) {
      setTimeout(() => {
        onSubmit(newPin.join(''));
      }, 100);
    }
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace
    if (event.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // Handle Enter key
    if (event.key === 'Enter' && pin.every(digit => digit !== '')) {
      onSubmit(pin.join(''));
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    const digits = pastedText.replace(/\D/g, '').slice(0, 4);
    
    if (digits.length === 4) {
      const newPin = digits.split('');
      setPin(newPin);
      inputRefs.current[3]?.focus();
      setTimeout(() => {
        onSubmit(digits);
      }, 100);
    }
  };

  return (
    <div className="pin-input">
      <div className="pin-input__header">
        <h4 className="pin-input__title">Enter 4-Digit PIN</h4>
        <p className="pin-input__description">
          Enter your PIN to view stored credentials
        </p>
      </div>

      <div className="pin-input__fields">
        {pin.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="password"
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className={`pin-input__field ${hasError ? 'pin-input__field--error' : ''}`}
            maxLength="1"
            inputMode="numeric"
            pattern="[0-9]*"
            disabled={isLoading}
            autoComplete="off"
          />
        ))}
      </div>

      {hasError && (
        <div className="pin-input__error">
          <span className="pin-input__error-icon">⚠️</span>
          <span className="pin-input__error-message">{errorMessage}</span>
        </div>
      )}

      {isLoading && (
        <div className="pin-input__loading">
          <div className="pin-input__spinner"></div>
          <span>Verifying PIN...</span>
        </div>
      )}
    </div>
  );
};
