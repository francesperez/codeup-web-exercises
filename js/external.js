// console.log("Hello from external Javascript.")
// alert("Welcome to my Website!")
//
// let color = prompt("What's your favorite color?");
//         alert("Great, " + color +" is my favorite color too!")
//
// let dayLM = prompt("How many days did you rent the Little Mermaid?")
// let dayBB = prompt("How many days did you rent Brother Bear?")
// let dayhrc = prompt("How many days did you rent Hercules?")
// let totalCost = (dayLM * 3) + (dayBB * 3) + (dayhrc * 3);
//         alert("Your total rental cost is " + totalCost + " dollars.")
//
// let google = prompt("How many hours did you work at Google?")
// let amazon = prompt("How many hours did you work at Amazon?")
// let facebook = prompt("How many hours did you work at Facebook?")
// let working = (google * 400) + (amazon * 380) + (facebook * 350)
//         alert("You made " + working + " dollars working this past month!")
//
// let classFull = confirm("Is the class full?");
//         let ScheduleConflict = confirm("Is there a scheduling conflict?");
// let canEnroll = classFull && ScheduleConflict;
//         if (canEnroll){
//                 alert("You can enroll.")}
//         else {
//                 alert("You cannot enroll.")
//         }

let ItemsBought = prompt("How many items did the customer buy?");
let Expired = confirm("Has the offer expired?")
let Premium = confirm("Is the customer a premium member?")

let Offer = (Premium || ItemsBought > 2) && !Expired;

        if (Offer){
                alert("You get a product offer!")
        } else {
                alert("You are poor and we hate you!")
        }