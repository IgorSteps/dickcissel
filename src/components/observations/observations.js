import BasicNavbar from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Observation(props) {
    return (
        <>
            <BasicNavbar />
            <div class="observation-form container">
            <h3 className="login-form-title">Observations</h3>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Bird name</Form.Label>
                                <Form.Control type="text" placeholder="Enter bird name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of Birds</Form.Label>
                                <Form.Control type="number" placeholder="Number of birds" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </div>
                    <div class="col-md-4">
                        <img
                            src="dickcissel.jpeg"
                            width="500"
                            height="361"
                            class="img-fluid"
                            alt="Dickcissel"
                        />
                    </div>
                </div>

                <div class="row edit-row justify-content-center mt-3">
                    <div class="col-md-4 d-flex justify-content-start align-items-center">
                        <div>Bird Name</div>
                        <div className="ms-5">Bird Count</div>
                    </div>
                    
                    <div class="col-md-4 d-flex justify-content-end align-items-center">
                        <div>
                            <button class="btn btn-info me-2">View</button>
                            <button class="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}