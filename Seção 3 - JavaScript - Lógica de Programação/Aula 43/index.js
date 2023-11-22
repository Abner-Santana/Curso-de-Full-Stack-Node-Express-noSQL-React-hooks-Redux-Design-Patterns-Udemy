function notNaN(number){
    return isNaN(number);
}

function cal(number){
    if(!notNaN(number)){
        if(number % 3 === 0 && number % 5 === 0){
            return `${number} : is divisible by 3 and 7`;
        }else{
            if(number % 3 === 0){
                return `${number} : divisible by 3 - Fizz`;
            }else if(number % 5 === 0){
                return `${number} : divisible by 5 - Buzz`;
            }else{
                return `${number} : not divisible 3 or 5`;
            }
        }
    }else{
        return `${number} not a number`;
    }
}

for(let i = 0; i <=100; i++){
    try{
        console.log(cal(i));
    }catch{
        console.log('Erro read input!');
    }
}