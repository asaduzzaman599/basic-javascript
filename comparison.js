// Simple comparison operation by using <, >, ==, !=, <=, >= 

var largeVariable = 10;                                     
var smallVariable = 5;  
                                                     //output
//10 getter then 5                                                        
console.log(largeVariable > smallVariable)           //true

//10 smaller then 5                
console.log(largeVariable < smallVariable)           //false

//10 smaller or eqaul then 5                
console.log(largeVariable <= smallVariable)          //false

//10 getter or equal then 5                
console.log(largeVariable >= smallVariable)          //true


//10 equal to 5                
console.log(largeVariable == smallVariable)         //false

//10 not equal to 5                
console.log(largeVariable != smallVariable)         //true

//5 divisible by 5 and 10 divisible by 3  
//  '&&' any one condition false will condition false           
console.log(smallVariable % 5 == 0 && largeVariable % 3 == 0 )                   //false


//10 not equal to 5 or 5 getter then 10   
//  '||' any one condition true will condition true         
console.log(largeVariable != smallVariable || smallVariable > largeVariable )    //true


