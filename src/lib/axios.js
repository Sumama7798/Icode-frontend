import axios from 'axios';

const instance = axios.create({
    baseURL:`https://icode-backend-blush.vercel.app/api` ,
    withCredentials: true,
});



export default instance
