const ElementForm = {
    form : window.document.querySelector('form'),
    peso : window.document.querySelector('#peso'),
    altura: window.document.querySelector('#altura'),

    IMC(peso, altura){
        return (peso / ((altura / 100) ** 2)).toFixed(2);  
    },

    notNumber(value){
        //isNaN -> retorna verdadeiro ou falso
        return isNaN(value) || value == "";
    },

    clearInputs(){
        ElementForm.peso.value = '';
        ElementForm.altura.value = '';
    }
}

const ElementResult = {
    element : window.document.querySelector('.result'), 

    open(){
        ElementResult.element.classList.remove('close');
    },
    close(){
        ElementResult.element.classList.add('close');
    },
    view(message){
        return ElementResult.element.innerText = message;
    },
}

ElementForm.form.onsubmit = function(event){
    event.preventDefault();

    const peso = Number(ElementForm.peso.value);
    const altura = Number(ElementForm.altura.value);

    const imc = ElementForm.IMC(peso, altura);

    if(ElementForm.notNumber(peso) || ElementForm.notNumber(altura)){
        ElementResult.open();
        ElementResult.view('Valor não permitido');
        return;
    }

    let situation;
    if(imc < 18.5){
        situation = `Abaixo do peso!`;
    }else if(imc >= 18.6 && imc <= 24.9){
        situation = `Peso ideal Parabéns!`;
    }else if(imc >= 25.0 && imc <= 29.9){
        situation = `Levemente acima do peso!`;
    }else if(imc >= 30.0 && imc <= 34.9){
        situation = `Obesidade grau I`;
    }else if(imc >= 35.0 && imc <= 39.9){
        situation = `Obsidade grau II (severa)`;
    }else if(imc >= 40){
        situation = `Obesidade III (mórbida)`;
    }

    ElementResult.open();
    ElementResult.view(`IMC: ${imc}, ${situation}`);
    ElementForm.clearInputs();
    return;
}

