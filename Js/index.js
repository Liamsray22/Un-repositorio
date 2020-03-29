

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
	"<br><button onclick='verVacio(); loading();'>Calcular</button>";



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
	"<label for='tiempo'>Velocidad Final:</label> <br><input type='text' id='vFinalTv' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
  "<label for='tiempo'>Velocidad Inicial:</label> <br><input type='text' id='vInicialTv' name='Tiempo'><select id='cars'>"+
	"<option value='volvo'>Km/H</option>"+
	"<option value='saab'>Mi/H</option>"+
	"<option value='mercedes'>m/seg</option>"+
  "</select><br>"+ 
	"<label for='Distancia'>Altura:</label><br><input type='text' id='alturaTv' name='distancia'> <select id='cars'>"+
	"<option value='volvo'>Mill</option>"+
	"<option value='saab'>KM</option>"+
	"<option value='mercedes'>M</option>"+
  "</select> <br>"+
  "<label for='tiempo'>Tiempo:</label> <br><input type='text' id='tiempoTv' name='Tiempo'><select id='cars'>"+
  "<option value='volvo'>H</option>"+
  "<option value='saab'>Min</option>"+
  "<option value='mercedes'>Sec</option>"+
  "<option value='audi'>Ms</option>"+
"</select> <br>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='vFinalTvRad' name='gender' value='male'>"+
"<label for='male'>Velocidad Final</label><br>"+

"	<input type='radio' id='vInicialTvRad' name='gender' value='female'>"+
"<label for='female'>Velocidad Inicial</label><br>"+

"<input type='radio' id='alturaTvRad' name='gender' value='female'>"+
"<label for='female'>Altura</label><br>"+

"<input type='radio' id='tiempoTvRad' name='gender' value='female'>"+
"<label for='other'>Tiempo</label>"+

"<br><button onclick='FindDatos()'>Calcular</button>";


}
/////////////////animacion de loading

function loading(){

	var style = document.createElement('style');
	style.innerHTML = `
	#cuerpo{
		visibility: hidden;

	  }
	body{
		margin: 0;
		padding: 0;
		background: #2980b9;
	  }
	  .loading{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		height: 40px;
		display: flex;
		align-items: center;
	  }
	  .obj{
		width: 6px;
		height: 40px;
		background: white;
		margin: 0 3px;
		border-radius: 10px;
		animation: loading 0.8s infinite;
		animation-iteration-count: 5;
	  }
	  .obj:nth-child(2){
		animation-delay: 0.1s;
	  }
	  .obj:nth-child(3){
		animation-delay: 0.2s;
	  }
	  .obj:nth-child(4){
		animation-delay: 0.3s;
	  }
	  .obj:nth-child(5){
		animation-delay: 0.4s;
	  }
	  .obj:nth-child(6){
		animation-delay: 0.5s;
	  }
	  .obj:nth-child(7){
		animation-delay: 0.6s;
	  }
	  .obj:nth-child(8){
		animation-delay: 0.7s;
	  }
	  
	  @keyframes moveFront {
		0%   { right:25%; }
		50% {z-index:3; right:0;}
		100% { opacity: 1; right:25%;}
	  }

	  @keyframes loading {
		0%{
		  height: 0;
		}
		50%{
		  height: 40px;
		}
		100%{
		  height: 0;
		  
		}
	  }
	
	`;
	document.head.appendChild(style);

	
}
