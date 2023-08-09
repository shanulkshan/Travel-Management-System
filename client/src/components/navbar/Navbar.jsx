import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TravelWise</span>
        </Link>
        <div className="navItems">
          <button className="navButton">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Register
            </Link>
          </button>
          <button className="navButton">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar