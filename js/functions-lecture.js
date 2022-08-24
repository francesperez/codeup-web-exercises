"use  strict";
//Parts of a function
// 1. function keyword
//2. the name of the function - the word right after you write function
//3. add a parenthesis; some of the functions won't need a parameter
    // (what goes inside the parenthesis). If there is more than one parameter, the list
    //is comma separated
//4. Curly braces contain the function body
//5. The function body contains the code that runs when the function is invoked.
//6. Optional, but common return statement

// function sayHello (greeting, name) {
//     console.log(`${greeting}, ${name}`)
// }


//Here, the number has global scope, meaning 'number' will come out as 20 in console
// let number = 20
// function localOrGlobal() {
//     console.log(number)
// }

//Here, the number has local scope, meaning the 'number' will give you an error in console
// function localOrGlobal() {
//     let number = 20;
// }
//     console.log(number)


//the local scope "shadows" the global scope; so that if we have two
// variables of the same name, the globally scoped variable becomes invisible
// let number = 20;

//function declarations
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
// }
// localOrGlobal();
// console.log(number);

//function expression
//function expressions are not hoisted so this won't work:
//bark();
// const bark = function(){
//     console.log("woof!");
// }
//
// //function declarations are hoisted, so this will work:
// yap();
// function yap(){
//     console.log("yip yip!");
// }

// //function declaration
// function add(x,y){
//     return x + y;
// }
//
// //function expression
// const add = function add(x,y){
//     return x + y;
// }

//ARROW FUNCTIONS ARE KIND OF LIKE SHORTCUTS
//arrow functions are always anonymous, if it only returns something,
//you don't need a return keyword
// const add = (x, y) => x + y;
//
// //if there is only one parameter, you don't need parentheses around the parameter
// const addTen = number => number + 10;
//
// //if there are no parameters, you use empty parentheses
// const helloWorld = () => "Hello World!";
//deleted files