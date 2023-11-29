/**Closures*/

// Global
function retornaNome(nome) {
  return function retornaSobrenome(sobrenome){
    return nome + sobrenome;
  };
}

const nome = retornaNome('Nome');
const sobrenome = nome('Sobrenome');
console.log(sobrenome);