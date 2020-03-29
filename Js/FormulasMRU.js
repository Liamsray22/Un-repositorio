
function encontrarVelocidad(distancia, tiempo){
    velocidad = parseFloat(distancia/tiempo);
    velocidadx = velocidad.toString();
    velocidadx = velocidadx.substring(0,5);
    VerResultado(velocidadx);



}

function encontrarTiempo(distancia, velocidad){
    tiempo = parseFloat(distancia/velocidad);

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
    VerResultado(tiempox);

    
}

function encontrarDistancia(velocidad, tiempo){
    distancia = parseFloat(tiempo * velocidad);
    distanciax = distancia.toString();
    distanciax = distanciax.substring(0,5)
    VerResultado(distanciax);

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
        encontrarTiempo(distancia , velocidad);


    }else{


    }
}



