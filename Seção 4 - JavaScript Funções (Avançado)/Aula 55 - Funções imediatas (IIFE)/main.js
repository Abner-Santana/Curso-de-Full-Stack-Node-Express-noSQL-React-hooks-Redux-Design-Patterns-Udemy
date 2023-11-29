/**Funções imediatas (IIFE) - Immediately invoked function expression*/
//função imediata

(function(idade, peso, altura) {
    function criaNome(nome, sobrenome){
        return nome + ' ' + sobrenome;
    }

    console.log(criaNome('Jonas','Martins'));
    console.log(idade, peso, altura);
})(22,70,170);