// function funcao() {
//     console.log(arguments[1]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// arguments que sustenta todos os argumentos enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }



//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);



// function funcao(a, b, c, d, e, f) {
//    console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);



// function funcao(a, b = 2, c = 4) {
//     console.log(a, b);
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);



// function funcao({nome, sobrenome, idade}) { // function funcao([valor1, valor2, valor3])
//     console.log(nome, sobrenome, idade);    // console.log(valor1, valor2, valor3);
// }
// // funcao(['yan', 'eduardo', 20]);
// // funcao({nome: 'yan', sobrenome: 'eduardo', idade: 20});
// let obj = {nome: 'yan', sobrenome: 'eduardo', idade: 20}
// funcao(obj);


// function conta(operador, acumulador, ...numeros) {
//     // console.log(operador, acumulador, numeros);
//     for(let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// }
// conta('+', 1, 20, 30, 40, 50);


const conta = function(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros);
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);

// Uma forma de usar o arguments de forma "explícita"
const conta1 = (...args) => {
    console.log(args);
};
conta1('+', 1, 20, 30, 40, 50);