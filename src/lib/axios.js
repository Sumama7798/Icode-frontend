import axios from 'axios';

const instance = axios.create({
    baseURL:`https://icode-backend-beta.vercel.app/api` ,
    withCredentials: true,
});



export default instance