/**
 * @description show the mentee login by default with a toggle switch to sshow the mentor login
 */
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext, useAuth } from '../services/authSelector';
import { useMutation, gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const Signin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const { isLoggedIn } = useAuth();

  const [creds, setCreds] = useState({
    email: 'bkernighan@techfriends.dev',
    password: 'password01',
  });

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      const { email, username, token } = data.login;
      const authData = {
        user: {
          email,
          username,
        },
        token,
      };

      dispatch(['login', authData]);
      auth.saveAuth(authData);
    },
    onError: err => {
      console.error('Error logging in: ', err);
      // Handle the error in a user-friendly way
    },
  });

  const onChangeEmail = event => {
    setCreds({ ...creds, email: event.target.value });
  };

  const onChangePassword = event => {
    setCreds({ ...creds, password: event.target.value });
  };

  const handleSubmit = (
    event,
    userType = 'MENMTEE' // 'MENTEE' as default user type
  ) => {
    event.preventDefault();
    if ([undefined, ''].includes(creds.password) || [undefined, ''].includes(creds.email)) {
      throw new Error('invalid credentials');
    }
    login({ variables: { email: creds.email, password: creds.password } });
    navigate(userType === 'MENTEE' ? '/mentee-homepage' : '/mentor-homepage');
  };

  useEffect(() => {
    isLoggedIn && navigate('/mentee-homepage');
  }, [isLoggedIn, navigate]);

  return (
    <form>
      {/* email/username */}
      <FormControl>
        <FormLabel>Email/username</FormLabel>
        <Input
          type="email"
          name="email"
          id="frm_email"
          value={creds.email}
          onChange={onChangeEmail}
        />
      </FormControl>
      {/* password */}
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          id="frm_password"
          value={creds.password}
          onChange={onChangePassword}
        />
      </FormControl>
      {/* submit */}
      <Button onClick={(event) => handleSubmit(event, 'MENTEE')}>
        Mentee Login
      </Button>
      <Button onClick={(event) => handleSubmit(event, 'MENTOR')}>
        Mentor Login
      </Button>
    </form>
  );
};
