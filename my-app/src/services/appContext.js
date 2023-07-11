import { createContext, useReducer } from 'react';

export const USER_TYPE = { MENTOR: 'MENTOR', MENTEE: 'MENTEE' };

// define the structure of a global data bavriable
const initialStore = {
  auth: {
    user: undefined,
    token: undefined,
    email: undefined,
    userType: undefined,
  },
  dispatch: () => undefined,
};

//use react context to make the global variable available throughout the application
export const AppContext = createContext(initialStore);

const reducer = (store, payload) => {
  const [action, data = undefined] = payload;
  switch (action) {
    case 'logout': {
      return {
        ...store, //spread or re-use the previous values of the store
        auth: {
          user: undefined,
          token: undefined,
          email: undefined,
          userType: undefined,
        },
      };
    }
    case 'login': {
      const { user, token, email, userType } = data;
      return { ...store, auth: { user, token, email, userType } };
    }
    default: {
      console.log('invalid action provided');
    }
  }
};
// make a wrapper container for the context feature, which will actuall make the global variable available
export const AppContextContainer = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <AppContext.Provider value={{ ...store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
