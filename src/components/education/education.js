import React, { useState } from "react";
import BasicNavbar from "../navbar/navbar"
import Button from 'react-bootstrap/Button';
import QuizModal from "./quizModal";

function education() {
      const [quizModalShow, setQuizModalShow] = useState(false);
      const handleQuizModalClose = () => {
        setQuizModalShow(false);
    }

    const handleQuizModalShow = () => {
        setQuizModalShow(true);
    }

    return (
        <><BasicNavbar />
          <div className="home-page-container">
            <div className="home-page-content">
                <h3 className="home-page-title">Education</h3>
                <div className="home-page-image">
                    <img
                        src="video.jpeg"
                        width="368"
                        height="212"
                        className="d-inline-block align-top"
                        alt="Play video"
                    />
                </div>
                <div className="home-page-about">
                    Welcome to the eductation section, here you will learn all about different birds through helpful videos and a quiz.
                </div>
                <h3 className="home-page-title">Quick Quiz</h3>
                <table>
                    <tr>
                        <td>
                            <img
                            src="dickcissel.jpeg"
                            width="368"
                            height="212"
                            className="d-inline-block align-top"
                            alt="Play video"
                            />
                        </td>
                        <td>
                              <form>
  <fieldset>
    <legend>Which bird is this?</legend>
    <div>
      <input type="radio" id="bird1" name="bird" value="Blackbird" />
      <label for="bird1">Blackbird</label>
      <br></br>
      <input type="radio" id="bird2" name="bird" value="Dickcissel" />
      <label for="bird2">Dickcissel</label>
      <br></br>
      <input type="radio" id="bird3" name="bird" value="Bluetit" />
      <label for="bird3">Bluetit</label>
    </div>
    <div>
      <Button variant='primary' type='submit' onClick={handleQuizModalShow}>
                    Submit
                </Button>
    </div>
  </fieldset>
</form>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <QuizModal show={quizModalShow} handleClose={handleQuizModalClose} />
        </>
    );
}

export default education;