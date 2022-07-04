import React, { Component } from "react";
import MovieForm from "../forms/MovieForm.tsx";

class MoviePage extends Component {
  render() {
    return (
      <>
        <h1>Movie Page</h1>
        <p>Create a movie using the movie form.</p>
        <MovieForm />
      </>
    );
  }
}

export default MoviePage;
