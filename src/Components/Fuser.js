import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Recherche() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/rockets`);
            setData(response.data);
            setIsLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <Container>
                    <h1 className="text-center mb-4">Liste des fusées :</h1>
                    <Row xs={1} md={2} xl={3} className="g-4">
                        {data.map((item) => (
                            <Col key={item.id}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title>Fusée {item.name}</Card.Title>
                                        <div className="d-flex justify-content-center">
                                            <Card.Img src={item.flickr_images[1]} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <Card.Text>Taille : {item.height.meters} mètres</Card.Text>
                                        <Card.Text>Poids : {item.mass.kg} kg</Card.Text>
                                        <Card.Text>Diamètre : {item.diameter.meters} mètres</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <Link to={`/fuseur/${item.id}`}>
                                            <Button variant="primary">+ Infos</Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </>
    );
}

export default Recherche;
