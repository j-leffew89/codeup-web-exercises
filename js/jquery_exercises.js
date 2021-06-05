$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

 $('#header').css('color', 'green')
alert($('#header')[0].innerText);
 $('.dragon').css('font-size', '35px')
$('.codeup').css('border', '1px solid blue')
$('li').css('font-size', '20px')
$('div').css({
 "font-variant-numeric": 'ordinal',
    'text-align': '-webkit-center'
})
$('#list').css({
    'color': 'darkblue',
    'list-style': 'none'
})

$('.craft').css({
    "background-color": "#fff2ac",

});

 alert($('h1')[0].innerText)


$(document).ready(function () {
    $('h1').on('click', function () {
        $(this).css('background-color', 'blue');
    });
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(function () {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', 'black');
});