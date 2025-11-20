 // ucFirst("john") first letter to uppercase
 const ucFirst= (str) => {
    const strUp = str[0].toUpperCase();
    const strRest = str.slice(1);
    const strNew = strUp +strRest;
    return strNew;
 }
// console.log(ucFirst("string"));

// check spam by searching for Viagra or XXX

const spamCheck = (str) =>{
    str = str.toLowerCase();
    if (str.includes("viagra") || str.includes("xxx")){
        return true;
    }
    else{
        return false;
    }
} 
// console.log(spamCheck("buy now and free"));

// check for max length and if exceeds then add ... after max length

const lengthCheck = (str,a) => {
    if(str.length >a){
        str = str.slice(0,a) + "...";
        return str;
    }else{
        return str;
    }
}
//console.log(lengthCheck("What I'd like to tell on this topic is:",15))

// extract numbers from currency values
const extractCurrValue = (str) =>{
    let strCurr = str.slice(1);
    strCurr = parseInt(strCurr);
    return strCurr;
}
console.log(extractCurrValue("$450") === 120);
console.log(typeof(extractCurrValue("$450")));