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

let s=num.shift(); // Removes the first element and returns it
console.log(s, num)

let us=num.unshift(70); // Adds element to the beginning and returns the length of new array
console.log(us, num)

delete(num[0]) // Doesn't have any impact on the length of an array. Delete is an operator
console.log(num)