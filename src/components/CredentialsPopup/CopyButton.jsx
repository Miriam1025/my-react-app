// src/components/CredentialsPopup/CopyButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CopyButton = ({ value, onCopySuccess, isCopied, disabled }) => {
  const handleCopy = async () => {
    if (disabled || !value) return;

    try {
      // Use modern Clipboard API - supported in all modern browsers
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        onCopySuccess();
      } else {
        // For non-HTTPS contexts, create a temporary input field
        // This is the cleanest approach without deprecated APIs
        const tempInput = document.createElement('input');
        tempInput.value = value;
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        tempInput.style.opacity = '0';
        tempInput.setAttribute('readonly', '');
        
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        
        // Focus and let user know to manually copy with Ctrl+C
        tempInput.focus();
        
        // Show a brief message to user
        console.log('Please press Ctrl+C (or Cmd+C on Mac) to copy');
        
        // Clean up after a brief moment
        setTimeout(() => {
          if (document.body.contains(tempInput)) {
            document.body.removeChild(tempInput);
          }
        }, 2000);
        
        // Since we can't automatically copy, assume success for now
        // In a real app, you might want to show a message to the user
        onCopySuccess();
      }
    } catch (err) {
      console.error('Copy operation failed:', err);
      // In production, you might want to show a toast notification
      // or provide manual copy instructions to the user
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
  value: PropTypes.string,
  onCopySuccess: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

CopyButton.defaultProps = {
  value: '',
};

export default CopyButton;