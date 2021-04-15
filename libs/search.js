import axios from 'axios';
import { apiUrl } from '../config/config'

export async function searchData(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.all([
            axios.get(apiUrl + 'books/search-chapter-question/'+searchT+'/'+params.limit),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit)
        ])
        return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}

export async function searchDataIndividual(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.get(apiUrl + 'books/search-book-name-isbn-individual/'+searchT+'/'+params.limit+'/'+params.pageno)
        return res.data;
    }
    catch(e){
    }
}

export async function searchDataIndividualQ(params) {
    try {
        console.log(params, "in question")
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.get(apiUrl + 'books/search-chapter-question/'+searchT+'/'+params.limit+'/'+params.pageno)
        return res.data;
        // return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}