

//use for loop to display all elements of array


                                        //output

const arr = [9, 15, 21, 25, 27, 33, 35];
console.log(arr);                       //[9, 15, 21, 25, 27, 33, 35]

//for loop
for(let i = 0; i < arr.length; i++){      //9 //15 //21 //25 //27 //33 //35
    const element = arr[i];               
    console.log(element);                  
}
             
console.log('Array finished');             //Array finished


//for of loop
for(const element of arr){                //9 //15 //21 //25 //27 //33 //35
                 
    console.log(element);   
}
console.log('Array finished');             //Array finished

