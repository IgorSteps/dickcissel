import Accordion from 'react-bootstrap/Accordion';
import BasicNavbar from "../navbar/navbar"
import { Container } from 'react-bootstrap';

function FAQ() {

  return (
    <>
    <BasicNavbar />
    <Container className='observation-form'>
    <h3 className="login-form-title">Frequently Asked Questions</h3>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is Bird Counting?</Accordion.Header>
        <Accordion.Body>
        Bird counting is a method to record the number of birds within a specific area over a certain period.
        It helps to track bird populations, migration patterns, and contributes to bird conservation efforts.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. What is the best time to count birds?</Accordion.Header>
        <Accordion.Body>
        The best time is in the morning, when the birds are more active and visible.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Where can I learn to identify the birds?</Accordion.Header>
        <Accordion.Body>
          You can learn to identify birds in our education section. If you need help identifyign a bird, you can use our advanced searh system.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. How do I submit my bird counts?</Accordion.Header>
        <Accordion.Body>
          You can submit your observations on our observations page.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Can I count with other people?</Accordion.Header>
        <Accordion.Body>
          Yes, but make sure you count in different areas or do it together.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </>
  )
}


export default FAQ