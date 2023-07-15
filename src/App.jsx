import Home from './pages/home/Home';
import Engine from './pages/engine/Engine';
import Nav from './components/nav/Nav';
import MetaMaskInstall from './components/metaMaskInstall/MetaMaskInstall';
import MetaMaskConnect from './components/metaMaskConnect/MetaMaskConnect';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function App() {
  const [isMetaMaskInstalled, setMetaMaskInstalled] = useState(false);
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccount() {
      if(window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAddress(accounts[0]);
        const isMetaMask = typeof window.ethereum !== 'undefined';
        setMetaMaskInstalled(isMetaMask);
      }
    }

    getAccount();
  }, []);

  useEffect(() => {
    if (address) {
      navigate("/");
    }
  }, [address, navigate]);

  return (
    <>
      <Nav />
      <Routes>
        {!isMetaMaskInstalled ? (
          <Route path="*" element={<MetaMaskInstall />} />
        ) : !address ? (
          <Route path="*" element={<MetaMaskConnect setAddress={setAddress} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/engine/:interval" element={<Engine />} />
          </>
        )}
      </Routes>
    </>
  );
}
export default App;
