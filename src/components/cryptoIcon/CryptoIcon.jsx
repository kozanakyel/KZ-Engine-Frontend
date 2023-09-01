import { useState, useEffect } from 'react';
import { CryptoIconService } from '../../services/CryptoIconService';

const CryptoIcon = ({ cryptoId }) => {
  const [iconUrl, setIconUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const icon = await CryptoIconService(cryptoId);
        setIconUrl(icon);
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
