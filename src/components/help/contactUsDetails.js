import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function ContactUsDetails() {

    return (
        <>
        <h3 className="login-form-title">Or reach out to us</h3>
        <Card>
            <Card.Body>
                <Card.Title>Our contact details</Card.Title>
                <Card.Text>
                    <strong>Address:</strong> UEA, Norwich, NR4 7TJ
                </Card.Text>
                <Card.Text>
                    <strong>Phone:</strong> 07123456789
                </Card.Text>
                <Card.Text>
                    <strong>Email:</strong> contact@uea.com
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default ContactUsDetails