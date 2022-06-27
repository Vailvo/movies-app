import React, { Component } from "react";

class RegistrationForm extends Component {
  render() {
    return (
      <>
        <form>
          Email: <input></input> <br />
          Username: <input type="text"></input> <br />
          Password: <input type="password"></input>
          <br />
          Confirm Password: <input></input>
          <br />
          <br />
          <button>Register</button>
        </form>
      </>
    );
  }
}

export default RegistrationForm;
