// String, number, undefined, null, boolean, symbol
const nome = 'Yan'; // String
const nome1 = "Yan"; // String
const nome2 = `Yan`; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)

//console.log(typeof nome, nome);


// valores por referência, não primitivos.
const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

// valores primitivos, não são por referência
let c = 2;
let d = c;
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2
