import HomePage from './pages/homePage/HomePage';
import EnginePage from './pages/enginePage/EnginePage';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import SentimentPage from './pages/sentimentPage/SentimentPage';


function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/engine/:interval" element={<EnginePage />} />
        <Route path="/sentiment" element={<SentimentPage />} />
      </Routes>
    </>
  );
}
export default App;
