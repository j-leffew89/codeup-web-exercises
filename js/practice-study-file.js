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

    function getSquare(n){
    if (n == null || isNaN(Number(n))) {
        return false
    }
        return n * n;

    }

console.log(getSquare())


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

    let last = (input) => {
        return input.split('').pop();
    }

console.log(last('string'))