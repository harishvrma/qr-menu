import axios from 'axios';

const API = axios.create({
    baseURL: `https://qr-menu-2-4aqa.onrender.com/api`
  });

export default API;