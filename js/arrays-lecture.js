//this is called declaring an array literal:
//this is the most fundamental way to declare an array literal:
let groceryList = ['bread', 'eggs', 'butter', 'milk'];
console.log(groceryList)
//we use brackets to declare the array, in this case, each item in the array is separated by a comma.
//each item in the array is called an element
//.length begins counting at 1
//index begins counting at 0
//for = initialization; conditional; increment
// for (let i = 0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + '.');
//     } else {
//         console.log("I have to buy " + groceryList[i] + ' and');
//     }
// }

//example, create your own loop that console.logs each item in the array.
// let clothes = ['shoes', 'a shirt', 'jeans', 'socks'];
// for (let i = 0; i < clothes.length; i++) {
//    if (i % 2 === 1) {
//     console.log("Today, I'm wearing " + clothes[i] + '.');
// } else {
//    console.log("I'm not wearing " + clothes[i] + " today.")}
// }
//
// function outputArray(array){
//     for (let i = 0; i < array.length; i ++){
//         console.log(array[i]);
//     }
// }
// outputArray(clothes);

let prices = [3.22, 23.77, 23.24, 242.23, 32.88];
prices.forEach(function (price, index){
    // console.log("item number " + (index + 1) + " costs " + price)
});
//the forEach parameter will ALWAYS be a function
//forEaches are designed in such a way that it expects a function to have three parameters (x,y,z)
//these parameters represent (element, index, and array). In this case, the list of prices is the first
//parameter. You should call this first paraments either 'element' or exactly what you want it to mean.
//the second parameter within the forEach function is called the index.
//the third parameter represents the arry itself
//the second and third parameters are optional

//if you notice, the above function has no name. Therefore, it is considered an anonymous function that lives
//and dies within its for-each loop and cannot really be recalled outside of it. Since the functino is
//anonymous, you can use arrow syntax (=>) to substitute the word function.

// prices.forEach(price => {
//     console.log(price)
// })

//ARRAY METHODS (fun stuff)

//.push will add another item to the END of the array
groceryList.push('potatoes');
console.log(groceryList);

//.pop will remove an item from the END of the array
groceryList.pop();
console.log(groceryList);

//.unshift will add to the beginning of the array
groceryList.unshift('cheese', 'tomatillos');
console.log(groceryList);

//.shift will take away from the beginning of the array
groceryList.shift();
console.log(groceryList);

//this will find and tell you the index number of desired item
let indexofEggs = groceryList.indexOf("eggs");
console.log(indexofEggs);

//this will replace the eggs with peanut butter by referring to the previous
// array method
groceryList[indexofEggs] = "peanut butter";
console.log(groceryList);

//replaces the first item
groceryList[0] = "avocadoes";
console.log(groceryList);

//.slice will cut your array and only show what you set the parameters to
let firstHalf = groceryList.slice(0, 3);
console.log(firstHalf);

let secondHalf = groceryList.slice(3);
console.log(secondHalf)

//this is to add something to the middle of the item list within the array.
//first we sliced it, added an item, then put both slices back together using the .concat method
//.concat puts both halves together
firstHalf.push("onions");
groceryList = firstHalf.concat(secondHalf);
console.log(groceryList);

//.reverse will change the order of the items
groceryList.reverse();
console.log(groceryList);

//.sort will put things in order for strings
groceryList.sort();
console.log(groceryList);

//if you want to use .sort with numbers, you have to use a more complicated syntax
prices.sort(function(a,b){
    return a-b
});
console.log(prices);

//if you use .sort, it will place the word that are capitalized first
groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

//in order to sort and bypass the capitalization, you must make everything uniform (all lowercase)
// for (let i = 0; i < groceryList.length; i++){
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

groceryList.forEach((item, index, array) => {
    groceryList[index] = item.toLowerCase();
});
console.log(groceryList);


//using split and join to put the items back together in different ways
//.split will split up the array into strings
//.join will turn the string into an array
let quote = "All the world's a play.";
quote = quote.toLowerCase();
let quoteArray = quote.split(" ");
console.log(quoteArray);
quoteArray = quoteArray.reverse();
console.log(quoteArray);
quote = quoteArray.join(" ").toLowerCase();
console.log(quote);

