/* 
Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null (bigint, symbol) - dado (valores copiados)

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}; // Será copiado para dentro de b.

a.nome = 'João';
console.log(b);
console.log(a);

// let a = [1, 2, 3];
// let b = a; // Não é uma cópia, está sendo apontado para o mesmo lugar na memória.
// // Caso você queira copiar o valor de a dentro de b
// // let b = [...a]; // a será copiado para dentro de b
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(c);

//          0123
// let nome = 'Luiz';
// nome[0] = 'R'; // É imutável, não será alterado
// console.log(nome[0], nome);


// Primitivos
// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);