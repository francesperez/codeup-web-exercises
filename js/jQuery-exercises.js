// $( document ).ready(function() {
//     alert( "ready!" );
// });


//ID Selectors

//Use jQuery to select an element by the id. Alert the contents of the element.
// $(function () {
//     let $h1alert = $('#h1').html();
//     alert($h1alert);
// })

//Update the jQuery code to select and alert a different id.
// $(function () {
//     let $ipsum = $('#lorem').html();
//     alert($ipsum);
// })

//Use the same id on 2 elements. How does this change the jQuery selection?
    //On top of getting a red line, I got an undefined alert, then the page alerted the first function.

//Remove the duplicate id. Each id should be unique on that page.


//CLASS Selectors
//Remove your custom jQuery code from previous exercises.
//Update your code so that at least 3 different elements have the same class named codeup.

//Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
//$(".codeup").css('border', '1px solid red');

//Remove the class from one of the elements. Refresh and test that the border has been removed.
//Give another element an id of codeup. Does this element get a border now?
    //Yes

//ELEMENT Selectors
//Remove your custom jQuery code from previous exercises.

//Using jQuery, set the font-size of all li elements to 20px.
$('li').css('font-size', '20px');

//Craft selectors that highlight all the h1, p, and li elements.
$("h1, p, li").css('background-color', '#FFFF00');


//Create a jQuery statement to alert the contents of your h1 element(s).
$(function () {
    let $h1alert = $('#h1').html();
    alert($h1alert);
})

