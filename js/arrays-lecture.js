//this is called declaring an array literal:
//this is the most fundamental way to declare an array literal:
let groceryList = ['bread', 'eggs', 'butter', 'milk'];
//we use brackets to declare the array, in this case, each item in the array is separated by a comma.
//each item in the array is called an element
//.length begins counting at 1
//index begins counting at 0
//for = initialization; conditional; increment
for (let i = 0; i < groceryList.length; i++) {
    if (i === groceryList.length - 1) {
        console.log("I have to buy " + groceryList[i] + '.');
    } else {
        console.log("I have to buy " + groceryList[i] + ' and');
    }
}

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
    console.log("item number " + (index + 1) + " costs " + price)
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

prices.forEach(price => {
    console.log(price)
})

