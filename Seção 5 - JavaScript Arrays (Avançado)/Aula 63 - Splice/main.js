/**Splice em Arras*/

//Inserir Elementos[]:

// Array original
var frutas = ['maçã', 'banana', 'laranja'];
// Inserir 'morango' na posição 1
frutas.splice(1, 0, 'morango');
console.log(frutas); // Saída: ['maçã', 'morango', 'banana', 'laranja']


//Remover Elementos[]:

// Array original
var frutas = ['maçã', 'morango', 'banana', 'laranja'];
// Remover 2 elementos a partir da posição 1
frutas.splice(1, 2);
console.log(frutas); // Saída: ['maçã', 'laranja']

//Substituir Elementos[]:

// Array original
var frutas = ['maçã', 'morango', 'banana', 'laranja'];
// Substituir 'morango' e 'banana' por 'uva' e 'pêssego' a partir da posição 1
frutas.splice(1, 2, 'uva', 'pêssego');
console.log(frutas); // Saída: ['maçã', 'uva', 'pêssego', 'laranja']

//Retornar Elementos Removidos[]:

// Array original
var frutas = ['maçã', 'morango', 'banana', 'laranja'];
// Remover 2 elementos a partir da posição 1 e armazenar os elementos removidos
var elementosRemovidos = frutas.splice(1, 2);
console.log(elementosRemovidos); // Saída: ['morango', 'banana']
console.log(frutas); // Saída: ['maçã', 'laranja']