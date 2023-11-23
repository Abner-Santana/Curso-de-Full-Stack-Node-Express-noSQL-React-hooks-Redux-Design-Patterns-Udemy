/**For Clássico estrutura de repetição*/

 for(let i = 0; i <= 5; i++){   
    const number = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, number);
 }

 const fruts = ['Maçã','Pera','Uva'];
 for(let i = 0; i < fruts.length; i++){
    console.log(`Index[${i}]`, fruts[i]);
 }