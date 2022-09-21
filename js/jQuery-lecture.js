// jQuery("h3").click(function(){
//     $(this).next().slideToggle(500);
// });

//the $ is shorthand for typing out jQuery!



//Below, we are showing how to replace document.ready with jQuery
//This function will only occur one the page is done loading!
$(function () {
    //Here, we can use the # for the id selector; we can use .text to replace the text
    $("#library").text("jQuery makes life easier");
    //Getting the reference to content
    console.log($("#library").text());
})

//Another way we can write the above function is the following:
$(function () {
    const $refToLibrary = $("#library");
    //Here, we can use the # for the id selector; we can use .text to replace the text
    $refToLibrary.text("jQuery makes life easier");
    //Getting the reference to content
    console.log($refToLibrary.text());


//This is an example of how you can add just one css style with jQuery
//This is called a single declaration syntax
// $(".framework").css('border', '1px solid black');


//If you want to do more properties at a time, you can open it up
//This is called a multiple declaration syntax
    $(".framework").css({
        'border': '15px solid pink',
        'width': 'fit-content'
    });

//Instead of having to write two statements, you can chain one statement to another, instead of having to
// rewrite everything
//This is called a type list with chained methods
    $("p, li").text("I've taken over.").css("color", "hotpink");
})