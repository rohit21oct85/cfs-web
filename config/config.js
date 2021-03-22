import axios from 'axios';

// const apiUrl = `http://127.0.0.1:8080/web/v1/`;
const apiUrl = `${process.env.HOST}/web/v1/`;

const config = {
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    },
};

const authAxios = axios.create(config);

authAxios.interceptors.request.use(function(config) {
    config.headers.Authorization = localStorage.getItem('access_token_student') ?
        `Bearer ${localStorage.getItem('access_token_student')}` :
        ``;
    return config;
});

export { apiUrl, axios, authAxios };