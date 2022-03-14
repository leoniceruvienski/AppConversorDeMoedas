import axios from 'axios';
// BaseURL: https://free.currconv.com/api/v7/
//> convert?q=USD_BRL&compact=ultra&apiKey=a2e3d86b1dbb6297d887

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7/'
});

export default api;