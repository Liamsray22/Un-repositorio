

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
	document.getElementById("f").innerHTML = "<input type='button'  class='botone' onclick='location.reload();'; value='Atras'/><br>" +

	"<center><label class='lable' for='Distancia'>Distancia:</label><br><input type='number' id='distancia' name='distancia'> "+

	"<br><label class='lable' for='velocidad'>Velocidad:</label> <br><input type='number' id='Velocidad' name='velocidad'><br>"+

	"<label class='lable' for='tiempo'>Tiempo:</label> <br><input type='number' id='Tiempo' name='Tiempo'><br>"+
	"<br><button class='botone' onclick='verVacio()'>Calcular</button>";



}

function mruv(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' class='botone' onclick='location.reload();'; value='Atras'/><br>"+
	"<center><label class='lable' for='VelocidadFinal'>Velocidad Final:</label> <br><input type='number' id='vFinal' name='Tiempo'><br>"+

  "<label class='lable' for='VelocidadInicial'>Velocidad Inicial:</label> <br><input type='number' id='vInicial' name='Tiempo'><br>"+

	"<label class='lable' for='Distancia'>Distancia:</label><br><input type='number' id='distanciaMRUV' name='distancia'><br> "+

  "<label class='lable' for='Aceleracion'>Aceleracion:</label> <br><input type='number' id='aceleracionMRUV' name='Tiempo'><br>"+
  "<label class='lable' for='tiempo'>Tiempo:</label> <br><input type='number' id='tiempoMRUV' name='Tiempo'><br></center>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='vFinalRad' name='gender' value='male'>"+
"<label for='male'>Velocidad Final</label><br>"+

"	<input type='radio' id='vInicialRad' name='gender' value='female'>"+
"<label  for='female'>Velocidad Inicial</label><br>"+

"<input type='radio' id='distanciaRad' name='gender' value='female'>"+
"<label  for='female'>Distancia</label><br>"+

"<input type='radio' id='aceleracionRad' name='gender' value='female'>"+
"<label  for='other'>Aceleracion</label>"+

"<input type='radio' id='tiempoRad' name='gender' value='female'>"+
"<label   for='other'>Tiempo</label>"+
"<br><button class='botone' onclick='verDatos()'>Calcular</button>";

}

function cl(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' class='botone' onclick='location.reload();'; value='Atras'/><br>"+
	"<center><label class='lable' for='tiempo'>Velocidad Final:</label> <br><input type='number' id='vFinalCl' name='Tiempo'><br>"+

  "<label class='lable'  for='tiempo'>Velocidad Inicial:</label> <br><input type='number' id='vInicialCl' name='Tiempo'> <br>"+

	"<label  class='lable' for='Distancia'>Altura:</label><br><input type='number' id='alturaCl' name='distancia'> <br>"+

  "<label class='lable'  for='tiempo'>Tiempo:</label> <br><input type='number' id='tiempoCl' name='Tiempo'> <br></center>"+
/////////RADIO
" <p>Por favor escoja que dato buscara:</p>"+
"<input type='radio' id='vFinalClRad' name='gender' value='male'>"+
"<label  for='male'>Velocidad Final</label><br>"+

"	<input type='radio' id='vInicialClRad' name='gender' value='female'>"+
"<label  for='female'>Velocidad Inicial</label><br>"+

"<input type='radio' id='alturaClRad' name='gender' value='female'>"+
"<label  for='female'>Altura</label><br>"+

"<input type='radio' id='tiempoClRad' name='gender' value='female'>"+
"<label  for='female'>Tiempo</label><br>"+
"<br><button class='botone' onclick='BuscarDatos()'>Calcular</button>";


}

function tv(){
	eliminar();
	document.getElementById("f").innerHTML = "<input type='button' class='botone' onclick='location.reload();'; value='Atras'/><br>"+
	"<center><label class='lable' for='tiempo'>Velocidad Final:</label> <br><input type='number' id='vFinalTv' name='Tiempo'><br>"+

  "<label class='lable' for='tiempo'>Velocidad Inicial:</label> <br><input type='number' id='vInicialTv' name='Tiempo'><br>"+

	"<label class='lable' for='Distancia'>Altura:</label><br><input type='number' id='alturaTv' name='distancia'> <br>"+

  "<label class='lable' for='tiempo'>Tiempo:</label> <br><input type='number' id='tiempoTv' name='Tiempo'><br></center>"+

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

"<br><button class='botone' onclick='FindDatos()'>Calcular</button>";


}
/////////////////animacion de loading
function Animacion(){

	
	loading();	
	
}

function loading(){

	var style = document.createElement('style');
	style.innerHTML = `
	body{
		margin: 0;
		padding: 0;
		background: #2980b9;
	  }
	  .loading{
		position: absolute;
		top: 10%;
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
		animation-iteration-count: 3;
		animation-fill-mode: forwards;	
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
	  @keyframes fadeIn {
		99% {
		  visibility: hidden;
		}
		100% {
		  visibility: visible;
		}
	  }
	`;
	document.head.appendChild(style);

	
}

