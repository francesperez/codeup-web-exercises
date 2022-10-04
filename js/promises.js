
fetch('https://api.github.com/users/francesperez/events', {
    headers: {
        'Authorization': 'GITHUB_TOKEN'
    }
}).then( response => response.json())
    .then(data => console.log(data[0].created_at))
    .catch( error => console.error(error));

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));
