import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getNavbarData() {
    try {
        const res = await axios.get(apiUrl + 'category/view-all')
        return res.data.data;
    }
    catch(e){
        
    }
}