alert("hola");
function calcularArea(){
	var area = document.getElementById("area").value;
	var resultado = Math.PI * parseInt(area);
	document.getElementById("resultadoArea").value = resultado;
}