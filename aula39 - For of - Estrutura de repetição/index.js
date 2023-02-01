//            0123...
// const nome = 'Yan Eduardo';
const nome = ['yan', 'Eduardo', 
'Henrique'];


for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('####');

for (let i in nome) {  // retorna os indíces e valores. Forma reduzida do Clássico.
    console.log(nome[i]);
}

console.log('####');

for (let valor of nome) {   // Retorna os valores 
    console.log(valor);
}

console.log('####');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

console.log('####');

// Usando objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// For clássico - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
