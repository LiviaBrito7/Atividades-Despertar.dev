// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;
let menorAltura = 100000
let maiorAltura = 1

for (let pessoa = 0; pessoa <= 15; pessoa++) {
    let altura = parseInt(prompt('Insira uma altura em centímetros'))
    if(altura < menorAltura ){
    menorAltura = altura
    }
    if(altura > maiorAltura ){
        maiorAltura = altura
        }
}

document.write(`a. A menor altura do grupo é: ${menorAltura} </br>
b. A maior altura do grupo é: ${maiorAltura}`)