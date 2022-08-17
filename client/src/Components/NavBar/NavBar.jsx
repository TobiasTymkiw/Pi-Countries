import { React } from "react";
import { Link } from "react-router-dom";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import "./nav.css";

function Nav() {
  return (
    <nav className="topnav">
      <Link to="/">
        <div>LandingPage</div>
      </Link>
      <div>
        <Link to="/home">
          <div>Home</div>
        </Link>
      </div>
      <div>
        <Link to="/create">
          <div>New Activity</div>
        </Link>
      </div>
      <div className="topsearch">
        <SearchBarComponent />
      </div>
    </nav>
  );
}

export default Nav;
