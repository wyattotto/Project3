import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import { AppContextContainer } from './services/appContext';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache(),
  // headers: {
  //   authorization:
  //     `bearer ${JSON.stringify(localStorage.getItem('authData')).token} ` || '',
  // },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <AppContextContainer>
      <ApolloProvider client={client}>
        {/* <AppProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </AppProvider> */}
      </ApolloProvider>
    </AppContextContainer>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
