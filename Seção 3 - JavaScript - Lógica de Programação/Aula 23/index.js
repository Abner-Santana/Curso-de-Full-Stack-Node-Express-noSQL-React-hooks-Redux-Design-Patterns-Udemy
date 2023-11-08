/**Avaliação de Curto-Circuito (Short-Circuit)*/

/**
 * && -> AND
 * || -> OR
 * 
 * Valores Falsy
 * 0
 * "" '' ``-> String Vazia
 * null / undefined
 * NaN
 */

//Caso sejam todas verdadeiras a saída será a última (Maria)
console.log('Luiz' && '' && 'Maria');

//Verificar Curto Circuito para o AND
const n0 = 1;

function running(){
    return true; 
}

console.log(`Saída com AND:`, n0 && running()); 

//Verificar Curto Circuito para o OR -> Retorna o primeiro valor verdadeiro
const n2 = `OR`;

function n3(){
    return false;
}

console.log(`Saída com OR:`, n2 || n3);

