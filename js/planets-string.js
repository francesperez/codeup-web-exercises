(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

   console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     */
let planetsBreak = planetsArray.join('<br>')
    console.log(planetsBreak)

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let planetsList = planetsArray.join("</li><><li>");
planetsList = "<ul><li>" + planetsList + "</li></ul>";

})();

// Create a function that takes a sentence and turns it into Zatanna magic language.
//     Zatajnna uses magic by taking sentences and reversing each word one by one, but keeping the original
// order of the words.
//     So, "give me a perfect score on all my tests" must become "Evig em a tcefrep erocs no lla ym stset!"

//the first .split takes all the elements in the string and converts them into an array
//the second .reverse reverses all items in the array(not the letters)
//the third .join converts the array into a string, which is now backwards
//the fourth .split, again, splits the items in the array and
function Reverser(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}


