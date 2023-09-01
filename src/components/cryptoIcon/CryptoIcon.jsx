import { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoIcon = ({ cryptoId }) => {
  const [iconUrl, setIconUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}`,
        );
        setIconUrl(response.data.image.small);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchIcon();
  }, [cryptoId]);

  return (
    <div>
      {loading ? (
        // Bootstrap Spinner component for loading indicator
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <img src={iconUrl} alt={`${cryptoId} icon`} />
      )}
    </div>
  );
};

export default CryptoIcon;
