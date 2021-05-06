


var aboutMe = new Object();


aboutMe.age= 32;
aboutMe.city= `San Antonio`;
aboutMe.FaveFood= 'Pizza';
aboutMe['name'] = 'Jesse';
aboutMe['wearsGlasses'] = 'true';
aboutMe['faveSport'] = 'Football'


console.log(aboutMe.age);

var thisIsMe = {
    Name: 'Jesse',
    Age: 32,
    Height: 'Short',
    favoriteFood: 'Pizza',
    city: 'San Antonio'
};

console.log(thisIsMe.Name);

// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation

// var yourFaveSportsTeam = {}
//     yourFaveSportsTeam.city = `Wisconsin`;
//     yourFaveSportsTeam.coach = `LaFleur`;
//     yourFaveSportsTeam.sport = `Football`;
//
// console.log(yourFaveSportsTeam);
//
// yourFaveSportsTeam['numOfPlayers'] = 30
// yourFaveSportsTeam['numOfChampsWon'] = 4
// yourFaveSportsTeam['isBestTeam'] = false;
//
// console.log(yourFaveSportsTeam);

// let laptop = {
//     color: 'space gray',
//     make: 'mac',
//     size: 13,
//     whatSize: function (){
//         return `A laptop is ${this.year} inches wide`;
//     }
//
// }
//
// console.log(laptop.whatSize());

// var theSpurs = {
//     city: "SA",
//     coach: 'gregg',
//     wins: 5,
//     players: ["one", "two", "tim duncan", "manu", "david robinson"],
//     playerInfo: [
//         {
//             name: "Tim",
//             age: 40,
//             mvp: 3
//         },
//         {
//             name: "manu",
//             age: 38,
//             mvp: 6
//         }
//     ],
//     otherNBATeams: {
//         Jazz: {
//             city: "Salt Lake City",
//             mascot: "Jazz Bear",
//             champsWon: 0
//         },
//         Mavs: {
//             city: "Dallas",
//             mascot: "MavsMan & Champ",
//             champsWon: 1
//         },
//         Pistons: {
//             city: "Detroit",
//             mascot: "Hooper the Horse",
//             champsWon: 3
//         }
//     }
// }
// //console.log(theSpurs.otherNBATeams.Mavs);
// // console.log(theSpurs.playerInfo[0].age);
// // console.log(theSpurs);
// // TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
// //  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
// //  'otherNBATeam' team object.
//
// console.log(theSpurs.otherNBATeams.Mavs.mascot);
// console.log(theSpurs.otherNBATeams.Jazz.mascot);
// console.log(theSpurs.otherNBATeams.Pistons.mascot);
// console.log(theSpurs.playerInfo [1]= 'Ginobli');
// console.log(theSpurs.players [2]);
//
// theSpurs.otherNBATeams.Lakers = {
//     city: "LA",
//     mascot: "Labron James",
//     champsWon: 17
//
// }
//
// console.log(theSpurs.otherNBATeams.Lakers);
//
//
//
// /** Mini Exercises */
// /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
//       isOpen, ranking, yearOpened), as
//       well as, information about at least 5 different animals (think nested objects). For each
//       Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
//        livingPlace). Each animal must also contain a method that returns the sound of that
//         animal using the THIS keyword.
//        hint: Each animal should have at least 5 properties (one of them being animalSound);
// */
//
//
// let zoo = {
//     name: `SA Zoo`,
//     City: `SA`,
//     isOpen: `When the animals wake up`,
//     ranking: `da best`,
//     yearOpened: 1914,
//     animals:{
//     lion:{
//         hasFur: true,
//         isMammal: true,
//         canFly: false
//         animalSound: function (){
//             return  `raawwwwrrrrrrrrr`
//         },
//      turtle: {
//          hasFur: false,
//          isMammal: true,
//          canFly: false,
//          animalSound: function (){
//              return `hissing`
//          },
//
//
//      }
//
//     }
//
//
//     }
// }



