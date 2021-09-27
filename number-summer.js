const prompt = require("prompt-sync")({ sigint:true })

let input = prompt("Enter some numbers (type 'done' when complete): ")

let sum = 0

while(input !== "done") {
    
    sum += Number(input)
    input = prompt("Enter some numbers (type 'done' when complete): ")

}
console.log(`Sum = ${sum}`)