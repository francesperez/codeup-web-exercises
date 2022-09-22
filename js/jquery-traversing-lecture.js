$(function (){


    const listItems = $("li");
//Passing an index parameter to target every other one in the list (%)
//We don't really need .each because we can just choose items directly, but it still can be useful
    $('li').each(function(index, element) {
        if(index % 2 !==0){
            $(element).css("font-style", "italic")
        }
});

//Here, we have .first and .last which chooses the first or last of whatever you choose
    listItems.first().css("font-size", "larger");
    $("li a").last().css("text-decoration", "underline dotted");

    // $("li").css("font-style", "italic");

//Here we are using the .event
$("button").on('click', function (){
    // $("main").children().css("font-family", "sans-serif")

//Here, we are targeting the child's child to select the last ul within the page
//So it's looking at all the <ul> on the page, then looking at the .last one. Then, it is looking for its
// .children, which is <li> and then their child <a>!

//This is called chaining, when you use .children.children.css
    $("ul").last().children().children().css("text-decoration", "underline wavy");
});


//Here,we are using .next to get the immediately following sibling of each element in the set of matched elements.
    $("h2").css({
        "color": "pink",
        "text-decoration": "underline",
        "cursor": "pointer"
    }).click(function(){
       $(this).next().slideToggle();
    });

    $("header p").hover(function(){
        $(this).parent().toggleClass("darkMode");
    })


});