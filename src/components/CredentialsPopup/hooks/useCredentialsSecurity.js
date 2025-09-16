// src/components/CredentialsPopup/hooks/useCredentialsSecurity.js
import { useState, useCallback, useMemo } from 'react';

export const useCredentialsSecurity = (credentials) => {
  const [showCredentials, setShowCredentials] = useState(false);
  const [securityVerified, setSecurityVerified] = useState(false);

  // Generate masked version of credentials
  const maskedCredentials = useMemo(() => {
    if (!credentials) return null;

    const maskString = (str) => {
      if (!str) return '';
      if (str.length <= 2) return '••';
      return str.slice(0, 1) + '•'.repeat(str.length - 2) + str.slice(-1);
    };

    return {
      ...credentials,
      username: credentials.username ? maskString(credentials.username) : '',
      password: credentials.password ? '•'.repeat(Math.max(credentials.password.length, 8)) : ''
    };
  }, [credentials]);

  const handlePinValidation = useCallback(async () => {
    // Here you could add additional security checks
    // For example, checking against a hashed PIN, rate limiting, etc.
    
    // Simulate security verification delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setSecurityVerified(true);
    setShowCredentials(true);
  }, []);

  const resetSecurity = useCallback(() => {
    setShowCredentials(false);
    setSecurityVerified(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    if (securityVerified) {
      setShowCredentials(prev => !prev);
    }
  }, [securityVerified]);

  return {
    maskedCredentials,
    showCredentials,
    securityVerified,
    handlePinValidation,
    resetSecurity,
    toggleVisibility
  };
};