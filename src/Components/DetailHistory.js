import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Import bootstrap et CSS
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import '../Styles/pages/DetailHistory.css'

function DetailHistory() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/history/${id}`)

            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const formattedDate = moment(data.event_date_utc).format('DD/MM/YYYY HH:mm:ss')
    //
    const articleLink = data.links && data.links.article

    //
    const handleButtonClick = () => {
        window.open(articleLink, '_blank')
    }

    return (
        <div className='DetailHistory'>
            <Card className='custom-card mt-7'>
                <Card.Header>Detail of {data.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <p>{data.details}</p>
                        <p>Event Date : {formattedDate} </p>
                    </Card.Text>

                    <Button variant='primary' onClick={handleButtonClick}>
                        Open the article
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailHistory
