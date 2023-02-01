// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave ou não
        value: estoque, // valor
        writable: true, // pode alterar o valor ou n 
        configurable: false // pode apagar a chave ou  n; pode reconfigurar a chave ou n 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
};

const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}