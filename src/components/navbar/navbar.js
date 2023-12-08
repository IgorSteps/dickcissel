import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import AccessbilityModal from './accessbilityModal';

function BasicNavbar() {
  const { isLoggedIn } = useContext(AuthContext);
  console.debug("isLoggedIn state is", isLoggedIn)

  // Accessbility Modal state.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="bird-svgrepo-com.svg"
            width="40"
            height="40"
            className="img-fluid"
            alt="Bird Watch Logo"
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
              <NavDropdown.Item href="http://localhost:3000/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/contact-us">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Button className='mx-2' variant="primary" onClick={handleShow}>Accessbility</Button>
        <AccessbilityModal show={show} handleClose={handleClose}></AccessbilityModal>
        {isLoggedIn === false ? (<Button variant='primary' href='http://localhost:3000/auth'> Login </Button>) : (<Button variant='secondary'> Profile </Button>)}

      </Container>
    </Navbar>
  );
}

export default BasicNavbar;