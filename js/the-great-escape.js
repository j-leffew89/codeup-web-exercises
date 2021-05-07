"use strict";

function getKindOfDog(){
    prompt("What kind of dog is it?");
}

function getContactInfo(){
    return prompt("How do I contact you when i find the dog?");
}

function getDogName(){
    return prompt("What is your dog's name?");
}

function playTheGreatEscape(){

    //get all the info
    var dogkind = getKindOfDog();
    var dogName = getDogName();
    var contactInfo = getContactInfo();

    //start searching
    alert("Time to seach for this dog!");

    //see a dog!
    alert("I see a dog!");
    var kindOfDogSeen = getKindOfDog();

    //check if the dog matches
    var isTheLostDog = (kindOfDogSeen === dogkind) && confirm("Does dog respond to the name: " + dogName);

    if (isTheLostDog){
        //return dog to the owner!
        alert("Puts leash on " + dogName);
        alert("Time to call the owner");
        alert("Calling: " + contactInfo);
        alert("Taking the dog to owner");
    }

}


playTheGreatEscape();


