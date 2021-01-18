import axios from 'axios';

const appURL  = 'http://192.168.2.78/'

export default axios.create({
    baseURL: appURL,
    headers: {'Content-Type': 'application/json' }
});