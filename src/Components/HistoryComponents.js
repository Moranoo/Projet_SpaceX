import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

function HistoryComponents() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/history');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <center>
                <h1>History of SpaceX</h1>
            </center>
            <Row xs={1} md={2} lg={3} className="g-4">
                {data.map((item, id) => (
                    <Col key={id} className="mb-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text></Card.Text>
                                <Link key={item.id} to={`detail/${item.id}`}>
                                    <Button variant="primary">More information</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HistoryComponents;
