import React from 'react';
// Apollo + GraphQL
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';

import Routes from './routes';

// Initialize Apollo client and set the site link as localhost/port 4000
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4001' }),
  cache: new InMemoryCache(),
});

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
