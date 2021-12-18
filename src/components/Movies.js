import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log(movies)
  const movieList = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} Minutes</p>
      <ul>
        {(movie.genres).map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <h1>Movies Page</h1>
      {movieList}
    </>
  );
}

export default Movies;
