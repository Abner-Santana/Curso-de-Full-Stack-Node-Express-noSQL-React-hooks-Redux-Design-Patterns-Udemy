/**Desestruturação*/

//Para Arrays
const numbers = [240, 340, 200];
const [one, , tre] = numbers;

console.log(`Saída 1: `, one, tre);

const array = [[1,2,3],[4,5,6]];
const [list1, list2] = array;
//Como acessar o 6 nesse array formato por vários arrays
console.log(`Saída 2:`, list2[1]);