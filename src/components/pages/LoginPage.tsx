import React, { Component } from "react";
import LoginForm from "../forms/LoginForm.tsx";

class LoginPage extends Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <LoginForm />
      </>
    );
  }
}

export default LoginPage;
