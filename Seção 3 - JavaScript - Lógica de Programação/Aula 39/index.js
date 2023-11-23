/**While*/

/*
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
*/


//Gere um valor random
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 0;
const max = 50;
let rand = random(min, max);
rand = 10;

//Mostre esses valores e pare
while(rand !== 10){
    rand  = random(min, max);
    console.log(rand);
}

/*Diferença entre do-while e while que o do-while independente 
da condição ele será executado pelo menos uma vez*/
do{
    console.log(rand)
}while(rand !== 10);