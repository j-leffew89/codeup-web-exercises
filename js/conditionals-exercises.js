(
    function (){
        "use strict";

        var pizzaPreference = prompt("what kind of pizza do you like?");

        if (pizzaPreference === "pineapple and hot sauce") {
            alert("What a coincidence, that's my favorite!");
            alert(" Alright let's order some!");
        } else if (pizzaPreference === "cheese") {
            alert("Just plain cheese? Okay...");
        } else {
            alert(pizzaPreference + " isn't my favorite, but let's order some!");
        }



    }

    )()