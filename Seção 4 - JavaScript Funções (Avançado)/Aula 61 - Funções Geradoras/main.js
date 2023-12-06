//Podendo chamar a funçao por etapas sem a forma tradicional que é de uma única vez
function * generator(v=0){
    yield v++;
    yield v++;
}

const g1 = generator();

//Primeira forma de chamar uma funçao geradora
console.log(g1.next().value);
console.log(g1.next().value);

//Segunda forma
for(let i of g1){
    console.log(i);
}
