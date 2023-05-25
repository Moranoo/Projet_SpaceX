import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

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
            setData(response.data[0])
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {isLoading ? <h1>loading </h1> : <div>
                <h1>Détail sur le membre :</h1>
                <ul>
                    {data.map((item) => (
                        <Card key={item.name} style={{ width: '18rem' }}>
                            <Card.Body>
                                <li style={{
                                    listStyle: 'none',
                                }} >
                                    <img style={{
                                        width: '18rem'
                                    }}
                                        src={item.image}></img>
                                </li>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Voici les informations sur le membre de l'équipage : {item.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ul>
            </div>}
        </>
    )
}