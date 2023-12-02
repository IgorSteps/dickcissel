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
        console.debug('Add newObservation to observations list: ', newObservation)
        setObservations(prevObservations => [...prevObservations, newObservation]);
    };

    const handleSuccessfulAdd = (newObservation) => {
        updateObservationsList(newObservation);
        handleModalShow()
        setBirdName('');
        setBirdCount('');
    };

    // Validation.
    const [nameErrorMessage, setNameErrorMessage] = useState('') 
    const [countErrMessage, setCountErrorMessage] = useState('') 
    const validateNameIsNotNil = (name) => {
        if (name.trim().length === 0) {
            setNameErrorMessage('Name field must not be empty');
            return false;
        } else {
            setNameErrorMessage('');
            return true;
        }
    };
    const validateCountIsNotNil = (count) => {
        if (count.length === 0) {
            setCountErrorMessage('Count field must not be empty');
            return false;
        } else {
            setCountErrorMessage('');
            return true;
        }
    };

    // Function to handle observation addition.
    const handleSubmit = async (event) => {
        event.preventDefault()
        event.stopPropagation();
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
                const newObservation = await response.json();
                console.debug("received response from server with new observation:", newObservation);
                handleSuccessfulAdd(newObservation)
            } else {
                console.error('Failed to add observation');
            }
        } catch (error) {
            alert("Sorry, there was a problem processing your observation, please try again later.")
            console.error('Failed to send data to mirage server: ', error);
        }
    };

    // Warn users if they try to leave a page with unsaved changes.
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
        }, 
    []);

    // Confirmation Modal states.
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => {
        setModalShow(false);
    }
    const handleModalShow = () => {
        setModalShow(true);
    }

    // View Modal states.
    const [viewModalShow, setViewModalShow] = useState(false);
    const handleViewModalClose = () => {
        setViewModalShow(false);
    }
    const handleViewModalShow = () => {
        setViewModalShow(true);
    }

    // Edit Modal states.
    // State for tracking the current observation that user wants to edit.
    const [indexOfObservationToEdit, setIndexOfObservationToEdit] = useState(null);
    const [editModalShow, setEditModalShow] = useState(false);
    const handleEditModalClose = () => {
        setEditModalShow(false);
    }
    const handleEditModalShow = (index) => {
        if (index === null || undefined) {
            console.error("Index of observation to edit is nil or undefined");
            alert("Unexpected error occured, please try again later");
            return;
        } else {
            setIndexOfObservationToEdit(index);
            setEditModalShow(true);
        }
    }
    const handleUpdatingObservation = (newBirdName, newBirdCount) => {
        console.debug("Data to be used for update: ", {
                "New Bird name": newBirdName,
                "New Bird count": newBirdCount,
                "Editing observation index": indexOfObservationToEdit
            });
        
        // For some reason, observation object is like this:
        //      observation: {
        //          observation: {birdName: ... ,birdCount ...},  
        //          observation: {birdName: ... ,birdCount ...},  
        //      }
        // I am not sure why and we are short on time to debug this, so
        // leaving it like this.
        const updatedObservations = observations.map((outerObservation, index) => {
            if (index === indexOfObservationToEdit) {
                // Due to naure of .map() in JS(it returns new list), need to use spread(...)
                // operator to copy accross existing observations.
                return {
                    ...outerObservation,
                    observation: {
                        ...outerObservation.observation,
                        birdName: newBirdName,
                        birdCount: newBirdCount
                    }
                };
            }
            return outerObservation;
        });
        console.debug("Updated observation ", updatedObservations)

        // Don't forget to set observations list to newly updated one and set state of index back to nil.
        setObservations(updatedObservations);
        setIndexOfObservationToEdit(null);
        console.debug("Observations list after update", observations)
      };

    return (
        <>
            <BasicNavbar />
            <div className="observation-form container">
            <h3 className="login-form-title">Observations</h3>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <Form >
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="birdname">Bird name</Form.Label>
                                <Form.Control 
                                    name="birdname" id="birdname"
                                    type="text"
                                    placeholder="Enter bird name" 
                                    onChange={(e) => setBirdName(e.target.value)} 
                                    value={birdName}
                                />
                                {nameErrorMessage && <div className="text-danger">{nameErrorMessage}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="birdcount">Number of Birds</Form.Label>
                                <Form.Control
                                    name="birdcount" id="birdcount"
                                    type="number" 
                                    placeholder="Number of birds"  
                                    onChange={(e) => setBirdCount(e.target.value)}
                                    value={birdCount}
                                />
                                {countErrMessage && <div className="text-danger">{countErrMessage}</div>}
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
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
                            {/* {See comment in handleUpdatingObservation on why I have observation.observation.birdName and
                                 not observation.birdName} */}
                            <div>Bird Name: {observation.observation.birdName}</div>
                            <div className="ms-5">Bird Count: {observation.observation.birdCount}</div>
                        </div>
                        
                        <div className="col-md-4 d-flex justify-content-end align-items-center">
                            <div>
                                <button className="btn btn-info me-2" onClick={handleViewModalShow}>View</button>
                                <ViewModal 
                                    birdName={observation.observation.birdName}
                                    birdCount={observation.observation.birdCount} 
                                    show={viewModalShow} 
                                    handleClose={handleViewModalClose} 
                                />
                                <button className="btn btn-primary" onClick={() => handleEditModalShow(index)}>Edit</button>
                                {/* {Hacky way to stop weird triggering of EditModal Form submission when Observation Form is submitted} */}
                                {observations[indexOfObservationToEdit]?.observation.birdName && 
                                    <EditModal
                                        show={editModalShow}
                                        handleClose={handleEditModalClose}
                                        // Need to have '?' operator because indexOfObservationToEdit is nil at the very start.
                                        birdName={observations[indexOfObservationToEdit]?.observation.birdName}
                                        birdCount={observations[indexOfObservationToEdit]?.observation.birdCount}
                                        onUpdate={handleUpdatingObservation}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}