import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Recherche() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/crew')

            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Liste Membres Crew :</h1>
            <ul>
                {data.map((item) => (
                    <Card key={item.name} style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='holder.js/100px180' />
                        <Card.Body>
                            <li
                                style={{
                                    listStyle: 'none',
                                }}
                                key={item.name}
                            >
                                <img
                                    style={{
                                        with: '20px',
                                    }}
                                    src={item.image}
                                ></img>
                                {item.name}
                            </li>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Voici les informations sur le membre de l'équipage : {item.name}
                            </Card.Text>
                            <Button variant='primary'>En savoir plus</Button>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </div>
    )
}

export default Recherche
