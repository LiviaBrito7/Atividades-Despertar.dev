// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedro = 150
let lucas = 110
let anos = 0

while (pedro >= lucas) {
    pedro += 2
    lucas += 3
    anos++
}
document.write(`Lucas levou ${anos - 1} anos para chegar na mesma altura que pedro. <br>`)
document.write(`Lucas levou ${anos} anos para ultrapaçar a altura de pedro.`)