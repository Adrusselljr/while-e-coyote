const prompt = require("prompt-sync")({ sigint:true })

const num = Number(prompt("Enter a value for 'n': "))

function fib(num) {

    let x = 0
    let y = 1
    let temp

    while (num > 0){
        console.log(x)
        temp = y
        y = y + x
        x = temp
        num--
    }
    return x
}
fib(num)