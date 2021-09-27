const prompt = require("prompt-sync")({ sigint:true })

let string = prompt("Enter A String: ")
let string1= string

while(string.length <= 10) {
    string += string1
    console.log(string)
}