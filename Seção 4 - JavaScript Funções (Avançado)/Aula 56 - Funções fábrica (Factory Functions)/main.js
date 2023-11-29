/**Funções fábrica (Factory Functions) - Quando retorna um objeto*/

//Quando uma funçao estar dentro de um objeto chamamos de método
function createPerson(name, surname){
    return {
        name : name, 
        surname : surname,
        
        voice : function(content){
            return `${this.name} estar ${content}`;
        },

        // Getter
        get nameComplete() {
            return `${this.name} ${this.surname}`;
        },
    
        // Setter
        set nameComplete(valor) {
            valor = valor.split(' '); //Cria um array com string com o valor
            console.log(valor);
            this.nome = valor.shift(); //Remove do início do array 
            this.sobrenome = valor.join(' '); //Junta o array cria novamente uma string
        },
    }
}

const personOne = createPerson('Pedro', 'Alves');
console.log(personOne.voice('gritando!'));
console.log(personOne.nameComplete);

/**
 * This fora dos escopos locais ele sempre se refere ao objeto windows
 * Em objetos o this vai se referir a sua instancia podendo acessar suas propriedades 
 */
