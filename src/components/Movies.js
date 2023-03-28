import React from "react";
import { movies } from "../data";

function Movies() {

  const eachMovie = movies.map((movie) => {
    const movieGenres = movie.genres.map((genre) => {
      return <li key={genre}>{genre}</li>
    })
    return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>{movieGenres}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {eachMovie}
      {/*{code here}*/}
    </div>
  ) 
}

export default Movies;
