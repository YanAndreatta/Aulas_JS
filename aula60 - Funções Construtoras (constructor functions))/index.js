// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Yan', 'Eduardo');
p1.metodo();