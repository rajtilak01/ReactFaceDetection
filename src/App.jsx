import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Face from './components/Face';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Face />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;