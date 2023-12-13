/**Aula 65 - Filtrando Array*/

//filter - retorna um novo array sem modificar o array filtrado
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const oneCase = pessoas.filter((value) => value.nome.length >= 5);
const twoCase = pessoas.filter((value) => value.idade >= 50);
const treCase = pessoas.filter(function(value){
    //endsWith - pega a ultimo caractere
    return value.nome.endsWith('o');
});

console.log(treCase);