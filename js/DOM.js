// const objString = "random"
//
// const obj = {
//     0:"s", 1:"t", 2:"r", 3:"i", 4:"n", 5:"g"
// }
// console.log(objString)

// exercise 1. write a function called makeCar that takes intwo strings

const convert = (str) => {
    const obj = {}
    str.split("").forEach((letter, index) => {
        obj[index] = letter
        obj[letter] = letter
    });
    return obj
}

console.log(convert("string"))