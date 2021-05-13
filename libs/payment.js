import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function createSubscription(data) {
    try {
        const res = await authAxios.post(apiUrl + 'payment/razorpay-create-subs')
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

export async function saveTransactionDetails(data) {
    try {
        const res = await authAxios.post(apiUrl + 'payment/save-transaction', data)
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