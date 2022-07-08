import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page-styles/pages.css";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="home-cont">
          <h2 className="message">Welcome!</h2>
          {/* <Link to="/register" className="nav-link">
            Sign Up
          </Link>{" "}
          |{" "}
          <Link to="/login" className="nav-link">
            Login
          </Link> */}
          <div className="table-cont">
            <h1>Movies Added by Users</h1>
            <table>
              <tr>
                <div className="chevron"></div>
                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>
                <div className="chevron"></div>
              </tr>
            </table>
            <br />
            <table>
              <tr>
                <div className="chevron"></div>
                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>

                <th>
                  {" "}
                  <p>Movie Title</p> <p>Director</p> <p>Year</p> <p>User</p>
                </th>
                <div className="chevron"></div>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
