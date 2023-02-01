/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY (avaliam em falso)
0
'' "" ``
null / undefined
NaN
*false (falso literal)
*/
// console.log('Luiz Otávio' && 0 && 'Maria');

// exemplo usando o &&
// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi()); // Podemos usar a avaliação de curto-circuito para virar um fluxo

const corUsuario = null; // 'vermelho', corPadrão receberá 'vermelho'.
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

console.log(0 || false || null || 'Yan Eduardo' || true);