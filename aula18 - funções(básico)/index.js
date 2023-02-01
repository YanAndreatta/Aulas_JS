// function saudacao(nome) {
//     return `Bom dia, ${nome}!`;
// }

// const variavel = saudacao('yan');
// console.log(variavel);

// function soma(x = 1, y = 1){
//     const resultado = x + y;
//     return resultado;
//     console.log('Olá mundo!'); // Tudo depois de return não será executado.
// }

// const resultado = soma();
// console.log(resultado);


// console.log(soma(2, 2));
// console.log(soma(3, 1));
// console.log(soma(5, 10));

// Outras maneiras de criar funções

// const raiz = function (n) {  // Função anônima, necessita de ';'.
//     return n ** 0.5;
// };

// const raiz = (n) => {
//     return Math.sqrt(n);
// };

const raiz = n => Math.sqrt(n); // Também pode ser feito desta forma

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));