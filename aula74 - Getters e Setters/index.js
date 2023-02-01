// defineProperty -> Getter e Setters
function Produto(nome, sobrenome, estoque) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
                // console.log('Bad value');
            }

            estoquePrivado = valor;
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 'qweqas';
console.log(p1);
p1.estoque = 'O valor que  quero';
console.log(p1.estoque);