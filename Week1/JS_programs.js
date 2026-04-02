// //Loose Equality

// console.log(10=="10"); // Loose equality : type coercion => true 

// /* Notes : "10"==> string is getting converted to number 10 hence true */

// console.log(1==true); // Loose equality : type coercion => true 

// /* Notes : true ==> boolean is geting converted to truthy (1) => true */

// console.log(null==undefined); // Loose equality true

//Strict Equality

// console.log(10==="10"); // false

// console.log(1===true); // false

// console.log(null===undefined); // false

// if(true===1){

// console.log("Helo");

// }


// let str = "test"; // immutable
// str=str+"leaf"
// console.log(str);


// let productDetails = 'Order ID: #12345-Confirmed'
// let prod_status = productDetails.split("#") 
// console.log(prod_status);// [ 'Order ID: ', '12345-Confirmed' ] // [0,1]
// console.log(prod_status[1]);//12345-Confirmed

// let prod_id = prod_status[1].split("-") ;
// console.log(prod_id);//[ '12345', 'Confirmed' ]
// console.log(prod_id[0]);//12345


// //Question: How does JavaScript handle string storage in memory? Since strings are immutable, how do we actually 'modify' them in our code?"
// // I want to change the 'H' to 'J'

// let strVal = 'Hello World';// H=0,e=1,l=2,l=3,o=4, =5,....
// strVal="J"+strVal.slice(1);
// console.log(strVal);


//Task: Write a loop that finds and returns the longest word in that sentence."

let str = 'Automation testing is very important';
let words = str.split(" "); // Converted to array
console.log(words); // [ 'Automation', 'testing', 'is', 'very', 'important' ]
console.log(`The length of the array of string ${words.length}`); // 5 // length property gave the number of letters present in the array of string

let longest = ""

for (let index = 0; index < words.length; index++) {
//    words[0] // => Automation
//    words[1] // => testing
//    words[2] // => is
//    words[3] // => very
//    words[4] // => important

//console.log(words[index]) // got the value
console.log(words[index].length) // it gave the output of number of letters present in each word

if (words[index].length>longest.length) { // 10>0
    longest=words[index] // "Automation"
}

/* First Iteration: Condition => 10>0 => true
longest ="" ; 
words[0]="Automation"

output is true
longest=words[0]// "Automation"

-------------------------------------------
 Second Iteration: 7>10 => false
longest ="Automation" ; 
words[1]="testing"

output is true
longest=words[0]// "Automation"


 */
  
    
}

 console.log(longest);




