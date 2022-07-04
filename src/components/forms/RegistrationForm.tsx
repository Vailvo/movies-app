import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class RegistrationForm extends Component {
  render() {
    return (
      <>
        <h1>Register</h1>
        <div className="form-container">
          <form className="form-field">
            Email: <input></input> <br />
            Username: <input type="text"></input> <br />
            Password: <input type="password"></input>
            <br />
            Confirm Password: <input></input>
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
