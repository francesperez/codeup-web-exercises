//API--Application Programming Interface
//A Set of rules defining how applications and/or devices can connect to each other and communicate with one another

//REST means representational state transfer
//This is a pattern of design principles for APIs. REST APIs communicate via http requests.

//In REST API, communication via HTTP requests is used to perform the standard set of actions called CRUD. Create, read, update, delete.

//In order to enable more request types, they will use headers that will include extra information relevant to that API. The API will be able to read custom headers.

//JSON is Javascript Object Notation is not mandatory but is popular because it is both human and machine-readable.

const moviesURL = "https://pyrite-steel-spot.glitch.me/movies"
const booksURL = "https://pyrite-steel-spot.glitch.me/books"

//The R in CRUD : Read. We are sending a fetch request below to glitch. We can make an API request to the data and get it to show up in the console.

function getMovies (){
    fetch (moviesURL).then(resp => resp.json()).then(data => console.log(data));
}

getMovies();

//The C in CRUD : Create

const bookToPost = {
    title: "My Brilliant Friend",
    author: {
        firstName: "Elena",
        lastName: "Ferrante"
    },
}

// const postOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify(bookToPost)
// }

//Here we are creating a 'read' but for the books object.
function getBooks (){
    fetch (booksURL).then(resp => resp.json()).then(data => console.log(data));
}

getBooks();

//fetch(booksURL, postOptions).then(getBooks);

//The U in CRUD: Updating with PUT and PATCH requests
//We'll use PUT to replace the entire content
//We'll use PATCH to modify only part of the entry

let modification = {
    title: "L'amica geniale"
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify(modification)
}

//fetch(booksURL + "/1", patchOptions).then(getBooks);

modification = {
    title : "Those Who Leave and Those Who Stay",
    author: {
        firstName: "Elena",
        lastName: "Ferrante"
    }
}

const putOptions = {
    method : 'PUT',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

fetch(booksURL + "/1", putOptions).then(getBooks);


//The D in CRUD - Delete

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'applcation/json'
    }
}

fetch(booksURL + "/1", deleteOptions).then(getBooks);














