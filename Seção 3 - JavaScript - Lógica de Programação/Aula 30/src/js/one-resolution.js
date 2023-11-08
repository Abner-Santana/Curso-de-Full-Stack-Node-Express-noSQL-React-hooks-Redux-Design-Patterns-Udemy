/**Primeira Resolução*/
const Element = {
    p : window.document.querySelector('p'),
    view(message){
        Element.p.innerText = message;
    },
}

const dateCurrent = new Date();
let day = dateCurrent.getDay();
let month = dateCurrent.getMonth();
let year = dateCurrent.getFullYear();
let hour = dateCurrent.getHours();
let minutes = dateCurrent.getMinutes();

function addZero(num){
    return num >= 10 ? num : `0${num}`; 
}

function setDate(date){
    let dateString = '';

    switch(day){
        case 0:
            dateString = `Domingo, ${day}`;
            break;
        case 1:
            dateString = `Segunda-Feira, ${day}`;
            break;
        case 2:
            dateString = `Terça-Feira, ${day}`;
            break;
        case 3:
            dateString = `Quarta-Feira, ${day}`;
            break;
        case 4:
            dateString = `Quinta-Feira, ${day}`;
            break;
        case 5:
            dateString = `Sexta-Feira, ${day}`;
            break;
        case 6:
            dateString = `Sábado-Feira, ${day}`;
            break;
        default:
            break;

        }

    let calendary = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    let monthString = calendary[month];
    
    addZero(hour);
    addZero(minutes);

    return dateString += ` de ${monthString} de ${year} ${hour}:${minutes}`;
}

Element.view(setDate(dateCurrent));

