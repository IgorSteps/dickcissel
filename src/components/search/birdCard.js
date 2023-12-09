import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BirdCard({name, colour, sound}) {
  return (
    <Card className='mt-2 mb-2' style={{ width: '18rem' }}  tabIndex="0">
      <Card.Img variant="top" src="dickcissel.jpeg" alt={`${name} bird image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Colour: {colour}
        </Card.Text>
        <Card.Text>
         Sound: {sound}
        </Card.Text>
        <Button variant="primary" aria-label={`Learn more about ${name}`}>Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default BirdCard;