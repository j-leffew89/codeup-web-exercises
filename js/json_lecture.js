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





//
// $('#showData').click(function (){
//     console.log($.ajax("https://jsonplaceholder.typicode.com/posts",
//         {
//             type: "POST",
//             data: {
//                 'userId': 111,
//                 'id': 101,
//                 'title': 'Jesse',
//                 'Completed': false,
//                 "body": "lorem ipsum blah blah blah"
//             }
//         }));
//     console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))
// })




// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))
// $.ajax("https://jsonplaceholder.typicode.com/comments").done(function (data,status,jeudj){
//     console.log(status);
//     console.log(data);
//     alert('Your request has been completed successfully')
// })

// $.ajax('https://jsonplaceholder.typicode.com/psts', {
//     type: "POST",
//     data: {
//         title: "hello world",
//         body: "our planet rocks!"
//     }
// }).fail(function (jqHxr, status, error){
//     console.log(jqHxr);
//     console.log(status);
//     console.log(error);
// });

//
// $.ajax('https://jsonplaceholder.typicode.com/posts').always(function (){
//     alert("Thank you for being here today")
// })

// $.ajax()