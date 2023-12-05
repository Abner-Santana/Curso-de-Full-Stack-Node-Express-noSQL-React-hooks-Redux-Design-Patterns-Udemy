/**As várias maneiras de declarar funções em JavaScript*/

//hosting - elevação
one();
function one(){}

//Funções são first-class objects (objetos de primeira classe)
//Function Expression
const fun = function(){
    console.log('Sou dado!');
}

function exe(f){
    f();
}

exe(fun);

//Arrow Function
const arrowFunction = () =>{
    console.log('Arow Function')
};

arrowFunction();
