import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
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

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
