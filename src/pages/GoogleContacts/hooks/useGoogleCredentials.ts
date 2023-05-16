import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export function useGoogleCredentials() {
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState<{
    access_token: string;
  }>({
    access_token: '',
  });

  const login = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/contacts.readonly',
    onSuccess: (codeResponse) => setUserCredentials(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  return {
    userCredentials,
    login,
    navigate,
  };
}
