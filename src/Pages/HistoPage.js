import React from 'react'
import { Link } from 'react-router-dom'
import DetailHistory from '../Components/DetailHistory'

const HistoPage = () => {
    return (
        <div>
            <DetailHistory />
            <div className='boutonHistoPage'>
                <Link className='btn btn-primary' to='/history'>
                    Retour
                </Link>
            </div>
        </div>
    )
}
export default HistoPage
