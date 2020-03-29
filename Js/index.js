function eliminar(){

	var bot1 = document.getElementById('mru');
	var bot2 = document.getElementById('mruv');
	var bot3 = document.getElementById('caida');
	var bot4 = document.getElementById('tirov');
	bot1.style.display="none";
	bot2.style.display="none";
	bot3.style.display="none";
	bot4.style.display="none";
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
	"<label for='VelocidadFinal'>Velocidad Final:</label> <br><input type='text' id='vFinal' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
  "<label for='VelocidadInicial'>Velocidad Inicial:</label> <br><input type='text' id='vInicial' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
	"<label for='Distancia'>Distancia:</label><br><input type='text' id='distanciaMRUV' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Mill</option>"+
	"<option value='saab'>KM</option>"+
	"<option value='mercedes'>M</option>"+
  "</select><br>"+ 
  "<label for='Aceleracion'>Aceleracion:</label> <br><input type='text' id='aceleracionMRUV' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>m/s^2</option>"+
	"<option value='saab'>Km/h^2</option>"+
	"<option value='mercedes'>Mi/h^2</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Tiempo:</label> <br><input type='text' id='tiempoMRUV' name='Tiempo'><select id='cars'>"+
  "<option value='volvo'>H</option>"+
  "<option value='saab'>Min</option>"+
  "<option value='mercedes'>Sec</option>"+
  "<option value='audi'>Ms</option>"+
"</select> <br>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='vFinalRad' name='gender' value='male'>"+
"<label for='male'>Velocidad Final</label><br>"+

"	<input type='radio' id='vInicialRad' name='gender' value='female'>"+
"<label for='female'>Velocidad Inicial</label><br>"+

"<input type='radio' id='distanciaRad' name='gender' value='female'>"+
"<label for='female'>Distancia</label><br>"+

"<input type='radio' id='aceleracionRad' name='gender' value='female'>"+
"<label for='other'>Aceleracion</label>"+

"<input type='radio' id='tiempoRad' name='gender' value='female'>"+
"<label for='other'>Tiempo</label>"+
"<br><button onclick='verDatos()'>Calcular</button>";

}

function cl(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>"+
	"<label for='tiempo'>Velocidad Final:</label> <br><input type='text' id='vFinalCl' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
  "<label for='tiempo'>Velocidad Inicial:</label> <br><input type='text' id='vInicialCl' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
	"<label for='Distancia'>Altura:</label><br><input type='text' id='alturaCl' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Mill</option>"+
	"<option value='saab'>KM</option>"+
	"<option value='mercedes'>M</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Tiempo:</label> <br><input type='text' id='tiempoCl' name='Tiempo'><select id='cars'>"+
  "<option value='volvo'>H</option>"+
  "<option value='saab'>Min</option>"+
  "<option value='mercedes'>Sec</option>"+
  "<option value='audi'>Ms</option>"+
"</select> <br>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='vFinalClRad' name='gender' value='male'>"+
"<label for='male'>Velocidad Final</label><br>"+

"	<input type='radio' id='vInicialClRad' name='gender' value='female'>"+
"<label for='female'>Velocidad Inicial</label><br>"+

"<input type='radio' id='alturaClRad' name='gender' value='female'>"+
"<label for='female'>Altura</label><br>"+

"<input type='radio' id='tiempoClRad' name='gender' value='female'>"+
"<label for='female'>Tiempo</label><br>"+
"<br><button onclick='BuscarDatos()'>Calcular</button>";


}

function tv(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' onclick='location.reload();'; value='Atras'/><br>"+
	"<label for='tiempo'>Velocidad Final:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
  "<label for='tiempo'>Velocidad Inicial:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
	"<label for='Distancia'>Altura:</label><br><input type='text' id='distancia' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Mill</option>"+
	"<option value='saab'>KM</option>"+
	"<option value='mercedes'>M</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Tiempo:</label> <br><input type='text' id='Tiempo' name='Tiempo'><select id='cars'>"+
  "<option value='volvo'>H</option>"+
  "<option value='saab'>Min</option>"+
  "<option value='mercedes'>Sec</option>"+
  "<option value='audi'>Ms</option>"+
"</select> <br>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='male' name='gender' value='male'>"+
"<label for='male'>Male</label><br>"+
"	<input type='radio' id='female' name='gender' value='female'>"+
"<label for='female'>Female</label><br>"+
"<input type='radio' id='female' name='gender' value='female'>"+
"<label for='female'>Female</label><br>"+
"<input type='radio' id='female' name='gender' value='female'>"+
"<label for='other'>Other</label>"

}