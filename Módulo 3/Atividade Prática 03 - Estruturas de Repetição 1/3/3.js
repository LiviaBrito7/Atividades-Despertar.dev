// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

let numero = parseInt(prompt("Digite o número para a tabuada:"));
let iteracoes = parseInt(prompt("Digite a quantidade de iterações:"));
for (let i = 1; i <= iteracoes; i++) {
    let resultado = numero * i;
    console.log(i + " * " + numero + " = " + resultado);
}