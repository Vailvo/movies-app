import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class MovieForm extends Component {
  render() {
    return (
      <>
        <div className="form-container">
          <form className="form-field">
            Movie Title:{" "}
            <input
              type="text"
              id="movieTitle"
              placeholder="Movie Title"
              required
            ></input>
            <br />
            Director:{" "}
            <input
              type="text"
              id="director"
              placeholder="Director"
              required
            ></input>
            <br />
            Year of Release:{" "}
            <input
              type="number"
              id="year"
              placeholder="Year"
              required
              minLength={4}
              maxLength={4}
            ></input>
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
