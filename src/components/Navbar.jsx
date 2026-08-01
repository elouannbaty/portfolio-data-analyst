import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Elouann BATY
      </div>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/cv">CV</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;