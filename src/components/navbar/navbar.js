import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BirdWatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Observation</Nav.Link>
            <Nav.Link href="#link">Education</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">How To Use</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;