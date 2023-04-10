import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = document.getElementById("root");
//const root = ReactDOM.createRoot(document.getElementById('root'));
render(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>, root);

