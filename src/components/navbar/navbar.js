import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';

function BasicNavbar() {
  const { isLoggedIn } = useContext(AuthContext);
  console.debug("isLoggedIn state is", isLoggedIn)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="bird-svgrepo-com.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="BirdWatch Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/observations">Observation</Nav.Link>
            <Nav.Link href="http://localhost:3000/education">Education</Nav.Link>
            <Nav.Link href="http://localhost:3000/blog">Blog</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">How To Use</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {isLoggedIn === false ? (<Button> Login </Button>) : (<Button> Profile </Button>)}

      </Container>
    </Navbar>
  );
}

export default BasicNavbar;