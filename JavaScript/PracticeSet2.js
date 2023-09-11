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
let num = 9;
// let num=prompt("Enter the number")
// num=Number.parseInt(num);
console.log(num % 2 == 0 && num % 3 == 0 ? "Yes! The number is divsible by both 2 and 3" : "No! The number is not divisble by 2 and 3.")

console.log("Question 4")
console.log((num % 2 == 0) || (num % 3 == 0) ? "Yes the number is divisible by 2 or 3" : "The number is not divisible by 2 or 3");
// num=prompt("Enter a number"); num=Number.parseInt(num); console.log((num%2==0)||(num%3==0)?"THe number is divisble by two and three":"The number is not divisible")

console.log("Question 5")
let age=23;
console.log(age>=18?"You can drive":"You cannot drive")