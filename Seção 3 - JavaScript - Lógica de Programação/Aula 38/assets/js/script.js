/**Exercício Aula 38*/

//querySelectorAll - pega todos os elementos filhos
//querySelector - pega apenas o primeiro
const container  = window.document.querySelector('.container');
const elements  = container.querySelectorAll('p');

//Pega o estilo inserido no body da página
const styleBody = getComputedStyle(document.body);
//Pega a cor de background do body
const backgroundColor = styleBody.backgroundColor;

for(let i of elements){
    //Define a cor do elemento
    i.style.color = backgroundColor;
}