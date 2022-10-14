import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Portfolio 2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
