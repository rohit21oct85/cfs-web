import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function saveAssignment(data) {
    try {
        const res = await authAxios.post(apiUrl + 'assignment/save-assignment', data)
        return res.data;
    }
    catch(e){
        
    }
}

export async function saveAssignment2(data) {
    try {
        const res = await authAxios.put(apiUrl + 'assignment/save-assignment2', data)
        return res.data;
    }
    catch(e){
        
    }
}
