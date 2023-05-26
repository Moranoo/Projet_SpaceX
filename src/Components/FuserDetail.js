import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Styles/App.css';

export default function Detail() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div>
                <h1 className="text-center">Fusée {data.name}</h1>
                <br />
                <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                    {data.flickr_images &&
                        data.flickr_images.map((image, index) => (
                            <Col key={index}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img src={image} alt={data.description} />
                                </Card>
                            </Col>
                        ))}
                </Row>
                <div className="text-center mt-4">
                    <Card.Body className="text-left">
                        <Card.Title className="mb-4">{data.name}</Card.Title>
                        <Card.Text>
                            <strong>Statut :</strong> {data.active}
                        </Card.Text>
                        <Card.Text>
                            <strong>Compagnie :</strong> {data.company}
                        </Card.Text>
                        <Card.Text>
                            <strong>Pays d'origine :</strong> {data.country}
                        </Card.Text>
                        <Card.Text>
                            <strong>Date du premier décollage :</strong> {data.first_flight}
                        </Card.Text>
                        <Card.Text>
                            <strong>Description :</strong>
                            <br />
                            {data.description}
                        </Card.Text>
                        {data.mass && (
                            <Card.Text>
                                <strong>Poids :</strong> {data.mass.kg} kg
                            </Card.Text>
                        )}
                        {data.engines && (
                            <>
                                <Card.Text>
                                    <strong>Nombre de moteurs :</strong> {data.engines.number}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Type de moteur :</strong> {data.engines.type}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Carburant :</strong> {data.engines.propellant_1}
                                </Card.Text>
                            </>
                        )}
                    </Card.Body>

                </div>
                <div className="text-center mt-4">
                    <Link className="btn btn-primary" to="/fuseur">
                        Retour à la liste de fusées
                    </Link>
                </div>
            </div>
        </>
    );
}
