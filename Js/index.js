function eliminar(){

	var bot1 = document.getElementById('mru');
	var bot2 = document.getElementById('mruv');
	var bot3=document.getElementById('caida');
	bot1.style.display="none";
	bot2.style.display="none";
	bot3.style.display="none";

}



function mru(){

	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>" +

	"<label for='Distancia'>Distancia:</label><br><input type='text' id='distancia' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Mill</option>"+
	"<option value='saab'>KM</option>"+
	"<option value='mercedes'>M</option>"+
  "</select>"+ 
	"<br><label for='velocidad'>Velocidad:</label> <br><input type='text' id='Velocidad' name='velocidad'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
	"<label for='tiempo'>Tiempo:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>"+ 
	"<br><button onclick='verVacio()'>Calcular</button>";

}

function mruv(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>"+
	"<label for='tiempo'>Velocidad Final:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>"+

  "<label for='tiempo'>Velocidad Inicial:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Distancia:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Aceleracion:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Tiempo:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>H</option>"+
	"<option value='saab'>Min</option>"+
	"<option value='mercedes'>Sec</option>"+
	"<option value='audi'>Ms</option>"+
  "</select> <br>";
}

function cl(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>" 
	
}