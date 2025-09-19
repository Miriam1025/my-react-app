// src/components/CredentialsPopup/utils/credentialsUtils.js

/**
 * Validates the entered PIN against the master PIN
 * @param {string} enteredPin - The PIN entered by the user
 * @param {string} masterPin - The correct PIN
 * @returns {Promise<boolean>} - Whether the PIN is valid
 */
export const validatePin = async (enteredPin, masterPin) => {
  // Backwards-compatible fallback: if a masterPin is passed (old usage), compare directly
  await new Promise(resolve => setTimeout(resolve, 200));
  if (masterPin) return enteredPin === masterPin;

  // New behavior: validate against stored PBKDF2 hash in localStorage
  try {
    const stored = localStorage.getItem('pin_store');
    if (!stored) return false;
    const { salt: saltB64, hash: hashB64, iterations } = JSON.parse(stored);
    const salt = base64ToBuf(saltB64);
    const computed = await derivePinHash(enteredPin, salt, iterations);
    return computed === hashB64;
  } catch (e) {
    console.error('validatePin error', e);
    return false;
  }
};

// --- New utilities: secure local PIN storage + encrypt/decrypt credentials ---
const bufToBase64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const base64ToBuf = (b64) => Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer;

const randomBytes = (len = 16) => window.crypto.getRandomValues(new Uint8Array(len)).buffer;

const deriveKey = async (pin, salt, iterations = 100000) => {
  const enc = new TextEncoder();
  const baseKey = await window.crypto.subtle.importKey('raw', enc.encode(pin), { name: 'PBKDF2' }, false, ['deriveKey']);
  return window.crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
};

const derivePinHash = async (pin, salt, iterations = 100000) => {
  // Derive 256 bits and return base64
  const key = await window.crypto.subtle.importKey('raw', new TextEncoder().encode(pin), { name: 'PBKDF2' }, false, ['deriveBits']);
  const bits = await window.crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, key, 256);
  return bufToBase64(bits);
};

export const hasStoredPin = () => !!localStorage.getItem('pin_store');

export const setPin = async (pin) => {
  const salt = randomBytes(16);
  const iterations = 100000;
  const hash = await derivePinHash(pin, salt, iterations);
  localStorage.setItem('pin_store', JSON.stringify({ salt: bufToBase64(salt), hash, iterations }));
  return true;
};

export const clearPin = () => {
  localStorage.removeItem('pin_store');
};

export const encryptCredentials = async (pin, credentials) => {
  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const key = await deriveKey(pin, salt);
  const data = new TextEncoder().encode(JSON.stringify(credentials));
  const cipher = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data);
  return {
    salt: bufToBase64(salt),
    iv: bufToBase64(iv),
    ciphertext: bufToBase64(cipher)
  };
};

export const decryptCredentials = async (pin, payload) => {
  const { salt: saltB64, iv: ivB64, ciphertext: ctB64 } = payload;
  const salt = base64ToBuf(saltB64);
  const iv = base64ToBuf(ivB64);
  const ct = base64ToBuf(ctB64);
  const key = await deriveKey(pin, salt);
  const plain = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
  const decoded = new TextDecoder().decode(plain);
  return JSON.parse(decoded);
};

export const saveCredentialsForUrl = async (url, credentials, pin) => {
  const payload = await encryptCredentials(pin, credentials);
  localStorage.setItem(`creds:${url}`, JSON.stringify(payload));
};

export const loadCredentialsForUrl = async (url, pin) => {
  const raw = localStorage.getItem(`creds:${url}`);
  if (!raw) return null;
  const payload = JSON.parse(raw);
  return await decryptCredentials(pin, payload);
};

/**
 * Generates a masked version of a string
 * @param {string} str - The string to mask
 * @param {number} visibleChars - Number of characters to show at start/end
 * @returns {string} - The masked string
 */
export const maskString = (str, visibleChars = 1) => {
  if (!str) return '';
  if (str.length <= visibleChars * 2) return '•'.repeat(str.length);
  
  const start = str.slice(0, visibleChars);
  const end = str.slice(-visibleChars);
  const middle = '•'.repeat(Math.max(str.length - (visibleChars * 2), 2));
  
  return start + middle + end;
};

/**
 * Securely clears a value from memory (best effort)
 * @param {string} value - The value to clear
 */
export const secureClear = (value) => {
  // This is a best-effort approach to clear sensitive data
  // JavaScript doesn't give us direct memory management
  if (typeof value === 'string') {
    // Overwrite the string with random data (no-op in JS, but included for demo)
    for (let i = 0; i < 3; i++) {
      // No actual effect; included for demonstration purposes only
    }
  }
};

export const hasCredentialsForUrl = (url) => {
  return !!localStorage.getItem(`creds:${url}`);
};

/**
 * Formats credentials for display
 * @param {Object} credentials - The credentials object
 * @param {boolean} masked - Whether to show masked version
 * @returns {Object} - Formatted credentials
 */
export const formatCredentials = (credentials, masked = false) => {
  if (!credentials) return null;

  if (!masked) return credentials;

  return {
    ...credentials,
    username: credentials.username ? maskString(credentials.username) : '',
    password: credentials.password ? '•'.repeat(Math.max(credentials.password.length, 8)) : ''
  };
};

/**
 * Checks if credentials object has valid data
 * @param {Object} credentials - The credentials to validate
 * @returns {boolean} - Whether credentials are valid
 */
export const hasValidCredentials = (credentials) => {
  return credentials && (
    (credentials.username && credentials.username.trim().length > 0) ||
    (credentials.password && credentials.password.trim().length > 0)
  );
};

/**
 * Gets display title for credentials based on URL or domain
 * @param {string} url - The URL to extract title from
 * @returns {string} - Display title
 */
export const getCredentialTitle = (url) => {
  if (!url) return 'Unknown Site';
  
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    
    // Remove www. prefix if present
    const domain = hostname.replace(/^www\./, '');
    
    // Capitalize first letter
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch {
    // If URL parsing fails, return the original string
    return url;
  }
};