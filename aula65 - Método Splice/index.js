//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(indíce, delete, elem1, elem2, elem3);

// POP
// const removidos = nomes.splice(3, Number.MAX_VALUE);  // Retorna um Array diferente do Pop que retorna uma String

// const removidos = nomes.splice(3, 1, 'yan');  // Remove o valor do indíce 3 e coloca o valor 'Yan' no lugar.
// console.log(nomes, removidos);


// SHIFT - O método shift remove o elemento de índice zero, diminui em 1 os indices dos demais valores e retorna o ARRAY removido.
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);


// PUSH - Adiciona um ou mais elementos ao final de um array
// nomes.splice(nomes.length, 1, 'Yan');
// console.log(nomes);

// UNSHIFT - Adiciona no ínicio do Array
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);