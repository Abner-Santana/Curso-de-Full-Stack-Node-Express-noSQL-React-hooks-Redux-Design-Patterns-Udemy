//factory function
function calculator(){
    return {

        input : document.querySelector('.display'),
        
        start : function(){
            this.press();
        },
        
        updateInput : function(value, add){
            const r = add == true ? this.input.value += value : this.input.value = value;
            return r;
        },

        press : function(){
            //this aqui se tornaria #document caso fosse utilizado a function expression
            window.document.addEventListener('click', (element) =>{
                const e = element.target;
                if(e.classList.contains('btn-num')){
                    this.updateInput(e.innerText, true);
                }
                if(e.classList.contains('btn-del')){
                    //o metodo slice retorna um array novo
                    this.updateInput(this.input.value.slice(0,-1), false)
                }
                if(e.classList.contains('btn-clear')){
                    this.updateInput(this.input.value = '', false);
                }
                if(e.classList.contains('btn-eq')){
                    this.calculation();
                }
            });
        },

        calculation : function(){
            let account = this.input.value;

            try {
                //tenta realizar uma conta com o que receber de parametro
                account = eval(account);

                if(!account) {
                    alert('Conta inválida');
                    return;
                }

                this.input.value = account;
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

    }
}

const c = calculator();
c.start();