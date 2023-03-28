import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map((actor) => {
    const eachMovie = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return (
      <div>
        <p>{actor.name}</p>
        <ul>{eachMovie}</ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
      {/*{code here}*/}
    </div>
  )
}

export default Actors;
