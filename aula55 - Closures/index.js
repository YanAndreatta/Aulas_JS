// Global
function retornaFuncao(nome) {
    // const nome = 'Yan';
    return function() {
        return nome;
    };
}
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());