import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

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
        <>
            {isLoading ? (
                <h1>loading </h1>
            ) : (
                <div>
                    <h1>Détail sur le membre</h1>
                    <ul>
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
                                    Info Wikipedia via le liens suivant :
                                    <a href={data.wikipedia} target='_blank' rel='noreferrer'>
                                        {' '}
                                        ICI
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ul>
                    <Link className='boutonHistoPage' to='/crew'>
                        <button className='btn btn-primary'>Retour à liste de membre</button>
                    </Link>
                </div>
            )}
        </>
    )
}
