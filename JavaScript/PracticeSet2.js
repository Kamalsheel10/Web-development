console.log("Question 1")
let a = 12;
// let a = prompt("Hey what is your age?");
if (a > 10 && a <= 20) {
    console.log("Yes! The age is between 10 and 20");
}
else {
    console.log("No! The age is not between 10 and 20. You're a bit older! ")
}

console.log("Question 2")
let fruit = 'Apple'
switch (fruit) {
    case 'Mango':
        console.log("The furit is mango");
        break;
    case 'Banana':
        console.log("The fruit is not banana");
        break;
    default:
        console.log("You have guessed the fruit wrong!");
}

console.log("Question 3")
let num = 12;
// let num=prompt("Enter the number")
// num=Number.parseInt;
console.log(num % 2 == 0 && num % 3 == 0 ? "Yes! The number is divsible by both 2 and 3" : "No! The number is not divisble by 2 and 3.")