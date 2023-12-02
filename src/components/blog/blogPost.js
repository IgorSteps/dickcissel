import { CardBody, CardText, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BlogModal from "./blogModal";
import React, { useState } from "react"; 

function BlogPost({ title, date, summary, author }) {
    // Blog Modal states.
    const [blogModalShow, setBlogModalShow] = useState(false);
    const handleBlogModalClose = () => {
        setBlogModalShow(false);
    }
    const handleBlogModalShow = () => {
        setBlogModalShow(true);
    }

    return (
    <>
    <Card className='mb-4' title={title} date={date} summary={summary} author={author}>
            <CardBody>
                <Card.Img
                  variant="top"
                  className='img-fluid'
                  src="dickcrop.jpg"
                  width="500"
                  height="361" />
                <CardTitle className='mt-2'>{title}</CardTitle>
                <p className="text-muted">{date} by {author}</p>
                <CardText>{summary}</CardText>
                <Button variant='primary' type='submit' onClick={handleBlogModalShow}>
                    Read More
                </Button>
            </CardBody>
        </Card>
        <BlogModal show={blogModalShow} handleClose={handleBlogModalClose} title={title} date={date} summary={summary} author={author} />
    </>

  );
}

export default BlogPost;