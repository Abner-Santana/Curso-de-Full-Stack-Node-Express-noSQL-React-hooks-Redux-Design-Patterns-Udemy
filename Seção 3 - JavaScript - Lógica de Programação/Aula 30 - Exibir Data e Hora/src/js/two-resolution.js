/**Segunda Resolução*/
const Element = {
    p : window.document.querySelector('p'),
    view(message){
        Element.p.innerText = message;
    },
}

const format = {
    dateStyle : 'full',
    timeStyle : 'full', //ou short
};

Element.view((new Date()).toLocaleString("pt-BR", format));