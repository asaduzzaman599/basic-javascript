// create a object with some property and change any property.
let student ={
    name: 'Mohammad Asaduzzaman',
    age : 23,
    fevouriteColor: 'black'
}
                            //output
console.log(student);       //{name: 'Mohammad Asaduzzaman', age: 23, fevouriteColor: 'black'}  
console.log(student.age);   //23
student['age'] = 24;
console.log(student.age);   //24
console.log(student);       //{name: 'Mohammad Asaduzzaman', age: 24, fevouriteColor: 'black'}