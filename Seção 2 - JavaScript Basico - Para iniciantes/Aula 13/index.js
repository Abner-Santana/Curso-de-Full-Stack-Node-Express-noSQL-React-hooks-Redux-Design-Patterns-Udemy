let umaString = `Uma barra invertida \\`;
//Saída - (Uma barra invertida \)

console.log(umaString.toLowerCaseCase());

//Mostra o caractere da posiçao 2
// --- umaString[2]

//Mostra o caractere da posiçao 2 
// --- umaString.charAt(2)

//Concatenação
// --- umaString.concat(' no', ' javascript'); Saida -> [Uma barra invertida \\ no Java Script] 

//Buscar palavra pelo index
// --- umaString.indexOf('invertida');
// --- Determinando o indece para iniciar a busca umaString.indexOf('barra', 3)
// --- Usando expressão regular umaString.match(/[a-z]/g) -> Mostrar todas as letras minúscula

//Substituir palavra por outra
// --- umaString.replace('barra', 'Barra')
// --- Usando expressão regular para substituir as letras [r] por # -> umaString.replace(/r/, '#')

//Fazer um recorte na string 
// --- umaString.slice(4, 7) [4 - inicio 7 - fim] Saída -> bar 
// Pegando de traz para frente - umaString.slice(-12) Saída -> invertida \
// umaString.slice(-5, -1) Saída -> invertida

//Jogar todos os caracteres em um array
//umaString.split('') saida -> [ 'Uma', 'barra', 'invertida', '\\' ]
//Sem uma letra específica - umaString.split('r') saída -> [ 'Uma ba', '', 'a inve', 'tida \\' ]

//Deixa todos os caracteres em maiuscula
//umaString.toUpperCase()

//Deixa todos os caracteres em minusculo
//umaString.toLowerCaseCase()