import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary mt-auto">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col className="mb-1">
            <a
              href="https://www.linkedin.com/in/cathyxle/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={socialIconsStyle} />
            </a>
            <a
              href="https://github.com/Cathy347Le"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare style={socialIconsStyle} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">Made by Cathy Le</Col>
        </Row>
      </Container>
    </footer>
  );
};

const socialIconsStyle = {
  fontSize: '30px',
  marginInline: '6px',
  color: '#fff',
};

export default Footer;
