import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BirdCard({name, colour, sound}) {
  return (
    <Card className='mt-2 mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="dickcissel.jpeg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Colour: {colour}
        </Card.Text>
        <Card.Text>
         Sound: {sound}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BirdCard;