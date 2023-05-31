import axios from 'axios';

const KZ_URL = 'http://161.97.89.37:5005';

export default axios.create({
    baseURL: KZ_URL
});

export const axiosPrivate = axios.create({
    baseURL: KZ_URL,
    headers: { 'Content-Type': 'application/json' }
});