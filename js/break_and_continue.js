// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a
//     break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//     except for the number the user entered.
//     Your output should look like this:

// let oddNum = prompt("Enter an odd number between 1 through 50: ")
// for (var i = 1; i <= 50; i += 2 ) {
//     if (i == oddNum) {
//         console.log("Yikes, skipping number: " + i)
//     } else ((i % 2) !== 0)
//         console.log("Here is an odd number: " + i);
//         continue;
// }

let oddNum = prompt("Enter an odd number between 1 through 50: ")
for (var i = 1; i <= 50; i += 2 ) {
    if (oddNum % 2 === 0){
        alert("Please enter an odd number!!!")
        break;
    }else if (i == oddNum) {
        console.log("Yikes, skipping number: " + i)
    } else ((i % 2) !== 0)
    console.log("Here is an odd number: " + i);
    continue;
}


