import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page-styles/pages.css";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="home-cont">
          <h2 className="message">Welcome!</h2>
          <h1>
            <Link to="/register">Sign Up</Link> or{" "}
            <Link to="/login">Login</Link>!
          </h1>
          <div className="table-cont">
            <table>
              <tr>
                <th>Movie Title</th>

                <th>Director</th>

                <th>Year of Release</th>

                <th>Added by</th>
              </tr>
              <tr>
                <td>Fifth Element</td>

                <td>Luc Besson</td>

                <td>1997</td>

                <td>AngstArvia</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
