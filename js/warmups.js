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
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(){
    let sum = 0;
    for (let index = 0; index < classes.length; index++) {
        sum += classes[index].students;
    }
    return sum
}
console.log(calculateTotalStudents())

// // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
//
// //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
//
function convertToObject(x, y){
    return {class: x, number: y};
}
//
//
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}


function desirableNeighborhood(neighborhoodObject){
    var totalRating = 0;
    for (var i = 0; i < neighborhoodObject.schools.length; i++){
        totalRating += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
}


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



function beeramid(bonus, price) {
  let cans = 1,
     sum = 0;
  while (sum <= (bonus - (bonus % price)) / price) {
    sum += cans ** 2;
    cans++;
  }
  return cans - 2;
};

console.log(beeramid(1070,2));
console.log(beeramid(9222,2));