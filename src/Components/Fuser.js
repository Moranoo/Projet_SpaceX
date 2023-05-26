import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            {isLoading ? (
                <h1>loading </h1>
            ) : (
                <div>
                    <center>
                        <h1>Liste des fusées :</h1>
                    </center>
                    <br />
                    <br />
                    <center>
                        <Row xs={3} md={4} className='g-1'>
                            {data.map((item) => (
                                <Col key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Fusé {item.name}</Card.Title>
                                            <Card.Img src={item.flickr_images[1]} />
                                            <Card.Text>
                                                Taille : {item.height.meters} mètres
                                            </Card.Text>
                                            <Card.Text>Poids : {item.mass.kg} kg</Card.Text>
                                            <Card.Text>
                                                Diamètre : {item.diameter.meters} mètres
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Link key={item.id} to={`/fuseur/${item.id}`}>
                                                <Button variant='primary'>+ Infos</Button>
                                            </Link>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </center>
                </div>
            )}
        </>
    )
}

export default Recherche
