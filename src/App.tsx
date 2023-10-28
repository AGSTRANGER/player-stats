import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


import { onError } from "@apollo/client/link/error";
import Players from "./components/Players";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message,}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/",
  }),
]);
// #TODO
// Set this only in dev env
if (true) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
console.log("🚀 ~ file: App.tsx:34 ~ client:", client)


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="border border-red-500 border-2">
      <Players/>
      </div>
    </ApolloProvider>

  );
}

export default App;
