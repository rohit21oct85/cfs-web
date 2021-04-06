import axios from 'axios';
import { apiUrl } from '../config/config'
import {GetName} from '../components/common/make-slug'

export async function getBooks( param ) {
    try {
        let pagination = {pageno : param.pageno, limit: 12}
        const sub_subject = GetName(param.sub_subject_name);
        const res = await axios.post(apiUrl + `books/subject/${sub_subject}`, pagination)
        return res.data;
    }
    catch(e){

    }
}