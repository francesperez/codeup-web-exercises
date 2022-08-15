// let flavor = prompt("Welcome to Codeup ice cream. What flavor do you want?");
//     flavor = flavor.toLowerCase();

    // if(flavor === "chocolate") {
    //     alert("One chocolate scoop coming right up!");
    // } else if (flavor === "vanilla"){
    //     alert("One vanilla scoop coming right up! Although, I must say, that is a reeeeally boring flavor!");
    // } else {
    //     alert("I don't have that flavor today!");
    // }
//if we have too many choices, we can use a switch statement.

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up! ");
//         break;
//     default:
//         alert("Sorry, your flavor choice actually sucks and I don't want to serve you!");
// }

//let decision = confirm("Are you sure you want to close this page?");
//alert(decision)

// if(decision) {
//     alert("OK, closing the page now.");
// } else {
//     alert("OK, keeping the page open.");
// }

//shortcut way to write the above code:
//(decision)?alert("Closing this page now."):alert("Keeping the page open!");

// function divisiblebyFive(number){
//     number % 5 === 0 ? alert("That number is divisible by 5.") :
//         alert("That number is not divisible by 5.");
// }
// divisiblebyFive(prompt("Enter a number:"));
//
// //it could also be written
//
// function divisiblebyFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5.": "That number is not divisible by 5.");
// }

// function alertMVP(purchaseTotal){
//     if (purchaseTotal > 1000)
//     alert("MVP!")
// }
// alertMVP(1001);

function isMVP(purchasetotal){
    return purchasetotal > 1000;
}
let customer1purchase = 1001;
if (isMVP(customer1purchase)){
    alert("MVP!")
}