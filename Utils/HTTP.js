import axios from "axios";


const API_URL = 'http://192.168.29.223:4000/api'

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios; 