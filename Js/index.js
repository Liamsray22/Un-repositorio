function mru(){

	var bot1 = document.getElementById('mru');
	var bot2 = document.getElementById('mruv');
	var bot3=document.getElementById('caida');
	bot1.style.display="none";
	bot2.style.display="none";
	bot3.style.display="none";
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br> "+ 
	"<label for='Distancia'>Distancia:</label><br><input type='text' id='distancia' name='distancia'>"+
	"<br><label for='velocidad'>Velocidad:</label> <br><input type='text' id='Velocidad' name='velocidad'></br>"+
	"<label for='tiempo'>Tiempo:</label> <br><input type='text' id='Tiempo' name='Tiempo'></br>"+
	"<br><button onclick='verVacio()'>Calcular</button>";

}

function mruv(){

	document.getElementById("f").innerHTML ="Tu jeva";
}