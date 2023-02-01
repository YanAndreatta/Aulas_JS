// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            // return `${this.nome} ${this.sobrenome}`
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / Math.pow(this.altura, 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Yan', 'Eduardo', 1.8, 80);
p1.nomeCompleto = 'Lucas Antônio Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);

