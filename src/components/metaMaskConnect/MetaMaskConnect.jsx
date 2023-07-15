const MetaMaskConnect = ({ setAddress }) => {
  const connectMetaMask = async () => {
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAddress(accounts[0]);
      console.log('Eth address: ' + accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>KZEngine AI</h2>
      <p className="p-3">
       
      </p>
      <button onClick={connectMetaMask} className="btn btn-primary">
        Connect via MetaMask
      </button>
    </div>
  );
};

export default MetaMaskConnect;
