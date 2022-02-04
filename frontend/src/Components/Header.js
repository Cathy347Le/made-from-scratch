import React from 'react';
import './Header.scss';
import navlogo from './assets/baking-icon-32x32.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={navlogo}
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{' '}
          Made from Scratch
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#out-story">Our Story</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Cart</Nav.Link>
          <Nav.Link href="#out-story">Sign In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
