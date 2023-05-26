import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Recherche() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/crew`)
            setData(response.data)
            setFilteredData(response.data)
            setIsLoading(false)
            console.log(response.data)
        } catch (error) {
            setError('Une erreur est survenue lors du chargement des données.')
            console.error(error)
        }
    }
    useEffect(() => {
        const filteredResults = data.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.agency && item.agency.toLowerCase().includes(searchTerm.toLowerCase())),
        )
        setFilteredData(filteredResults)
    }, [searchTerm, data])

    return (
        <>
            {isLoading ? (
                <h1>loading</h1>
            ) : (
                <div>
                    <center>
                        <h1>Crew :</h1>
                        <input
                            type='text'
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder='Search membre or agency...'
                        />
                    </center>
                    {error && <p>{error}</p>}
                    <ul>
                        {filteredData.length === 0 && <p>Aucun résultat</p>}
                        {filteredData.map((item) => (
                            <Card
                                key={item.name}
                                className="click-custome"
                                style={{ width: '18rem' }}
                                onClick={() => {
                                    navigate(`/detail/${item.id}`)
                                }}
                            >
                                <Card.Img
                                    variant='top'
                                    style={{ width: '18rem' }}
                                    src={item.image}
                                    alt={item.name}
                                />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Voici les informations sur le membre de l'équipage :{' '}
                                        {item.name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Recherche

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Collapse from 'react-bootstrap/Collapse';

// function Example() {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="example-collapse-text"
//                 aria-expanded={open}
//             >
//                 click
//             </Button>
//             <div style={{ minHeight: '150px' }}>
//                 <Collapse in={open} dimension="width">
//                     <div id="example-collapse-text">
//                         <Card body style={{ width: '400px' }}>
//                             Anim pariatur cliche reprehenderit, enim eiusmod high life
//                             accusamus terry richardson ad squid. Nihil anim keffiyeh
//                             helvetica, craft beer labore wes anderson cred nesciunt sapiente
//                             ea proident.
//                         </Card>
//                     </div>
//                 </Collapse>
//             </div>
//         </>
//     );
// }

// export default Example;
