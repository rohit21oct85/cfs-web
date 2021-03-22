import axios from 'axios';
import { apiUrl } from '../config/config'

export async function setLogin(data) {
    try {
        const res = await axios.post(apiUrl + 'student/login',data)
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(error.response.status === 401){
            return null;
        }
    }
}

export async function setSignUp(data) {
    try {
        const res = await axios.Register(apiUrl + 'student/register', data)
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(error.response.status === 401){
            return null;
        }
    }
}