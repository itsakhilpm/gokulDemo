import axios from 'axios';

//for service layer api calls. 
//https://jsonplaceholder.typicode.com/todos/1
const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});
export default instance;
