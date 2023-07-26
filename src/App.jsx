import Home from './pages/home/Home';
import Engine from './pages/engine/Engine';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine/:interval" element={<Engine />} />
      </Routes>
    </>
  );
}
export default App;
