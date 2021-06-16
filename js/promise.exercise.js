fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            $("#random-dog-image").attr(`src`, data.message)
})
    .catch(error => console.error(error));

//------------TWO different ways to append an img-----------------------

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json()})
    .then(data => {
        console.log(data)
        $("#random-dog-image").attr(`src`, data.message)
    })
    .catch(error => console.error(error));

//-------------------Exercises---------------------------------

// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        console.log(data); //
        console.log(data[10].id);
        return data[10].id;
        // $('div').append(`<p>${data[10].body}</p>`)
    })
    .then(dataId => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
            .then(response => response.json())
            .then( data => {
                console.log(data);
                data.forEach(comment => {
                    $("div").append(`<h4>${comment.name}</h4><hr><pr>${comment.body}</pr>`)
                })
            })
    })
    // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });

