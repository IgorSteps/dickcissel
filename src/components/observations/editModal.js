import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"; 

function EditModal({ birdName, birdCount, onUpdate, show, handleClose }) {
  const [newBirdName, setNewBirdName] = useState(birdName);
  const [newBirdCount, setNewBirdCount] = useState(birdCount);
  const handleSubmitEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!validateEditNameIsNotNil(newBirdName) || !validateEditCountIsNotNil(newBirdCount)) {
      return;
    }
    onUpdate(newBirdName, newBirdCount);
    handleClose();
  };

   // Validation.
   const [editNameErrorMessage, setEditNameErrorMessage] = useState('') 
   const [editCountErrMessage, setEditCountErrorMessage] = useState('') 
   const validateEditNameIsNotNil = (name) => {
       if (name.trim().length === 0) {
           setEditNameErrorMessage('Name field must not be empty');
           return false;
       } else {
           setEditNameErrorMessage('');
           return true;
       }
   };
   const validateEditCountIsNotNil = (count) => {
       if (count.length === 0) {
           setEditCountErrorMessage('Count field must not be empty');
           return false;
       } else {
           setEditCountErrorMessage('');
           return true;
       }
   };

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Observation</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3" controlId="formBirdName">
                        <Form.Label htmlFor='birdname'>Bird Name</Form.Label>
                        <Form.Control 
                          name="birdname" id="birdname"
                          type="text" 
                          placeholder="Enter new bird name" 
                          onChange={(e) => setNewBirdName(e.target.value)}
                          value={newBirdName}  
                        />
                        {editNameErrorMessage && <div className="text-danger">{editNameErrorMessage}</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBirdCount">
                        <Form.Label htmlFor='birdcount'>Count</Form.Label>
                        <Form.Control 
                          name="birdcount" id="birdcount"
                          type="number" 
                          placeholder="Enter new bird count" 
                          onChange={(e) => setNewBirdCount(e.target.value)}
                          value={newBirdCount}  
                        />
                        {editCountErrMessage && <div className="text-danger">{editCountErrMessage}</div>}
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" type='button' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmitEdit}>
            Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
  );
}

export default EditModal;