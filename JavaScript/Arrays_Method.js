let num = [1, 2, 5, 23, 45, 56]
let b = num.toString();
console.log(num)
console.log(b) // Converting an array to string

let n1 = num.join(" and ")
console.log(n1, typeof (n1))

let p = num.pop(); // Pop returns the popped element
console.log(num, p)

let pu = num.push(69) // Push returns the new Array length
console.log(num, pu)

let s = num.shift(); // Removes the first element and returns it
console.log(s, num)

let us = num.unshift(70); // Adds element to the beginning and returns the length of new array
console.log(us, num)

delete (num[0]) // Doesn't have any impact on the length of an array. Delete is an operator
console.log(num)

let num1 = [23, 43, 2323, 43, 23333, 3, 4, 555]
let newArr = num.concat(num1);
console.log(newArr);

num1.sort() // Sorts the array according to alphabetically => The numbers starting from 2 will be sorted first no matter how big it is then it will move on the next numbers(3,4,5)
console.log(num1)

// Sorting in ascending number
let compare = (a, b) => {
    return a - b;
    // return b-a; => For sorting in descending number
}
num1.sort(compare);
console.log(num1);
num1.reverse(); // Reverses the array, as the name itself suggests
console.log(num1);

// Splice and Slice

let eg1 = [23, 45, 667, 34, 43, 564]
let deletedvalues = eg1.splice(2, 3, 68, 69, 70)  // Splice is used to add the numbers to the array by removing some elements
console.log(eg1)
console.log(deletedvalues)
console.log(typeof (deletedvalues))


let eg2 = [1, 2, 3, 4, 5, 56]
let neweg = eg2.slice(2);
console.log(neweg)

