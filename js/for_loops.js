function showMultiplicationTable(num){
    for(let i = 1; i <=10; i++){
        console.log(`${num} * ${i} = ${num * i}`);

    }
}

showMultiplicationTable(7);

console.log(`----------------------------------------`)

for(let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * (200 - 2 + 1) + 200);
    if (randomNum % 2 === 0) {
        console.log(`${randomNum} is even`);
    }else{
        console.log(`${randomNum} is odd`);
    }
}

console.log(`----------------------------------------`)

// let i = ''
// for(let i = 1; i <=9; i++){
//     console.log(i = .repeat);
// }

for(let i = 1; i <= 9; i++) {
    var arr = []
    for (let x = 1; x <= i; x++) {
        arr.push(i);
    }
    console.log(arr.join(""));
}



console.log(`-------------------------------------------`)

for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}





