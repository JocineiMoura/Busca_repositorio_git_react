import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Repositories from './Repositories/index';
import Home from './Home/index';

export default function Rotas() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={ < Home /> } />
                <Route path="/Repositories" element={ < Repositories /> } />
            </Routes>
        
            
        </BrowserRouter>
    );

}


