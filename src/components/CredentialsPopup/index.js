// src/components/CredentialsPopup/index.js
// Main export file for the CredentialsPopup module

// Main component
import CredentialsPopup from './CredentialsPopup';
export { default as CredentialsPopup } from './CredentialsPopup';

// Sub-components (if you need to use them separately)
export { PopupOverlay } from './PopupOverlay';
export { PinInput } from './PinInput';
export { CredentialsDisplay } from './CredentialsDisplay';
export { default as CopyButton } from './CopyButton';

// Hooks
export { useCredentialsSecurity } from './hooks/useCredentialsSecurity';

// Utilities
export * from './utils/credentialsUtils';

// Default export is the main component
export default CredentialsPopup;