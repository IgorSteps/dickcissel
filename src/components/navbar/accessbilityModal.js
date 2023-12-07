import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const defaultFontSize = 18;

function AccessbilityModal({show, handleClose}) {
    const [fontSize, setFontSize] = useState(defaultFontSize);

    const handleFontSizeChange = (newSize) => {
        setFontSize(newSize);
    };
      
    useEffect(() => {
        document.
            documentElement.
            style.
            setProperty('--dynamic-font-size', `${fontSize}px`);
    }, [fontSize]);
      
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.
            documentElement.
            setAttribute('data-bs-theme', theme);
    }, [theme]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Accessbility</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Adjust font size here:</p>

                <RangeSlider
                    value={fontSize}
                    onChange={e => handleFontSizeChange(e.target.value)}
                />

                <p>Choose colour scheme:</p>
                <Button onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AccessbilityModal;