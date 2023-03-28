import React from "react";
import { directors } from "../data";

function Directors() {
  const eachDirector = directors.map((director) => {
    const directorMovies = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return (
      <div>
        <p>{director.name}</p>
        <ul>{directorMovies}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {eachDirector}
      {/*{code here}*/}
    </div>
  )
}

export default Directors;
