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
        if(e.response.status === 401){
            return null;
        }
    }
}

export async function setSignUp(data) {
    console.log(data);
    try {
        const res = await axios.post(apiUrl + 'student/register', data)
        if(res.status === 200){
            return res;
        }
    }
    catch(e){
        if(e.response.status === 409){
            return 409
        }
    }
}