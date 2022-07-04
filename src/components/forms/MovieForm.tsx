import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class MovieForm extends Component {
  render() {
    return (
      <>
        <div className="form-container">
          <form className="form-field">
            Movie Title: <input></input>
            <br />
            Director: <input></input>
            <br />
            Year of Release: <input></input>
            <br />
            <br />
            <button>Add Movie</button>
          </form>
        </div>
      </>
    );
  }
}

export default MovieForm;
