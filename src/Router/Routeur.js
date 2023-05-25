import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import NoMatch from '../Pages/NoFound';

export default function Routeur() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    )
}
