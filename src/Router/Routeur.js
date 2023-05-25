import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import NoMatch from '../Pages/NoFound'

const Routeur = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </Router>
    )
}

export default Routeur