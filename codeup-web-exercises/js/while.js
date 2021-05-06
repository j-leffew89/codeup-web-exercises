// let num = 1;
//
// while (num < 65536) {
//     num *= 2
//     console.log(num);
//
// }


let allCones = Math.floor(Math.random() * 50) + 50;

function  wantedCones () {
    return Math.floor(Math.random() * 5) + 1;
}
 fucntion sellIceCreamCones(){
    do{
        if(wantedCones > allCones) {
             console.log(`I'm sorry, you wanted ${wantedCones}, but we only have ${allCones}`)
            continue;

             console.log(`Here are ${wantedCones}. Enjoy!)
             allCones -= wantedCones;

            lol console.log(`We have ${allCones} remaining`);
    }
}

}while(allCones > 0)

console.log(`We've sold out of cones for the day!`);