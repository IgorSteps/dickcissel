import BasicNavbar from "../navbar/navbar"
import { Container, Col, Row } from 'react-bootstrap';
import React, { useState , useEffect} from "react"; 
import HelpConfirmationModal from './confirmationModal';
import ContactUsForm from "./contactUsForm";
import ContactUsDetails from "./contactUsDetails";

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

    const [confrimationModalShow, setConfirmationModalShow] = useState(false);
    const handleClose = () => {
        setConfirmationModalShow(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation();
        setConfirmationModalShow(true)
    }


  return (
    <>
    <BasicNavbar />
    <Container className='observation-form'>
        <Row className="login-form-content">
            <Col>
                <ContactUsForm handleSubmit={handleSubmit} />
            </Col>
            <Col>
                <ContactUsDetails />
            </Col>
        </Row>
        <HelpConfirmationModal show={confrimationModalShow} handleClose={handleClose}/>
    </Container>
    </>
  );
}

export default ContactUs