"use strict";

//var isTrue = true;
//
//console.log("The value of isTrue: " + isTrue);

//---------------------- BOOLEAN

//var iAmHungry = true;
//
//if (iAmHungry) {
//    console.log("Lets find some food!");
//}

//var hoursSinceMeal = 5;
//
//var iamHungry = hoursSinceMeal > 4;
//
//if (iamHungry){
//    console.log("Im getting a little hungry");
//}

//---------------------- NUMBERS

//console.log("The number is: = 10");
//console.log("The number is: + 9984379827");
//console.log("The number is: + -1339");
//console.log("The number is: + 13.4");

//console.log(10+10); //addition operator
//
//console.log(3-6); // subtraction operator
//
//console.log(5*4); // multiplication operator
//
//console.log(1/0); // division operator
//
//console.log((-0) / 0);
//
//console.log(15 % 6);

// TODO: console.log() five equations using each arithmetic operator. Each equation should resolve 4.

//console.log(2+2);
//
//console.log(14-10);
//
//console.log(2*2);
//
//console.log(24/6);
//
//console.log(36%8);

//--------------------UNDEFINED

// a variable/object which is written but not defined

//var name;

//console.log(name);

//---------------------STRINGS

//console.log("Jesse's pretty hungry"); // string literal
//
//console.log('Jesse\'s pretty hungry');

//name = "Jesse";
//var status = "\n\tis\n\t\thungry";
//console.log(name + status);

//------------------TYPE OF
//var name;
//
//console.log("The type is: " + typeof(4 *"7"));
//
//console.log("The type is: " + typeof(name));
//
//console.log("The type is: " + typeof(null));

// var x = 300;
// var y = 100;
//
// function scopeExample() {
//     var x = 1;
//     var y = 2;
//     console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
//     return x + y;
// }
//
// console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
// var returnValue = scopeExample();
// console.log(returnValue); // 3

function addTwoNumbers(num1, num2) {
    let num = num1 + num2;
    return num;
}
 console.log(addTwoNumbers(4,9));


