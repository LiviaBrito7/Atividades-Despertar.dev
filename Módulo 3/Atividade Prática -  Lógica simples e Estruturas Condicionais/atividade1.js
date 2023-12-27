// Crie uma variável JavaScript e coloque nela o valor de sua idade.
// Mostre no html usando o document.write() o dado contido na
// variável junto da frase "Minha idade é x anos", sendo "x" o valor
// armazenado na sua variável.

const idade = 16
document.write(`minha idade é ${idade} anos <br/>`)

// Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

const num1 = 10
const num2 = 20
const soma = num1 + num2
document.write(`O resultado da soma de ${num1} e ${num2} é ${soma} <br/>`)

// Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

const valor = 1000
const parcela = 10
const valorParcela = valor / parcela
document.write(`o valor total da compra foi R$${valor.toString().replace('.' , ',')} <br/> `)
document.write(`Forma de pagamento: ${valorParcela.toFixed(2).toString().replace('.' , ",")} <br/>`)

// Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

const totalMinutos = 150
const totalSegundos = totalMinutos * 60
document.write(`${totalMinutos} minutos equivale à ${totalSegundos} segundos! <br/>`)

// Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

const aluno = "livia"
const nota1 = 8
const nota2 = 9
const nota3 = 10
const media = (nota1 + nota2 + nota3) / 3
document.write(`A aluna ${aluno} ficou com média ${media} <br/>`)

// Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let valor1 = 10
let valor2 = 20
valor1 = 20
valor2 = 10

document.write(`O primeiro valor é ${valor1} e o segundo valor é ${valor2} <br/>`)


// Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

const total = 1000
const votoBranco = 50
const votoNulo = 20
const votoValido = 930
const perBranco = (50 / 1000) * 100
const perNulo = (20 / 1000) * 100
const perValido = (930 / 1000) * 100

document.write(`O percentual de votos em branco em relação ao total é de ${perBranco}% <br/>`)
document.write(`O percentual de votos nulo em relação ao total é de ${perNulo}% <br/>`)
document.write(`O percentual de votos válidos em relação ao total é de ${perValido}% <br/>`)

// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const numero1 = 8
const numero2 = 8

if(numero1 === numero2){
    document.write('Números iguais <br/>')
} else if (numero1 > numero2) {
    document.write('Primeiro é maior <br/>')
} else {
    document.write('Segundo é maior <br/>')
}

// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const macas = 6

if(macas <= 12){
    document.write(`O total da compra é de R$${(macas * 0.25).toFixed(2).replace('.', ',')} <br/>`)
} else {
    document.write(`O total da compra é de R$${(macas * 0.30).toFixed(2).replace('.', ',')} <br/>`)
}

// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

const nome = "livia"
const age = 16
document.write(`Nome: ${nome}, Idade: ${age}, nasceu em ${2023 - age} <br/>`)

// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const numero = 16

if (numero % 2 === 0) {
    document.write("Número é par!");
} else {
    document.write("Número é ímpar!");
}

// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

var anoAtual = 2023
var anoNascimento = Numbwe(prompt("Digite o ano de nascimento:"))
var idadePessoa = anoAtual - anoNascimento

if (idade >= 16) {
    document.write("Você pode votar este ano.");
} else {
    document.write("Você não pode votar este ano, pois é menor de idade.");
}