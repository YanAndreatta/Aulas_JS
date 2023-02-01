// import { construct } from "core-js/fn/reflect";

// export const nome2 = 'Yan';
// export const sobrenome = 'Eduardo';
// export const idade = 30;

const nome = 'Yan';
const sobrenome = 'Eduardo';
const idade = 30;

function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

// export { nome, sobrenome, idade, soma };

// export { nome as nome2, sobrenome, idade, soma };

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }