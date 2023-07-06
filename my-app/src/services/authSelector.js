// make shortcut functions to aid with auth features

import { useContext } from 'react';
import { AppContext } from './appContext';

// easy access to appContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

// easy access to auth related context
export const useAuth = () => {
  const { auth } = useAppContext();

  const isLoggedIn = Boolean(auth.token);

  return { ...auth, isLoggedIn };
};
