let arr = [45, 65, 76]

// Array map method
console.log(arr)
let a = arr.map((element, index, array) => {
    console.log(element, index, array)
    return element + 1
})
console.log(a)

// Array filter method
let ar2 = [2, 5, 7, 8, 9, 0, 23, 34, 454, 342]
let b = ar2.filter((value) => {
    return value < 10
})

console.log("The value less than 1o in the above array is: " + b)

// Array reduce method
let arr3 = [2, 3, 4, 5, 6, 1]
let newArr = arr3.reduce((value1, value2) => {
    return value1 * value2
})
console.log(newArr)

let arr4 = [43, 12, 12, 12]
let newArr1 = arr4.reduce((value) => {
    return value + 1
})
console.log(newArr1)