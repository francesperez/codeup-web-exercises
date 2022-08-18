// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a
//     break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//     except for the number the user entered.
//     Your output should look like this:


while(true){
    let oddNum = prompt("Please enter an odd number between 1 through 50: ")
    if (oddNum >= 1 && oddNum <= 50 && oddNum %2 === 1) {
        console.log("Number to skip is: " + oddNum);
        console.log(" ")
        for (let i = 1; i <= 50; i += 2){
            if (i == oddNum){
                console.log("Yikes! Skipping number " + oddNum)
                continue;
            } else{
                console.log("Here's an odd number: "+ i);
            }
        }
            break;
        }
    }
