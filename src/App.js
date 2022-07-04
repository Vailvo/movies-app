import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MoviePage from "./components/pages/MoviePage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import RegistrationPage from "./components/pages/RegistrationPage.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="navBar">
          <button Link to="/">
            Home
          </button>{" "}
          <button Link to="/movies">
            Movies
          </button>{" "}
          <button Link to="/login">
            Log In
          </button>{" "}
          <button Link to="/register">
            Register
          </button>{" "}
          <button Link to="/faq">
            FAQ
          </button>
        </header>
      </Router>
      <p className="subTitle">Movie App</p>
      <p className="message">Welcome!</p>
      <p>
        <i>Created by</i> <strong>Vail Arvia</strong>
      </p>

      {/* <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <MoviePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/faq">
          <h1>FAQ Page</h1>
        </Route>
      </Routes> */}
    </div>
  );

  function Home() {
    return <h2>Home</h2>;
  }

  function MoviePage() {
    return (
      <div>
        <MoviePage />
      </div>
    );
  }
}

export default App;
