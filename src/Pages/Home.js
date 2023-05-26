import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (
        <div>
            <center>
                <h1>Bienvenue sur le site Space X</h1>
                <img style={{ borderRadius: '50%' }}
                    src='https://www.spacex.com/static/images/share.jpg' alt='Space X' />
            </center>
        </div>
    )
}
