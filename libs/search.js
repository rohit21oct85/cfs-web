import axios from 'axios';
import { apiUrl } from '../config/config'

export async function searchData(params) {
    try {
        console.log(params);
        const res = await axios.all([
            axios.get(apiUrl + 'books/search-chapter-question/'+params.searchText+'/'+params.limit),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+params.searchText+'/'+params.limit)
        ])
        return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}