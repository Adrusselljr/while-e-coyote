const prompt = require("prompt-sync")({ sigint:true })

let x = Number(prompt("Enter x: "))
const y = Number(prompt("Enter y: "))

while(x % y != 0) {
    x += 1
}
console.log(`${x} is divsible by ${y}`)