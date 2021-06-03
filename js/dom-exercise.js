// let post = document.getElementById('post-container');
//
//
// function addPost (){
//
// }

$('form').submit(function (event){
    $('#post-container').text($('#userInput').first().val());
    alignText();
    event.preventDefault();
})

function alignText(){
    $('#post-container').css({
        'font-size': '50px',
        'color': 'red',
        'font-weight': 'bold',
        'border': 'solid',
        'margin-inline': 'auto',
        'font-family': 'cursive'
    });
}