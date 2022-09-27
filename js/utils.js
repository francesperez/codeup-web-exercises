function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}


function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
    return formattedDateTime;
}


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}