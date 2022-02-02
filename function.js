// write separate fuction take three number as parameter and return +,-,* operation result  

function add(number1,number2,number3){          //addition
    if(typeof number1 != 'number' ||typeof number2 != 'number' ||typeof number3 != 'number' ){
        return "invalid";
    }
    let result = number1 + number2 + number3;
    return result;
}
function sub(number1,number2,number3){          //subtraction
    if(typeof number1 != 'number' ||typeof number2 != 'number' ||typeof number3 != 'number' ){
        return "invalid";
    }
    let result = number1 - number2 - number3;
    return result;
}
function mul(number1,number2,number3){          //multiplecation
    if(typeof number1 != 'number' ||typeof number2 != 'number' ||typeof number3 != 'number' ){
        return "invalid";
    }
    let result = number1 * number2 * number3;
    return result;
}


const a = 10;
const b = 3;
const c = 2;
                                //output
console.log(add(a,b,c));        //15
console.log(sub(a,b,c));        //5
console.log(mul(a,b,c));        //60
