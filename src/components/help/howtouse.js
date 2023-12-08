import { Container, Card } from 'react-bootstrap';
import BasicNavbar from "../navbar/navbar"

function HowToUse() {
    const instructions = [
        {title: 'Create an Account', text: 'Sign up for a free account by providing your email address and creating a password.'},
        {title: 'Submit an Observation', text: 'Go to observations page, input bird name and count.'},
        {title: 'View observation', text: 'Go to observations page, click view on of the observations below the form.'},
        {title: 'Edit observation', text: 'If you made a mistake submitting an observation: Go to observations page, click view on of the observations below the form.'},
        {title: 'Find a bird', text: 'If you struggling to find a bird, try our find a bird search.'},
    ]
    return (
        <>
            <BasicNavbar />
            <Container className="observation-form">
            <h3 className="login-form-title">How To Use</h3>
            <div className='mb-4 d-flex justify-content-center align-items-center'>
                <iframe 
                    src="https://www.youtube.com/embed/2rsI05vBsD4?si=GA5GTB7ADWAPVjs_"
                    title="How to Use the bird counting webiste" 
                    width="600" 
                    height="400"
                    aria-hidden="false"
                    role="document" />
            </div>
            {instructions.map(instruction => (
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>{instruction.title}</Card.Title>
                        <Card.Text>{instruction.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </Container>
        </>
    )
}

export default HowToUse