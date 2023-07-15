import axios from 'axios';

// const KZ_URL = 'https://304f-161-97-89-37.ngrok-free.app';

const KZ_URL = 'http://127.0.0.1:5005';
export default axios.create({
    baseURL: KZ_URL
});

export const axiosPrivate = axios.create({
    baseURL: KZ_URL,
    headers: { 'Content-Type': 'application/json' }
});