import axios from "axios";

export const BASE_URL = 'http://192.168.1.11:9192/'
export const SECRET_KEY = 'Shubham12345'

const ApiManageLogin = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    withCredentials: true
});


export default ApiManageLogin;