import axios from 'axios';
import { apiUrl } from '../config/config'

export async function searchData(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;
        console.log(searchT,"params-searchT")
        const res = await axios.all([
            axios.get(apiUrl + 'books/search-chapter-question/'+searchT+'/'+params.limit),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit)
        ])
        return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}