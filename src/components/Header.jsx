import logo from "../assets/logo.png";
import { Link } from "react-router-dom"
import "./Header.css"

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="header-center">
        <h1 className="title">WikiLite</h1>
        <img src={logo} alt="Wikipedia Logo" className="wiki-logo" />
      </div>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;