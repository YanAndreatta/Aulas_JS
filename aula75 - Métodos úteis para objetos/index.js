/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/



// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = {
//     ...produto,
//     material: 'porcelana'
// };
// produto.nome = 'Outro nome';
// produto.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);


// const produto = { nome: 'Caneca', preco: 1.8 };
// Object.freeze(produto);
// produto.nome = 'Outro nome';
// const caneca = Object.assign({}, produto, { material: 'porcelana' });
// console.log(produto);
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);


// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);


const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};

// for(let entry of Object.entries(produto)){
//     console.log(entry);
// }

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

// console.log(Object.values(produto));
// console.log(Object.entries(produto));