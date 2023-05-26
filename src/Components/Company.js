import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import bootsrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Company() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/company')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    const website = data.links && data.links.website
    const flickr = data.links && data.links.flickr
    const twitter = data.links && data.links.twitter
    const elon_twitter = data.links && data.links.elon_twitter
    return (
        <div className='company'>
            <h1> All about of SpaceX :</h1>
            <ul>
                <Row xs={1} md={2} className='g-4'>
                    <Col key={data.id}>
                        <Card key={data.title}>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    <p>Founder: {data.founder}</p>
                                    <p>Founded in {data.founded}</p>
                                    <p>Employees: {data.employees}</p>
                                    <p>Vehicles: {data.vehicles}</p>
                                    <p>Launch Sites: {data.launch_sites}</p>
                                    <p>Test Sites: {data.test_sites}</p>
                                    <p>CEO: {data.ceo}</p>
                                    <p>CTO: {data.cto}</p>
                                    <p>COO: {data.coo}</p>
                                    <p>CTO of Propulsion: {data.cto_propulsion}</p>
                                    <p>Valuation: {data.valuation}</p>
                                    <p>Summary: {data.summary}</p>
                                </Card.Text>
                                <Card.Link href={website} target='_blank'>
                                    Website
                                </Card.Link>
                                <Card.Link href={flickr} target='_blank'>
                                    Flickr
                                </Card.Link>
                                <Card.Link href={twitter} target='_blank'>
                                    Twitter
                                </Card.Link>
                                <Card.Link href={elon_twitter} target='_blank'>
                                    Elon Musk Twitter
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </ul>
        </div>
    )
}

export default Company