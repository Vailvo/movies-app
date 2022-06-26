import "./App.css";
import moviePage from "./components/pages/moviePage.component.tsx";
import loginPage from "./components/pages/loginPage.component.tsx";
import registrationPage from "./components/pages/registrationPage.component.tsx";

function App() {
  return (
    <div className="App">
      <header className="navBar">
        <button>Home</button> <button>Movies</button> <button>Log In</button>{" "}
        <button>Register</button> <button>FAQ</button>
      </header>
      <p className="subTitle">Movie App</p>
      <p className="message">Welcome!</p>
      <p>
        <i>Created by</i> <strong>Vail Arvia</strong>
      </p>
      <div>
        {/* {moviePage} */}
        <moviePage />
      </div>
      <div>
        <h2>LogIn</h2>
        {loginPage}
        {/* <loginPage /> */}
      </div>
      <div>
        <h2>Registration</h2>
        {registrationPage}
        {/* <registrationPage /> */}
      </div>
    </div>
  );
}

export default App;
