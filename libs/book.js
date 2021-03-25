import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getBook(param) {
    try {
        // console.log(param.book_isbn,"param")
        const res = await axios.get(apiUrl + 'books/book/'+param.book_isbn)
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function getChapters(param) {
    try {
        // console.log(param.book_isbn,"param")
        const res = await axios.get(apiUrl + 'books/book/chapter/'+param.book_isbn)

        return res.data.chapters;
    }
    catch(e){
        
    }
}

export async function getSections(param) {
    try {
        // console.log(param.book_isbn,"param")
        const res = await axios.get(apiUrl + 'books/book/chapter/section/'+param.book_isbn+'/'+param.chapter_no)
        return res.data.sections;
    }
    catch(e){
        
    }
}

export async function getExercises(param) {
    try {
        // console.log(param.book_isbn,"param")
        const res = await axios.get(apiUrl + 'books/book/chapter/section/exercise/'+param.book_isbn+'/'+param.chapter_no+'/'+param.section_no)
        return res.data.excerises;
    }
    catch(e){
        
    }
}
