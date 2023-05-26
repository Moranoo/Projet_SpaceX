
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


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
        const filteredResults = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.agency && item.agency.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(filteredResults);
    }, [searchTerm, data]);


    return (
        <>
            {isLoading ? (
                <h1>loading</h1>
            ) : (
                <div>
                    <h1>Liste Membres Crew :</h1>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                        placeholder="Search membre or agency..."
                    />
                    {error && <p>{error}</p>}
                    <ul>
                        {filteredData.length === 0 && <p>Aucun résultat</p>}
                        {filteredData.map(item => (
                            <Card key={item.name} style={{ width: '18rem' }}>
                                <Card.Body
                                    onClick={() => {
                                        navigate(`/detail/${item.id}`);
                                    }}
                                >
                                    <li style={{ listStyle: 'none' }}>
                                        <img style={{ width: '18rem' }} src={item.image} alt={item.name} />
                                    </li>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Voici les informations sur le membre de l'équipage : {item.name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Recherche;
