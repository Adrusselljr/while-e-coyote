const prompt = require("prompt-sync")({ sigint:true })

const num = Number(prompt("Enter A Number :"))

while(num <= 100) {
    num *= 2
    console.log(num)
}