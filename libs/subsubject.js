import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getBooks( param ) {
    try {
        let pagination = {pageno : param.pageno, limit: 10}
        const res = await axios.post(apiUrl + `books/subject/${param.sub_subject_name}`, pagination)
        console.log(res,"res.data")
        return res.data;
    }
    catch(e){

    }
}