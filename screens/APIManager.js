import axios from "axios";

export const BASE_URL = 'http://192.168.1.11:8866/'
export const SECRET_KEY = 'Shubham12345'

const ApiManager = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    withCredentials: true
});


export default ApiManager;