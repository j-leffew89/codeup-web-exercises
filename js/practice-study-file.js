const numbers = [74, 18, 10,5, 84, 24, 105];

numbers.sort(compareFunction);

console.log(numbers);

function compareFunction(a, b){
    return a - b;
}
