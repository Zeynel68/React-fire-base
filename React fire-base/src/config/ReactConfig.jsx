import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Auth from '../pages/Auth'

function ReactConfig() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />


        </Routes>
    )
}

export default ReactConfig
