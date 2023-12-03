import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function QuizModal({handleClose, show}) {
  return (
    <>
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Quiz complete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-muted">Thank you for taking the quiz!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
    </Modal>
    </>
  );
}

export default QuizModal;