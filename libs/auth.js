import axios from 'axios';
import { apiUrl } from '../config/config'

export async function setLogin(data) {
    try {
        const res = await axios.post(apiUrl + 'student/login',data)
        return res;
    }
    catch(e){
        
    }
}