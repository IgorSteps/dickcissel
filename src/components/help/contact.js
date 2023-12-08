import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicNavbar from "../navbar/navbar"
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactUs() {
  return (
    <>
    <BasicNavbar />
    <Container className='login-form-container'>
    <Form className='login-form'>
    <h3 className="login-form-title">Contact Us</h3>
     <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name, eg. John Smith" />
      </Form.Group>

      <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject, eg. bird counting isn't working" />
      </Form.Group>


      <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address, eg. johnsmith@gmail.com" />
      </Form.Group>

        <Form.Label className='login-form-content'>Message</Form.Label>
        <InputGroup className='mb-3 login-form-content'>
            <Form.Control as="textarea" aria-label="With textarea" placeholder='Enter your message here.'/>
        </InputGroup>

        <div className='login-form-content d-grid gap-2 mt-4'>
        <Button variant="primary" type="submit">
            Send
        </Button>
        </div>

    </Form>
    </Container>
    </>
  );
}

export default ContactUs