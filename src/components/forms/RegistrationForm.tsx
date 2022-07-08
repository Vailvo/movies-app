import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class RegistrationForm extends Component {
  render() {
    return (
      <>
        <h1>Register</h1>
        <div className="form-container">
          <form
            action="#"
            method="post"
            onSubmit="return ValidationEvent()"
            className="form-field"
          >
            Email:{" "}
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              required
            ></input>{" "}
            <br />
            Username:{" "}
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
            ></input>{" "}
            <br />
            Password:{" "}
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            ></input>
            <br />
            Confirm Password:{" "}
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            ></input>
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
