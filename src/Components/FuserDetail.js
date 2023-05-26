import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

export default function Detail() {
    const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
            // setIsLoading(false)
            console.log(response)
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <h1>Détail</h1>
                <Card style={{ width: '18rem' }}>
                    {data.flickr_images && data.flickr_images.map(image => (
                        <Card.Img key={image} style={{ width: '18rem' }} src={image} />
                    ))}                   <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.active}
                        </Card.Text>
                        Compagnie : {data.company}
                        <Card.Text>
                            Pays d'origine : {data.country}
                        </Card.Text>
                        <Card.Text>
                            Date du premier décolage : {data.first_flight}
                        </Card.Text>
                        <Card.Text>
                            Description :<br />
                            {data.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={data.wikipedia}
                                target="_blank" rel="noreferrer"
                            >Liens Wikipedia</a>
                        </Card.Text>
                        <Link to={`/fuseur`}>Retour liste de fusée</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}