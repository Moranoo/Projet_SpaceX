import React from 'react'
import { Link } from 'react-router-dom'
import Recherche from '../Components/Liste'

const Liste = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Recherche />

        </div>
    )
}
export default Liste
