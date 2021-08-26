import axios from 'axios';
import { apiUrl } from '../config/config'
import {GetName} from '../components/common/make-slug'

export async function getBooks( param ) {
    try {
        let pagination = {pageno : param.pageno, limit: 12}
        // const sub_subject = GetName(param.sub_subject_name);
        const res = await axios.post(apiUrl + `books/subject/${param.sub_subject_name}`, pagination)
        return res.data;
    }
    catch(e){

    }
}

export async function getSubSubject( param ) {
    try {
        console.log(param)
        const res = await axios.get(apiUrl + `subsubject/${param}`)
        return res.data;
    }
    catch(e){

    }
}

export async function getSubjects( param ) {
    try {
        console.log(param)
        const res = await axios.get(apiUrl + `subsubject/all`)
        return res.data;
    }
    catch(e){

    }
}

export async function askQuestion( param ) {
    try {
        console.log(param)
        const res = await axios.get(apiUrl + `/ask-question`)
        return res.data;
    }
    catch(e){

    }
}

export async function getAllSubSubject() {
    try {
        const res = await axios.get(apiUrl + `subsubject`)
        return res.data;
    }
    catch(e){

    }
}

export async function getChildSubjects(param) {
    try {
        const res = await axios.get(apiUrl + `subsubject/childsubjects/${param}`)
        return res.data;
    }
    catch(e){

    }
}

export async function getQandAChildSubjects(param) {
    try {
        let pagination = {pageno : param.pageno, limit: 10}
        const res = await axios.post(apiUrl + `subsubject/questions/${GetName(param.child_subject)}`,pagination)
        return res.data;
    }
    catch(e){

    }
}