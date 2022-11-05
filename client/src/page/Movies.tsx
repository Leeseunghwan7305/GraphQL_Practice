import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

const Movies = () => {
  const { id } = useParams();

  const { data } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  return <div>{data.movie.title}</div>;
};

export default Movies;
