//
// (function () {
//     let jqElements = $('.jqClass');
//     let backgroundBlue = 'lightblue';
//     let backgroundReset = '';
//
//     function addClickEvents(elementsToBind, color1, color2) {
//         let handlerBlueBckGnd = function () {
//             elementsToBind.css('background-color', color1);
//             $(this).css('background-color', color2);
//         }
//         elementsToBind.click(handlerBlueBckGnd);
//     }
//
//     addClickEvents(jqElements, backgroundReset, backgroundBlue);
//     addClickEvents($(".card"), "", "red");
//
//
//     addListeners();
//
//     function addListeners() {
//         let cardContainers = $('.col-md-3');
//         addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'img/question.png')
//     }
//
//     function addEvents(cardContainers, imgPath1, imgPath2) {
//
//
//         let handler1 = function (event) {
//             $(this)
//                 .find('.card-img-top')
//                 .attr('src', imgPath1);
//         };
//
//         let handler2 = function (event) {
//             $(this)
//                 .find('.card-img-top')
//                 .attr('src', imgPath2)
//         };
//         cardContainers.hover(handler1, handler2);
//     }
//
// })();
//
//
// $(document).ready(function () {
//     $('#submitBtn').click(function () {
//         $('#override-bootstrap').css('background-color', 'red')
//     });
//
//     $('.card-text').click(function () {
//         $(this).css('background-color', 'red')
//     });
//
//     $('#restBtn').click(function () {
//         location.reload()
//     })
//
//
    $(document).ready(function () {
        $('#main-title').click(function () {
            let font = $(this).css('font-size');
            let doubleFont = parseFloat(font) * 2;
            $(this).css('font-size', doubleFont);
        });
    });
//

//     let hoverIn = function () {
//         let attributeValue = $(this).attr('date-attribute');
//         $(this).find('.card-title').text(attributeValue);
//     };
//
//     let hoverOut = function () {
//         $(this).find('.card-title').text('card');
//     }
//
//     $('.col-md-3').hover(hoverIn, hoverOut)
// });

// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back


// $('.list-group-item').click(function () {
//     if ($(this).css('background-color') === 'rgb(255, 192, 203)') {
//         $(this).css('background-color', "")
//     } else {
//         $(this).css({
//             'background-color': 'pink',
//             'text-transform': 'uppercase'
//         });
//     }
// });

// TODO: Change up the submit button event
//  -> Add a new input with an id of #redirect-url
//  -> Remove the old click events from #submitBtn
//  -> When the user clicks #submitBtn, redirect the page to the value of #redirect-url
//  -> HINT: You can either add a new input or change the id of an existing input element to #redirect-url to save time
//
// $('#redirect-url')(function () {
//     window.location.replace('http://tutorialrepublic.com/');
// })
//
// setTimeout('redirect-url()', 10000)
//
//
// // TODO: After a 2 second delay (BOM), when the user loads the page, change #main-title to a value of your choosing (change text, background color, what have you)!
// setTimeout(function (){
//     $('#main-title').css({'background-color': 'blue',
//     'color': 'black'});
// });