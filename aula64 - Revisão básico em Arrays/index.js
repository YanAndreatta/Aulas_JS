//                  0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana']
// // const nome = new Array('Eduardo', 'Maria', 'Joana');  - Podem ser declarado dessa forma também
// nomes[2] = 'joão';
// delete nomes[2];
// console.log(nomes);


// Valor por referência
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes;

// novo.pop(); // Se um for modificado o outro também é 
// console.log(nomes);



// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // Com o sprad ele é copiado e não passado por referência
// novo.pop();   // O que for modificado em um não modifica o outro
// console.log(nomes);
// console.log(novo);



// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.shift(); // .shift() mesma funcionalidade de .pop(), porém pega o primeiro valor do array
// // const nomeRemovido = nomes.pop(); // .pop() remove o elemento do array e o retorna, podendo salva-lo em uma variável
// console.log(nomes, removido);
// // console.log(nomes.length);



// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('João');  // Inclui um novo elemento no final do Array
// nomes.unshift('Wallece'); // Inclui no começo mas move todos os indíces do Array
// console.log(nomes);



// //                  0        1        2         3         4  
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(0, -1);
// console.log(novo);



// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

const nomes = ['luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' '); // Une todos os valores de um Array em uma String
console.log(nome);