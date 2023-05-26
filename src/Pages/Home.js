import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <div>
            <title>Home</title>

            <ul>
                <li>
                    <Link to="/crew">Liste des membres</Link>
                </li>

                <li>
                    <Link to="/Fuseur">Liste des fusées</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
                <li>
                    <Link to='/company '>About SpaceX</Link>
                </li>
            </ul>

        </div>
    )
}
