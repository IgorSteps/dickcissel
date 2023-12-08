import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicNavbar from "../navbar/navbar"
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState , useEffect} from "react"; 
import validator from 'validator'

function ContactUs() {
    // Warn users if they try to leave a page with unsubmitted changes.
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            const msg = ''
            e.returnValue = msg;
            return msg;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // Validation.
    const [nameErrorMessage, setNameErrorMessage] = useState('') 
    const validateName = (name) => {
        if (name.trim().length === 0) {
            setNameErrorMessage('Name field must not be empty') 
        } else {
            setNameErrorMessage('') 
        }
    };

    const [subjectErrorMessage, setSubjectErrorMessage] = useState('') 
    const validateSubject = (subject) => {
        if (subject.trim().length === 0) {
            setSubjectErrorMessage('Subject field must not be empty') 
        } else {
            setSubjectErrorMessage('') 
        }
    };

    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            setEmailErrorMessage("Please enter valid email")
        } else {
            setEmailErrorMessage('')
        }
    }


  return (
    <>
    <BasicNavbar />
    <Container className='login-form-container'>
    <Form className='login-form'>

        <h3 className="login-form-title">Contact Us</h3>
        <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
            <Form.Label htmlFor="fullname">Full Name</Form.Label>
            <Form.Control 
            id="fullname"
            type="text"
            placeholder="Enter your full name, eg. John Smith"
            onChange={e => validateName(e.target.value)}
            required/>
            {nameErrorMessage && <Form.Text className='text-danger' aria-describedby="fullname">{nameErrorMessage}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
            type="text" 
            id='subject'
            placeholder="Enter subject, eg. bird counting isn't working" 
            onChange={e => validateSubject(e.target.value)}
            required/>
            {subjectErrorMessage && <Form.Text className='text-danger' aria-describedby="subject">{subjectErrorMessage}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3 login-form-content" controlId="formBasicEmail">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control 
            type="email" 
            id='email'
            onChange={(e) => validateEmail(e.target.value)}
            placeholder="Enter your email address, eg. johnsmith@gmail.com" 
            required/>
            {emailErrorMessage && <Form.Text className="text-danger">{emailErrorMessage}</Form.Text>}
        </Form.Group>

        <Form.Label htmlFor="message" className='login-form-content'>Message</Form.Label>
        <InputGroup className='mb-3 login-form-content'>
            <Form.Control 
            id='message'
            as="textarea" 
            aria-label="textarea"
            placeholder='Enter your message here.' 
            required/>
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