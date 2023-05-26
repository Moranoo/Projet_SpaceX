import React from 'react'
import { Link } from 'react-router-dom'
import FuseDetails from '../Components/Fuser'


const Fuser = () => {
    return (
        <div>
            <FuseDetails />
            <Link to="/">Home</Link>
        </div>
    )
}
export default Fuser;