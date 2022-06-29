import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    return (
      <>
        <form>
          Movie Title: <input></input>
          <br />
          Director: <input></input>
          <br />
          Year of Release: <input></input>
          <br />
          <br />
          <button>Add Movie</button>
        </form>
      </>
    );
  }
}

export default MovieForm;
