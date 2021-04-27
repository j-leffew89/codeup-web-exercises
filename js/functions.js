//  (
//     function(){
//         "use strict";
//
//         /**
//          * TODO:
//          * Create a function called 'sayHello' that takes a parameter 'name'.
//          * When called, the function should return a message that says hello to the passed in name.
//          *
//          * Example
//          * > sayHello("codeup") // returns "Hello, codeup!"
//          */
//
         function sayHello (name) {
                 console.log("Hello," + name);
          return "Hello, " + name;
           }

           sayHello(" CodeUp!");
//
//
//
//
//         /**
//          * TODO:
//          * Call the function 'sayHello' and pass your name as a string literal argument.
//          * Store the result of the function call in a variable named 'helloMessage'.
//          *
//          * console.log 'helloMessage' to check your work
//          */
//
         var helloMessage = sayHello("CodeUp!");


//
//         /**
//          * TODO:
//          * Store your name as a string in a variable named 'myName', and pass that
//          * variable to the 'sayHello' function. You should see the same output in the
//          * console.
//          */
//
           var myName = 'Jesse!';
          console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
//         /**
//          * TODO:
//          * Create a function called 'isTwo' that takes a number as a parameter.
//          * The function should return a boolean value based on whether or not the passed
//          * number is the number 2.
//          *
//          * Example
//          * > isTwo(1) // returns false
//          * > isTwo(2) // returns true
//          * > isTwo(3) // returns false
//          *
//          * Call the function 'isTwo' passing the variable 'random' as a argument.
//          *
//          * console.log *outside of the function* to check your work (you should see a
//          * different result everytime you refresh the page if you are using the random
//          * number)
//          */
//
          function istwo(num){
            console.log("random number is: " + num)
             if(num === 2){
                  return true;
             } else{
                 return false;
              }
           }

           console.log(istwo(4));

//         /**
//          * TODO:
//          * Create a function named 'calculateTip' to calculate a tip on a bill at a
//          * restaurant. The function should accept a tip percentage and the total of the
//          * bill, and return the amount to tip
//          *
//          * Examples:
//          * > calculateTip(0.20, 20) // returns 4
//          * > calculateTip(0.25, 25.50) // returns 6.375
//          * > calculateTip(0.15, 33.42) // returns 5.013
//          */
//         function calculateTip (myTip, billAmount) {
//             return myTip * billAmount;
//         }
//             console.log(calculateTip(0.20, 44).toFixed(2));
//             console.log(calculateTip(0.15, 44).toFixed(2));
//              console.log(calculateTip(0.10, 44).toFixed(2));
//
//
//         /**
//          * TODO:
//          * Use prompt and alert in combination with your calculateTip function to
//          * prompt the user for the bill total and a percentage they would like to tip,
//          * then display the dollar amount they should tip
//          */
//             var myTip = prompt("Your bill is $44");
//             var billAmount = prompt("What percentage would you like to give? .20 = $8.80, .15 = $6.60, .10 = $4.40")
//             alert("Fantastic your total bill will be")
//
//         console.log(calculateTip(myTip , billAmount));
        /**
         * TODO:
         * Create a function named `applyDiscount`. This function should accept a price
         * (before a discount is applied), and a discount percentage (a number between 0
         * and 1). It should return the result of applying the discount to the original
         * price.
         *
         * Example:
         * > var originalPrice = 100;
         * > var discountPercent = .2; // 20%
         * > applyDiscount(originalPrice, discountPercent) // 80
         *
         * > applyDiscount(45.99, 0.12) // 40.4712
         */







