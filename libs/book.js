import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getBook(param) {
    try {
        console.log(param.isbn,"sadj")
        const res = await axios.get(apiUrl + 'books/'+param.isbn)
        return res.data.data;
    }
    catch(e){
        
    }
}
