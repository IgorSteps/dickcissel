import React from 'react';
import { CardBody, CardText, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Meetup({ title, date, location }) {
  return (
    <Card className='mb-4'>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <p className="text-muted">{date}</p>
            <CardText>Location: {location}</CardText>
        </CardBody>
    </Card>
  );
}

export default Meetup;