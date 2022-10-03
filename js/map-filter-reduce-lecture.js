// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let output = '';

//This will loop through the array and add a paragraph with the price 'for each' iteration of the loop
// prices.forEach((price, index, array) => {
//
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p id="price-${index+1}">Item number: ${index + 1}. Price: $${price}. Tax: ${tax}. Total: ${total}</p>`;
//     $(`div`).html(output);
//
//     if (index === array.length-1){
//         $("div").append("<p>That's it!</p>");
//     }
// });

//.map makes an array from another array in this case, we want to generate the prices after tax when looking at
// the prices array.
// const pricesAfterTax = prices.map(price => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
//
// console.log(pricesAfterTax);

//This doubles each number within the array
// const double = prices.map(price => price * 2);
// console.log(double)
//
// const desserts = ['sherbert', 'whiskey cake', 'cupcake', 'eclair', 'cheesecake','chocolate lava cake', 'tres leches'];
//
// const eating = desserts.map(dessert => `Eating ${dessert}`);
// eating.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// })



//.filter makes a new one while leaving the old one unchanged
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
//
//
// const under10k = cars.filter(car => car.mileage <10000);

//Below is called object deconstruction.
// under10k.forEach(({make, model, mileage}, index) => {
//     output += `<p>Car number:${index +1} I found a ${make} ${model} with ${mileage} miles</p>`;
//     $("#output").html(output);
// })
//
// prices.filter(price => price < 10)
//     .map(price =>{
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
//     }).forEach(price => $("div").append(`<p>${price}</p>`));



//.reduce introduces an extra parameter.
// const totalCost = prices.reduce(function(total,price){
//     return total + price;
// })
//
//
// const total = prices.reduce(function(total, price, index){
//     //console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the item price is ${itemPrice}`)
//     return total + price
// })
// $('#output').append(`<p>The total is ${totalCost}</p>`)
//The function passed to the reduce method takes an extra parameter, the accumulator is often abbreviated "acc".

// const averagePrice = prices.reduce((function(accumulator, current, index, array){
//     console.log(accumulator.toFixed(2));
//     accumulator += current;
//     if (index === array.length - 1) {
//         return accumulator/array.length;
//     }
//     return accumulator;
// }))
//
// const mileages = cars.reduce((accumulator, car) => {
//     accumulator.push(car.mileage);
//     return accumulator;
// }, []);

// const highestMileage = cars.reduce((accumulator, car, index, array) => {
//     accumulator.push(car.mileage);
//     if (index === array.length - 1){
//         return Math.max.apply(Math, accumulator);
//     } else {accumulator.push(car.mileage);
//         return accumulator;
//     }
//     }, []);
// console.log(highestMileage)
//in the first iteration, it will put the empty array into the accumulator, then the car ito the car variable, then
// the mileage into the car variable, then push the accumulator

//If we push the car.mileage and return the accumulator, we will get the array. So now we can take that array and
// reduce IT using an accumulator.

// const highestMileage = cars.reduce((accumulator, car) => {
//     //here we used the .reduce to reduce the car reduce to just the mileages.
//     accumulator.push(car.mileage);
//     return accumulator;
//     //next, we are using another reduce; of all the elements in the array, it is trying to find the maximum mileage
// }, []).reduce((accumulator, mileage) => {
//     return Math.max(accumulator, mileage);
// });
// console.log(highestMileage)




