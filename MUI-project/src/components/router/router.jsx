import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/footer'
import Home from '../home/Home'
function router() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='/React-sample-project' element={<Home />} />
                    </Route>
                </Routes>
                <Footer />
            </Router>

        </>
    )
}

export default router