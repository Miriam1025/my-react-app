// src/components/CredentialsPopup/CredentialsDisplay.jsx
import React, { useState } from 'react';
import { CopyButton } from './CopyButton';

export const CredentialsDisplay = ({ credentials, isRevealed }) => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopySuccess = (field) => {
    setCopiedField(field);
    // Clear the copied indicator after 2 seconds
    setTimeout(() => setCopiedField(null), 2000);
  };

  const hasCredentials = credentials && (credentials.username || credentials.password);

  if (!hasCredentials) {
    return (
      <div className="credentials-display">
        <div className="credentials-display__empty">
          <div className="credentials-display__empty-icon">🔒</div>
          <p className="credentials-display__empty-message">
            No credentials stored for this link
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="credentials-display">
      <div className="credentials-display__header">
        <h4 className="credentials-display__title">
          {isRevealed ? 'Credentials' : 'Masked Credentials'}
        </h4>
        {isRevealed && (
          <div className="credentials-display__status">
            <span className="credentials-display__status-icon">🔓</span>
            <span className="credentials-display__status-text">Unlocked</span>
          </div>
        )}
      </div>

      <div className="credentials-display__fields">
        {credentials.username && (
          <div className="credentials-field">
            <label className="credentials-field__label">
              Username
            </label>
            <div className="credentials-field__content">
              <div className="credentials-field__value">
                {credentials.username}
              </div>
              <CopyButton
                value={credentials.username}
                onCopySuccess={() => handleCopySuccess('username')}
                isCopied={copiedField === 'username'}
                disabled={!isRevealed}
              />
            </div>
          </div>
        )}

        {credentials.password && (
          <div className="credentials-field">
            <label className="credentials-field__label">
              Password
            </label>
            <div className="credentials-field__content">
              <div className="credentials-field__value">
                {credentials.password}
              </div>
              <CopyButton
                value={credentials.password}
                onCopySuccess={() => handleCopySuccess('password')}
                isCopied={copiedField === 'password'}
                disabled={!isRevealed}
              />
            </div>
          </div>
        )}
      </div>

      {credentials.notes && (
        <div className="credentials-display__notes">
          <label className="credentials-display__notes-label">
            Notes
          </label>
          <div className="credentials-display__notes-content">
            {credentials.notes}
          </div>
        </div>
      )}

      <div className="credentials-display__footer">
        <div className="credentials-display__security-notice">
          <span className="credentials-display__security-icon">🛡️</span>
          <span className="credentials-display__security-text">
            Credentials are encrypted and secure
          </span>
        </div>
      </div>
    </div>
  );
};