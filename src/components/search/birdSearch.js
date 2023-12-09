import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import BasicNavbar from '../navbar/navbar';
import BirdCard from './birdCard';



function SearchPage() {
    const birds = [
        {id:1, name: 'Dickcissel', colour: 'Grayish on the head with a yellow face and chest, crossed with a bold black V', sound: 'dick-dick-see-see-see'},
        {id:2, name: 'Fluffy McFeathers', colour: 'Neon Green with Bright Pink Spots', sound: 'Whistles the tune of popular songs'},
        {id:3, name: 'Sir Quackalot', colour: 'Royal Blue with Yellow Stripes', sound: 'Makes a sound like a duck laughing'},
        {id:4, name: 'Sparkle Beak', colour: 'Shimmering Silver with Rainbow Highlights', sound: 'Chirps that sound like tiny bells'},
        {id:5, name: 'Professor Hootenstein', colour: 'Deep Purple with White Polka Dots', sound: 'A deep, wise-sounding hoot followed by a giggle'},
        {id:6, name: 'Zippy Zoomwing', colour: 'Bright Orange with Electric Blue Wings', sound: 'Makes a zooming noise as it flies by'},
        {id:7, name: "Glitter Gobble", colour: "Glittery Gold with Hints of Emerald Green", sound: "A gobbling noise that echoes like a tiny trumpet" },
        {id:8, name: "Cha-Cha Chirper", colour: "Hot Pink with Lemon Yellow Stripes", sound: "A rhythmic cha-cha music" },
        {id:9, name: "Mr. Peepers McSqueak", colour: "Soft Lavender with Jet Black Accents", sound: "A series of high-pitched peeps and squeaks" },
        {id:10, name:"Echo Echofeather", colour: "Reflective Mirror-like Feathers", sound: "Mimics any sound it hears, creating an echo effect" }
    ]

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const [foundBird, setFoundBird] = useState('');
    const onSearch = () => {
        const bird = birds.find(bird => bird.name === searchQuery);
       setFoundBird(bird);
        console.debug("Found bird: ", bird);
    }

    const resetSearch = () => {
        setFoundBird('');
        setSearchQuery('');
    }
    

    return (
        <>
            <BasicNavbar />
            <Container className='observation-form'>
                <h3 className="login-form-title">Find a Bird</h3>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search a bird.."
                    aria-label="Search"
                    aria-describedby="button"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" id="button" onClick={onSearch}>
                        Search
                    </Button>
                    <Button variant="outline-info" id="button-reset" onClick={resetSearch}>
                        Reset
                    </Button>
                </InputGroup>

                <DropdownButton
                    title="Sort By"
                    id="dropdown-menu-align-right"
                >
                    <Dropdown.Item eventKey="Name">Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Date">Date</Dropdown.Item>
                </DropdownButton>

                <h3 className="login-form-title">Results:</h3>
                <Row className='d-flex justify-content-center'>
                    {foundBird ? (
                        <Col className='d-flex justify-content-center'>
                            <BirdCard key={foundBird.id} name={foundBird.name} colour={foundBird.colour} sound={foundBird.sound} />
                        </Col>
                    ) : (
                        birds.map(bird => (
                            <Col className='d-flex justify-content-center'>
                                <BirdCard name={bird.name} colour={bird.colour} sound={bird.sound} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    )
}

export default SearchPage
