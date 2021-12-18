import React from "react";
import { directors } from "../data";

function Directors() {
  // console.log(directors)
  const directorsList = directors.map((director) => (
    <div key={director.name}>
      <h3>{director.name}</h3>
      <ul>
        {(director.movies).map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Directors Page</h1>
      {directorsList}
    </>
  );
}

export default Directors;
