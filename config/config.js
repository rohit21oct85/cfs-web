import axios from 'axios';
import { getSession } from 'next-auth/client'

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

authAxios.interceptors.request.use(async function(config) {
    const session = await getSession();
    config.headers.Authorization = session.user.accessToken ?
        `Bearer ${session.user.accessToken}` :
        ``;
    return config;
});

export { apiUrl, axios, authAxios };