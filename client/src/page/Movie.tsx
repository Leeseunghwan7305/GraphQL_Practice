import { useApolloClient, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import myStore from "../store";
import { IMovie } from "../type";
const Movie = () => {
  const client = useApolloClient();
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((results) => {
        console.log(results.data);
        setMovies(results.data.allMovies);
      });
  }, [client]);
  return (
    <div>
      <h1>
        <div>
          {movies.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Movie;
