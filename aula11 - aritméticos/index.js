/* 
* Aritméticos   
* + adição / concatenação
* - / * 
* ** Potenciação
* % Resto da divisão
*/

/*
* Precedência 
*  ()
*  **
*  / %
*  + -
*/

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

let contador = 10;
//contador++;
console.log(--contador);
console.log(contador);

/*
Incrimento = ++
Decremento = --
*/

let contador1 = 1;
contador1++;
console.log(contador1);

// incrimento de mais de 1 

const passo = 2;
let contador2 = 2;

/*
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
*/

// operadores de atribuição
contador2 *= passo; // contador = contador + passo;
contador2 *= passo;
contador2 *= passo;
console.log(contador2);

// NaN - Not a Number, parseInt (inteiro), parseFloat (decimais)
const num3 = 10;
//const num4 = parseFloat('5.2');
const num4 = Number('5');
console.log(num3 + num4);
console.log(typeof(num4));