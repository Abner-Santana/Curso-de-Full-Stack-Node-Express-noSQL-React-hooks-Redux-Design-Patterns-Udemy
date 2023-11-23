const number = Number(window.prompt(`Enter a number:`));

window.document.getElementById('titulo').innerText = `${number}`;
window.document.getElementById('raiz_quadrada').innerText = `Raiz quadrada: ${Math.sqrt(number)}`;
window.document.getElementById('numero_inteiro').innerText = `${number.toFixed(7)} é inteiro: ${Number.isInteger(number)}`;
window.document.getElementById('not_a_number').innerText = `É NaN? ${Number.isNaN(number)}`;
window.document.getElementById('arredonda_baixo').innerText = `Arredondando para baixo: ${Math.floor(number)}`;
window.document.getElementById('arredonda_cima').innerText = `Arredondando para cima: ${Math.ceil(number)}`;
window.document.getElementById('duas_casas_decimais').innerText = `Com duas casas decimais: ${number.toFixed(2)}`;