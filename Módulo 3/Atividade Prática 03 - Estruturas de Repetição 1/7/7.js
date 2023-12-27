// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let soma = 0
let positivos = 0
let negativos = 0

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt('Insira o número'));
    soma += numero
    if (numero > 0) {
        positivos++
    } else if (numero < 0) {
        negativos++
    }
}

let media = soma / 10

document.write(`A média entre os números é de: ${media.toFixed(2)} <br>
Foram informados ${positivos} números positivos. <br>
Foram informados ${negativos} números negativos.`)