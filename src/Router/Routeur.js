import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import NoMatch from '../Pages/NoMatch'
import Liste from '../Pages/Liste'
import Detail from '../Pages/Detail'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/liste' element={<Liste />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur