import React from 'react'
import { Link } from 'react-router-dom'
import Recherche from '../Components/Liste'


const Liste = () => {
    return (
        <div>
            <Recherche />
            <Link to="/">Home</Link>
        </div>
    )
}
export default Liste;