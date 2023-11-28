/**Retorno da função*/

function createPerson(name, surname){
    return {
        name : name, surname : surname
    }
}

const person = createPerson('Abner','Santana');
console.log(person);

//Função retornando função
function funTwo(a){
    return function(b){
        return a * b;
    };
}

const a = funTwo(2);
const b = a(2);

console.log(b);