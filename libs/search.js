import axios from 'axios';
import { apiUrl } from '../config/config'

export async function searchData(searchText) {
    try {
        console.log(searchText);
        const res = await axios.all([
            axios.get(apiUrl + 'books/search-chapter-question/'+searchText),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+searchText)
        ])
        return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}