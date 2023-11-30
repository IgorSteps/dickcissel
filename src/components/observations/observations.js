import BasicNavbar from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState , useEffect} from "react"; 
import ConfirmationModal from "./confirmationModal";
import ViewModal from "./viewModal";
import EditModal from "./editModal";

const observationEndpoint = '/api/observations';
const post = 'POST'
const contentType = {'Content-Type': 'application/json'}

export default function Observation(props) {    
    // Initial states are empty strings, and an empty array.
    const [birdName, setBirdName] = useState('');
    const [birdCount, setBirdCount] = useState('');
    const [observations, setObservations] = useState([]);
    const updateObservationsList = (newObservation) => {
        console.debug('Updating observations list state: ', newObservation)
        setObservations(prevObservations => [...prevObservations, newObservation]);
    };
    const handleSuccessfulAdd = (newObservation) => {
        updateObservationsList(newObservation);
        handleModalShow()
        console.debug('Updating birdName & birdCount states: ', newObservation)
        setBirdName('');
        setBirdCount('');
    };

    // Validation.
    const [nameErrorMessage, setNameErrorMessage] = useState('') 
    const [countErrMessage, setCountErrorMessage] = useState('') 
    const validateNameIsNotNil = (name) => {
        if (name.trim().length === 0) {
            console.debug('Updating nameErrorMessage state: ', name)
            setNameErrorMessage('Name field must not be empty');
            return false;
        } else {
            console.debug('Updating nameErrorMessage state: ', name)
            setNameErrorMessage('');
            return true;
        }
    };
    const validateCountIsNotNil = (count) => {
        if (count.length === 0) {
            console.debug('Updating countErrMessage state: ', count)
            setCountErrorMessage('Count field must not be empty');
            return false;
        } else {
            console.debug('Updating countErrMessage state: ', count)
            setCountErrorMessage('');
            return true;
        }
    };

    // Function to handle observation addition.
    const handleSubmit = async () => {
        if (!validateNameIsNotNil(birdName) || !validateCountIsNotNil(birdCount)) {
            return;
        }

        // Post data to MirageJS server.
        try {
            const response = await fetch(observationEndpoint, {
                method: post,
                headers: contentType,
                body: JSON.stringify({ birdName, birdCount })
            });

            if (response.ok) {
                 // Handle successful addition
                const newObservation = await response.json();
                console.debug("New Observation:", newObservation);
                handleSuccessfulAdd(newObservation)
            } else {
                console.error('Failed to add observation');
            }
        } catch (error) {
            console.error('Failed to send data to mirage server: ', error);
        }
    };

    // Warn users if they try to leave a page with unsaved changes.
    useEffect(() => {
            const handleBeforeUnload = (e) => {
                const confirmationMessage = ''
                e.returnValue = confirmationMessage;
                return confirmationMessage;
            };

            window.addEventListener('beforeunload', handleBeforeUnload);

            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }, 
    []);

    // Confirmation Modal states.
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => {
        console.debug('Updating modalShow state to false')
        setModalShow(false);
    }
    const handleModalShow = () => {
        console.debug('Updating modalShow state to true')
        setModalShow(true);
    }

    // View Modal states.
    const [viewModalShow, setViewModalShow] = useState(false);
    const handleViewModalClose = () => {
        console.debug('Updating viewModalShow state to false')
        setViewModalShow(false);
    }
    const handleViewModalShow = () => {
        console.debug('Updating viewModalShow state to true')
        setViewModalShow(true);
    }

     // Edit Modal states.
    const [editModalShow, setEditModalShow] = useState(false);
    const handleEditModalClose = () => {
        console.debug('Updating editModalShow state to false')
        setEditModalShow(false);
    }
    const handleEditModalShow = () => {
        console.debug('Updating editModalShow state to true')
        setEditModalShow(true);
    }

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
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter bird name" 
                                    onChange={(e) => setBirdName(e.target.value)} 
                                    value={birdName}
                                />
                                {nameErrorMessage && <div className="text-danger">{nameErrorMessage}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of Birds</Form.Label>
                                <Form.Control
                                    type="number" 
                                    placeholder="Number of birds"  
                                    onChange={(e) => setBirdCount(e.target.value)}
                                    value={birdCount}
                                />
                                {countErrMessage && <div className="text-danger">{countErrMessage}</div>}
                            </Form.Group>

                            <Button variant="primary"  onClick={handleSubmit}>
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

                {/* {Render this row for every observation added.} */}
                {observations.map((observation, index) => (
                    <div className="row edit-row justify-content-center mt-3"  key={index}>
                        <div className="col-md-4 d-flex justify-content-start align-items-center">
                            <div>Bird Name: {observation.observation.birdName}</div>
                            <div className="ms-5">Bird Count: {observation.observation.birdCount}</div>
                        </div>
                        
                        <div className="col-md-4 d-flex justify-content-end align-items-center">
                            <div>
                                <button className="btn btn-info me-2" onClick={handleViewModalShow}>View</button>
                                <ViewModal birdName={observation.observation.birdName} birdCount={observation.observation.birdCount} show={viewModalShow} handleClose={handleViewModalClose} />
                                <button className="btn btn-primary" onClick={handleEditModalShow}>Edit</button>
                                <EditModal show={editModalShow} handleClose={handleEditModalClose} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}