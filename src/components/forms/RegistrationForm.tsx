import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class RegistrationForm extends Component {
  render() {
    return (
      <>
        <h1>Register</h1>
        <div className="form-container">
          <form className="form-field">
            Email: <input required></input> <br />
            Username: <input type="text" required></input> <br />
            Password: <input type="password" required></input>
            <br />
            Confirm Password: <input required></input>
            <br />
            <br />
            <button>Register</button>
          </form>
        </div>
      </>
    );
  }
}

export default RegistrationForm;
