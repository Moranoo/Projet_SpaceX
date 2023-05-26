import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Recherche() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/crew`);
            setData(response.data);
            setFilteredData(response.data);
            setIsLoading(false);
            console.log(response.data);
        } catch (error) {
            setError('Une erreur est survenue lors du chargement des données.');
            console.error(error);
        }
    };

    useEffect(() => {
        const filteredResults = data.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.agency && item.agency.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(filteredResults);
    }, [searchTerm, data]);

    return (
        <>
            {isLoading ? (
                <h1>Chargement en cours</h1>
            ) : (
                <Container>
                    <h1 className="text-center mb-4">Équipage :</h1>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Rechercher un membre ou une agence..."
                        className="form-control mb-4"
                    />
                    {error && <p>{error}</p>}
                    <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                        {filteredData.length === 0 ? (
                            <p className="text-center w-100">Aucun résultat</p>
                        ) : (
                            filteredData.map((item) => (
                                <Col key={item.id} className="mb-4">
                                    <Card
                                        className="click-custom h-100"
                                        onClick={() => {
                                            navigate(`/detail/${item.id}`);
                                        }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid"
                                        />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                Voici les informations sur : {item.name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            )}
        </>
    );
}

export default Recherche;
