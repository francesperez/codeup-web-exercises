// let slices = 4;
// console.log(`There are ${slices} slices.`)
// while (slices > 0){
//     console.log("I'll have a slice");
//     // slices = slices - 1;
//     slices --;
//     console.log(`Now there's ${slices} slices left` );
// }
// console.log("Ooops! There's no more pizza.")

// let counter = 100; //changing this counter number will determine the counter
// while (counter >= 0){ //changing the sign and number will also determine the counter
//     console.log(counter)
//     counter --; //the -- or ++ sign will make the counter either decrease or increase
// }

// let number = 5; //start at 5
// while (number < 200){ //check if the number is less than 200
//     //number = number * 2;
//     console.log(number) ;//you console dog log ten
//     number *= 2; //shorthand version of the line above //then you're multilpying by ten
// }

//ask user for input -- how much does something cost?
// assign the user input to a variable
//declare a variable to hold the total cost
// tell the user what the total is
//get the user input for th next item's cost
// there needs to be a way for the user to say when there's no more items

//"first draft of 'ugly' code"
// let total = 0;
//     let price = parseFloat(prompt("Enter the price of your item: "));
//     total = total + price;
//     alert("Your total is now "+ total);
// let userInput = "";
// while (userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item: ");
//     if (userInput === "stop"){
//         alert("Your final total is " + total);
//     } else {
//         price = parseFloat(userInput);
//         total = total + price;
//         alert("Your total is now " + total)
//     }
// }

// let total = 0;
// let price;
// while (true){
//     let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert("Your final total is " + total.toFixed(2));
//         break; //
//     } else {
//         price = parseFloat(userInput);
//         total = total + price;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

// let number = Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess)
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6."))
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${number}!`)













