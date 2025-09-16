import React from 'react';
import { PopupOverlay } from './PopupOverlay';
import CredentialForm from './CredentialForm';
import PropTypes from 'prop-types';

const AddCredentialsModal = ({ isOpen, onClose, onSave, defaultUrl }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay onClose={onClose}>
      <div style={{
        maxWidth: 460,
        margin: '60px auto',
        background: 'white',
        color: '#111827',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 8px 30px rgba(2,6,23,0.2)'
      }}>
        <h2 id="credentials-popup-title" style={{ marginTop: 0 }}>Add credentials for this link</h2>
        <p style={{ color: '#6b7280', fontSize: '0.95em' }}>Enter the account details you want stored for <strong>{defaultUrl}</strong>. These credentials are encrypted locally with a PIN you provide — they are never sent to the server.</p>
  <CredentialForm onSave={onSave} onCancel={onClose} defaultUrl={defaultUrl} />
      </div>
    </PopupOverlay>
  );
};

export default AddCredentialsModal;

AddCredentialsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  defaultUrl: PropTypes.string
};
