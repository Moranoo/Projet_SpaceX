import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import NoMatch from '../Pages/NoMatch'
import Liste from '../Pages/Liste'
import History from '../Pages/History'
import HistoPage from '../Pages/HistoPage'
import CompanyPage from '../Pages/CampanyPage'
import QuizPage from '../Pages/Quiz'

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
                    <Route path='/company' element={<CompanyPage />} />
                    <Route path='/quiz' element={<QuizPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
