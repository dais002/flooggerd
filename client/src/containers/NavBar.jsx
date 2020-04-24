import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="meeshandstan">
        <Link to="/">meeshandstan eats</Link>
      </div>
      <ul className="navright">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link to="/placeholder">
          <li>Placeholder</li>
        </Link>
        <Link to="/shoppinglist">
          <li>Pantry/Shopping</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
