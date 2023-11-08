/**If e Else */

/**
 * IF pode ser usado sozinho
 * ELSE precisa de um IF antes 
 * 
 * IF pode ser usado sozinho
 * ELSE não pode ser usado sozinho
 */

const hour = 24;

if(hour >= 0 && hour <= 11){
    console.log(`Bom dia!`);
}else if(hour >= 12 && hour <= 17){
    console.log(`Boa tarde!`);
}else if(hour >= 18 && hour <= 23){
    console.log(`Boa noite!`);
}else{
    console.log(`Tenha um bom dia!`);
}

