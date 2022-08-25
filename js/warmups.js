//Write a function that accepts an array of numbers and returns its average.
//Bonus: if there are any non-numeric values in the array, return false. Numeric strings should count as numeric
// values.


function average(x) {
    if (typeof x === "string" || x === null || typeof x == "boolean")  {
        return false;
    } return (x.reduce((a, b) => a + b) / x.length);
}


//write a function that accepts an array of strings and returns the longest string. If there are two strings of
// equal length,, it returns the one with the lowest index.
//Bonus: if there are any values that are not strings, return false.
//
function getHighestString(x){
    return x.sort(function(a, b)
    {return b.length - a.length})[0];
}

//javier's solution
function longestString(array){
    let longest = "";
    for (let i = 0; i < array.length; i++){
        if (array[i].length > longest.length) longest = array[i];
    }
    return longest;
}