//Factory Function e Constructor functions retornam objetos
function Person(name, surname){
    //Atributos privados, criados com CONST, LET
    const id = 3242;
    
    this.name = name;
    this.surname = surname;

    this.fullName = function(){
        console.log(this.name + ' ' + this.surname);
    }
}

const abner = new Person('Abner', 'Santana');
const pedro = new Person('Pedro', 'Santos');
pedro.fullName();
