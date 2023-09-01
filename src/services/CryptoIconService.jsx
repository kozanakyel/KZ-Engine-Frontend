import axios from 'axios';

export const CryptoIconService = async (cryptoId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
        return response.data.image.small;
    } catch (error) {
        console.error(error);
        throw error;
    }
};