"use strict";

    let code = "3838404037393739666513"
    let userEntry = ""
$(document).keyup(function(event){
    userEntry += event.keyCode;
    if (userEntry === code)
        alert("You have added 30 lives!")
});