import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import NoMatch from '../Pages/NoMatch'
import Liste from '../Pages/Liste'

import Detail from '../Components/Detail'
import Fuser from '../Pages/Fuser'
import FuserDetail from '../Components/FuserDetail'


const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/crew' element={<Liste />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='*' element={<NoMatch />} />
                    <Route path='/fuseur' element={<Fuser />} />
                    <Route path='/fuseur/:id' element={<FuserDetail />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
