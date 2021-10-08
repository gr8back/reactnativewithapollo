/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import MyRouter from './MyRouter';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  link: new HttpLink({
    uri: '',
    onError: ({networkError, graphQLErrors}) => {
      console.log('graphQLErrors', graphQLErrors);
      console.log('networkError', networkError);
    },
  }),
  cache: new InMemoryCache(),
});

const ApolloAlarm = () => (
  <ApolloProvider client={client}>
    <MyRouter />
  </ApolloProvider>
);

console.log('Testing index.js');

AppRegistry.registerComponent('myapp', () => ApolloAlarm);
