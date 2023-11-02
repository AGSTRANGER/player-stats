import "./App.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import Players from "./components/Players/Players";
import store from "./redux/store";
import { Provider } from "react-redux";
import { client } from "./GraphQL/graphqlSetup";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Players />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
