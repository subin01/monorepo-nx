import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import Blog from './Blog/Blog';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/73d05b0dfa68b3bcd440a20f5ae2d929',
  // uri: 'https://graphqlzero.almansi.me/api',
  // uri: 'http://api.spacex.land/graphql/',
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to connect-smart!</h1>
        </header>
        <main>
          <Blog></Blog>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
