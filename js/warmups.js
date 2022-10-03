//WARMUPS #1
// //Write a function that accepts an array of numbers and returns its average.
// //Bonus: if there are any non-numeric values in the array, return false. Numeric strings should count as numeric
// // values.
//
//
// function average(x) {
//     if (typeof x === "string" || x === null || typeof x == "boolean")  {
//         return false;
//     } return (x.reduce((a, b) => a + b) / x.length);
// }
//
//
// //write a function that accepts an array of strings and returns the longest string. If there are two strings of
// // equal length,, it returns the one with the lowest index.
// //Bonus: if there are any values that are not strings, return false.
// //
// function getHighestString(x){
//     return x.sort(function(a, b)
//     {return b.length - a.length})[0];
// }
//
// //javier's solution
// function longestString(array){
//     let longest = "";
//     for (let i = 0; i < array.length; i++){
//         if (array[i].length > longest.length) longest = array[i];
//     }
//     return longest;
// }

//WARMUPS #2
// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function calculateTotalStudents(){
//     let sum = 0;
//     for (let index = 0; index < classes.length; index++) {
//         sum += classes[index].students;
//     }
//     return sum
// }
// console.log(calculateTotalStudents())

// // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
//
// //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
//
// function convertToObject(x, y){
//     return {class: x, number: y};
// }
//
//
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// var neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// var neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// var neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
//
//
// function desirableNeighborhood(neighborhoodObject){
//     var totalRating = 0;
//     for (var i = 0; i < neighborhoodObject.schools.length; i++){
//         totalRating += neighborhoodObject.schools[i].rating;
//     }
//     return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
// }


// Bonus -- a real headscratcher -- the beeramid
// //Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// //
// // A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// //
// // Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// //
// //     your referral bonus, and
// //
// //     the price of a beer can
// //
// // For example:
// //
// // beeramid(1500, 2); // should === 12
// // beeramid(5000, 3); // should === 16



// function beeramid(bonus, price) {
//   let cans = 1,
//      sum = 0;
//   while (sum <= (bonus - (bonus % price)) / price) {
//     sum += cans ** 2;
//     cans++;
//   }
//   return cans - 2;
// };
//
// console.log(beeramid(1070,2));
// console.log(beeramid(9222,2));

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(array) {
//     var sum = 0,
//         i = array.length;
//     while (i--)
//         sum += Math.pow(array[i], 2);
//     return sum;
// }

const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567,
}

//Given the attendance object, write a function that returns the total attendance across all teams
function totalAttendance(attendanceObject) {
    let attendanceArray = Object.values(attendance);
    let total = 0;
    attendanceArray.forEach(function(attendance) {
        total += attendance;
    });
    return total;
}


//Given the attendance object, write a function that returns the average attendance
function averageAttendance(attendanceObject) {
    let total = 0;
    for (const prop in attendance){
        total += attendance[prop];
    }
    return total/Object.keys(attendance).length;
}

console.log(averageAttendance(attendance))

//Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance
// properties set to the correct values

function createObject(attendanceObject) {
    let total = 0;
    for (const prop in attendance){
        total += attendance[prop];
    }
    return {
        totalAttendance: total,
        averageAttendance: total/Object.keys(attendance.length)
    }
}


// Convert Address to Object
// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//
// Examples:
// convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}


//We are going to use indexOf and substring for this problem. This counts the numbers in the string and stops when the
// numbers end.

function convertAddressToObject (addressString){
    return {
        streetNumber: addressString.substring(0, addressString.indexOf(' ')),
        streetName: addressString.substring( addressString.indexOf(' ') + 1)
    }
}

// Count total pets
// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//
//  Examples
//
 peopleAndPets = [
       {name: 'Fernando Mendoza', pets: 1},
       {name: 'Douglas Hirsh', pets: 8},
       {name: 'Kenneth Howell', pets: 2}
    ]

// function totalPets(arrayOfObjects) {
//     let total = 0;
//     arrayOfObjects.forEach(function(object) {
//         total += object.pets;
//     });
//     return total;
// }

function totalPets(arrayOfObjects) {
    return arrayOfObjects.reduce(function(acc, currentValue) {
        return acc + currentValue.pets;
    }, 0)
}


$(function (){
//DOM WARMUPS
//When the user clicks the button that has the text "change heading", the text of the h1 element changes to I pwn
// the DOM.

    $("button").on('click', function(){
        // Set the value fetched as the html of header
        $("h1").text("I pwn the DOM");
    });


// Every time the user enters a character in the input with id "source", that character appears in the <p> element
// with the id "output"

    $("#source").on('keyup', function(){
        $("#output").text( $("#source").val());
    })

});





