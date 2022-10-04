
fetch('https://api.github.com/users/francesperez/events', {
    headers: {
        'Authorization': 'GITHUB_TOKEN'
    }
}).then( response => response.json())
    .then(data => console.log(data[0].created_at))
    .catch( error => console.error(error));
