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
          <Nav.Item className="w-50 d-flex me-5">
            <Nav.Link href="live-charts">Live Chart</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              style={{ width: "200px" }}
              variant="dark"
              className="signup-btn"
            >
              Get Signals
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
