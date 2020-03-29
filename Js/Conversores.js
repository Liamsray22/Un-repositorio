
//Algunas Funciones de conversion


//Magnitudes Fisicas de Velocidad

function convertirKmHoras(kmHoras){
	var kmHoras = (kmHoras*1000)/3600 ;
	var mSegundos = kmHoras;
	alert(mSegundos);


}

function convertirMiHoras(MiHoras){

	MiHoras = (MiHoras*1609.34)/3600;
	var mSegundos = MiHoras;
	alert(mSegundos);

}

function convertirmSegundosakmHoras(mSegundos){
	var mSegundos = (mSegundos*0.001)/0.000277778;
	var kmHoras = Math.round(mSegundos);
	alert(kmHoras);


}

function convertirmSegundosaMiHoras(mSegundos){
	var mSegundos = (mSegundos*0.000621371)/0.000277778;
	var MiHoras = Math.round(mSegundos);
	alert(MiHoras);


}

//Magnitudes Fisicas de Velocidad ****************************************************





//Magnitudes Fisicas de tiempo

function convertirminutosSegundos(minutos){
	segundos = minutos*60;
	alert(segundos);

}

function convertirsegundosMinutos(segundos){
	minutos = segundos/60;
	alert(minutos);

}

function convertirhorasSegundos(horas){
	segundos = horas*3600;
	alert(segundos);

}

function convertirsegundosHoras(segundos){
	horas = segundos/3600;
	alert(horas);
} 

function convertirmilisegundosSegundos(milisegundos){
	segundos = milisegundos/1000;
	alert(segundos);

}

function convertirsegundosmilisegundos(segundos){
	milisegundos = segundos*1000;
	alert(milisegundos);
} 

//Magnitudes Fisicas de tiempo********************************************



//Magnitudes Fisicas de distancia

function convertirMetroMilla(metro){

	milla = metro/1609;
	alert(milla);

}

function convertirMillaMetro(milla){
	metro = milla*1609;
	alert(metro);

}

function convertirMetroKm(metro){
	km = metro/1000;
	alert(km);


}

function convertirKmMetro(km){
	metro =  km *1000;
	alert(metro);

}




//convertirKmHoras(144);
//convertirMSegundos(40);
//convertirMiHoras(45);
//convertirmSegundosaMiHoras(60);

//convertirminutosSegundos(2);
//convertirsegundosMinutos(120);
//convertirhorasSegundos(4);
//convertirsegundosHoras(120);
//convertirmilisegundosSegundos(100);
//convertirsegundosmilisegundos(2);

//convertirMetroMilla(12);
//convertirMillaMetro(12);
//convertirMetroKm(10);
//convertirKmMetro(10);




