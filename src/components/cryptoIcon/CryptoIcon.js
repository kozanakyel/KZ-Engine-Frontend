import { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoIcon = ({ cryptoId }) => {
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
                setIconUrl(response.data.image.small);
            } catch (error) {
                console.error(error);
            }
        };

        fetchIcon();
    }, [cryptoId]);

    return (
        <img src={iconUrl} alt={`${cryptoId} icon`} />
    );
};

export default CryptoIcon;