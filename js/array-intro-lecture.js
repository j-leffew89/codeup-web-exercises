(function(){
    "use strict";

  //  TODO: Make a new array which holds elements based on your own characteristics
 // -> In a console.log, output a string which describes yourself based on those elements
 // -> KEEP IN MIND ZERO-INDEXING!

    // const myCharacteristics = ['Jesse', '32', 'student at CodeUp'];
    // console.log(`Hello, my name is ${myCharacteristics[0]} and am ${myCharacteristics[1]} years old, I'm also a ${myCharacteristics[2]}`)
    //


// TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

//     const sports = [`Football`, `Basketball`, `Baseball`, `Soccer`, `Boxing`];
//
//         for (let i = 0; i < sports.length; i++) {
//             console.log(sports[i]);
//      }
//     // console.log(sports[0]);
// //
//
//     sports.forEach(function(sports ){
//         console.log(`The most watch sports are: ` + sports);
//
//
//     })

    // TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

    //
    // const days = [`Monday`, `Tuesday`, `Wednesday`];
    //
    // const remainingDays = [`Thursday`, `Friday`, `Saturday`,`Sunday`];
    // remainingDays.forEach(function (day){
    //     days.push(day);
    // });
    // console.log(days)

// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods yoy are using change state of the array

    let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    function completeDays(oldArray) {
        let newArray = [];
        let oldArrayLength = oldArray.length
        for (let i = 0; i < oldArrayLength; i++) {

            let removedDays = oldArray.pop();
            newArray.unshift(removedDays)
            console.log(newArray);
            //console.log(`days left: ` + i);

        }
        console.log(oldArray)
    }
    completeDays(days);
    // days.reverse();
    // console.log(days);



})();