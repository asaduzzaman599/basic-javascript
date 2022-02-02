// Find out all of the ODD number in between 7 TO 35 divisible by 3 or 5

const startNumber = 7;          
const endNumber = 35;

let i = 7;
const oddNumbers = [];

while( i <= endNumber ){
    if(i % 3 == 0 || i % 5 == 0)
    oddNumbers.push(i);
    i += 2;
}

console.log(oddNumbers);          //output : [9, 15, 21, 25, 27, 33, 35]