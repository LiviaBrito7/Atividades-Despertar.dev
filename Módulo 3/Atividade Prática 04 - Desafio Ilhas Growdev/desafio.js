let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0

valorSaque = parseInt(prompt("Digite o valor para saque"))


while (valorSaque > 0) {
    if (valorSaque >= 50) {
        valorSaque -= 50
        nota50++
    } else if (valorSaque >= 10) {
        valorSaque -= 10
        nota10++
    }
    else if (valorSaque >= 5) {
        valorSaque -= 5
        nota5++
    }
    else if (valorSaque >= 1) {
        valorSaque -= 1
        nota1++
    }
}

document.write(`GC$ 50,00 -> ${nota50} <br>
GC$ 10,00 -> ${nota10} <br>
GC$ 5,00 -> ${nota5} <br>
GC$ 1,00 -> ${nota1} <br>`)