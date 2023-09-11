console.log("Question-1")
const student = {
    Harry: 98,
    Rohan: 70,
    Akash: 7
}
for (let i = 1; i <= Object.keys(student).length; i++) {
    console.log("Marks of " + Object.keys(student)[i] + " is " + student[Object.keys(student)[i]]);
}

console.log("Question-2");
for (let a in student) {
    console.log("Marks of " + a + " is " + student[a]);
}


console.log("Question-3")
let correctNum = 69;
{
    let i;
    while (i != correctNum) {
        i = prompt("Enter a number");
        console.log("Try Again!")
    }
}
console.log("You have entered the correct answer");

console.log("Question-4")
const mean = (num1, num2, num3, num4, num5) => {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log("The mean of the the numbers 1,2,3,4,5 is " + mean(1, 2, 3, 4, 5));


//String => Template literals

let n1 = "Ram"
let n2 = "Hari"

let sentence = `${n1} is a big brother of ${n2}`;
console.log(sentence);