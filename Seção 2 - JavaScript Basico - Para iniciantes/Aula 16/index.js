const alunos = ['Primeiro', 'Segundo', 'Terceiro'];
alunos[0] = 'NumberOne';

//Adicionam no fim
alunos[alunos.length] = '1';
alunos.push('2');

//Adiciona no Inicio
alunos.unshift('0');

//Remover do final
const removidoFinal = alunos.pop();
//Remove do Inicio
const removidoInicio = alunos.shift();

//Deletar pelo index, os index nao sao alterados 
delete alunos[1];

console.log('Tipo: ',typeof alunos);
console.log('É uma instancia de array: ', alunos instanceof Array);
console.log('Fatiamento: ',alunos.slice(0,-2));
console.log(removidoFinal, removidoInicio, alunos);