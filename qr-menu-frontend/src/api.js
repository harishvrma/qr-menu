import axios from 'axios';

const API = axios.create({
    baseURL: 'https://qr-menu-1-d4kg.onrender.com/api',
})

export default API;