import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";
import BasicNavbar from "../navbar/navbar"
import Button from 'react-bootstrap/Button';
import QuizModal from "./quizModal";

function Education() {
    const [quizModalShow, setQuizModalShow] = useState(false);
    const handleQuizModalClose = async (event) => {
        event.preventDefault()
        event.stopPropagation();
        setQuizModalShow(false);
    }

    const handleQuizModalShow = async (event) => {
        event.preventDefault()
        event.stopPropagation();
        setQuizModalShow(true);
    }

    return (
        <><BasicNavbar />
            <div className="observation-form container">
                <div className="home-page-content">
                    <h3 className="home-page-title">Education</h3>
                    <div className="col-md-4 mx-auto">
                        <iframe 
                            src="https://www.youtube.com/embed/LYbXeEIugtk?si=SNQRVbN_-KDqZADQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="home-page-about">
                        Welcome to the eductation section, here you will learn all about different birds through helpful videos and a quiz. Birds are incredible creatures and come in all different shapes and sizes, some birds even have weird tendancys such as the flamingo can only eat when its head is upside down.
                        Did you know that birds actually originally decended from reptiles, the earliest known bird was the Archaeopteryx which lived approximately 147 million years ago.
                        Birds differ in size dramatically, the largest bird currently living is the Ostrich which can reach a height of 2.7 metres with a 2 metre wingspan. Whereas the smallest living bird in the world is the Bee Hummingbird, at only 5.5cm long. 
                    </div>
                    <h3 className="home-page-title">Quick Quiz</h3>
                    <div class="observation-form container">
                        <div class="row">
                            <div class="col-md-4">
                                <img
                                    src="dickcissel.jpeg"
                                    width="500"
                                    height="361"
                                    className="img-fluid"
                                    alt="Dickcissel"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="quiz-container">Blackbird
                                    <input type="radio" name="radio"/>
                                    <span class="quiz-radio"></span>
                                </label>
                                <label class="quiz-container">Dickcissel
                                    <input type="radio" name="radio"/>
                                    <span class="quiz-radio"></span>
                                </label>
                                <label class="quiz-container">Bluetit
                                    <input type="radio" name="radio"/>
                                    <span class="quiz-radio"></span>
                                </label>
                                <Button variant='primary' type='submit' onClick={handleQuizModalShow}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuizModal show={quizModalShow} handleClose={handleQuizModalClose} />
        </>
    );
}

    export default Education;