import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <h1>WikiLite</h1>
      <p>Wikipedia</p>

      <img
        src={logo}
        alt="Wikipedia logo"
        className="logo"
      />
    </header>
  );
}

export default Header;