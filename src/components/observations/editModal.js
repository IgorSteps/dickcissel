import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"; 

function EditModal({ birdName, birdCount, onUpdate, show, handleClose }) {
  const [newBirdName, setNewBirdName] = useState(birdName);
  const [newBirdCount, setNewBirdCount] = useState(birdCount);
  const handleSubmit = () => {
    onUpdate(newBirdName, newBirdCount);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Observation</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3" controlId="formBirdName">
                        <Form.Label>Bird Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter new bird name" 
                          onChange={(e) => setNewBirdName(e.target.value)}  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBirdCount">
                        <Form.Label>Count</Form.Label>
                        <Form.Control 
                          type="number" 
                          placeholder="Enter new bird count" 
                          onChange={(e) => setNewBirdCount(e.target.value)}
                        />
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
  );
}

export default EditModal;