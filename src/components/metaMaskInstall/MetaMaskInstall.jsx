import React from 'react';

const MetaMaskInstall = () => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100">
    <h2 className="container hor-ver-centered">Please Install MetaMask</h2>
    <p className="container hor-ver-centered">
      You must install MetaMask to use this application.<br /> 
      You can download it from
      <a
        href="https://metamask.io/download.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </p>
  </div>
);

export default MetaMaskInstall;
