const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
// const { endereco: { rua: r = '123', numero}, endereco } = pessoa;
// console.log(r, numero, endereco);
const { nome, ...resto } = pessoa;
console.log(nome, resto);