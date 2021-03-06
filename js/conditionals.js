(function() {
    "use strict";


    /* ########################################################################## */

    /**
     //      * TODO:
     //      * Create a function named `analyzeColor` that accepts a string that is a color
     //      * name as input. This function should return a message that related to that
     //      * color. Only worry about the colors defined below, if the color passed is not
     //      * one of the ones defined below, return a message that says so
     //      *
     //      * Example:
     //      *  > analyzeColor('blue') // returns "blue is the color of the sky"
     //      *  > analyzeColor('red') // returns "Strawberries are red"
     //      *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     //      *
     //      * You should use an if-else-if-else block to return different messages.
     //      *
     //      * Test your function by passing various string literals to it and
     //      * console.logging the function's return value
     //      */
//
    function analyzeColor(input) {
        console.log(input)

        if (input === 'blue') {
            console.log("Blue is the color of the sky");
        } else if (input === 'red') {
            console.log("strawberry is red");
        } else if (input === 'cyan') {
            console.log("I dont know anything about cyan");
        }

    }

    analyzeColor('red');


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors= ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(randomColor);


    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function analyzeColors(colors) {

        switch (colors) {

            case"blue":
                console.log("blue is the color of the sky!");
                break;
            case"red":
                console.log("Strawberry is red");
                break;
            case"cyan":
                console.log("I don't know anything about cyan");
                break;


        }
    }

    analyzeColors("cyan");

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    console.log(prompt ("What color will you pick. Blue, red or green"));
        //let colors;
    {
        if (colors === 'blue') {
            alert("Blue is the color of the sky");
        }else if (colors === 'red') {
            alert("strawberry is red");
        } else if (colors === 'cyan') {
            alert("I dont know anything about cyan");
        }
    }
     console.log(analyzeColor("colors"));
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, originalPrice) {
        if (luckyNumber === 0) {
            return originalPrice
        }
        else if (luckyNumber === 1){
            return originalPrice - (.10 * originalPrice);
        }
        else if (luckyNumber === 2){
            return originalPrice - (.25 * originalPrice);
        }
        else if (luckyNumber === 3){
            return originalPrice - (.35 * originalPrice);
        }
        else if (luckyNumber === 4){
            return originalPrice - (.50 * originalPrice);
        }
        else {
            return originalPrice - originalPrice;
        }
    }

        console.log(calculateTotal(2, 25.00));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);
        prompt("This is your total: " + calculateTotal(6, 90))

        console.log(calculateTotal(6, 100))

        console.log(luckyNumber);
    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
    let button = confirm("Do you want to enter a number");
        if(button){
            let typeNumber = prompt("Enter a number");
            if(typeNumber % 2 === 0) {
                alert("This number is even");
            }else{
                alert("This number is odd");
            }
            if (typeNumber > 0) {
                alert("This number is positive");
            }else{
                alert("This number is Odd");
            }
            console.log(typeNumber)
            alert("number plus 100" + (parseInt(typeNumber) + 100));
        }


}
)()