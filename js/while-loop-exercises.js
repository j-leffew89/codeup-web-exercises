// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;

//  num = 0;
// while(num < 25) {
//    if(num % 2 == 0) {
//        console.log(num);
//    }
//    num++
// }

// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

// var password = "CodeUp";
// while (k != password) {
//     var k = prompt("Enter password");
//     if (k != password) {
//         alert("Wrong password!");
//     }
// }
// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements



// var spaceAvailable = 30;
// do {
//     var spaceAvailable = spaceAvailable -1;
//     console.log(`we have ${spaceAvailable} amount of space left`);
//
// }while (spaceAvailable <= 0,)
//     spaceAvailable -= 2;
//
//     console.log("No more space available");

var cars = 0
do{
    var spaceAvailable =  30 - cars;
    console.log(`we have ${spaceAvailable} amount of space left`);
    cars--
} while (spaceAvailable <= 30)

console.log("sorry, we have no more space available!");