import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Observation</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                    <div className="p-3 border bg-light">Name</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="p-3 border bg-light">Count</div>
                    </div>
                </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ViewModal;