import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar variant="dark" className="justify-content-between navbar-custom">
        <Nav>
          <Navbar.Brand href="/">Smart Trader</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link href="#">Live Chart</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Button variant="outline-light" className="signup-btn">Get Signals</Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
