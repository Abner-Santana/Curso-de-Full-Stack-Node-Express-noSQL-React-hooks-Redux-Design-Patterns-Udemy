/**
 * Dados primitivos
 * String, number, undefined, null, boolean, symbol
 */
const name = 'Abner';
const nameOne = "Abner";
const nameTwo = `Abner`;
const numOne = 10;
const numTwo = 10.43;
let nameStudent; //undefined -> não aponta pra local nenhum na memória
const surnameStudent = null; //null -> não aponta pra local nenhum na memória

/**
 * Diferença entre null e undefined
 * undefined é gerado pela própria linguagem js
 * enquanto que o null o próprio dev atribui para uma variável
 */

//Valores booleano
const aproved = true;

console.log(typeof aproved)

/**
 * Operadores Aritméticos
 * [+] Adiçao ou Concatenação
 * [-] Subtração / Multiplicação [*]
 * [**] Potenciaçao
 * [%] Resto da divisão
 */

//Concatenação
let n1 = 10;
let n2 = `10`;

console.log(n1 + n2);

/**
 * Em ordem de procedencia
 * [()]
 * [**]
 * [*] ou [%]
 * [+] e [-]
 * [/]
 */

/**
 * Operadores
 * Incremento [++]
 * Decremento [--]
 */

//NaN - Not a number, parseInt (inteiro), parseFloat(decimais)
let l = 5;
let j = parseInt(`12`); //ou Number(`12`);
let k = '2.4';
console.log('Multiplicação: ',l * k * j); //->resultado: 12
