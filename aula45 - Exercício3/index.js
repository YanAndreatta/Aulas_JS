// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz;
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se a o número é realmente um número
// Use a função com números de 0 a 100

const divisivel = (x) => {
    if (typeof x !== 'number') return NaN;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;
}

console.log(divisivel('a'));
for (let i = 0; i <= 100; i++){
    console.log(i, divisivel(i));
}

