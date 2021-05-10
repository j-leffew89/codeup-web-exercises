// todo:Create a file named break_and_continue.js in the js directory.
   // Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
   // Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.


for (let i = 1; i < 50; i++) {

    if (i % 2 !== 1) {

        // prompt (`Give me a odd number`);
        // if (i = 27);
        // alert (`Yikes! Skipping number: 27`);

        continue;


    }
    else if (i === 27){
        alert( 'Yikes! Skipping number: 27');
    }
    console.log('Here is a odd number: ' + i);
}
