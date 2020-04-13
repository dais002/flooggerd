import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Navbar.Brand>meeshandstan eats</Navbar.Brand>

        <Nav className="ml-auto">
          <LinkContainer to="/aboutus">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link>Recipes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shoppinglist">
            <Nav.Link>Shopping List</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
