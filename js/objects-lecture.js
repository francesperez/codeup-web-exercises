// //wheras an array is created with brackets, and object is created with curly braces.
// //it is made up of key value pairs, separated by commas
// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }
// console.log(currentWeather.temp);
// console.log(currentWeather.humidity);
//
// //another way to access property values is brackets
// console.log(currentWeather["humidity"]);
// //what's the point of this when it's longer than just doing .humidity? You can use variables within the bracket notation.
//
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice])
//
// //you can also concatnate strings
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95){
//     console.log("It's kind of hot");
// } else {
//     console.log("It's cool today for Texas!");
// }
//
// //looping thorugh an array using a for in loop
// //looping over objects to get the property names AS WELL as the property values
// for (let property in currentWeather) {
//     console.log(property + " " + currentWeather[property]);
// }
//
// //properties can be dynamically added to an object that already exists
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);


//most objects deal with extremely complex API data.

//here, we are looking at an array of objects as each 'item' within the array
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

//for loop over an array of objects
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature} but it will feel like ${hourlyWeather[i].feels_like}.`);
// }

//in the for Each loop, the ; each object is represented by this variable name, "forecast", so you should be able to
// loop through the array the same way as the previous loop above, however, it is simplified without the [i] brackets
// use forecast.time to show every single time
// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });


//however, if you were to add a conditional to the function, in this case "index", you would inherently be
// complicating things, thereby diminishing the relative simplicity of the for-each loop
// hourlyWeather.forEach(function(forecast,index){
//     if (forecast.temperature > 80){
//         console.log("Too hot!");
//         return false;
//     }
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });

//something you should be doing with a for each loop, is using arrow functions within it as shorthand, since the
// function is anonymous, which simplifies it even more
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// );

//Array of objects where the objects have properties that are objects
// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];

// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
    // attack: function (opponent){ //a method who's property is a function
    //     //you cannot use an arrow fucntion here, even though it's anonymous, because you cannot bind this. method to it
    //     console.log(`${opponent.name} has ${opponent.hitPoints} hit points.`)
    //     console.log(this.name + " attacks!"); //this. references the object that the method is attached to and
    //     // called ex. "this fighter right here is using this attack!"
    //     let damage = Math.ceil(Math.random() * this.maxDamage);
    //     console.log(this.name + " does " + damage + " points of damage!");
    //     opponent.hitPoints -= damage;
    //     console.log(`${opponent.name} now has ${opponent.hitPoints} hit points.`)
    // }
// }

// let monster = {
//     name: "Draggonolord",
//     hitPoints: 183,
//     maxDamage: 2,
//     // attack: function (opponent){
//     //     console.log(this.name + " attacks!");
//     // }
// }

//Let's create a controller object to handle anything players or game objects do that affects the state of the game.
// The controller might handle taking user input and calculating the input's effect on the game.

// //this object effectivley gets rid of the functions in the previous two objects, thus reducing redundancy
// let controller = {
//     attack: function(attacker, defender){
//         let defenderhp = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderhp, damage);
//     }
// }
//
// //the view objcts handles the output, rather than littering the console.log messages throughout the controller objects
// let view = {
//     displayAttackResults: function (attacker, defender, defenderhp, damage){
//         console.log(`${defender.name} has ${defenderhp} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         console.log(`${defender.name} now has ${defenderhp - damage} hit points`);
//         console.log("-----------------");
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     },
//     monster: {
//         name: "Draggonolord",
//         hitPoints: 183,
//         maxDamage: 2,
//     }
// }
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
//
// //creating 'empty' objects, then assigning properties after the fact (also called dynamically)
// let goblin = {};
// goblin.name = "Goblin";
//
// //create a function that returns objects
//
// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     };
// }
//
// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin,model.fighter);
//
// //use object constructor
// //the function name is traditionally starts with a capital; that way you KNOW it is a constructor
// //also, you dont use commas in here, you would use a semi-colon
// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// //an object constructor has a very particular way of being called
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
// controller.attack(model.hobgoblinCaptain, model.fighter);
//
// for (let property in model){
//     console.log(model[property].name);
// }

//object destructuring
const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}
// let make = car.make;
// let carmodel = car.model;
//
// console.log(make);
// console.log(carmodel);

const {make, model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);










