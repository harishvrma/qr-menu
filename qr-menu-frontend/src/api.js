import axios from 'axios';

const API = axios.create({
    baseURL: 'https://qr-menu-backend-8im5.onrender.com/api',
})

export default API;