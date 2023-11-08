/**Ternary Operator*/

//(Condição) ? 'Valor para verdadeiro': 'Valor para falso';
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';

const corUsuario = null; // = 'Green'
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);