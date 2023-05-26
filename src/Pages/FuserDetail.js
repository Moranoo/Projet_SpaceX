import React from 'react'
import { Link } from 'react-router-dom'
import FuseDetails from '../Components/Fuser'

const FuserDetail = () => {
    return (
        <div>
            <FuseDetails />
            <Link className='btn btn-primary' to='/history'>
                Retour
            </Link>
        </div>
    )
}
export default FuserDetail
