/**For In*/

const pessoa = {
    nome : 'Abner',
    idade : '22',
};

//Pesquisa de forma dinamica
console.log(pessoa['nome']);
console.log(pessoa.nome);

for(let index in pessoa){
    console.log(index, pessoa[index]);
}