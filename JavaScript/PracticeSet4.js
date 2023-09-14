console.log("Question-1")
let str = "Kamalsheel\""
console.log(str.length)

console.log("Question-2")
let sentence = `Early to bed, early to rise, makes a man healthy, wealthy, and wise.`
let word = `healthy`
console.log(`The word "${word}" ${sentence.includes(word) ? " is " : " is not "} present in the sentence "${sentence}"`)
console.log(`The sentence starts with "${sentence.startsWith('Early')}"`)
console.log(`The sentence starts with "${sentence.endsWith('wise')}"`)
console.log(`The sentence starts with "${sentence.endsWith('.')}"`)

console.log("Question-3")
console.log(sentence)
console.log(sentence.toLowerCase())

console.log("Question-4")
let req = "Please give me Rs 10,000."
let amount = req.slice("Please give me Rs ".length)
console.log(amount)
amount = Number.parseInt(amount)
console.log(typeof (amount))

console.log("Question-5")
let friend = "Rabindra"
friend[4] = "A"
console.log(friend)// The friend string will not change, as strings are immutable
