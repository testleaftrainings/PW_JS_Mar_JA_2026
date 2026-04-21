
let value1 : any // when you explicitely infer aby datatype it behaves like javascript

value1 = 10
value1 = "Hello"
value1 = false

//Pros : Flexibility to use any datatype// loosely typed
//Cons :  No type safety and leads to run time error

let value2 : unknown

value2 = 10 // data coming from server
value2 = "Hello"


if (typeof(value2)==="string") {
    console.log(value2.toUpperCase());    
}else{
    console.log(`It is not if string datatype`);
    
}


