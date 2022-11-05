import { useApolloClient, gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import myStore from "../store";
import { IMovie, ITweet } from "../type";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;
const Movie = () => {
  const { loading, data, error } = useQuery(ALL_MOVIES);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch</h1>;
  }
  // const client = useApolloClient();
  // const [movies, setMovies] = useState<IMovie[]>([]);
  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           allMovies {
  //             id
  //             title
  //           }
  //         }
  //       `,
  //     })
  //     .then((results) => {
  //       console.log(results.data);
  //       setMovies(results.data.allMovies);
  //     });
  // }, [client]);
  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie: IMovie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
      <h1>Tweets</h1>
      {data.allTweets.map((tweet: ITweet) => {
        return <li key={tweet.id}>{tweet.text}</li>;
      })}
    </ul>
  );
};

export default Movie;
