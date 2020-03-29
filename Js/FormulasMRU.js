
function encontrarVelocidad(distancia, tiempo){
    velocidad = parseFloat(distancia/tiempo);
    velocidadx = velocidad.toString();
    velocidadx = velocidadx.substring(0,5);
    alert(velocidadx);

}

function encontrarTiempo(distancia, velocidad){
    tiempo = parseFloat(distancia/velocidad);

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
    alert(tiempox);
}

function encontrarDistancia(velocidad, tiempo){
    distancia = parseFloat(tiempo * velocidad);
    distanciax = distancia.toString();
    distanciax = distanciax.substring(0,5)
    alert(distanciax);

}


function verVacio(){

    distancia = document.getElementById('distancia').value;
    velocidad = document.getElementById('Velocidad').value;
    tiempo = document.getElementById('Tiempo').value;

    if(distancia == "" && velocidad != "" && tiempo != "" ){
        encontrarDistancia(velocidad,tiempo);

    }else if(velocidad == "" && distancia != "" && tiempo != ""){
        encontrarVelocidad(distancia,tiempo);

    }else if(tiempo == "" && velocidad != "" && distancia != ""){
        encontrarTiempo(velocidad, distancia);


    }else{


    }

}



//encontrarVelocidad(12, 10);
//encontrarTiempo(12, 46);
//encontrarDistancia(12, 45);


