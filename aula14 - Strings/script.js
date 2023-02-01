//               01234567              
let umaString = "Um texto"; 
//let umaString = 'Um \'texto\'';

console.log(umaString.indexOf('texto')); // Retorna em qual indíce começa a palavra "texto" | Quando retornar -1 quer dizer que n foi encontrado
console.log(umaString.indexOf('o', 3)); // Procura a letra 'o' começando do índice 3.
console.log(umaString.lastIndexOf('m', 3)); // Procura do final para o começo
console.log(umaString.match(/[a-z]/)); // Expressões regulares
console.log(umaString.search(/x/)); // parecido com o indexOf mas aceita expressões regulares
console.log(umaString.replace('Um', 'Outra')); // Substitui as letras|palavras dentro da String
console.log(umaString.replace(/e/g, '#')); // Substitui todas as ocorrências de 'e' por '#'
console.log(umaString.length); // Tamanho da String
console.log(umaString.slice(2, 6));

//console.log(umString.length - 3);
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // Faz a mesma coisa que o .slice porém gasta mais linha de código

console.log(umaString.split(' ', 1)); // Separa a String em um Array conforme o escolhido no primeiro bloco
console.log(umaString.toUpperCase()); // Deixa a String toda em maiúscula
console.log(umaString.toLowerCase()); // Deixa a String toda em minúscula

//console.log(umaString[8]);
console.log(umaString.charAt(8));
console.log(umaString.concat(' em',' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);