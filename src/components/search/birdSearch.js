import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import BasicNavbar from '../navbar/navbar';
import BirdCard from './birdCard';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function SearchPage() {
    const birds = [
        {id:1, name: 'Dickcissel', colour: 'Grey', sound: 'dick-dick-see-see-see'},
        {id:2, name: 'Fluffy McFeathers', colour: 'Green', sound: 'Whistles the tune of popular songs'},
        {id:3, name: 'Sir Quackalot', colour: 'Blue', sound: 'Makes a sound like a duck laughing'},
        {id:4, name: 'Sparkle Beak', colour: 'Silver', sound: 'Chirps that sound like tiny bells'},
        {id:5, name: 'Professor Hootenstein', colour: 'Purple', sound: 'A deep, wise-sounding hoot followed by a giggle'},
        {id:6, name: 'Zippy Zoomwing', colour: 'Orange', sound: 'Makes a zooming noise as it flies by'},
        {id:7, name: "Glitter Gobble", colour: "Gold", sound: "A gobbling noise that echoes like a tiny trumpet" },
        {id:8, name: "Cha-Cha Chirper", colour: "Pink", sound: "A rhythmic cha-cha music" },
        {id:9, name: "Mr. Peepers McSqueak", colour: "Lavender", sound: "A series of high-pitched peeps and squeaks" },
        {id:10, name:"Echo Echofeather", colour: "Reflective", sound: "Mimics any sound it hears, creating an echo effect" }
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
    
    const [colourFilter, setColourFilter] = useState('');
    const applyFilters = () => {
        return birds.filter(bird => {
            return colourFilter ? bird.colour.includes(colourFilter) : true;
        });
    }

    const resetFilters = () => {
        setColourFilter('');
        setFoundBird(null);
        setSearchQuery('');
    };

    return (
        <>
            <BasicNavbar />
            <Container className='observation-form'>
                <h3 className="login-form-title">Find a Bird</h3>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search a bird.."
                    aaria-label="Search for a bird by name"
                    aria-describedby="button-search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" id="button-search" onClick={onSearch}>
                        Search
                    </Button>
                    <Button variant="outline-info" id="button-reset" onClick={resetSearch}>
                        Reset
                    </Button>
                </InputGroup>

                <ButtonGroup>
                    <DropdownButton title="Filter by Color" aria-haspopup="true" aria-expanded="false">
                        {birds.map(bird => (
                            <Dropdown.Item key={bird.colour} onClick={() => setColourFilter(bird.colour)}>
                                {bird.colour}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>

                    <Button variant="outline-info" onClick={resetFilters}>
                        Reset Filters
                    </Button>
                </ButtonGroup>

                <h3 className="login-form-title">Results:</h3>
                <Row className='d-flex justify-content-center' aria-live="polite">
                    {foundBird ? (
                        <Col className='d-flex justify-content-center'>
                            <BirdCard key={foundBird.id} name={foundBird.name} colour={foundBird.colour} sound={foundBird.sound} />
                        </Col>
                    ) : (
                        applyFilters().map(bird => (
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
