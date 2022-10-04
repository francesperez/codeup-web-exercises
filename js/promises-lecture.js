//This is how to do an AJAX request with jQuery
// $.get("data/mural.json", function(data){
//     console.log(data)
// });

//Fetch API using vanilla javascript. This will do the same thing as what is written on top.
// fetch("data/mural.json").then(function (response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// })

//This is the shorthand version of what is written above using arrow functions.
// fetch("data/mural.json").then(resp => resp.json()).then(data => console.log(data));

//Callback: a function passed as an argument to another function; it can run after another function has finished
// running.

// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
function displayToOutput(output){
    $("#output").html(output);
}

//This is the callback function
//greeter("Hello", "Frances", displayToOutput);
//setTimeout(() => greeter("aloha", "frances", displayToOutput, 3000));
//setTimeout(greeter, 3000, "Yo", "dude", displayToOutput)



const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

//generateGreeting(greetings, names, displayToOutput)
//setInterval(generateGreeting, 1000, greetings, names, displayToOutput);


//This is called a promise object
const newPromise = new Promise((resolve, reject) => {

    //the promise will run it's executor function.
   setTimeout(() => {
       if(Math.random() > 0.5){
           //the executor takes a resolve of reject. Typically, it is an asyncronous code. If it is successful, the
           // resolve will run. (.then line 62)
           resolve("I was fulfilled!");
       } else {
           //If it is rejected, this will run (.catch line 62)
           reject("I was rejected!");
       }
   }, 3000);
});

newPromise.then(value => console.log(value)).catch(error => console.log(error));

fetch("data/mural.json").then(response => response.json()).then(data => console.log(data))