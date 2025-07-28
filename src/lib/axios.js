import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000/api'
  : 'https://icode-backend-production.up.railway.app/api';

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;
