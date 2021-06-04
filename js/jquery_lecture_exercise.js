// (function(){
//     let jqElements = $('.jqClass');
//     let backgroundBlue = 'lightblue';
//     let backgroundReset = '';
//     function addClickEvents(elementsToBind, color1, color2){
//         let handlerBlueBckGnd = function(){
//             elementsToBind.css('background-color', color1);
//             $(this).css('background-color', color2);
//         }
//         elementsToBind.click(handlerBlueBckGnd);
//     }
//     addClickEvents(jqElements, backgroundReset, backgroundBlue);
//     addClickEvents($(".card"), "", "red");
//     //make sure the DOM is loaded first
//     // document.addEventListener("DOMContentLoaded", function() {
//     //     addListeners();
//     // });
//
//     $(document).ready(function(){
//         addListeners();
//     });
//
//     //parent method for adding all listeners
//     function addListeners() {
//         //get the elements to add listener and change image
//         //     let cardContainers = Array.from($(".col-md-3"));
//         //     addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'mouseover');
//         //     addEvents(cardContainers, 'img/question.png', 'mouseout');
//         // }
//     }
//     //add mouseover/mouseout events to all selected elements
//     function addEvents(cardContainers, imgPath, listenerType){
//         cardContainers.forEach((cc) => {
//             let card = cc;
//             //create listener which will call function change the image
//             let listener = function (event) {
//                 // let cardImg = card.querySelector(".card .card-img-top");
//                 // changeImage(cardImg, imgPath);
//                 jqElements.hover(function () {
//                     $(this).image('img/jazz-music-rubber-duck.jpg')
//                 }, function () {
//                     $(this).image('img/question.png')
//                 });
//             };
//             cc.addEventListener(listenerType, listener);
//         });
//     }
//     //actual function to swap images
//     function changeImage(card, imgPath){
//         card.setAttribute('src', imgPath);
//     }
//
// })();


(function () {
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind, color1, color2) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
//     //make sure the DOM is loaded first
//     document.addEventListener("DOMContentLoaded", function() {
//         addListeners();
//     });
//     //parent method for adding all listeners
//     function addListeners(){
//         //get the elements to add listener and change image
//         let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//         addEvents(cardContainers, 'assets/jazz-music-rubber-duck.jpg', 'mouseover');
//         addEvents(cardContainers, 'assets/question.png', 'mouseout');
//     }
//     //add mouseover/mouseout events to all selected elements
//     function addEvents(cardContainers, imgPath, listenerType){
//         cardContainers.forEach((cc) => {
//             let card = cc;
//             //create listener which will call function change the image
//             let listener = function (event) {
//                 let cardImg = card.querySelector(".card .card-img-top");
//                 changeImage(cardImg, imgPath);
//             };
//             cc.addEventListener(listenerType, listener);
//         });
//     }
//     //actual function to swap images
//     function changeImage(card, imgPath){
//         card.setAttribute('src', imgPath);
//     }

    addListeners();

    function addListeners() {
        let cardContainers = $('.col-md-3');
        addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'img/question.png')
    }

    function addEvents(cardContainers, imgPath1, imgPath2) {
        // let handler1 = function (event) {
        //     let cardImg = $(this)
        //         .find('.card .card-img-top');
        //     changeImage(cardImg, imgPath1)
        // };
        //
        // let handler2 = function (event) {
        //     let cardImg = $(this)
        //         .find('.card .card-img-top');
        //     changeImage(cardImg, imgPath2)
        // };
        //
        // function changeImage(cardImg, imgPath) {
        //     cardImg.attr('src', imgPath);
        // }

        let handler1 = function (event) {
            $(this)
                .find('.card-img-top')
                .attr('src', imgPath1);
        };

        let handler2 = function (event) {
            $(this)
                .find('.card-img-top')
                .attr('src', imgPath2)
        };
        cardContainers.hover(handler1, handler2);
    }
})();

