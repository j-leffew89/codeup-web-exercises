(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Jesse',
        lastName: 'Sosa',

        sayHello: function (){
            return `Hello from Jesse Sosa!`;
        }
    };
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(offer);

    function offer(shopper){

        var discount = 0;
        var newTotal = 0;

        console.log(`${shopper.name} has a bill of $${shopper.amount}.`);

        if(shopper.amount > 200) {
            discount = shopper.amount * 0.12;
            newTotal = shopper.amount - discount;

            console.log(`After the discount ${shopper.name}'s total is ${newTotal}`);
        }
    }

    console.log(`-----------------------------------------------------`)
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var book = [
        {title:'The Child Called IT', author:{firstName:'Dave', lastName:'Pelzer'}},
        {title:'War and Peace', author:{firstName:'Leo', lastName: 'Tolstoy'}},
        {title:'Song of Soloman', author:{firstName:'Toni', lastName:'Morrison'}},
        {title:'Ulysses', author:{firstName:'James', lastName:'Joyce'}},
        {title:'The Shadow of the Wind', author:{firstName:'Carlos', lastName:'Ruiz-Zafon'}},
    ]

    console.log(book[0].title);
    console.log(book[0].author.firstName);
    console.log(book[0].author.lastName);

    console.log(book[2].title);
    console.log(book[2].author.firstName);
    console.log(book[2].author.lastName);

    console.log(book[4].title);
    console.log(book[4].author.firstName);
    console.log(book[4].author.lastName);


    console.log(`-----------------------------------------------`)


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookInfo(obj){

        for(let i = 0; i < obj.length; i++){

            console.log(`Book # ${i + 1}`);
            console.log(`Title: ${obj[i].title}`);
            console.log(`Author: ${obj[i].author.firstName} ${obj[i].author.lastName}`);
        }

    }

bookInfo(book);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();