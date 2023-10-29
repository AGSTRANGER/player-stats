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
import Players from "./components/Players/Players";

import store from './redux/store'; 
import { Provider } from 'react-redux';

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


function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="border border-red-500 border-2">
          <Players />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
