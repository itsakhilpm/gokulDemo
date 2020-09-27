import axios from 'axios';
//** 1st step for Api call


//for service layer api calls. 
//https://jsonplaceholder.typicode.com/todos/1
// const instance = axios.create({
//     baseURL: `http://api.weatherapi.com/v1/current.json?key=8a3ef89629f4486c94461429202709&q=`,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
// });
const instance = axios.create({
    baseURL: `https://run.mocky.io/v3/60629d1c-bae2-4e80-89cd-da732ab86183`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});
export default instance;
