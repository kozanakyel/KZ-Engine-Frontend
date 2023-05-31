import axios from 'axios';

const KZ_URL = 'https://6809-161-97-89-37.ngrok-free.app';
export default axios.create({
    baseURL: KZ_URL
});

export const axiosPrivate = axios.create({
    baseURL: KZ_URL,
    headers: { 'Content-Type': 'application/json' }
});