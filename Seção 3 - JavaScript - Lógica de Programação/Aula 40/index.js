const numeros = [1,2,3,4,5,6,7,8,9];

for(let i of numeros){
    if(i === 2){
        continue; //Pula essa execução
    }
    if(i === 7){
        break; //Para a execução
    }

    console.log(i);
}