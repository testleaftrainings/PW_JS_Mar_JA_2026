

// function optional(name?:string){ // optional parameter

// if (name) {
//     console.log(`Hello,${name}`);  
// }else{
// console.log(`Hello `);


// }

// }

// optional("Everyone")
// //optional()


function datatype(input:string|number){
if (typeof(input)==="string") {
    return input.length
} else {
        return input*2
}

}

//console.log(datatype("Hello"))

console.log(datatype(10))