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
        <Link to="/pantry">
          <li>Pantry</li>
        </Link>
        <Link to="/shoppinglist">
          <li>Shopping List</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
