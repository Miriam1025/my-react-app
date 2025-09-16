// src/components/CredentialsPopup/CopyButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CopyButton = ({ value, onCopySuccess, isCopied, disabled }) => {
  const handleCopy = async () => {
    if (disabled || !value) return;

    try {
      // Modern clipboard API
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        onCopySuccess();
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          onCopySuccess();
        } catch (err) {
          console.error('Fallback copy failed:', err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error('Copy failed:', err);
      // You could show an error toast here
    }
  };

  return (
    <button
      className={`copy-button ${isCopied ? 'copy-button--copied' : ''} ${disabled ? 'copy-button--disabled' : ''}`}
      onClick={handleCopy}
      disabled={disabled}
      title={disabled ? 'Enter PIN to copy' : 'Copy to clipboard'}
      aria-label={`Copy ${value ? 'credential' : ''} to clipboard`}
    >
      {isCopied ? (
        <>
          <span className="copy-button__icon">✓</span>
          <span className="copy-button__text">Copied!</span>
        </>
      ) : (
        <>
          <span className="copy-button__icon">📋</span>
          <span className="copy-button__text">Copy</span>
        </>
      )}
    </button>
  );
};
CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
  onCopySuccess: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CopyButton;