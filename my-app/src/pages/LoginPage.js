/**
 * @description show the mentee login by default with a toggle switch to sshow the mentor login
 */

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { USER_TYPE } from '../services/appContext';
import { useAppContext, useAuth } from '../services/authSelector';
import { useMutation, gql } from '@apollo/client';

const ROLE = { MENTOR: 'MENTOR', MENTEE: 'MENTEE' };

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
          userType: USER_TYPE.MENTOR,
          calendly_url: 'https://calendly.com/demoproject3',
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

  //show signin form with a submit button and just set fake credentials
  const handleSubmit = (
    event,
    email = creds.email,
    password = creds.password
  ) => {
    event.preventDefault(); //stop the from from executing the default behaviour of reloading the page
    //validate or fail
    if ([undefined, ''].includes(password) || [undefined, ''].includes(email)) {
      throw new Error('invalid credentials');
    }

    //send creds to the backed using graphql
    // graphql call goes here
    login({ variables: { email: creds.email, password: creds.password } });
  };

  useEffect(() => {
    isLoggedIn && navigate('/home'); //kick the userto hom if they are logged
  }, [isLoggedIn, navigate]);

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
