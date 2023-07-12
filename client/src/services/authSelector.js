// make shortcut functions to aid with auth features

import { useContext } from 'react';
import { AppContext } from './appContext';

// easy access to appContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

const authKey = 'authData';

// easy access to auth related context
export const useAuth = () => {
  const { dispatch } = useAppContext();
  const { auth } = useAppContext();

  const isLoggedIn = Boolean(auth.token);

  const getSavedAuthFromStore = (newAuth = undefined) => {
    if (newAuth) {
      //token is valid so save to store
      localStorage.setItem(authKey, JSON.stringify(newAuth));
      return;
    }

    // otherwise read the token from the store
    return JSON.parse(localStorage.getItem(authKey) ?? 'null');
  };
  const saveAuth = newAuth => {
    if (!newAuth) {
      localStorage.removeItem(authKey);
    }
    //save the valid token
    getSavedAuthFromStore(newAuth);
  };

  const removeAuth = () => {
    saveAuth(null);
  };

  const logout = () => {
    dispatch(['logout']);
    removeAuth();
  };

  const getSavedAuth = () => getSavedAuthFromStore();

  return { ...auth, isLoggedIn, getSavedAuth, saveAuth, logout };
};
