// Program to find the sum of first 10 numbers

sum = 0;
let n = 10;

// let n=prompt("Enter the number");
// n=Number.parseInt(num);

//For loop
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("The sum of first 10 numbers are: " + sum)

let obj = {
    Ram: "56",
    Krishan: "61",
    Hari: "69",
    Laxman: "76",
    Shyam: "12"
}

// For in loop
for (let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}

// For of loop
for (let b of "Kamalsheel") {
    console.log(b)
}

// While loop

{
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// Do-While loop

{
    let i = 1;
    do {
        console.log(i);
        i++;
    }
    while (i <= 10)
}

function onePlusAverage(x, y) {
    console.log("Done")
    return Math.round(1 + (x + y) / 2);
}

let a = 1;
let b = 5;
let c = 4;

console.log("The one + average of a and b is: ", onePlusAverage(a, b));
console.log("The one + average of a and c is: ", onePlusAverage(a, c));

// Another way to write function is JS

const add = (p, q) => {
    return p + q;
}

console.log(add(2, 4));