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

let count = 0;
let thisTimeItWillStop;
function hey(){
    if (count < 11){
        console.log("hey " + count);
        count++
    } else {
        clearInterval(thisTimeItWillStop);
    }
}
thisTimeItWillStop = setInterval(hey, 500);

