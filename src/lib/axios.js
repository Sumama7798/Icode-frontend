import axios from 'axios';

const instance = axios.create({
    baseURL:`https://icode-backend-dun.vercel.app/api` ,
    withCredentials: true,
});



export default instance