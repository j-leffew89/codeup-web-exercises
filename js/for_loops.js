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


for(let i = 1; i <=9; i++){
    let output = ''
    for(let j = 1; j <=i; j++) {
        output += i
    }
    console.log(output);
}


console.log(`-------------------------------------------`)

for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}



// let sentence = 'the quick brown dog jumped the fence';
//
// let capitalizeString = (string) => str[0].toUpperCase() + string.slice(1).toLowerCase();
//
// let capitalizeWords = (string) => string.split('  ').map (capitalizeString).join('  ');
//
// console.log(capitalizeWords(sentence));

