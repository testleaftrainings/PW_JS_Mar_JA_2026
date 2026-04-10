//Sorting an array of objects by a specific property in JavaScript

//Array string 

const str ="Apple, Cherry, Banana";

console.log(str.split(", ")); // [ 'Apple', 'Cherry', 'Banana' ]


const arr = str.split(", ").sort();//Splits the string into an array of substrings based on the comma and space delimiter, then sorts the array alphabetically.
console.log(arr);



//Array number

let numberArray =[10, 8, 9, 7]
console.log(numberArray.sort());//[ 10, 7, 8, 9 ]

console.log(numberArray.sort((a,b)=>a-b)) // arrow function // [ 7, 8, 9, 10 ] ascending

console.log(numberArray.sort((a,b)=>b-a)); // [ 10, 9, 8, 7 ] descending




//Array object

const arrObj = [{name:'Arun'},{name:"Charles"},{name:'Babu'}]

console.log(arrObj.sort((a,b)=>a.name.localeCompare(b.name)));

//Stage :1 -> remains unchanged
//a={name:'Arun'}
//b={name:"Charles"}

//Stage2 -> swaps
//a={name:'Charles'}
//b={name:"Babu"}

//map and filter

let numberArr = [1,2,3,4,5,]

//filter method is to write a condition or logic and prints the array which returns true

let even = numberArr.filter((num)=>num%2===0); //even //1/2 (0.5)===0, 2/2(0) ====0
console.log(even); //[ 2, 4 ]


let squared = numberArr.map((num)=>num+num) // num=1, 2,3
console.log(squared);


//Named Function ==> Get hoisted to the top of the code 


// JA() // Here also we are calling the named function before the function body

// function JA(){
// console.log("This is named function");
// }



//Function expression will not get hosited // hoisting mechanism does not work for function expression

expJA() // calling the function before assigning the value will through reference error 

const expJA = function(){
    console.log("This is function expression");
    
}

