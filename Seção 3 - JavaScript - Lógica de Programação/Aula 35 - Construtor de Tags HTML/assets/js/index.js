/**
 * Lendo um array com objetos
 * Cada objeto é um tag html
 * Ler este array e criar as tags e seus conteudos
 */

const dom = {
    e : window.document.querySelector('.container'),
    insertElement(e){
        return window.document.createElement(e);
    },
}

const elements = [
    {tag : 'p', content : 'Conteúdo tag P'},
    {tag : 'div', content : 'Conteúdo tag Div'},
    {tag : 'footer', content : 'Conteúdo footer'},
    {tag : 'section', content : 'Conteúdo section'},
];

for(let i = 0; i < elements.length; i++){
    const element = elements[i];
    const {tag, content} = element;

    const e = dom.insertElement(tag); 
    dom.e.appendChild(e);
    e.innerHTML = content;
}
