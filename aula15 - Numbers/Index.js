// IEEE 754-2008 - padrão que o JS usa para precisão de números
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

// num1 = num1.toFixed(2); // Não resolve o problema, o valor retornado não é inteiro, apenas visivelmente.
num1 = parseFloat(num1.toFixed(2)); // Agora resolve o problema, o valor retornado será inteiro.
// num1 = Number(num1.toFixed(2)); // Outra maneira

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2.toString()); // Não altera o valor de num1 para String
// num1  = num1.toString(); // Altera o valor num1 para String
// console.log(num1.toString(2)); // Com o valor 2 dentro do toString ele retorna a versão binária do número
// console.log(num1.toFixed(4)); // Arredonda as casas decimais
// console.log(Number.isInteger(num1)); // Retorna true or false; se é inteiro ou não
/*
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Caso a conta for inválida retorna TRUE; "Sim a conta é inválida"
*/


// Outra maneira de resolver
/*
let num1 = 0.7;
let num2 = 0.8;
// Desta maneira também resolve o problema, mas usando matemática.
num1 = (num1 * 100) + (num2 * 100) / 100; // 0.8
num1 = (num1 * 100) + (num2 * 100) / 100; // 0.9
num1 = (num1 * 100) + (num2 * 100) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));
*/