import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import client from './apolloClient'; 
// import { AppProvider } from './services/appContext'; 
import { AuthProvider } from './context/authContext';



import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_URI,
//   cache: new InMemoryCache(),
// });

// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <AuthProvider>
    
    <StrictMode>
      <ColorModeScript />
      <ApolloProvider client={client}>
        {/* <AppProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </AppProvider> */}
      </ApolloProvider>
    </StrictMode>
  </AuthProvider>
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
