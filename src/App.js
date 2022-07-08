import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./components/pages/HomePage.tsx";
import FaqPage from "./components/pages/FaqPage.tsx";
import MoviePage from "./components/pages/MoviePage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import RegistrationPage from "./components/pages/RegistrationPage.tsx";

class App extends Component {
  render() {
    return (
      <>
        <div className="above-app">
          <div className="App">
            <div className="logo-cont">
              <strong className="subTitle">Movie App</strong>
              <i>Created by</i> <strong>Vail Arvia</strong>
            </div>
            <Router>
              <header className="navBar">
                <button>
                  <Link to="/">Home</Link>
                </button>{" "}
                <button>
                  <Link to="/movies">Movies</Link>{" "}
                </button>
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

              <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/movies" element={<MoviePage />} exact />

                <Route path="/login" element={<LoginPage />} exact />

                <Route path="/register" element={<RegistrationPage />} exact />

                <Route path="/faq" element={<FaqPage />} exact />
              </Routes>
            </Router>
          </div>
        </div>
      </>
    );
  }
}

export default App;
