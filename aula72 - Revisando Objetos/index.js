// literal de uma String '' "" ´´
// 1234 Número literal
// function literal 

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// const chave = 'nome';
// console.log(pessoa[chave]); // Duas formas de acessar console.log(pessoa.nome); - console.log(pessoa[nome]);
// console.log(pessoa['sobrenome']); // console.log(pessoa.sobrenome); - Com a notação de conchetes você pode acessar uma chave de modo dinâmico



// // construtor de array -> new Array(); ou []
// const pessoa1 = new Object();  // Construtor
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//     return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// };

// console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.falarNome());
// // delete pessoa1.nome;
// // console.log(pessoa1);





// const pessoa2 = { // Literal
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };




// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) { // Factory function
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);



function Pessoa(nome, sobrenome) { // Constructor function
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; // {nome: 'Luiz', sobrenome: 'Miranda'}
    Object.freeze(this); // Qualquer objeto criado não pode ser alterado.
}

// Palavra NEW cria um objeto vazio {} <- this atrela a palavra THIS ao novo objeto e retorna automaticamente o THIS.
// p1 = (ENDEREÇO DE MEMÓRIA) -> 'Valor'
// p1.ENDERECODEMEMORIA = {nome: 'Outra coisa'}
// p1 = (NOVO ENDEREÇO DE MEMÓRIA) CONST não aceita
const p1 = new Pessoa('Luiz', 'Miranda');
// Object.freeze(p1); -> trava o objeto, não pode ser alterado.
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);
