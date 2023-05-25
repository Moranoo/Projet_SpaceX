import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Import bootsrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HistoryComponents() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/history')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1> History of SpaceX :</h1>
            <ul>
            <Row  xs={1} md={2} className='g-4'>
                {data.map((item, id) => (
                    
                            <Col key={id}>
                                <Card key={item.title}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Link key={item.id} to={`detail/${item.id}`}>
                                            <Button variant='primary'>More information</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                   
                )}
                 </Row>
            </ul>
        </div>
    )
}

export default HistoryComponents
