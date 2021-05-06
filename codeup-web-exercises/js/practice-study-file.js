// const numbers = [74, 18, 10,5, 84, 24, 105];
//
// numbers.sort(compareFunction);
//
// console.log(numbers);
//
// function compareFunction(a, b){
//     return a - b;
// }
//
// let array = [1, 4, 2, 6, 9, 3];
// array.slice(1);

//
// Write a function called getSquare. It should take in one input and return
// the square (not square root) of that input as a number.
//     If the input is not a number or numeric string, getSquare should return false.

//     function getSquare(n){
//     if (n == null || isNaN(Number(n))) {
//         return false
//     }
//         return n * n;
//
//     }
//
// console.log(getSquare())


//Write a function called getReverse. It should take in one input and return the same string, in reverse.
  //  If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.

//     function getReverse(s){
//     if(typeof s === "string"){
//         return s.split("").reverse().join("")
//     }else{
//         return false;
// }
//
// console.log(getReverse('jesse'))

// function getReverse(string){
//     if (typeof string === "string" ){
//         return string.split("").reverse().join("");
//     }else{
//         return false;
//     }
// }
//
// console.log(getReverse(null))

// Write a function called multiplySquares(). It should take in two inputs,
//     square each input, then return the product of mulitplying them together.
//     If the input is not a number (5) or numeric string ("5"), the method should return false

// function multiplySquares(num1, num2){
//     return Math.pow(num1 ,2)
// }
//
// console.log(multiplySquares(4,5))

//Write a function called addTo. It should take in one input and return the result of adding 3 to that input.
   // If the input is not a number or numeric string, addTo should return false


// function last(input){
//     let input =

//}
//
//     let last = (input) => {
//         return input.split('').pop();
//     }
//
// console.log(last('string'))

// //Write a function called getSquare. It should take in one input and return the square (not square root) of that input as a number. If the input is not a number or numeric string, getSquare should return false.
// function getSquare(input) {
//    if(input === null || isNaN(Number(input ))) {
//        return false;
//    } else {
//        return (Math.pow(input, 2));
//    }
// }
// //console.log(getSquare(false))
// // Write a function called getReverse. It should take in one input and return the same string, in reverse. If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.*/}
// function getReverse(string){
//     if (typeof string === "string" ){
//         // return string.reverse
//         return string.split("").reverse().join("");
//     }else{
//         return false;
//     }
// }
//
// //console.log(getReverse("jesse"))
//
// function lowerCase(input) {
//     if(typeof input === 'string') {
//         return input.toLowerCase()
//
//     } else {
//         return false;
//     }
// }
//
// console.log(lowerCase("HELLO WORLD"))
//
// // Write a function called multiplySquares(). It should take in two inputs, square each input, then return the product of mulitplying them together. If the input is not a number (5) or numeric string ("5"), the method should return false
//
//
//
//     // function multiplySquares(input1, input2) {
//     //     if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)) {
//     //         return false;
// //     //     } else {
// //     //         return (Math.pow(input2, 2) * Math.pow(input1, 2));
// //     //     }
// //     //     multiplySquares()
// //
// //         // write a function called addTo. It should take in one input and return the result of adding 3 to that input.
// // // If the input is not a number or numeric string, addTo should return false
// //         function addTo(input) {
// //             input = parseInt(input);
// //             if (isNaN(input)) {
// //                 return false;
// //             }
// //             input += 3;
// //             return input;
// //         }
// // console.log(addTo(44))
// //
// // // Write a function called subtractFrom. It should take in one input and return the result of subtracting
// // // 3 from that input. If the input is not a number or numeric string, subtractFrom should return false.
// //         function subtractFrom(input1) {
// //             if (isNaN(parseInt(input1))) {
// //                 return false;
// //             }
// //             input1 -= 3;
// //             return input1;
// //         }
// //
// // console.log(subtractFrom(0))
// //
// // //console.log(subtractFrom())
// // // Write a function called getLowestNumber. It should take in three inputs and determine which input is the lowest number. If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false
// //
// //         function getLowestNumber(input1, input2, input3) {
// //             if (isNaN(parseFloat(input1)) || isNaN(parseFloat(input2)) || isNaN(parseFloat(input3))) {
// //                 return false;
// //             } else {
// //                 return Math.min(input1, input2, input3);
// //             }
// // }
// // console.log(getLowestNumber(9709870987, 23, 5637347347))
//
//
//
// function getSquare(input) {
//     if (isNaN(Number(input)) || input === null) {
//         return false;
//     } else {
//         return input * input;
//     }
// }
//
// //console.log(getSquare(null));
// ///----------------------------------------------------------
// function getReverse(string){
//     if (typeof string === "string" ){
//         // return string.reverse
//         return string.split("").reverse().join("");
//     }else{
//         return false;
//     }
// }
//
// //console.log(getReverse("Hello How are you"));
//
// ///////---------------------------------------------------------
// function multiplySquares(input1,input2) {
//     var square1 = input1 * input1;
//     var square2 = input2 * input2;
//
//     if (isNaN(input1) && isNaN(input2)) {
//         return false;
//     } else {
//         return square1 * square2;
//     }
// }
// //console.log(multiplySquares(4,5));
// /////-------------------------------------------------------------
//
//
//
// function multiplySquares(input1, input2) {
//     if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)) {
//         return false;
//     } else {
//         return (Math.pow(input2, 2) + Math.pow(input1, 2));
//     }
// }
//     console.log(multiplySquares(4 , 2))
//
// ///-----------------------------------------------------
//
// function addTo(input) {
//     input = parseInt(input);
//     if (isNaN(input)) {
//         return false
//     }
//     input += 3
//     return input;
// }
//
// //console.log(addTo(9))
//
//
// //////---------------------------------------------------
//
//
//
// /////--------------------------------------------------
// function getLowestNumber(input1,input2,input3) {
//     var confirmedNum = isNaN(parseInt(input1));
//     var confirmedNum2 =isNaN(parseInt(input2));
//     var confirmedNum3 = isNaN(parseInt(input3));
//
//     if (confirmedNum || confirmedNum2 || confirmedNum3) {
//         return false;
//     } else {
//         return Math.min(input1, input2, input3);
//     }
// }

//console.log(getLowestNumber("cat",10,2));




// function sumOfSquares(input1,input2) {
//     if (input1 === null || input2 === null || isNaN(input1) || isNaN(input2)){
//         return false;
//     } else {
//         return (Math.pow(input2, 2) + Math.pow(input1, 2));
//     }
// }



// Write a remainder(number, divisor) function that returns the remainder left over when dividing number
// by the divisor
// If either of the arguments are not a numeric string or number, return a string message indicating which
// argument is not a number/numeric string
// (edited)

function remainder(num, div){
    if (isNaN(num) || isNaN(div)){
        return false
    }else if (num ==="number" || div ==="number"){
        return console.log("this isn't right")
    }
    return num % div;
}

console.log(remainder(44, 20))