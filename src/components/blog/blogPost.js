import React from 'react';
import { CardBody, CardText, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BlogPost({ title, date, summary, author }) {
  return (
    <Card className='mb-4'>
        <CardBody>
            <Card.Img 
                variant="top" 
                className='img-fluid' 
                src="dickcrop.jpg"  
                width="500"
                height="361"
                />
            <CardTitle className='mt-2'>{title}</CardTitle>
            <p className="text-muted">{date} by {author}</p>
            <CardText>{summary}</CardText>
            <a href="#" className="btn btn-primary">Read More</a>
        </CardBody>
    </Card>
  );
}

export default BlogPost;