// const nome = 'Yan';
// const sobrenome = 'Eduardo';

// const falaNome = () => nome + ' ' + sobrenome;


// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// // console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Yan';
const sobrenome = 'Miranda';

module.exports = {
    nome, sobrenome, Pessoa
};

// module.exports.nome = 'Yan';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser.'