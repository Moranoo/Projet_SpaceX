import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../Components/Company'

const CompanyPage = () => {
    return (
        <div>
            <Company />
            <Link className='btn btn-primary' to='/'>
                Home
            </Link>
        </div>
    )
}
export default CompanyPage
