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

setTimeout(wakeUpUser, 1000);

function wakeUpUser(){
    alert("WAKE UPPPP!!");
}



