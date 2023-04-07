import Home from './pages/home/Home';
import Engine from './pages/engine/Engine'
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
      <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="engine" element={<Engine />} />
        </Routes>
      </>

  );
}

export default App;
