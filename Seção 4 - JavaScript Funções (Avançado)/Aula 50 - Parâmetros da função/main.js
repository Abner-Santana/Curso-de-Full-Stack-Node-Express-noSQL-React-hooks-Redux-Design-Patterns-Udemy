/**Parâmetros da função*/

//Todos os argumentos ficam dentro do objeto nativo -> arguments
function fun(){
    let t = 0
    for(let i of arguments){
        t += i;
    }   
    return t;
}

console.log(fun(2,1));

/*Parametros com valores padrão*/
function funTwo(a = 1, b = 2, c = 3){
    return a + b + c;
}
//Apenas passando o undefined como parametro o valor padrao de b é levado em consideraçao
console.log(funTwo(1, undefined, 1));


/**Parametros com desestruturação */
function funTre({v1,v2,v3 = 'da Silva'}){
    console.log(v1, v2, v3);
}

funTre({v1: 'Abner', v2: 'Santana'});

/**Rest operator */
function cal(operador,acumulador=0,...valores){
    for(let i of valores){
        if(operador === '+') acumulador += i;
    }

    console.log(acumulador);
}

cal('+', 2,2);