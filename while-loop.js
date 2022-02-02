// Find out all of the ODD number in between 7 TO 19

const startNumber = 7;          
const endNumber = 19;

let i = 7;
const oddNumbers = [];

while( i <= endNumber ){
    oddNumbers.push(i);
    i += 2;
}

console.log(oddNumbers);          //output : [7, 9, 11, 13, 15, 17, 19]  