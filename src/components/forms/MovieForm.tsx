import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class MovieForm extends Component {
  render() {
    return (
      <>
        <div className="form-container">
          <form className="form-field">
            Movie Title: <input type="text" required></input>
            <br />
            Director: <input type="text" required></input>
            <br />
            Year of Release:{" "}
            <input type="number" required minLength={4} maxLength={4}></input>
            <br />
            <br />
            <button className="submit">Add Movie</button>
          </form>
        </div>
      </>
    );
  }
}

export default MovieForm;
