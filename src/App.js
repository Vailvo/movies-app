import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { Component } from "react";
import MoviePage from "./components/pages/MoviePage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import RegistrationPage from "./components/pages/RegistrationPage.tsx";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Router>
            <header className="navBar">
              <button>
                <Link to="/">Home</Link>
              </button>{" "}
              <Link to="/movies">Movies</Link>{" "}
              <button>
                {" "}
                <Link to="/login">Log In</Link>
              </button>{" "}
              <button>
                {" "}
                <Link to="/register">Register</Link>
              </button>{" "}
              <button>
                {" "}
                <Link to="/faq">FAQ</Link>
              </button>
            </header>

            <p className="subTitle">Movie App</p>
            <p className="message">Welcome!</p>
            <p>
              <i>Created by</i> <strong>Vail Arvia</strong>
            </p>

            <Routes>
              {/* <Route path="/"></Route> */}
              <Route path="/movies" element={<MoviePage />} exact />

              <Route path="/login" element={<LoginPage />} exact />

              <Route path="/register" element={<RegistrationPage />} exact />

              {/* <Route path="/faq">
              <h1>FAQ Page</h1>
            </Route> */}
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
