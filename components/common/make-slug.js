const MakeSlug = (str) => {
    return str.trim().toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}
const SameSlug = (str) => {
    return str.trim().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}

const GetString = (str, length) => {
    return str.substr(0,length);
}
const GetName = (str) => {
    if(str){
        return str.replaceAll('-', ' ');   
    }
}
function createMarkup(data) {
    return {__html: data};
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export {
    MakeSlug,
    SameSlug,
    GetString,
    GetName,
    createMarkup,
    capitalize,
}
