import React from 'react';
import './Header.scss';
import navlogo from './assets/baking-icon-32x32.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={navlogo}
              width="32"
              height="32"
              className="d-inline-block align-top"
            />{' '}
            Made from Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/our-story">
            <Nav.Link>Our Story</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
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
