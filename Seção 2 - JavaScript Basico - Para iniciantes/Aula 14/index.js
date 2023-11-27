let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
//Resultado - num1 = 1.00

//---------------------------------Problemática------------------------------------------------------------
//console.log(num1); --> Saída - 0.9999999999999999
//console.log(Number.isInteger(num1.toFixed(2))); --> Saída - false - porque o valor real dele é 0.9999...
//console.log(Number.isInteger(1.00)); --> Saída - true

/**
 * Resolução
 * num1 = parseFloat(num1.toFixed(2));
 * Verificação - console.log(Number.isInteger(Number.parseFloat(num1.toFixed(2))));
 */
//---------------------------------------------------------------------------------------------------------

/* -- Concatenação --
* console.log(num1.toString() + num2); //
* console.log(typeof num1);
*/

/**
 *  -- Represetação binária de um número --
 * console.log(num1.toString(2)); 
 */

/**
 * -- Arendondar casas decimais --
 * console.log(num1.toFixed(2));
 */

/**
 * --Verificar se é um number --
 * console.log(isIntege(num1));
 * 
 * let temp = num1 * '5'; --> Saída - NaN 
 * let temp = num1 + '5'; --> Saída - Concatenação
 * console.log(Number.isNaN(temp)); //Verificar se o calculo com [temp] possui algo que gere NaN 
 */











   

