const prompt = require("prompt-sync")({ sigint:true })

let string = prompt("Enter A String: ")

while(string.length <= 100) {
    string += string
    console.log(string)
}