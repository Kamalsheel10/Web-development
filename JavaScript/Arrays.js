let marks = [45, 67, 76, 34, 98, null, false, "Not Present"]
console.log(marks)

console.log("Method-1");
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);

console.log("The length of marks is: " + marks.length);
marks[5] = 69; // Changing the value to the array
marks[8] = 69; // Adding a new value of an array

console.log(marks) // Arrays are mutable so they can be changed. 
console.log(typeof(marks));

console.log("Quick Quiz")
for(let a=0; a<=marks.length; a++)
{
    console.log(marks[a]);
}