import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import NoMatch from '../Pages/NoMatch'
import Liste from '../Pages/Liste'
import History from '../Pages/History'
import HistoPage from '../Pages/HistoPage'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/liste' element={<Liste />} />
                    <Route path='*' element={<NoMatch />} />
                    <Route path='/history' element={<History />} />
                    <Route path='history/detail/:id' element={<HistoPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
