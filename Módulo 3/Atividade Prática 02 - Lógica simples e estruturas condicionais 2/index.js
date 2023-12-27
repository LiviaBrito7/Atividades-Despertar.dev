// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

const temperaturaCelsius = Number(prompt('Insira a temperatura em graus celsius'))

const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

document.write(`A temperatura em Farenheit é ${temperaturaFahrenheit} </br>`)

// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

const num = Number(prompt('Insira o número.'))

switch (num) {
    case 1: 
        document.write(`Domingo </br>`)
        break;
    case 2: 
        document.write(`Segunda-feira </br>`)
        break;
    case 3:
        document.write(`Terça-feira </br>`);
        break;
    case 4:
        document.write(`Quarta-feira </br>`);
        break;
    case 5:
        document.write(`Quinta-feira </br>`);
        break;
    case 6:
        document.write(`Sexta-feira </br>`);
        break;
    case 7:
        document.write(`Sábado </br>`);
        break;
    default:
        document.write(`Número inválido. Por favor, digite um número de 1 a 7. </br>`);
        break;
}

// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

const num1 = Number(prompt('Insira o número.'))

if (num1 === 0) {
    document.write(`Este número é igual a zero. </br>`)
}
else if (num1 < 0){
    document.write(`Este número é negativo. </br>`)
}
else {
    document.write(`Este número é positivo. </br>`)
}

// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custoFabrica = Number(prompt("Insira o custo de fábrica."))
const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

const custoDistribuidor = custoFabrica * percentualDistribuidor;
const custoImpostos = custoFabrica * percentualImpostos;
const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

document.write(`O custo final é de R$${custoFinal} </br>`)

// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.

const altura = Number(prompt("Informe a sua altura em centimetros: "));
const peso = Number(prompt("Informe o seu peso em kgs: "));
const imc = peso / ((altura/100)*2)

if (imc  < 18.5) {
    document.write(`Você está abaixo da faixa de peso ideal. </br>`);
} else if (imc > 24.99) {
    document.write(`Você está acima da faixa de peso ideal. </br>`);
} else {
    document.write(`Você está dentro da faixa de peso ideal </br>`);
}

// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação desejada (+, -, *, /):");

let resultado;
let invalida;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro! Divisão por zero.";
        }
        break;
    default:
        resultado = "Operação inválida.";
        break;
}

document.write(`O resultado foi ${resultado} </br>`);

// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldoConta = Number(prompt("digite o saldo da conta"))

const valorSaque = Number(prompt("Digite o valor que deseja sacar (múltiplo de 5):"));

if (valorSaque > 0 && valorSaque % 5 === 0 && valorSaque <= saldoConta) {
    
    const taxaSaque = 4.50;

    if (valorSaque + taxaSaque <= saldoConta) {
        saldoConta -= (valorSaque + taxaSaque)
        document.write(`Saque de R$${valorSaque.toFixed(2)} realizado com sucesso. </br>`)
        document.write(`Taxa de saque: R$${taxaSaque.toFixed(2)} </br> `)
        document.write(`Saldo restante: R$${saldoConta.toFixed(2)} </br>`)
    } else {
        document.write('Você não tem saldo suficiente para realizar esse saque.');
    }
} else {
    document.write('Valor de saque inválido. Certifique-se de que o valor seja um número positivo, múltiplo de 5 e menor ou igual ao saldo disponível.');
}

// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

const idadeAtleta = parseInt(prompt("Digite a idade do atleta:"));
const pesoAtleta = parseFloat(prompt("Digite o peso do atleta:"));

let categoria;

if (idade <= 12) {
    categoria = "Infantil";
} else if (idade >= 13 && idade <= 16) {
    if (pesoAtleta <= 40) {
        categoria = "Juvenil leve";
    } else {
        categoria = "Juvenil pesado";
    }
} else if (idade >= 17 && idade <= 24) {
    if (pesoAtleta <= 45) {
        categoria = "Sênior leve";
    } else if (pesoAtleta <= 60) {
        categoria = "Sênior médio";
    } else {
        categoria = "Sênior pesado";
    }
} else {
    categoria = "Veterano";
}

document.write(`Categoria do atleta: ${categoria} </br>`);

// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

const velocidade = Number(prompt('Insira a velocidade alcançada em km/h'))
const multa = (velocidade - 80) * 5

if (velocidade <= 80) {
    document.write(`Sua velocidade foi de ${velocidade}, você não foi multado.`)
} else {
    document.write(`Sua velocidade foi de ${velocidade}, você foi multado em R$${multa}`)
}