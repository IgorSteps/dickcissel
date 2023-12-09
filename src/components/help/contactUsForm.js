import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState , useEffect} from "react"; 
import validator from 'validator'

function ContactUsForm({handleSubmit}) {
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
            <Form onSubmit={handleSubmit}>

            <h3 className="login-form-title">Send Us a Message</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="fullname">Full Name</Form.Label>
                <Form.Control 
                id="fullname"
                type="text"
                placeholder="Enter your full name, eg. John Smith"
                onChange={e => validateName(e.target.value)}
                required/>
                {nameErrorMessage && <Form.Text className='text-danger' aria-describedby="fullname">{nameErrorMessage}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3 " >
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control
                type="text" 
                id='subject'
                placeholder="Enter subject, eg. bird counting isn't working" 
                onChange={e => validateSubject(e.target.value)}
                required/>
                {subjectErrorMessage && <Form.Text className='text-danger' aria-describedby="subject">{subjectErrorMessage}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control 
                type="email" 
                id='email'
                onChange={(e) => validateEmail(e.target.value)}
                placeholder="Enter your email address, eg. johnsmith@gmail.com" 
                required/>
                {emailErrorMessage && <Form.Text className="text-danger">{emailErrorMessage}</Form.Text>}
            </Form.Group>

            <Form.Label htmlFor="message" >Message</Form.Label>
            <InputGroup className='mb-3 '>
                <Form.Control 
                id='message'
                as="textarea" 
                aria-label="textarea"
                placeholder='Enter your message here.' 
                required/>
            </InputGroup>

            <div className='d-grid gap-2 mt-4'>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </div>

        </Form>
    )
}

export default ContactUsForm