//alert("Hola");
function convertirCelsius(){
	var gradosF = document.getElementById("gradosFahrenheit").value;
	var resultado = ((gradosF-32)*(5/9));
	document.getElementById("gradosCelsius").value = resultado;	
}

function convertirFahrenheit(){
	var gradosC = document.getElementById("gradosCelsius").value;
	var resultado = gradosC * 1.8 + 32;
	document.getElementById("gradosFahrenheit").value = resultado;		
}