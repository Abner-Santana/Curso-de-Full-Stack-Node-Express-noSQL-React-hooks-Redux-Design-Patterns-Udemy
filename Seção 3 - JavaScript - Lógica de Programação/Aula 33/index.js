/**Desestruturação*/

//Para objetos
const human = {
    name : 'Abner', surname : 'Santana', age: 22, address : {
        road: undefined,
        number: '528',
    }
}
const { 
    address : {
        //Atribuiçao, só funciona caso a variável esteja vazia no objeto 
        number,
        road : r = 5, 
    }, age , ...resto
} = human;

console.log(`Road:`, r, `Number:`, number, `Age:`, age, `Rest:`,resto);