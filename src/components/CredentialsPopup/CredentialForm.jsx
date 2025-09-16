import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveCredentialsForUrl, hasStoredPin, setPin as storePin } from './utils/credentialsUtils';

const CredentialForm = ({ onSave, onCancel, defaultUrl = '' }) => {
  const [url, setUrl] = useState(defaultUrl);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (defaultUrl) setUrl(defaultUrl);
  }, [defaultUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  setError(null);
  setSaved(false);

    if (!url) return setError('Please enter the link URL.');
    if (!username) return setError('Please enter a username.');
    if (!password) return setError('Please enter a password.');
    if (!pin || pin.length !== 4) return setError('Enter a 4-digit PIN to encrypt credentials.');

    try {
      // If no pin stored, create it (first-time flow)
      if (!hasStoredPin()) {
        await storePin(pin);
      }

      await saveCredentialsForUrl(url, { username, password, notes }, pin);
      // show saved confirmation then call onSave/onCancel after short delay
      setSaved(true);
      if (onSave) onSave();
      setTimeout(() => {
        if (onCancel) onCancel();
      }, 900);
    } catch (err) {
      console.error('failed saving creds', err);
      setError('Failed to save credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
  <label htmlFor="cred-url" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Link URL</label>
  <input id="cred-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" style={{ width: '100%', padding: 8, marginBottom: 10 }} />

  <label htmlFor="cred-username" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Username</label>
  <input id="cred-username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="user@example.com" style={{ width: '100%', padding: 8, marginBottom: 10 }} />

  <label htmlFor="cred-password" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Password</label>
  <input id="cred-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" type="password" style={{ width: '100%', padding: 8, marginBottom: 10 }} />

  <label htmlFor="cred-notes" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Notes (optional)</label>
  <input id="cred-notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g., account type, recovery email" style={{ width: '100%', padding: 8, marginBottom: 10 }} />

  <label htmlFor="cred-pin" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>4-digit PIN</label>
  <input id="cred-pin" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0,4))} placeholder="1234" style={{ width: '100%', padding: 8, marginBottom: 12 }} />

      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
  {saved && <div style={{ color: '#059669', marginBottom: 8 }}>Saved ✓ — closing…</div>}

      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <button type="button" onClick={onCancel} style={{ background: '#ef4444', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Cancel</button>
        <button type="submit" style={{ background: '#10b981', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Save credentials</button>
      </div>
    </form>
  );
};

export default CredentialForm;

CredentialForm.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  defaultUrl: PropTypes.string
};
