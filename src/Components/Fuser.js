import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Recherche() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/rockets`)
            setData(response.data)
            setIsLoading(false)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {isLoading ? <h1>loading </h1> : <div>
                <h1>Liste des fusées :</h1>
                <ul>
                    {data.map((item) => (
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Body>

                                <li style={{
                                    listStyle: 'none',
                                }} >
                                    <img style={{
                                        width: '18rem'
                                    }}
                                        src={item.image}></img>
                                </li>
                                <Card.Title>Nom : {item.name}</Card.Title>
                                <Card.Img style={{ width: '18rem' }} src={item.flickr_images[1]} />
                                <Card.Text>
                                    Taille : {item.height.meters} mètres
                                </Card.Text>
                                <Card.Text>
                                    Diamétre : {item.diameter.meters} mètres
                                </Card.Text>
                                <Card.Text>
                                    Poids : {item.mass.kg} kg
                                </Card.Text>


                            </Card.Body>
                            <Link key={item.id} to={`/fuseur/${item.id}`}>
                                <Button variant="primary">+ Infos</Button>
                            </Link>
                        </Card>
                    ))}
                </ul>
            </div>}
        </>)
}
export default Recherche;
