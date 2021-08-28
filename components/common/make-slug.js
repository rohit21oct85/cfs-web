const MakeSlug = (str) => {
    return str.trim().toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}
const MakeSlug2 = (str) => {
    return str.trim().toLowerCase().replace(/ +/g,'-');     
}
const stringToSlug = (str)=> { // <-- removed the argument // <-- added this statement

      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();
      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
               .replace(/\s+/g, '-') // collapse whitespace and replace by -
               .replace(/-+/g, '-') // collapse dashes
               .replace(/'+/g, '') // collapse '
               .replace(/,+/g, ''); // collapse ,
      return str;
};
const SameSlug = (str) => {
    return str.trim().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}

const GetString = (str, length) => {
    return str.substr(0,length);
}
const GetName = (str) => {
    if(str){
        return str?.replaceAll('-', ' ');   
    }
}
function createMarkup(data) {
    return {__html: data};
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str?.replace(re, function(matched){
        return mapObj[matched];
    });
}
export {
    MakeSlug,
    SameSlug,
    GetString,
    GetName,
    createMarkup,
    capitalize,
    replaceAll,
    stringToSlug,
    MakeSlug2
}
