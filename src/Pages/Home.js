import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <title>Home</title>
            <Link to='/liste'>LISTE</Link>

            <Link to='/history'>History</Link>
        </div>
    )
}
