// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const human = ['Joao','Jose'];

//Ler pelo indece
for(let i = 0; i < human.length; i++){
    console.log(`For: ${human[i]}`);
}

//Ler pelo indece
for(let i in human){
    console.log(`For in: ${human[i]}`);
}

//Pega diretamente o valor
for(let i of human){
    console.log(`For of: ${i}`);
}

human.forEach(function(e){
    console.log(`forEach: ${e}`);
});

