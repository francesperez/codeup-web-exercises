//------------------------------BOM------------------------------------
// let sayHey = function() {
//     let count = 0;
//     function hey() {
//         if (count > 10) {
//             console.log('hey ' + count);
//             count++
//         } else {
//             clearInterval();
//         }
//     }
//     setInterval(hey, 5000);
// }

// let count = 0;
// let thisTimeItWillStop;
// function hey(){
//     if (count < 11){
//         console.log("hey " + count);
//         count++
//     } else {
//         clearInterval(thisTimeItWillStop);
//     }
// }
// thisTimeItWillStop = setInterval(hey, 500);

// function tenHeys(){
//     let count= 0;
//     let thisWillStop = setInterval(function(){
//         if (count < 10){
//             console.log("hey " + count);
//             count++;
//         } else {
//             clearInterval(thisWillStop);
//         }
//     }, 1000);
// }

// setTimeout(wakeUpUser, 1000);
//
// function wakeUpUser(){
//     alert("WAKE UPPPP!!");
// }

//-------------------------------DOM--------------------------------------
// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
// console.log(showMe);
//
// let marvel = document.getElementById("marvel")
//
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML += marvel.innerHTML;
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementsByClassName('hotpink');
//
// for (let i = 0; i < hotPinks.length; i++){
//     hotPinks[i].style.fontSize = '2em';
// }

let submit = document.getElementById("colorSubmission");
submit.onclick = function (){
    let colorInput = document.getElementById("colorPreference");
    let para = document.getElementsByTagName("p");
    for (let i = 0; i < para.length; i++){
        para[i].style.color = colorInput.value;
    }
}


// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>
// <button id="transformHulk">Transform Hulk</button>
let theHulk = document.getElementById("hulk");
//let hulkState = theHulk.getAttribute("data-state");
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function(){
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk"){
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk"
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}


