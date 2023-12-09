import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function ContactUsDetails() {
    const email = "contact@uea.com";
    const phone = "07123456789";
    const address = "UEA, Norwich, NR4 7TJ";
    const mapQuery = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    
    return (
        <>
        <h3 className="login-form-title">Or reach out to us:</h3>
        <Card>
            <Card.Body>
                <Card.Title>Our contact details:</Card.Title>
                <Card.Text>
                    <strong>Address:</strong> <a id="address" href={mapQuery} target="_blank" rel="noopener noreferrer" aria-label="Open address in Google Maps">{address}</a>
                </Card.Text>
                <Card.Text>
                    <strong>Phone:</strong> <a id="phone" aria-label={`Call us at ${phone}`} href={`tel:${phone}`}>{phone}</a>
                </Card.Text>
                <Card.Text>
                    <strong>Email:</strong> <a id="email" aria-label={`Send email to ${email}`} href={`mailto:${email}`}>{email}</a>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default ContactUsDetails