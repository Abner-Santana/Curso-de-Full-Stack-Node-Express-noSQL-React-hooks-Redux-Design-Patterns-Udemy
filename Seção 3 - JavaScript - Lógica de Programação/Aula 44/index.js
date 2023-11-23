/**Tratamento e lançamento de erro*/
function sum(a, b){
    if(
        typeof a !== 'number' ||
        typeof b !== 'number'
    ){
        //Lançamento do erro
        throw new Error('a e b precisam ser números');
    }

    return a + b;
}

//Captura do erro
try{
    console.log(sum(1,2));
    console.log(sum('a', 1));
}catch(error){
    //console.log(error);
    console.log(error,'Alguma coisa mais amigável');
}