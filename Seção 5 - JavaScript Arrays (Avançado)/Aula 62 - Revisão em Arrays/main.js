/**Revisoes em Arrays*/

const names = ['Abner', 'Pedro'];

//Essa forma de atribuiçao mantem os dois arrays na mesma referencia de memoria,
//sendo assim o que for modificado em um valerá para os dois
//const duplicate = names;

//Utilizando o resta operator para duplicar os valores
const duplicate = [...names]
duplicate[0] = 'Joel';
duplicate.push('Alan');

//pop() = remove do final
//shift() = remove do início
//push() = adiciona no final do array
//unshift = adiciona no inicio do array 

console.log(`Names: ${names} \nDuplicate: ${duplicate}`);


//string para arrays
const string = 'Abner Silva';
const array = string.split(' ');

//array para string
const stringTwo = array.join(' ');
console.log(stringTwo);