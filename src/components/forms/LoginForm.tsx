import React, { Component } from "react";
import "../forms/forms-validation/css/style.css";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className="form-container">
          <form className="form-field">
            Username: <input></input>
            <br />
            Password: <input></input>
            <br />
            <button>Login</button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
