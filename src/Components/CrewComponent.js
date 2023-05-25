import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CrewComponent() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/crew')
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='listeApi'>
            <h1>Dragons crew :</h1>
            {loading ? (
                <div>En chargement... </div>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <Link to={`/crew/${item.id}`}>
                                <img src={item.image} alt={'information sur ' + item.name} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CrewComponent
