import { useAuth } from '../services/authSelector';

// show the children only when there is a signed in user
export const WhenLoggedIn = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <></>;
};

// show the children only when there is no signed in user
export const WhenNotLoggedIn = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? children : <></>;
};
