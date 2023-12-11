import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function generateMessageID () {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array)
    console.debug("Unique msg ID: ", array)
    return array
  }

function HelpConfirmationModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for sending your query!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your query ID is {generateMessageID()}.</Modal.Body>
        <Modal.Body>We have received your message and will aim to respond in 3 working days.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default HelpConfirmationModal;
