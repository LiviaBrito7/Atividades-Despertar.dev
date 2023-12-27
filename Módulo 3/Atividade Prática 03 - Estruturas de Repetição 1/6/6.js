// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

for (let i = 30; i >= 1; i--) {
  let primo = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    document.write(`[${i}] ,`);
  } else {
    document.write(i + ",");
  }
}