import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className="form-container">
          <form
            action="#"
            method="post"
            onSubmit="return ValidationEvent()"
            className="form-field"
          >
            Username:{" "}
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
            ></input>
            <br />
            Password:{" "}
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            ></input>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
