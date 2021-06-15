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

// let usersWithLanguages = users.filter(function(user){
//     return user.languages.length >= 3;
// })
//
// console.log(usersWithLanguages)

// let emails = users.map(user => user.email);
// console.log(emails)

// let averageYrs = users.reduce((accumulator , currentVal) => {
//     return accumulator + currentVal.yearsOfExperience;
// }, 0) / users.length;
//
// console.log(averageYrs)

// let emails = users.map(user => user.email);

// console.log(emails)

// let longestEmails = emails.reduce((accumulator, currentVal) => {
// return accumulator.length > currentVal.length
//     ? accumulator
//     : currentVal;

//     if (accumulator.length > currentVal.length){
//         return accumulator;
//     }
//     return currentVal;
// }, "")
//
// console.log(longestEmails)

// let nameString = users.reduce((acc, curVal, index) => {
//     console.log(acc)
//
//     if (index === users.length - 1){
//         // return `${acc} ${curVal.name}.`;
//         // return acc + curVal.name + ".";
//         return `${acc + curVal.name}.`;
//     }
//      // return `${acc} ${curVal.name}. `;
//     // return  acc + curVal.name + ", ";
//     return `${acc + curVal.name}, `;
// }, "Your instructors are: ")
//
// console.log(nameString)

// let uniqueLanguages = users.reduce((acc, user) => {
//
//     let uniqueLang = user.languages.filter((lang) => {
//         console.log(lang)
//         return !acc.includes(lang)
//     })
//         acc.push(...uniqueLang);
//         return acc
//
// }, [])
//
// console.log(uniqueLanguages)


//-----------------PROMISE'S-------------------
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         console.log(response.json())
//     })
//     .then(data => {
//         console.log(data);
//     })

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        $("div").append(`<p>${data.title}</p>`)
    });
