/**
 * @description show the mentee login by default with a toggle switch to sshow the mentor login
 */

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { USER_TYPE } from '../services/appContext';
import { useAppContext } from '../services/authSelector';

const ROLE = { MENTOR: 'MENTOR', MENTEE: 'MENTEE' };

export const Signin = () => {
  const navigate = useNavigate()
  const { dispatch } = useAppContext();
  const [creds, setCreds] = useState({
    email: 'email@domain.com',
    password: 'password',
  });

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

    // pretend backend was called and successful
    const getFaketoken = () => new Date().toISOString();

    dispatch(['login', {
      email,
      username: 'fakeaccount@domain.com',
      token: getFaketoken(),
      userType: USER_TYPE.MENTOR
    }]);

    //auto route to home
    navigate('/home')

  };

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
          onChange={e => setCreds(oc => ({ ...oc, email: e.value }))}
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
          onChange={e => setCreds(oc => ({ ...oc, password: e.value }))}
        />
      </FormControl>
      {/* submit */}
      <Button type="submit">Submit</Button>
    </form>
  );
};
