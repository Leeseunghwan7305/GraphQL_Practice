import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const Apollo = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

Apollo.query({
  query: gql`
    {
      allMovies {
        title
      }
    }
  `,
}).then((data) => console.log(data.data));

export default Apollo;
