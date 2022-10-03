const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLang = users.filter(users => users.languages.length >= 3);
console.log(threeLang)


//Use .map to create an array of strings where each element is a user's email address
const emails = users.map(users => users.email);
console.log(emails)


// Use .reduce to get the total years of experience from the list of users.
const totalYears = users.reduce((total, years) => {
    return total + years.yearsOfExperience;
}, 0);
console.log(totalYears)

//Once you get the total of years you can use the result to calculate the average.
let avg = totalYears / users.length;
console.log(avg)


//Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((currentLongestEmail, user) => {
    if (currentLongestEmail.length > user.email.length) {
        return currentLongestEmail
    } else {
        return user.email
    }
    // this is the shorthand for the above code: return currentLongestEmail.length > user.email.length ?
    // currentLongestEmail :
    // user.email;
});
console.log(longestEmail);


//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userNames = users.reduce((list, user) => {
   return list += (user.name + ',')
}, "Your instructors are: ");
console.log(userNames)

let userNamesBetter = users.reduce((pre, user, index, usersArray) => {
    return pre + `${pre ? ', ' : 'Your instructors are: '}${user.name}${(index == (usersArray.length - 1)) ? '.' : ''}`
}, "")
console.log(userNamesBetter)