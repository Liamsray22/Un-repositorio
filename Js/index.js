function mru(){

	var bot1 = document.getElementById('mru');
	var bot2 = document.getElementById('mruv');
	var bot3=document.getElementById('caida');
	bot1.style.display="none";
	bot2.style.display="none";
	bot3.style.display="none";
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>" +

	"<label for='Distancia'>Distancia:</label><br><input type='text' id='distancia' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Volvo</option>"+
	"<option value='saab'>Saab</option>"+
	"<option value='mercedes'>Mercedes</option>"+
	"<option value='audi'>Audi</option>"+
  "</select>"+ 
	"<br><label for='velocidad'>Velocidad:</label> <br><input type='text' id='Velocidad' name='velocidad'><select id='cars'>"+
	"<option value='volvo'>Volvo</option>"+
	"<option value='saab'>Saab</option>"+
	"<option value='mercedes'>Mercedes</option>"+
	"<option value='audi'>Audi</option>"+
  "</select><br>"+ 
	"<label for='tiempo'>Tiempo:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Volvo</option>"+
	"<option value='saab'>Saab</option>"+
	"<option value='mercedes'>Mercedes</option>"+
	"<option value='audi'>Audi</option>"+
  "</select> <br>"+ 
	"<br><button onclick='verVacio()'>Calcular</button>";

}

function mruv(){

	document.getElementById("f").innerHTML ="Tu jeva";
}