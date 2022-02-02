//declear an array.                     //output

const arr = [9, 15, 21, 25, 27, 33, 35];
console.log(arr);                       //[9, 15, 21, 25, 27, 33, 35]

//number of element. 
console.log(arr.length);                //7

//update or change an element in array. 
console.log(arr);                       //[9, 15, 21, 25, 27, 33, 35]
console.log(arr[5]);                    //33
arr[5] = 50;                            
console.log(arr[5]);                    //50
console.log(arr);                       //[9, 15, 21, 25, 27, 50, 35]

//add and remove element from last.
//add push
arr.push(99)
console.log(arr);                       //[9, 15, 21, 25, 27, 50, 35, 99] //99 added as last element
//remove pop
arr.pop()
console.log(arr);                      //[9, 15, 21, 25, 27, 50, 35] //99 removed 

//add and remove element from first.
//add unshift
arr.unshift(88)                 
console.log(arr);                       //[88, 9, 15, 21, 25, 27, 50, 35] //88 added as first element
//remove shift
arr.shift()
console.log(arr);                      //[9, 15, 21, 25, 27, 50, 35] //88 removed 

//check specific value exist in array
//is 33 is a element
console.log(arr.indexOf(35));           //6 //index of 35 is 6 that means 35 exist in this array

//is 99 is a element
console.log(arr.indexOf(99));           //-1 //index of 99 is -1 that means 99 not exist in this array


