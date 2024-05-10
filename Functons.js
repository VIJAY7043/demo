// //Function statement 

//A function statement in JavaScript is used to define a named 
//function with optional parameters and a body of code to execute when the function is called

// function name(){
//     console.log(5)
// }
// name()

// //function return 

// function name2(nam){
//     return nam*2
// }
// const newnum = name2(5)
// console.log(newnum)


// //function expression

//A function expression in JavaScript is a way to define a function as part of an expression,
// typically by assigning it to a variable. Unlike function statements,
// function expressions can be anonymous (where the function doesn't have a name) or named. 

// var name = function(){
//     console.log("hi there")
// }
// name()

// //First class function 

// A first-class function is a function that can be treated like any other variable, 
//allowing it to be assigned to variables, passed as arguments, returned from other functions, 
//and stored in data structures.

// function added(pars){
//     return pars*pars
// }
// function displayedfn(fn){
//      console.log("Added funvtion is:",fn(5))
// }
// displayedfn(added)

//Immediately Invoke function 
//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function 
// that is defined and executed immediately.

(function multiply(nums){
    console.log(nums*nums)
})(10)





