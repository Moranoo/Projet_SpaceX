import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Detail() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
            setIsLoading(false)
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container>
            {isLoading ? (
                <h1>loading </h1>
            ) : (
                <div>
                    <center>
                        <h1>Détail sur le membre</h1>
                    </center>
                    <center>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant='top'
                                        style={{ width: '18rem' }}
                                        src={data.image}
                                        alt={data.name}
                                    />

                                    <Card.Body>
                                        <Card.Text>Nom : {data.name}</Card.Text>
                                        <Card.Text>Agence : {data.agency}</Card.Text>
                                        <Card.Text>
                                            Info Wikipedia via le lien suivant :
                                            <a href={data.wikipedia} target='_blank' rel='noreferrer'>
                                                {' '}
                                                ICI
                                            </a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </center>
                    <Link className='boutonHistoPage' to='/crew'>
                        <button className='btn btn-primary'>Retour à la liste de membres</button>
                    </Link>
                </div>
            )}
        </Container>
    )
}
