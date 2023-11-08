/**Switch Case*/

const data = new Date();
let diaDaSemana = data.getDay();

function setDiaDaSemana(){
    let diaDaSemanaTexto;
    switch(diaDaSemana){
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = 'Terça';
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return diaDaSemanaTexto;
        default:
            return diaDaSemanaTexto = '';
    }
}
    /*
    let diaDaSemanaTexto;
    switch(diaDaSemana){
        case 0:
            diaDaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaDaSemanaTexto = 'Terça';
            break;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            break;
    }
    */

console.log(setDiaDaSemana(diaDaSemana));