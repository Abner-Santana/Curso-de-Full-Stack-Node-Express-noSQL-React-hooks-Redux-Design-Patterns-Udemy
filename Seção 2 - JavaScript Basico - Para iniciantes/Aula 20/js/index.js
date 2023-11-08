//IIFE - Função que é auto invocada
function record(){
    const form = window.document.querySelector('form');
    const resultado = window.document.querySelector('#resultado');

    const pessoas = [];

    form.onsubmit = function (event){
        event.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({
            nome, sobrenome, peso, altura
        })

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;
        console.log(pessoas);
    };
}

record();