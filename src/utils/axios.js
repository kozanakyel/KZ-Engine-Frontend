import axios from 'axios';

const KZ_URL = import.meta.env.VITE_KZ_GLB_URL;
// console.log(KZ_URL)


export default axios.create({
    baseURL: KZ_URL
});

export const axiosPrivate = axios.create({
    baseURL: KZ_URL,
    headers: { 'Content-Type': 'application/json' }
});