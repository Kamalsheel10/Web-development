const stringsAreEqualinUpperCase = (str1, str2) => {
    return str1.toUpperCase() === str2.toUpperCase();
}

const stringsAreEqualInLowerCase = (str1, str2) => {
    return str1.toLowerCase() == str2.toLowerCase();
}

let name = "kamalsheel"
console.log(name.length)

console.log("UpperCase and LoweCase function:")
console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log("Slice function:")
console.log(name.slice(1, 4)) // 4th index is not included. Only characters from 1st index to 3rd index is displayed

console.log("Replace function:")
console.log(name.replace("kamal", "Pancha"))

console.log("Concat Method:")
let name1 = "Ram"
let name2 = "Shyam"

console.log(name1.concat(" is a friend of ", name2))


console.log("Trim Method:")
let ak = "      SLOOOOOOOOOOOOOOO      "
console.log(ak)
console.log(ak.trim())

console.log("Quick Quiz:")
let l = "The quick brown fox jumps over a lazy dog"

for (let i = 0; i <= l.length; i++) {
    console.log(l[i]);
}

console.log(stringsAreEqualinUpperCase("b", "B"));
console.log(stringsAreEqualInLowerCase("k", "K"));

let exp1 = "Hello, User!"
console.log(exp1.blink())
console.log(exp1.fontcolor("red"));