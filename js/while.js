//
// let number = 1
// while (number < 65536) {
//     number = number * 2;
//     console.log(number)
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


let allCones = Math.floor(Math.random() * 50) + 50;
console.log("She started with " + allCones + " cones.")
do{
    let random = Math.floor(Math.random() * 5) + 1;
    if (allCones = allCones - random){
    console.log("She sold " + random + " cones.")
} else {
        (console.log("Cannot sell you " + random + " because I only have " + allCones));
    }
} while (allCones > 0);

console.log("Yay! I sold them all!")
