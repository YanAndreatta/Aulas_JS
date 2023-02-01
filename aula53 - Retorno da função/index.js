// return
// Retorna um valor
// Termina a função




// function soma(x, y) {
// return x + y;
// }




// console.log(soma(5, 2));

// function soma2(a, b) {
//     console.log(a + b);
// }

// soma2(2, 6);




// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });




// function criaPessoa(nome, sobrenome) {
//     return { nome: nome, sobrenome: sobrenome};
// }

// const p1 = criaPessoa('luiz', 'otavio');
// const p2 = {
//     nome: 'yan',
//     sobrenome: 'eduardo'
// };

// console.log(typeof p1);
// console.log(typeof p2);




// function falaFrase(comeco) {
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// // const olaMundo = falaFrase('Olá');
// // console.log(olaMundo('mundo!'));

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);


// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }


function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));