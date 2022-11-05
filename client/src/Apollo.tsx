import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const Apollo = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default Apollo;
