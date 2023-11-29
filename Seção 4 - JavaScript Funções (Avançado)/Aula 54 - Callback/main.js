function randomTimer(min = 1000, max = 2000){
    const timer = Math.random() * (max - min) + min; 
    return Math.floor(timer);    
}

console.log(randomTimer());

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, randomTimer());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, randomTimer());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, randomTimer());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        });
    });
});