import BasicNavbar from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState , useEffect} from "react"; 
import ConfirmationModal from "./confirmationModal";
import ViewModal from "./viewModal";
import EditModal from "./editModal";

export default function Observation(props) {
    // Validation.
    const [nameErrorMessage, setNameErrorMessage] = useState('') 
    const validateNameIsNotNil = (name) => {
        if (name.trim().length === 0) {
            setNameErrorMessage('Name field must not be empty') 
        } else {
            setNameErrorMessage('') 
        }
    };

    const [countErrMessage, setCountErrorMessage] = useState('') 
    const validateCountIsNotNil = (count) => {
        if (count.trim().length === 0) {
            setCountErrorMessage('Count field must not be empty') 
        } else {
            setCountErrorMessage('') 
        }
    };

    // Warn users if they try to leave a page with unsaved changes.
    // useEffect(() => {
    //         const handleBeforeUnload = (e) => {
    //             const confirmationMessage = ''
    //             e.returnValue = confirmationMessage;
    //             return confirmationMessage;
    //         };

    //         window.addEventListener('beforeunload', handleBeforeUnload);

    //         return () => {
    //             window.removeEventListener('beforeunload', handleBeforeUnload);
    //         };
    //     }, 
    // []);

    // Cofirmation Modal states
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    // View Modal states.
    const [viewModalShow, setViewModalShow] = useState(false);
    const handleViewModalClose = () => setViewModalShow(false);
    const handleViewModalShow = () => setViewModalShow(true);

     // Edit Modal states.
     const [editModalShow, setEditModalShow] = useState(false);
     const handleEditModalClose = () => setEditModalShow(false);
     const handleEditModalShow = () => setEditModalShow(true);

    return (
        <>
            <BasicNavbar />
            <div className="observation-form container">
            <h3 className="login-form-title">Observations</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Bird name</Form.Label>
                                <Form.Control type="text" placeholder="Enter bird name" 
                                onChange={(e) => validateNameIsNotNil(e.target.value)}
                                />
                                {nameErrorMessage && <div className="text-danger">{nameErrorMessage}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of Birds</Form.Label>
                                <Form.Control type="number" placeholder="Number of birds"  onChange={(e) => validateCountIsNotNil(e.target.value)}
                                />
                                {countErrMessage && <div className="text-danger">{countErrMessage}</div>}
                            </Form.Group>

                            <Button variant="primary"  onClick={handleModalShow}>
                                Submit
                            </Button>
                            <ConfirmationModal show={modalShow} handleClose={handleModalClose} />


                        </Form>
                    </div>
                    <div className="col-md-4">
                        <img
                            src="dickcissel.jpeg"
                            width="500"
                            height="361"
                            className="img-fluid"
                            alt="Dickcissel"
                        />
                    </div>
                </div>

                <div className="row edit-row justify-content-center mt-3">
                    <div className="col-md-4 d-flex justify-content-start align-items-center">
                        <div>Bird Name</div>
                        <div className="ms-5">Bird Count</div>
                    </div>
                    
                    <div className="col-md-4 d-flex justify-content-end align-items-center">
                        <div>
                            <button className="btn btn-info me-2" onClick={handleViewModalShow}>View</button>
                            <ViewModal show={viewModalShow} handleClose={handleViewModalClose} />
                            <button className="btn btn-primary" onClick={handleEditModalShow}>Edit</button>
                            <EditModal show={editModalShow} handleClose={handleEditModalClose} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}