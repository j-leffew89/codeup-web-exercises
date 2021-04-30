(function() {
    "use strict";

//     function isOdd(num) {
//         return num % 2 !== 0;
//     }
//     //console.log(isOdd(20));
//
//
//
//     function isEven(num) {
//         return num % 2 === 0;
//     }
//     //console.log(isEven(6))
//
//     function identity(input){
//         return input === input;
//     }
//
//     //console.log(identity(3))
//
//
//     function isTrue(input) {
//         return input === true;
//     }
//    // console.log(isTrue(1 < 2));
//
//
//
//     function isFalse(input) {
//         return input === false;
// }
//    // console.log(isFalse(''));
//
//     function testFalsy(input){
//         return input === false; // the value of input is equal to value 'false'
//     }

   // console.log(testFalsy(undefined));

    //function subtract(a, b) {
    //     if ((typeof a === "number" || !isNaN(a))
    //         && (typeof b === "number" || !isNaN(b)) ){
    //     return a - b;
    // }else {
    //         return false
    //     }
    // }
    //console.log(subtract(4, 2));





    // function multiplyIfNumeric(input1, input2) {
    //     let product = Number(input1) * Number(input2);
    //     if (isNaN(product)) {
    //         console.log(`product is NaN`)
    //         return false;
    //     }else{
    //         console.log(`product is a number`)
    //         return product
    //     }
    // }
    // console.log(multiplyIfNumeric(4, isNaN));
    //
    // function multiply(a, b){
    //     return a * b;
    // }
    //
    // //console.log(multiply(4,4));
    //
    // function divide(a,b){
    //     return a / b;
    // }

   //console.log(divide(9, 3));

    // Modify your math functions. If both of the parameters
    // are numbers OR numeric strings (4 or "4"),
    // then return the number value from the math operation.
    //     If not, just return false


    // TODO: write a function called toUppercase which takes in one input and
    //  returns that input in uppercase IF (and only if) the input is a non-numeric string
    //  otherwise, return false

    // function upperCase(input){
    //     if (typeof input === 'string' && isNaN(input)) {
    //         return input.toUpperCase()
    //     }
    //     return false;
    // }
    //
    // console.log(upperCase(null));
    //

    // TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
//  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
//  -> You may be using a few different string methods
//  -> If the input is numeric or not a string, return false

    // function stickyCaps(){
    //
    // }

    //
    // function stickyCaps (input) {
    //     let stickyArr = "";
    //     for (let i=0; i < input.length; i++) {
    //         stickyArr += i % 2 === 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
    //     }
    //     return stickyArr;
    // }
    //
    //
    // console.log(stickyCaps(`Casey is the best`));


    function squareRoot(input){
      return input =  Math.sqrt(input);
    }

    console.log(squareRoot(44));

    function cube(n){
        return Math.pow(2,2);
    }

    console.log(cube(2));

    function isEquals(x, y){
        return x == y;
    }

    console.log(isEquals(9,4));


    function modulo(a, b){
        return a % b;
    }

    console.log(modulo('jesse', 27));

    function areIdentical(input1, input2){
        return input1 === input2;
    }

    function absoluteValue(num) {
        if (typeof num == 'string' && isNaN(num)) {
            return Math.abs(num);
        }
            return false;

    }
    console.log(absoluteValue(22))
})()


