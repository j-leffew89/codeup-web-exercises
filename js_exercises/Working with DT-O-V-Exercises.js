// Exercises
// For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
//
//
//     var a = 1;
// var b = a++;
// var c = ++a;
// // what is the value of a, b, and c?
//
// a = 3; b = 1; c = 3
// ---------------------------------------------------------
// var d = "hello";
// var e = false;
//
// d++; = NaN
// e++;
//
// d = NaN; e= 0
// ---------------------------------------------------------
// var perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
//
// == NaN
// ---------------------------------------------------------
// var price = 2.7;
// price.toFixed(2);
// === "2.70"
// ---------------------------------------------------------
// var price = "2.7";
// price.toFixed(2);
//
// ==== "2.70"
// --------------------------------------------------------
//
// console.log(isNaN = 0)); === false
//
// isNaN(1) === false
//
// isNaN("") === false
//
// isNaN("string") === true
//
// isNaN("0") === false
//
// isNaN("1") === false
//
// isNaN("3.145") === false
//
// isNaN(Number.MAX_VALUE) === false
//
// isNaN(Infinity) === false
//
// isNaN("true") === true
//
// isNaN(true) === false
//
// isNaN("false") === true
//
// isNaN(false) false
//
// // to illustrate why the isNaN() function is needed:
//
console.log(NaN == NaN) //false
//
console.log (!true) // false

console.log(!false) // true

console.log(!!true) // true

console.log(!!false) // false
//
// !!0 == false
//
// !!-0 == false
//
// !!1 == true
//
// !!-1 == false
//
// !!0.1 == true
//
// !!"hello" == true
//
// !!"" false
//
console.log (!!'') // false

console.log (!!"false") // true

console.log (!!"0") // true