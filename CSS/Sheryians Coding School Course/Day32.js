var ans = prompt("Hey man, how are you doing?");
console.log(ans);

var a = [1, 2, 3, 4, 45, 56, 7, 8];
var b = [...a];
b.pop();

var age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You're allowed to drink alcohol!");
}
else {
    console.log("You're just a kid!");
}

// Fibonacci series

var prev = 0;
var curr = 1;
console.log(prev);
console.log(curr);
for (var i = 1; i < 7; i++) {
    var sum = prev + curr;
    console.log(sum);
    prev = curr;
    curr = sum;
}

// Function statement
function diff() {

}

// Function expression
var f = function () { }

// Function annons
// function() {

// }

// Fat Arrow Function
var k = () => {

}
// Fat Arrow Function with one parameter 

var l = (val) => { }
l(12);

var colin={
    name:"Colin",
    material:"plastic",
    price:80,
    locationFound: "shop"
}

var user={
    name:"Kamalsheel Mainali",
    age:22,
    email:"Mainaliiii.sheel@gmail.com",
    username:"KSM"
}