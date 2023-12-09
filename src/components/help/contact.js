import BasicNavbar from "../navbar/navbar"
import { Container } from 'react-bootstrap';
import React, { useState , useEffect} from "react"; 
import HelpConfirmationModal from './confirmationModal';
import ContactUsForm from "./contactUsForm";

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
    <Container className='login-form-container'>
        <ContactUsForm handleSubmit={handleSubmit} />
        <HelpConfirmationModal show={confrimationModalShow} handleClose={handleClose}/>
    </Container>
    </>
  );
}

export default ContactUs