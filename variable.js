// assign variable                     //output

var text = " hello! It is a String";   //string

var numberInt = 5;                     //Integer //number
var numberFloat = 5.5;                 //Float //number

var boolenType = true;                 //boolean



// type check

//string
console.log(typeof text);                //string
console.log(typeof '5');                 //string
console.log(typeof '5.5');               //string
console.log(typeof 'true');              //string

//number
console.log(typeof numberInt);           //number
console.log(typeof numberFloat);         //number
console.log(typeof 5);                   //number

//boolean
console.log(typeof boolenType);          //boolean
console.log(typeof false);               //boolean


// let & const variable

//let mutable variable 
let mutableVariable = 5;
console.log(mutableVariable);             //5
mutableVariable = 6;
console.log(mutableVariable);             //6

//const unmutable variable 
const unmutableVariable = 5;
console.log(unmutableVariable);           //5
/*unmutableVariable = 6;
console.log(unmutableVariable);   */      //TypeError: Assignment to constant variable.
