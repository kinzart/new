import axios from 'axios';
const api = axios.create({

    baseURL: 'http://192.168.0.122:3333/'
})




export default api;

/*to open: on terminal "json-server ./src/services/server.json --host 192.168.0.122 --port 3333" */
/*ALWAYS CONSULT IPCONFIG TO KNOW THE NEW IP*/