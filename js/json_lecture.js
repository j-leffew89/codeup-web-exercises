// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values


// {
//     "Sport": "Basketball",
//     "Team": "Spurs",
//     "City": "San Antonio",
//     "HeadCoach": "Pop",
//     "theBest?": true,
//     "numberOfPlayers": 22
//     "bestPlayersEver": ["Duncan", "Parker", "Ginobili"]
//
// }

// console.log($.ajax('https://www.google.com'));
//
// $.ajax('https://jsonplaceholder.typicode.com/comments', {
//     type: "POST",
//     data: {
//         title: "my trip to antartica",
//         article: "lorem ipsum blah blah blah. Antartica is awesome"
//     }
// });

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.

let jsonObj = $.ajax("https://jsonplaceholder.typicode.com/comments",
    {
        type: 'GET'
    })
console.log(jsonObj);


let jsonPostObj = $.ajax("https://jsonplaceholder.typicode.com/posts",
    {
        type: "POST",
        data: {
            'userId': 111,
            'id': 101,
            'title': 'Jesse',
            'Completed': false,
            "body": "lorem ipsum blah blah blah"
        }
    });
console.log(jsonPostObj);







// let jsonObj = $.ajax("https://jsonplaceholder.typicode.com/comments",
//     {
//         type: "GET",
//         date: {
//             title: ''
//
//
//         }
//     });
// console.log(jsonObj);


// console.log($.ajax('https://jsonplaceholder.typicode.com/comments'));

// $.ajax('https://jsonplaceholder.typicode.com/comments', {
//     type: "POST",
//     data: {
//         title:
//
//     }
// });