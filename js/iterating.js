(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const name = ['Emma', 'Ian', 'Olivia', 'Crystal'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(name.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(`------------------------------`);

    console.log( name [0]);
    console.log( name [1]);
    console.log( name [2]);
    console.log( name [3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log(`------------------------------`);

    for (let i = 0; i < name.length; i++) {
        console.log('The name at ' + i + ' is: ' + name[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log(`------------------------------`);

    name.forEach(function(name) {
        console.log('Is there a ' + name + ' in the building?!');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log(`------------------------------`);

    const numbers =[1, 2, 3, 4, 5, 6];
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[4]);


    console.log(`------------------------------`)

    const sports = [`Football`, `Basketball`, `Baseball`, `Soccer`, `Boxing`];
    console.log(sports[0]);

    const colors = [`Green`, `Blue`, `Yellow`, `teal`, `Purple`, `Grey`];
    console.log(colors[5]);



})();