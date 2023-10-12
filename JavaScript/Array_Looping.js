let num = [34, 23, 12, 34, 54, 233]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("Using forEach loop:")
num.forEach((element) => {
    console.log(element * element)
})

// Array.from

let name = "Kamalsheel Mainali";
let a = Array.from(name)
console.log(a)

// for.....of
for (let i of num) {
    console.log(i)
}