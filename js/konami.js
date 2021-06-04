// (function ($){
//     $.fn.konami = function(callback, code){
//         if(code === undefined) code="38,38,40,40,37,39,37,39,66,65,13";
//
//         this.each(function (){
//             let kkeys = [];
//             $(this).keydown(function (e){
//                 kkeys.push(e.keyCode);
//                 if(kkeys.toString().indexOf(code) >= 0){
//                     kkeys = [];
//                     callback();
//                 }
//             });
//         });
//     }
// });

// let keyupHandler = function (e) {
//     if (this.value === '38,38,40,40,37,39,37,39,66,65,13') {
//         alert('You have 30 extra lives!')
//     }
// }
// $('input').keyup(keyupHandler);
//
// const keySequence = [];
// let konamiString = '';
// const konamiCode = [
//     'ArrowUp',
//     'ArrowUp',
//     'ArrowDown',
//     'ArrowDown',
//     'ArrowLeft',
//     'ArrowRight',
//     'ArrowLeft',
//     'ArrowRight',
//     'b',
//     'a'
// ];
//
// document.addEventListener('keyup', function(e) {
//     keySequence.push(e.key);
//     keySequence.splice(
//         -konamiCode.length - 1,
//         keySequence.length - konamiCode.length
//     );
//     konamiString = konamiCode.join('');
//
//     if (keySequence.join('').includes(konamiString)) {
//         const confettiConfig = { target: 'confetti-holder' };
//         const confetti = new ConfettiGenerator(confettiConfig);
//         confetti.render();
//     }
// });

// (function () {
//     "use strict";
//     let konami = []
//     $(document).keyup(function (event) {
//         const hiddenEgg = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//         konami.push(event.keyCode);
//         console.log(konami);
//         if (JSON.stringify(konami) === (JSON.stringify(hiddenEgg))) {
//             alert('You have 30 Lives!');
//         }else if((JSON.stringify(konami) !== (JSON.stringify(hiddenEgg)){
//             alert('Sorry No Extra Lives For You');
//         }
//     })
// })();

