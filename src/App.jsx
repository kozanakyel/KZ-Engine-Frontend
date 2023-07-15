import Home from './pages/home/Home';
import Engine from './pages/engine/Engine';
import Nav from './components/nav/Nav';
import MetaMaskInstall from './components/metaMaskInstall/MetaMaskInstall';
import MetaMaskConnect from './components/metaMaskConnect/MetaMaskConnect';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function App() {
  const [isMetaMaskInstalled, setMetaMaskInstalled] = useState(false);
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    console.log("path: " + location.pathname);
    if (address &&  !location.pathname.startsWith("/engine")) {
      navigate("/");
    }
  }, [address, location.pathname, navigate]);

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
