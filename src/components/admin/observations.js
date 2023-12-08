import React from 'react';
import { Container, Table } from 'react-bootstrap';
import AdminNavbar from './adminNavBar';
import { Tabs, Tab } from 'react-bootstrap';


function AdminObservations() {
    return (
        <>
            <AdminNavbar />
            <Container className='p-4 observation-form'>
                <Tabs defaultActiveKey="counties" id="data-tables-tabs">
                    <Tab className='accessible' eventKey="counties" title="Counties">
                        <CountyCountTable />
                    </Tab>
                    <Tab eventKey="birds" title="Birds">
                        <BirdCountTable />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

const CountyCountTable = () => {
    const data = [
        { county: 'Surrey', count: 120 },
        { county: 'Kent', count: 95 },
        { county: 'Essex', count: 110 },
        { county: 'Cornwall', count: 70 },
        { county: 'Cumbria', count: 65 }
    ];

    return (
        <>
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
        </Table></>
    );
};

const BirdCountTable = () => {
    const data = [
        { bird: 'Boo', count: 120 },
        { bird: 'Foo', count: 95 },
        { bird: 'Doo', count: 110 },
        { bird: 'Soo', count: 70 },
        { bird: 'Loo', count: 65 }
    ];

    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <th>Bird</th>
                    <th>Count</th>
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
        </Table></>
    );
};

export default AdminObservations