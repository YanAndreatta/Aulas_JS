/*
Nome sobrenome tem x anos, pesa y kg
tem z de altura e seu IMC é de A.
Nome sobrenome nasceu em 1996.
*/

const nome = 'Yan';
const sobrenome = 'Andreatta';
const idade = 26;
const peso = 50;
const alturaEmM = 1.64;
let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento;

anoNascimento = 2022 - idade;
indiceMassaCorporal = peso / (alturaEmM*alturaEmM);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome,sobrenome, 'nasceu em', anoNascimento);

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');

// template strings

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
