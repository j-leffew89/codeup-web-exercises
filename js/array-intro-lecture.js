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

    const sports = [`Football`, `Basketball`, `Baseball`, `Soccer`, `Boxing`];

        for (let i = 0; i < sports.length; i++) {
            console.log(sports[i]);
     }
    // console.log(sports[0]);
//

    sports.forEach(function(sports ){
        console.log(`The most watch sports are: ` + sports);


    })

})();