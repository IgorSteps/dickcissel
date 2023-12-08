import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import AccessbilityModal from '../navbar/accessbilityModal';

function AdminNavbar() {
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
            <Navbar.Brand href="#home">
                Admin Dashboard
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Button className='mx-2' variant="primary" onClick={handleShow}>Accessbility</Button>
            <AccessbilityModal show={show} handleClose={handleClose}></AccessbilityModal>

        </Container>
        </Navbar>
  );
}

export default AdminNavbar;