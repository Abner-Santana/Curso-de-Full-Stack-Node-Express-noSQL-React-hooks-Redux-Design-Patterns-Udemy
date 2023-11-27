/**
onst alert = window.alert(`Alert`);

const confirm = window.confirm(`Confirm`);
if(confirm){
    console.log(confirm);
}

const input = window.prompt(`Input`);
console.log(input);
*/

let numberOne = prompt(`Input NumberOne:`);
let numberTwo = prompt(`Input NumberTwo:`);

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

console.log(`${numberOne} + ${numberTwo} = ${numberOne+numberTwo}`)

