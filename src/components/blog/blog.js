import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"; 
import BlogPost from './blogPost';
import BasicNavbar from '../navbar/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Meetup from './meetups'

function BlogPage() {


    // Example data
    const posts = [
        { id: 1, title: 'First Post', date: '2023-01-01', summary: 'Summary of the first post', author: 'Author 1' },
        { id: 2, title: 'Second Post', date: '2023-02-01', summary: 'Summary of the second post', author: 'Author 2' },
    ];

    const meetups = [
        {id: 1, title: 'First meetup', date: '2023-01-01', location: "UEA, outside BarSU"},
        {id: 2, title: 'Second meetup', date: '2023-02-01', location: "UEA, room 0.01"}
    ]

   
    return (
        <>
            <BasicNavbar />
                <div className="observation-form p-5 container">
                    <Container>
                            <Row>
                                <Col>
                                <h3 className="login-form-title">Blog</h3>
                                    {posts.map(post => (
                                        <BlogPost key={post.id} title={post.title} date={post.date} summary={post.summary} author={post.author} />
                                    ))}
                                </Col>
                                <Col md="auto">
                                <h3 className="login-form-title">Meetups</h3>
                                    {meetups.map( meetup => (
                                        <Meetup key={meetup.id} title={meetup.title} date={meetup.date} location={meetup.location} > </Meetup>
                                    ))}
                                </Col>
                            </Row>
                        
                            
                    </Container>
                </div>
        </>
    );
}

export default BlogPage;
