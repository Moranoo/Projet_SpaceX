import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Detail() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div>
                <h1>Fusée {data.name}</h1>
                <Link to={`/fuseur`}>
                    <Button variant='primary'>Retour à la liste de Fuser</Button>
                </Link>
                <Row xs={1} md={6} className='g-1'>
                    {data.flickr_images &&
                        data.flickr_images.map((image, index) => (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img src={image} alt={data.description} />
                                </Card>
                            </Col>
                        ))}
                </Row>
                <Card.Body style={{ width: '20rem', textAlign: 'center' }}>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.active}</Card.Text>
                    <Card.Text>Compagnie : {data.company}</Card.Text>
                    <Card.Text>Pays d'origine : {data.country}</Card.Text>
                    <Card.Text>Date du premier décollage : {data.first_flight}</Card.Text>
                    <Card.Text>
                        Description :<br />
                        {data.description}
                    </Card.Text>
                    {data.mass && <Card.Text>Poids : {data.mass.kg} kg</Card.Text>}
                    {data.engines && (
                        <>
                            <Card.Text>Nombre de moteur : {data.engines.number}</Card.Text>
                            <Card.Text>Type de moteur : {data.engines.type}</Card.Text>
                            <Card.Text>Carburant : {data.engines.propellant_1}</Card.Text>
                        </>
                    )}
                </Card.Body>
            </div>
        </>
    )
}
