// for in -> lê os índices ou chaves do objeto
//                0        1      2  
// const frutas = ['Pêra', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Yan',
    sobrenome: 'Lima',
    idade: 26
};


for (let key in pessoa) {
    console.log(key, pessoa[key]);
}


// Maneiras de acessar valor de um Objeto.
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// const chave = 'nome';
//console.log(pessoa[chave]);

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
