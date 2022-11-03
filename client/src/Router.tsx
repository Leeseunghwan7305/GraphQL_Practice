import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./page/Movie";
import Movies from "./page/Movies";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
