import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';


function AdminDashbaord() {
    return (
            <Container className='p-4 observation-form'>
                <Tabs defaultActiveKey="counties" id="admin-observation-tabs">
                    <Tab eventKey="counties" title="Counties" id='counties'>
                        <CountyCountTable />
                    </Tab>
                    <Tab eventKey="birds" title="Birds" id='birds'>
                        <BirdCountTable />
                    </Tab>
                </Tabs>
            </Container>
    )
}

const CountyCountTable = () => {
    const data = [
        { county: 'Norfolk', count: 1 },
        { county: 'Bristol', count: 2 },
        { county: 'Cambridgeshire', count: 3 },
        { county: 'Dorset', count: 4 },
        { county: 'Essex', count: 5 }
    ];

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th scope="col">County</th>
                    <th scope="col">Count</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.county}</td>
                        <td>{item.count}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const BirdCountTable = () => {
    const data = [
        { bird: 'Dickcissel', count: 1 },
        { bird: 'Owl', count: 2 },
        { bird: 'Parrot', count: 3 },
        { bird: 'Seagul', count: 4 },
        { bird: 'Pigeon', count: 5 }
    ];

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th scope="col">Bird</th>
                    <th scope="col">Count</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.bird}</td>
                        <td>{item.count}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AdminDashbaord