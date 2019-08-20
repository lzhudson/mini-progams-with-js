function pegar (num) {
	var salvo = document.calc.visor.value;	
	document.calc.visor.value = salvo + num;	
}
function reset(argument) {
	document.calc.visor.value = "";
}

function resultado() {
	var valor = document.calc.visor.value;
	var resultado = eval(valor);
	document.calc.visor.value = resultado;
}